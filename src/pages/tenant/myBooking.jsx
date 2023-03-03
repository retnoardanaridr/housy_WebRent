import React, {useContext, useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom"
import { Card, Table } from 'flowbite-react'
import logo from '../../assets/Icon.png';
import { useMutation, useQuery } from "react-query";
import { API } from "../../config/api";
import jwt from 'jwt-decode'
import { TableCell } from "flowbite-react/lib/esm/components/Table/TableCell";
import { UserContext } from "../../contexts/userContext";

export default function BookingPage() {
    const [state, dispatch] = useContext(UserContext)
    const navigate = useNavigate()
    let getToken = localStorage.getItem("token");
    const hasilDecode = jwt(getToken)

    const formatRupiah = (money) => {
        return new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
          minimumFractionDigits: 0,
        }).format(money);
      };
    

    let { data: payment } = useQuery('/orderCache', async () => {
        const response = await API.get('/order')
        console.log("ini data payment", response)
        return response.data.data;
    })

    const handleCheckout = useMutation(async (transID) => {
        try {

            const response = await API.patch('/check-out');
            console.log(hasilDecode)
            console.log(response);
            const token = response.data.data.token;
            console.log("ini token midtrans", token)

            window.snap.pay(token, {
                onSuccess: function (result) {
                   navigate("/");
                },
                onPending: function (result) {
                   console.log(result);
                },
                onError: function (result) {
                   console.log(result);
                },
                onClose: function () {
                   alert("you closed the popup without finishing the payment");
                },
             });
        } catch (error) {
            console.log(error)
        }
    })

    useEffect(() => {
        const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
        const myMidtransClientKey = "SB-Mid-client-N33OFW_2y15oyoxG";
  
        let scriptTag = document.createElement("script");
        scriptTag.src = midtransScriptUrl;
        scriptTag.setAttribute("data-client-key", myMidtransClientKey);
  
        document.body.appendChild(scriptTag);
        return () => {
            document.body.removeChild(scriptTag);
        };
  
     }, []);

    return (
        <>
            <div className="bg-grey-d flex justify-center py-5 w-full h-screen">
                <div className="w-[1035px]">
                    <Card>
                        <div className="flex p-2">
                            <img className="w-20" src={logo} alt="stempel" />
                            <h5 className="ml-auto font-bold">Booking</h5>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <h4 className="font-extrabold text-3xl">{payment?.housy.name}</h4>
                                <p>{payment?.housy.address}</p>
                                <div className="bg-red-300 rounded-md text-white py-2 px-2 w-36 flex justify-center">
                                    <button>{payment?.status}</button>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center w-55 h-30">
                                    <div>
                                        <input id="steps-range" type="range" min="0" max="5" value="2.5" step="0.5" className="rotate-90 w-24 bg-gray-200 rounded-lg cursor-pointer" />
                                    </div>
                                    <div className="ml-2">
                                        <h6 className="font-bold">Check-In</h6>
                                            <h6 className="text-sm">{payment?.checkin}</h6>
                                        <h6 className="mt-3 font-bold">Check-Out</h6>
                                            <h6 className="text-sm">{payment?.checkout}</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="mr-10">
                                <h6 className="font-bold">Amenities</h6>
                                <h6 className="font-bold mt-3">Type of Rent</h6>
                                <span>{payment?.housy.typerent}</span>
                            </div>
                        </div>
                        <Table className="text-black font-medium">
                            <Table.Head className="font-bold">
                                <Table.HeadCell>
                                    No.
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Fullname
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Gender
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Phone
                                </Table.HeadCell>
                            </Table.Head>
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>
                                        1
                                    </Table.Cell>
                                    <Table.Cell>
                                        {payment?.user.fullname}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {payment?.user.gender}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {payment?.user.phone}
                                    </Table.Cell>
                                    <Table.Cell className="font-bold text-base">
                                        <span>Long time rent: {payment?.housy.typerent}</span>
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <Table.Cell className="font-bold text-base">
                                        <span>Total: {formatRupiah(payment?.total)}</span>
                                    </Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                        <div className="flex justify-end">
                            <button onClick={() => handleCheckout.mutate()} className="w-[200px] focus:outline-none text-white font-bold bg-purple-b rounded-lg text-sm px-5 py-2.5">Pay</button>
                        </div>
                    </Card>
                </div>
            </div>
        </>
    );
}
