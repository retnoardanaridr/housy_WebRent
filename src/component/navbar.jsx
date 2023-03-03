import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Dropdown, Avatar } from "flowbite-react";
import { UserContext } from "../contexts/userContext";
import cities from "../assets/cities.jpg";
import shape from "../assets/Shape.png";
import user from "../assets/Ellipse 1.png";
import profile from "../assets/user 2.png";
import book from "../assets/calendar 2.png";
import history from "../assets/bill 1.png";
import logout from "../assets/logout 1.png";
import logo from "../assets/Icon.png";
import FormSignIn from "./auth/signin";
import FormSignUp from "./auth/signup";


function Navbar() {
  const [state, dispatch] = useContext(UserContext);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const Logout = () => {
    dispatch({ type: "LOGOUT" })
  }

  useEffect(() => {
    if (state.isLogin === true) {
      setShowSignIn(false)
    }
  }, [state.isLogin])


  return (
    <>
      <nav className="border-gray-200 px-2 sm:px-5 h-20 py-5">
        <div className="container flex justify-between items-center mx-auto">
          {state.user === 'tenant' ? (
            <Link to={"/"}>
              <div className="flex items-center">
                <img
                  src={logo}
                  className="h-6 w-20 mr-8 sm:h-9 hover:cursor-pointer"
                  alt="logo"
                />
              </div>
            </Link>
          ) : (
            <Link to={"/"}>
              <div className="flex items-center">
                <img
                  src={logo}
                  className="h-6 w-20 mr-8 sm:h-9 hover:cursor-pointer"
                  alt="logo"
                />
              </div>
            </Link>
          )}
          <div className="flex">
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Search</span>
            </button>
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search..."
              />
            </div>
          </div>
          {state.isLogin ? (
            <Dropdown
              label={<Avatar alt="user" img={user} rounded={true} />}
              arrowIcon={false}
              inline={true}
            >
              <Dropdown.Item>
                <Link to={'/my-profile'}>
                  <div className="pb-1">
                    <div className="px-2 py-1 text-sm text-gray-700 flex items-center cursor-pointer hover:bg-grey-100">
                      <div className="w-5 mr-3">
                        <img src={profile} alt="" />
                      </div>
                      <span>Profile</span>
                    </div>
                  </div>
                </Link>
              </Dropdown.Item>
              {state.user.listas === 'owner' ? (
                <><Dropdown.Item>
                  <Link to={'/add-property'}>
                    <div className="pb-1">
                      <div className="px-2 py-1 text-sm text-gray-700 flex items-center cursor-pointer hover:bg-grey-100">
                        <div className="w-5 mr-3">
                          <img src={shape} alt="" />
                        </div>
                        <span>Add Property</span>
                      </div>
                    </div>
                  </Link>
                </Dropdown.Item><Dropdown.Item>
                    <Link to={'/add-city'}>
                      <div className="pb-1">
                        <div className="px-2 py-1 text-sm text-gray-700 flex items-center cursor-pointer hover:bg-grey-100">
                          <div className="w-5 mr-3">
                            <img src={shape} alt="" />
                          </div>
                          <span>Add City</span>
                        </div>
                      </div>
                    </Link>
                  </Dropdown.Item></>
              ) : (
                <Dropdown.Item>
                  <Link to={'/my-booking'}>
                    <div className="pb-1">
                      <div className="px-2 py-1 text-sm text-gray-700 flex items-center cursor-pointer hover:bg-grey-100">
                        <div className="w-5 mr-3">
                          <img src={book} alt="" />
                        </div>
                        <span>My Booking</span>
                      </div>
                    </div>
                  </Link>
                </Dropdown.Item>
              )}
              {state.user.listas === 'owner' ? (
                <Dropdown.Item>
                  <Link to={'/history'}>
                    <div className="pb-1">
                      <div className="px-2 py-1 text-sm text-gray-700 flex items-center cursor-pointer hover:bg-grey-100">
                        <div className="w-5 mr-3">
                          <img src={history} alt="" />
                        </div>
                        <span>History</span>
                      </div>
                    </div>
                  </Link>
                </Dropdown.Item>
              ) : (
                <Dropdown.Item>
                  <Link to={'/my-history'}>
                    <div className="pb-1">
                      <div className="px-2 py-1 text-sm text-gray-700 flex items-center cursor-pointer hover:bg-grey-100">
                        <div className="w-5 mr-3">
                          <img src={history} alt="" />
                        </div>
                        <span>History</span>
                      </div>
                    </div>
                  </Link>
                </Dropdown.Item>
              )}
              <Dropdown.Divider />
              <Dropdown.Item>
                <div className="pb-1">
                  <div className="px-2 py-1 text-sm text-gray-700 flex items-center cursor-pointer hover:bg-grey-100">
                    <div className="w-5 mr-3">
                      <img src={logout} alt="" />
                    </div>
                    <button onClick={Logout}>Log Out</button>
                  </div>
                </div>
              </Dropdown.Item>
            </Dropdown>
          ) : (
            <div>
              <button
                onClick={() => {
                  setShowSignIn(true);
                  setShowSignUp(false);
                }}
                className="text-grey-w font-bold bg-red px-10"
              >
                Sign In
              </button>
              <button
                onClick={() => {
                  setShowSignUp(true);
                  setShowSignIn(false);
                }}
                className="focus:outline-none text-dark font-bold bg-grey-w rounded-lg text-sm px-5 py-2.5"
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
        {showSignIn && (
          <FormSignIn
            show={showSignIn}
            setShow={setShowSignIn}
            setShowSignUp={setShowSignUp}
          />
        )}
        {showSignUp && (
          <FormSignUp
            show={showSignUp}
            setShow={setShowSignUp}
            setShowSignIn={setShowSignIn}
          />
        )}
      </nav>
    </>
  );
}

export default Navbar;
