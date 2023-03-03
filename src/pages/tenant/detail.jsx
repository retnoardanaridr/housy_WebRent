import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { API } from "../../config/api";
import { UserContext } from "../../contexts/userContext";
import room1 from "../../assets/room1.png";
import room2 from "../../assets/room3.png";
import room3 from "../../assets/room4.png";
import BookNow from "../../component/booknow";
import FormSignIn from "../../component/auth/signin";


export default function PageDetail() {
  const { id } = useParams();
  const [showBooking, setShowBooking] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false)
  const [state, _] = useContext(UserContext);

  const formatRupiah = (money) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(money);
  };

  const { data: housy } = useQuery('/houseCache', async () => {
    const response = await API.get(`/house/${id}`)
    return response.data.data;
  })


  useEffect (()=> {
    if (state.isLogin === true) {
      setShowSignIn(false)
    }
  },[state.isLogin])

  return (
    <>
      <div className="bg-grey-d flex justify-center py-5 w-full h-full">
        <div className="fix w-5xl rounded-lg">
          <div className="h-56 sm:h-64">
           <img className="w-full h-56" src={housy?.thumbnail} alt="" />
          </div>
          <div className="grid grid-cols-3 gap-2 ">
            <img src={room1} alt="" />
            <img src={room2} alt="" />
            <img src={room3} alt="" />
          </div>
          <div className="p-5">
            <div>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                {housy?.name}
              </h5>
            </div>
            <div className="grid grid-cols-4">
              <h6 className="font-bold">
                {formatRupiah(housy?.price)}/ <span>{housy?.typerent}</span>
              </h6>
              <div>
                <h6>{housy?.bedroom} Beds</h6>
              </div>
              <div>
                <h6>{housy?.bathroom} Baths</h6>
              </div>
              <div>
                <h6>1800 Area</h6>
              </div>
            </div>
            {/* <h6 className="w-fit mb-3 font-normal text-gray-700">
              {housy?.description}
            </h6> */}
            {state.isLogin? (
              <div className="flex justify-end">
              <button
                onClick={() => {
                  setShowBooking(true);
                }}
                className="focus:outline-none text-white font-bold bg-purple-b rounded-lg text-sm px-5 py-2.5"
              >
                Book Now
              </button>
            </div>
            ) : (
              <div className="flex justify-end">
              <button
                onClick={() => {
                  setShowSignIn(true);
                }}
                className="focus:outline-none text-white font-bold bg-purple-b rounded-lg text-sm px-5 py-2.5"
              >
                Book Now
              </button>
            </div>
            )}
            
          </div>
        </div>
        {showBooking && <BookNow show={showBooking} setShow={setShowBooking} />}
        {showSignIn && <FormSignIn show={showSignIn} setShow={setShowSignIn} />}
      </div>
    </>
  );
}
