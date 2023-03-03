import React from "react";
import { Dialog } from "@headlessui/react";
import { useMutation } from "react-query";
import { API } from "../config/api";

function ChangePassword({show, setShow}) {

  // const [dataForm, setDataForm] = ({
  //   oldpass: '',
  //   confirmpass: '',
  //   newpass: '',
  // })

  // const handleOnChange = (e) => setDataForm ({
  //   ...dataForm,
  //     [e.target.name]: e.target.value
  //   })

  // const handleSubmit = useMutation(async (e) => {
  //   try {
  //     e.preventDefault();

  //     const body = JSON.stringify(dataForm)
  //     await API.patch('/user', body)
  //     setShow(false)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // })

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
                    Change Password
                </h3>
                <form className="space-y-6">
                  <div>
                    <label
                      htmlFor="oldpass"
                      className="block mb-2 text-sm font-bold text-gray-900"
                    >
                      Old Password
                    </label>
                    <input
                      type="password"
                      name="oldpass"
                      id="oldpass"
                      // value={dataForm.oldpass}
                      // onChange={handleOnChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="confirmpass"
                      className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      name="confirmpass"
                      id="confirmpass"
                      // value={dataForm.confirmpass}
                      // onChange={handleOnChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="newpass"
                      className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
                    >
                      New Password
                    </label>
                    <input
                      type="password"
                      name="newpass"
                      id="newpass"
                      // value={dataForm.newpass}
                      // onChange={handleOnChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-purple-b hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Save
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

export default ChangePassword;
