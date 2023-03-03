import { Dialog } from "@headlessui/react";
import React, { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "../config/api";
import { useQuery } from "react-query";

function BookNow({ show, setShow }) {
  const {id} = useParams();
  const navigate = useNavigate();
  const [date, setDate] = useState({
    checkin: '',
    checkout: '',
  })
  
  const { data: housy } = useQuery('/houseCache', async () => {
    const response = await API.get(`/house/${id}`)
    return response.data.data;
  })

  
  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      const body = JSON.stringify({
        housy_id: housy.id,
        total: housy.price,
        checkin: date.checkin,
        checkout: date.checkout,
      })
      console.log("test", body)

      const response = await API.post('/transaction', body)
      navigate('/my-booking')
      return response.data.data
    } catch (error) {
      console.log(error)
    }
  })

  return (
    <>
      <Dialog
        open={show}
        as="div"
        className="fixed inset-0 flex items-end md:items-center justify-center px-3 bg-black bg-opacity-60 backdrop-blur z-[999]"
        onClose={() => setShow(false)}
      >
        <Dialog.Panel
          id="authentication-modal"
          tabIndex="-1"
          className="relative z-10"
        >
          <div className="w-80 h-full max-w-md md:h-auto">
            <div className="justify-center bg-white rounded-lg shadow">
              <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-bold text-center text-gray-900">
                  How long will you stay
                </h3>
                <form className="space-y-6" onSubmit={(e) => handleSubmit.mutate(e)}>
                  <div>
                    <label
                      htmlFor="checkin"
                      className="block mb-2 text-sm font-bold text-gray-900"
                    >
                      Check In
                    </label>
                    <input
                      type="date"
                      name="checkin"
                      onChange={(e) => setDate({
                        ...date,
                        [e.target.name]: e.target.value,
                      })}
                      id="checkin"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="checkout"
                      className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
                    >
                      Check Out
                    </label>
                    <input
                      type="date"
                      name="checkout"
                      id="checkout"
                      onChange={(e) => setDate({
                        ...date,
                        [e.target.name]: e.target.value,
                      })}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-purple-b hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Order
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
}

export default BookNow;
