import React, { Fragment } from "react";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { handleLogOut } from "@/redux/reducerSlice/userSlice";
function Navigation() {
  const dispatch = useDispatch();
  const router = useRouter();
  const pathName = usePathname();
  const { userDetails } = useSelector((state) => state.user);
  const { ownerDetails } = useSelector((state) => state.owner);
  return (
    <Fragment>
      {pathName == "/login" ? (
        <div className="bg-[#252B48] py-4">
          <div className="container mx-auto flex justify-between items-center">
            <div>
              <h1 className="tracking-wider text-white">Bookly</h1>
            </div>

            <div className="flex items-center gap-5">
              <div
                className=" opacity-90 hover:opacity-80 p-2 rounded-md cursor-pointer"
                onClick={() => router.push("../owner/ownerregister")}
              >
                <button className="text-white">Add your Property</button>
              </div>
            </div>
          </div>
        </div>
      ) : pathName == "/register" ? (
        <div className="bg-[#252B48] py-4">
          <div className="container mx-auto flex justify-between items-center">
            <div>
              <h1 className="tracking-wider text-white">Bookly</h1>
            </div>

            <div className="flex items-center gap-5">
              <div
                className=" opacity-90 hover:opacity-80 p-2 rounded-md cursor-pointer"
                onClick={() => router.push("../owner/ownerregister")}
              >
                <button className="text-white">Add your Property</button>
              </div>
            </div>
          </div>
        </div>
      ) : pathName == "/owner/ownerregister" ? (
        <div className="bg-[#252B48] py-6">
          <div className="container mx-auto flex justify-between items-center">
            <div>
              <h1 className="tracking-wider text-white">Bookly</h1>
            </div>
          </div>
        </div>
      ) : pathName == "/owner/ownerlogin" ? (
        <div className="bg-[#252B48] py-6">
          <div className="container mx-auto flex justify-between items-center">
            <div>
              <h1 className="tracking-wider text-white">Bookly</h1>
            </div>
          </div>
        </div>
      ) : pathName == "/profile" ? (
        <div className="bg-[#252B48] py-4">
          <div className="container mx-auto flex justify-between items-center">
            <div>
              <h1 className="tracking-wider text-white">Bookly</h1>
            </div>
            <div>
              <input
                type="text"
                className="py-[5px] px-5 block w-[500px] rounded-full text-basedark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                placeholder="Search"
              />
            </div>
            <div>
              <div className="flex-shrink-0 group block">
                <div className="flex items-center">
                  <div className="hs-dropdown relative">
                    <button
                      id="hs-dropdown-default"
                      type="button"
                      className="hs-dropdown-toggle px-4 inline-flex justify-center items-center gap-5 align-middle"
                    >
                      <img
                        className="inline-block flex-shrink-0 h-[2.875rem] w-[2.875rem] rounded-full relative cursor-pointer"
                        src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                        alt="Image Description"
                      />
                    </button>
                    <div
                      className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] hs-dropdown-open:opacity-100 opacity-0 w-60 hidden z-10 mt-1 min-w-[15rem] shadow-md  p-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700 bg-white"
                      aria-labelledby="hs-dropdown-default"
                    >
                      <a
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-base text-gray-800 hover:bg-gray-200 focus:ring-2 focus:ring-green-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                        href="#"
                      >
                        My Bookings
                      </a>
                      <a
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-base text-gray-800 hover:bg-gray-200 focus:ring-2 focus:ring-green-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 cursor-pointer"
                        onClick={() => router.push("./accountsettings")}
                      >
                        Settings
                      </a>
                      <a
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-base text-gray-800 hover:bg-gray-200 focus:ring-2 focus:ring-green-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 cursor-pointer"
                        onClick={() =>
                          dispatch(handleLogOut()) && router.push("/")
                        }
                      >
                        Sign Out
                      </a>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-white dark:text-white">
                      {userDetails.firstName} {userDetails.lastName}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : pathName == "/accountsettings" ? (
        <div className="bg-[#252B48] py-4">
          <div className="container mx-auto flex justify-between items-center">
            <div>
              <h1 className="tracking-wider text-white">Bookly</h1>
            </div>
            <div>
              <input
                type="text"
                className="py-[5px] px-5 block w-[500px] rounded-full text-basedark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                placeholder="Search"
              />
            </div>
            <div>
              <div className="flex-shrink-0 group block">
                <div className="flex items-center">
                  <div className="hs-dropdown relative">
                    <button
                      id="hs-dropdown-default"
                      type="button"
                      className="hs-dropdown-toggle px-4 inline-flex justify-center items-center gap-5 align-middle"
                    >
                      <img
                        className="inline-block flex-shrink-0 h-[2.875rem] w-[2.875rem] rounded-full relative cursor-pointer"
                        src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                        alt="Image Description"
                      />
                    </button>
                    <div
                      className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] hs-dropdown-open:opacity-100 opacity-0 w-60 hidden z-10 mt-1 min-w-[15rem] shadow-md  p-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700 bg-white"
                      aria-labelledby="hs-dropdown-default"
                    >
                      <a
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-base text-gray-800 hover:bg-gray-200 focus:ring-2 focus:ring-green-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                        href="#"
                      >
                        My Bookings
                      </a>
                     
                      <a
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-base text-gray-800 hover:bg-gray-200 focus:ring-2 focus:ring-green-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 cursor-pointer"
                        onClick={() =>
                          dispatch(handleLogOut()) && router.push("/")
                        }
                      >
                        Sign Out
                      </a>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-white dark:text-white">
                      {userDetails.firstName} {userDetails.lastName}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : pathName == "/owner/ownerdashboard" ? (
        <div className="bg-[#252B48] py-4">
          <div className="container mx-auto flex justify-between items-center">
            <div>
              <h1 className="tracking-wider text-white">Bookly</h1>
            </div>
            <div>
              <input
                type="text"
                className="py-[5px] px-5 block w-[500px] rounded-full text-basedark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                placeholder="Search"
              />
            </div>
            <div>
              <div className="flex-shrink-0 group block">
                <div className="flex items-center">
                  <div className="hs-dropdown relative">
                    <button
                      id="hs-dropdown-default"
                      type="button"
                      className="hs-dropdown-toggle px-4 inline-flex justify-center items-center gap-5 align-middle"
                    >
                      <img
                        className="inline-block flex-shrink-0 h-[2.875rem] w-[2.875rem] rounded-full relative cursor-pointer"
                        src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                        alt="Image Description"
                      />
                    </button>
                    <div
                      className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] hs-dropdown-open:opacity-100 opacity-0 w-60 hidden z-10 mt-1 min-w-[15rem] shadow-md  p-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700 bg-white"
                      aria-labelledby="hs-dropdown-default"
                    >
                  
                     
                      <a
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-base text-gray-800 hover:bg-gray-200 focus:ring-2 focus:ring-green-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 cursor-pointer"
                        onClick={() =>
                          dispatch(handleLogOut()) && router.push("/")
                        }
                      >
                        Sign Out
                      </a>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-white dark:text-white">
                      {ownerDetails.firstName} {ownerDetails.lastName}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : pathName == "/owner/propertyregister" ? (
        <div className="bg-[#252B48] py-4">
          <div className="container mx-auto flex justify-between items-center">
            <div>
              <h1 className="tracking-wider text-white">Bookly</h1>
            </div>
            <div>
              <input
                type="text"
                className="py-[5px] px-5 block w-[500px] rounded-full text-basedark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                placeholder="Search"
              />
            </div>
            <div>
              <div className="flex-shrink-0 group block">
                <div className="flex items-center">
                  <div className="hs-dropdown relative">
                    <button
                      id="hs-dropdown-default"
                      type="button"
                      className="hs-dropdown-toggle px-4 inline-flex justify-center items-center gap-5 align-middle"
                    >
                      <img
                        className="inline-block flex-shrink-0 h-[2.875rem] w-[2.875rem] rounded-full relative cursor-pointer"
                        src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                        alt="Image Description"
                      />
                    </button>
                    <div
                      className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] hs-dropdown-open:opacity-100 opacity-0 w-60 hidden z-10 mt-1 min-w-[15rem] shadow-md  p-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700 bg-white"
                      aria-labelledby="hs-dropdown-default"
                    >
                  
                     
                      <a
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-base text-gray-800 hover:bg-gray-200 focus:ring-2 focus:ring-green-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 cursor-pointer"
                        onClick={() =>
                          dispatch(handleLogOut()) && router.push("/")
                        }
                      >
                        Sign Out
                      </a>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-white dark:text-white">
                      {ownerDetails.firstName} {ownerDetails.lastName}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-[#252B48] sticky top-0 left-0 py-4 z-20">
          <div className="container mx-auto flex justify-between items-center">
            <div>
              <h1 className="tracking-wider text-white">Bookly</h1>
            </div>

            <div className="ps-60">
              <input
                type="text"
                className="py-[5px] px-5 block w-[500px] rounded-full text-basedark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                placeholder="Search"
              />
            </div>

            <div className="flex items-center gap-5">
              <div
                className=" opacity-90 hover:opacity-80  cursor-pointer border  p-2 rounded-xl"
                onClick={() => router.push("../owner/ownerregister")}
              >
                <button className="text-white tracking-wider ">Add your Property</button>
              </div>

              <div
                className=" opacity-90 hover:opacity-80 cursor-pointer border  p-2 rounded-xl"
                onClick={() => router.push("./login")}
              >
                <button className="text-white tracking-wider">Sign In/Register</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default Navigation;
