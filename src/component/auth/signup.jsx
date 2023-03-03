import { Dialog } from "@headlessui/react";
import React, { useState } from "react";
import { Label, Select, Textarea, Alert } from "flowbite-react";
import { useMutation } from 'react-query';
import { API } from '../../config/api'

function FormSignUp({ show, setShow, setShowSignIn }) {
  const [message, setMessage] = useState(null);

  const [register, setRegister] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    listas: "",
    gender: "",
    phone: "",
    address: "",
  });

  const regisHandler = useMutation(async (e) => {
    try {
      e.preventDefault();

      const body = JSON.stringify(register);

      //inser data user to db
      const response = await API.post('/register', body)

      const alert = (
        <Alert color="success" className="font-medium">
          Success
        </Alert>
      )
      setMessage(alert)
      setShowSignIn(true)
      setShow(false)
      console.log("user berhasil register", response.data.data)
    } catch (err) {
      const alert = (
        <Alert color="failure" className="font-medium">
          Failed
        </Alert>
      )
      setMessage(alert)
      console.log(err)
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
          <div className="relative w-80 rounded overflow-y-scroll max-w-md md:h-[400px]">
            <div className="relative bg-white rounded-lg shadow">
              <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-2 text-xl font-bold text-center text-gray-900">
                  Sign Up
                </h3>
                {message && message}
                <form className="space-y-2" action="#">
                  <div>
                    <label
                      htmlFor="fullname"
                      className="block mb-1 text-sm font-medium text-gray-900"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullname"
                      id="fullname"
                      value={register.fullname}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      onChange={(e) =>
                        setRegister({
                          ...register,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="username"
                      className="block mb-1 text-sm font-medium text-gray-900"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      value={register.username}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      onChange={(e) =>
                        setRegister({
                          ...register,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-1 text-sm font-medium text-gray-900"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={register.email}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      onChange={(e) =>
                        setRegister({
                          ...register,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-1 text-sm font-medium text-gray-900"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      value={register.password}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      onChange={(e) =>
                        setRegister({
                          ...register,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div>
                    <div id="select">
                      <div className="mb-1 block text-sm font-bold">
                        <Label htmlFor="listas" value="List As" />
                      </div>
                      <Select
                        name="listas"
                        onChange={(e) =>
                          setRegister({
                            ...register,
                            [e.target.name]: e.target.value,
                          })
                        }
                        id="listas"
                        required={true}
                      >
                        <option hidden></option>
                        <option value="tenant">Tenant</option>
                        <option value="owner">Owner</option>
                      </Select>
                    </div>
                  </div>
                  <div id="select">
                    <div className="mb-1 block text-sm font-bold">
                      <Label htmlFor="gender" value="Gender" />
                    </div>
                    <Select
                      onChange={(e) =>
                        setRegister({
                          ...register,
                          [e.target.name]: e.target.value,
                        })
                      }
                      name="gender"
                      id="gender"
                      required={true}
                    >
                      <option hidden></option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </Select>
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block mb-1 text-sm font-medium text-gray-900"
                    >
                      Phone
                    </label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      value={register.phone}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      onChange={(e) =>
                        setRegister({
                          ...register,
                          [e.target.name]: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div id="textarea">
                    <div className="mb-2 block">
                      <Label htmlFor="address" value="Address" />
                    </div>
                    <Textarea
                      id="address"
                      name="address"
                      value={register.address}
                      required={true}
                      rows={4}
                      onChange={(e) => {
                        setRegister({
                          ...register,
                          [e.target.name]: e.target.value,
                        })
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    onClick={(e) => regisHandler.mutate(e)}
                  >
                    Sign Up
                  </button>
                  <div className="text-sm font-medium text-gray-500 text-center">
                    Already have Account?{" "}
                    <span
                      onClick={() => {
                        setShow(false);
                        setShowSignIn(true);
                      }}
                      className="text-blue-700 text-bold hover:cursor-pointer text-center"
                    >
                      Click Here
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
}

export default FormSignUp;
