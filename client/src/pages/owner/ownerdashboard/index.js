import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Image from "next/image";
import Header from "@/components/Header";
import { Formik, Form, Field } from 'formik';
function index() {
  const router = useRouter();
  const { ownerDetails } = useSelector((state) => state.owner);
  const [propertyDetails, setPropertyDetails] = useState([]);

  const fetchPropertyDetails = async () => {
    const response = await fetch(`http://localhost:8080/propertyByOwnerId/${ownerDetails._id}`);
    const result = await response.json();
    setPropertyDetails(result.data);
  };
  useEffect(() => {
    fetchPropertyDetails();
  }, []);
  return (
    <>
      <Header />
      <div className="flex py-8 px-8 container">
        <div className=" w-72 h-[895px]">
          <nav
            className="flex flex-col"
            aria-label="Tabs"
            role="tablist"
            data-hs-tabs-vertical="true"
          >
            <button
              type="button"
              className=" hs-tab-active:border-blue-500 hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-600 py-3 pl-4 mb-4 rounded-md  bg-gray-100  pr-4 inline-flex items-center gap-2  border text-xl whitespace-nowrap text-gray-500 hover:text-blue-600 active"
              id="vertical-tab-with-border-item-1"
              data-hs-tab="#vertical-tab-with-border-1"
              aria-controls="vertical-tab-with-border-1"
              role="tab"
            >
              Dashboard
            </button>
            <button
              type="button"
              className=" hs-tab-active:border-blue-500 hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-600 py-3 pl-4 mb-4 rounded-md  bg-gray-100  pr-4 inline-flex items-center gap-2  border text-xl whitespace-nowrap text-gray-500 hover:text-blue-600 dark:hover:text-gray-300"
              id="vertical-tab-with-border-item-2"
              data-hs-tab="#vertical-tab-with-border-2"
              aria-controls="vertical-tab-with-border-2"
              role="tab"
            >
              Messages
            </button>
            <button
              type="button"
              className=" hs-tab-active:border-blue-500 hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-600 py-3 pl-4 mb-4 rounded-md  bg-gray-100  pr-4 inline-flex items-center gap-2  border text-xl whitespace-nowrap text-gray-500 hover:text-blue-600 dark:hover:text-gray-300"
              id="vertical-tab-with-border-item-3"
              data-hs-tab="#vertical-tab-with-border-3"
              aria-controls="vertical-tab-with-border-3"
              role="tab"
            >
              Bookings
            </button>
            <button
              type="button"
              className=" hs-tab-active:border-blue-500 hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-600 py-3 pl-4 mb-4 rounded-md  bg-gray-100  pr-4 inline-flex items-center gap-2  border text-xl whitespace-nowrap text-gray-500 hover:text-blue-600 dark:hover:text-gray-300"
              id="vertical-tab-with-border-item-4"
              data-hs-tab="#vertical-tab-with-border-4"
              aria-controls="vertical-tab-with-border-4"
              role="tab"
            >
              My Listings
            </button>
            <button
              type="button"
              className=" hs-tab-active:border-blue-500 hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-600 py-3 pl-4 mb-4 rounded-md  bg-gray-100  pr-4 inline-flex items-center gap-2  border text-xl whitespace-nowrap text-gray-500 hover:text-blue-600 dark:hover:text-gray-300"
              id="vertical-tab-with-border-item-5"
              data-hs-tab="#vertical-tab-with-border-5"
              aria-controls="vertical-tab-with-border-5"
              role="tab"
            >
              Add Listings
            </button>
            <button
              type="button"
              className=" hs-tab-active:border-blue-500 hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-600 py-3 pl-4 mb-4 rounded-md  bg-gray-100  pr-4 inline-flex items-center gap-2  border text-xl whitespace-nowrap text-gray-500 hover:text-blue-600 dark:hover:text-gray-300"
              id="vertical-tab-with-border-item-6"
              data-hs-tab="#vertical-tab-with-border-6"
              aria-controls="vertical-tab-with-border-6"
              role="tab"
            >
              Reviews
            </button>
            <button
              type="button"
              className=" hs-tab-active:border-blue-500 hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-600 py-3 pl-4 mb-4 rounded-md  bg-gray-100  pr-4 inline-flex items-center gap-2  border text-xl whitespace-nowrap text-gray-500 hover:text-blue-600 dark:hover:text-gray-300"
              id="vertical-tab-with-border-item-7"
              data-hs-tab="#vertical-tab-with-border-7"
              aria-controls="vertical-tab-with-border-7"
              role="tab"
            >
              My Profile
            </button>
          </nav>
        </div>
        <div className="ml-3 w-full">
          <div
            id="vertical-tab-with-border-1"
            role="tabpanel"
            aria-labelledby="vertical-tab-with-border-item-1"
            className="bg-gray-100 h-40 flex flex-col justify-center items-center rounded-md drop-shadow-sm"
          >
            <p className="text-gray-900 text-xl">
              Namaste,{ownerDetails.fullName}
            </p>
            {propertyDetails ? (
              <div></div>
            ) : (
              <div className="text-md flex justify-center items-center flex-col text-gray-400 pt-1">
                <h1>
                  You do not have any property to manage.Go to{" "}
                  <span className="text-md text-red">My Listing</span> tab
                  to Add Property.
                </h1>
              </div>
            )}
          </div>
          <div
            id="vertical-tab-with-border-2"
            className="hidden"
            role="tabpanel"
            aria-labelledby="vertical-tab-with-border-item-2"
          >
            <div className="bg-gray-100 h-40 flex justify-center items-center rounded-md drop-shadow-sm">
              <p className="text-gray-500 dark:text-gray-400">Messages</p>
            </div>
          </div>
          <div
            id="vertical-tab-with-border-3"
            className="hidden"
            role="tabpanel"
            aria-labelledby="vertical-tab-with-border-item-3"
          >
            <div className="bg-gray-100 h-40 flex justify-center items-center rounded-md drop-shadow-sm">
              <p className="text-gray-500 dark:text-gray-400">Bookings</p>
            </div>
          </div>
          <div id="vertical-tab-with-border-4" className="hidden" role="tabpanel" aria-labelledby="vertical-tab-with-border-item-4" >
            <div className="bg-gray-100 flex justify-center items-start rounded-md">
              <div>
                {propertyDetails ? (
                  <>
                    <div className="flex flex-col gap-5 items-center p-10">
                      <div>
                        <Image src={'http://localhost:8080/property-image/' + propertyDetails._id} width={500} height={500} />
                      </div>
                      <div className="w-full flex justify-between items-center border-b pb-4">
                        <h1 className="text-2xl font-medium">{propertyDetails.propertyName}</h1>
                      </div>
                      <div className="w-full flex justify-between items-center">
                        <h1 className="text-2xl font-medium">{propertyDetails.propertyType}</h1>
                      </div>
                    </div>

                    <div className="p-10">
                <button type="button" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-red text-white text-sm" data-hs-overlay="#hs-basic-modal">
                  Edit
                </button>

                <div id="hs-basic-modal" class="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto">
                  <div class="hs-overlay-open:opacity-100 hs-overlay-open:duration-500 opacity-0 transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
                    <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                      <div class="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
                        <h3 class="font-bold text-gray-800 dark:text-white">
                          Edit
                        </h3>
                        <button type="button" class="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800" data-hs-overlay="#hs-basic-modal">
                          <span class="sr-only">Close</span>
                          <svg class="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor" />
                          </svg>
                        </button>
                      </div>

                      <div className='flex justify-center items-center'>
                        <Formik
                          initialValues={{
                            propertyName: '',
                            propertyOwner: ownerDetails._id
                          }}
                        >
                          {({ errors, touched }) => (
                            <Form className='container flex flex-col p-8 border w-[800px] gap-8'>
                              <div>
                                <p className='font-semibold'> Property Name</p>
                                <Field name="propertyName" placeholder="Property Name" className=" border p-2 w-full" />
                                {errors.propertyName && touched.propertyName ? (
                                  <div className='text-red-600 text-sm'>{errors.propertyName}</div>
                                ) : null}
                              </div>
                            </Form>
                          )}
                        </Formik>
                      </div>

                      <div class="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700">
                        <button type="button" class="hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-overlay="#hs-basic-modal">
                          Close
                        </button>
                        <a class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-red text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800" href="#">
                          Save changes
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                  </>


                ) : (
                  <div className="text-md flex justify-center items-center flex-col py-10 gap-8">
                    <h1>You do not have any property to manage.</h1>
                    <button
                      className="bg-red text-white py-2 px-6"
                      onClick={() => router.push("./propertyregister")}
                    >
                      Add Property
                    </button>

                  </div>
                )}
              </div>


             
            </div>
          </div>
          <div
            id="vertical-tab-with-border-5"
            className="hidden"
            role="tabpanel"
            aria-labelledby="vertical-tab-with-border-item-5"
          >
            <div className="bg-gray-100 h-40 flex justify-center items-center rounded-md drop-shadow-sm">
              <p className="text-gray-500 dark:text-gray-400">Add Listings</p>
            </div>
          </div>
          <div
            id="vertical-tab-with-border-6"
            className="hidden"
            role="tabpanel"
            aria-labelledby="vertical-tab-with-border-item-6"
          >
            <div className="bg-gray-100 h-40 flex justify-center items-center rounded-md drop-shadow-sm">
              <p className="text-gray-500 dark:text-gray-400">Reviews</p>
            </div>
          </div>
          <div
            id="vertical-tab-with-border-7"
            className="hidden"
            role="tabpanel"
            aria-labelledby="vertical-tab-with-border-item-7"
          >
            <div className="bg-gray-100 h-40 flex justify-center items-center rounded-md drop-shadow-sm">
              <div>
                This is {ownerDetails.fullName}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
