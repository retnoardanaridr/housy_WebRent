import React from "react";
import { Card, Table } from 'flowbite-react'
import logo from '../../assets/Icon.png';
import people from '../../assets/noorder.png';
import { useQuery } from "react-query";
import { API } from "../../config/api";

export default function HistoryOwner() {
    let {data: success} = useQuery('successCache', async () => {
        const response = await API.get('/orders');
        return response.data.data;
    })

    const formatRupiah = (money) => {
        return new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
          minimumFractionDigits: 0,
        }).format(money);
      };


    return (
        <>
            {success.status !== 'success' ? (
                <div className="bg-grey-d flex justify-center py-5 w-full h-screen">
                <div className="w-[1035px]">
                    {success?.map((item, index) => (
                        <Card className="mb-4" key={index}>
                        <div className="flex p-2">
                            <img className="w-20" src={logo} alt="stempel" />
                            <h5 className="ml-auto font-bold">Booking</h5>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <h4 className="font-extrabold text-3xl">{item.housy.name}</h4>
                                <p>{item.housy.address}</p>
                                <div className="bg-red-300 rounded-md text-white py-2 px-2 w-36 flex justify-center">
                                    <button>{item.status}</button>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center w-55 h-30">
                                    <div>
                                        <input id="steps-range" type="range" min="0" max="5" value="5" step="0.5" className="rotate-90 w-16 bg-gray-200 rounded-lg cursor-pointer" />
                                    </div>
                                    <div className="ml-2">
                                        <h6 className="font-bold">Check-In</h6>
                                        <h6 className="text-sm">{item.checkin}</h6>
                                        <h6 className="mt-2 font-bold">Check-Out</h6>
                                        <h6 className="text-sm">{item.checkout}</h6>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h6 className="font-bold">Amenities</h6>
                                    <h6 className="text-sm">Furnished</h6>
                                <h6 className="font-bold">Type of Rent</h6>
                                    <h6 className="text-sm">{item.housy.typerent}</h6>
                            </div>
                        </div>
                        <Table className="text-black font-medium">
                            <Table.Head className="font-bold">
                                <Table.HeadCell>
                                    No.
                                </Table.HeadCell>
                                <Table.HeadCell>
                                    Full Name
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
                                        {item.user.fullname}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {item.user.gender}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {item.user.phone}
                                    </Table.Cell>
                                    <Table.Cell className="font-bold text-base">
                                        <span>Long time rent: {item.housy.typerent}</span>
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell className="font-bold text-base">
                                        <span>Total: {formatRupiah(item.total)}</span>
                                    </Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Card>
                    ))}
                </div>

            </div>
            ) : (
                <>
                    <div className="flex justify-center">
                        <img src={people} alt="" />
                    </div>
                    <h3 className="flex justify-center font-extrabold text-5xl">It's Nothing here!!!!!!!!!</h3>
                </>
            )}
            
        </>
    );
}
