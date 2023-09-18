import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Image from "next/image";

function index() {
  const router = useRouter();
  const { ownerDetails } = useSelector((state) => state.owner);
  const [propertyDetails, setPropertyDetails] = useState([]);

  const fetchPropertyDetails = async () => {
    const response = await fetch(
      "http://localhost:8080/property/" + ownerDetails._id
    );

    const result = await response.json();
    setPropertyDetails(result.data);
  };
  useEffect(() => {
    fetchPropertyDetails();
  }, []);
  return (
    <>
      <div className="flex py-8 px-8 bg-gray-200">
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
              <div className="text-sm flex justify-center items-center flex-col text-gray-400 pt-1">
                <h1>
                  You do not have any property to manage.Go to{" "}
                  <span className="text-md text-gray-800">Add Listing</span> tab
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
          <div
            id="vertical-tab-with-border-4"
            className="hidden"
            role="tabpanel"
            aria-labelledby="vertical-tab-with-border-item-4"
          >
            <div className="bg-gray-100  flex justify-center items-center rounded-md drop-shadow-sm">
              {propertyDetails ? (
                <div className="flex gap-5 items-center">
                    <div>
                        <h1>Name: {propertyDetails.propertyName}</h1>
                        <h1>Category: {propertyDetails.propertyRating}</h1>
                        
                    </div>
                    <div>
                        <Image src={'http://localhost:8080/property-image/' +propertyDetails._id}  width={500} height={500}/>
                    </div>
                </div>
              ) : (
                <div className="text-xl flex justify-center items-center flex-col">
                  <h1>You do not have any property to manage.</h1>
                  <button
                    className="bg-red-400"
                    onClick={() => router.push("./propertyregister")}
                  >
                    Add Property
                  </button>
                  
                </div>
              )}
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
                This is {ownerDetails.firstName} {ownerDetails.lastName}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
