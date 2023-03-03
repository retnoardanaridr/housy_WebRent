import React, { useContext, useState } from "react";
import { Dialog } from "@headlessui/react";
import { Alert } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { UserContext } from '../../contexts/userContext';
import { useMutation } from "react-query";
import { API } from "../../config/api";

function FormSignIn({ show, setShow, setShowSignUp }) {
  let navigate = useNavigate();

  const [ state, dispatch ] = useContext(UserContext);
  const [ message, setMessage ] = useState(null);
  const [ login, setLogin ] = useState({
    username: '',
    password: '',
  })

  const handlerSignIn = useMutation(async (e) => {
    try {
      e.preventDefault();

      //insert data user to db
      const response = await API.post('/login', login)
      console.log(response.data.data);

      const alert = (
        <Alert color="success" className="font-medium">
          Success
        </Alert>
      )
      setMessage(alert)
      console.log("user berhasil login", response.data.data)
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: response.data.data
      })
      setShow(false)
      navigate('/')
    } catch (err) {
      const alert = (
        <Alert color="failure" className="font-medium">
          Failed
        </Alert>
      );
      setMessage(alert);
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
            <div className="w-80 h-full max-w-md md:h-auto">
              <div className="justify-center bg-white rounded-lg shadow">
                <div className="px-6 py-6 lg:px-8">
                  <h3 className="mb-4 text-xl font-bold text-center text-gray-900">
                    Sign in
                  </h3>
                  {message && message}
                  <form className="space-y-6" action="#">
                    <div>
                      <label
                        htmlFor="username"
                        className="block mb-2 text-sm font-bold text-gray-900"
                      >
                        Username
                      </label>
                      <input
                        type="text"
                        name="username"
                        id="username"
                        value={login.username}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        onChange={(e)=> setLogin({ ...login, [e.target.name]: e.target.value})}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        value={login.password}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        onChange={(e) => setLogin({ ...login, [e.target.name]: e.target.value})}
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                      onClick={(e) => handlerSignIn.mutate(e)}
                    >
                      Sign In
                    </button>
                    <div className="text-sm font-medium text-gray-500 text-center">
                      Not registered?{" "}
                      <span
                        className="text-blue-700 hover:cursor-pointer"
                        onClick={() => {
                          setShow(false);
                          setShowSignUp(true);
                        }}
                      >
                        Create account
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

export default FormSignIn;
