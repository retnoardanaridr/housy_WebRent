import React, { useEffect, useState } from "react";
import SideBar from "../component/sidebar";
import { Link } from 'react-router-dom';
import { API } from '../config/api';
import { ListRoom } from "../data/listHousy";
import { useQuery } from "react-query";

function LandingPage() {

  const formatRupiah = (money) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(money);
  };

  const [request, setRequest] = useState("") //handleOnChange
  const [searchParams, setSearchParams] = useState(["city", "name"]) //search by city dan name
  
    let { data: housy } = useQuery('houseCache', async () => {
      const response = await API.get('/housy');
      return response.data.data;
    });
    console.log(housy)
  

  return (
    <>
      <div className="grid grid-cols-[350px,auto]">
        <SideBar />
        <div className="bg-grey-b">
          <div className="p-4 text-center bg-grey-b sm:p-8">
            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
              {/* <div>
                <label htmlFor="search-form">
                  <input
                    type="search"
                    name="search-form"
                    id="search-form"
                    className="search-input"
                    placeholder="Search for..."
                    value={request}
                    onChange={(e) => setRequest(e.target.value)}
                  />
                  <span className="sr-only">Search countries here</span>
                </label>
              </div> */}
              {housy?.map((item) => (
                <div key={item.id} className="max-w-sm w-100 bg-white border border-gray-200 rounded-lg shadow-md">
                  <p>
                    <Link to={`/detail/${item.id}`}>
                      <img
                        className="rounded-t-lg w-full p-1 cursor-pointer hover:saturate-0"
                        src={item.thumbnail}
                        alt="room"
                      />
                    </Link>
                  </p>
                  <div className="px-3 pt-2 text-left">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                      <span>{formatRupiah(item.price)}</span>/<span>{item.typerent}</span>
                    </h5>
                    <div className="flex">
                      <p className="mb-3 text-xs font-bold text-gray-700">
                        {item.bedroom} Beds,
                      </p>
                      <p className="mb-3 text-xs font-bold text-gray-700">
                        {item.bathroom} Baths,
                      </p>
                      <p className="mb-3 text-xs font-bold text-gray-700">
                        {item.area} sqft
                      </p>
                    </div>
                    <div>
                      <p className="mb-3 text-xs font-bold text-gray-b">
                        {item?.city.name}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
