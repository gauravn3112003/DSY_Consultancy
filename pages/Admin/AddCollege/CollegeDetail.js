import React from "react";
import AddCollegeDetails from "../AddCollegeDetails";
import Link from "next/link";

const Stepper = () => {
  return (
    <ol className="flex items-center w-full text-sm font-medium p-5 bg-white text-center text-gray-500 dark:text-gray-400 sm:text-base">
      <li className="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
        <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:font-light after:text-gray-200 dark:after:text-gray-500">
          <svg
            aria-hidden="true"
            className="w-4 h-4 mr-2 sm:w-5 sm:h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            ></path>
          </svg>
          College <span className="hidden sm:inline-flex sm:ml-2">Info</span>
        </span>
      </li>

      <Link href="/Admin/AddCollege/AddDepartment">
        <li className="flex md:w-full cursor-pointer items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
          <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:font-light after:text-gray-200 dark:after:text-gray-500">
            <span className="mr-2">2</span>
            Department <span className="hidden sm:inline-flex sm:ml-2">Info</span>
          </span>
        </li>
      </Link>

      <li className="flex items-center">
        <span className="mr-2">3</span>
        Confirmation
      </li>
    </ol>
  );
};

const CollegeDetail = () => {
  return (
    <>
      <AddCollegeDetails>
        <Stepper />
        <div className="w-full p-5 h-auto bg-white ">
          <div className="flex mb-4 flex-wrap bg sm:flex-nowrap">
            <div className="sm:w-1/2  mr-1  w-full">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                for="CollegeName"
              >
                College Name
              </label>
              <input
                className="appearance-none border  w-full rounded py-2 px-3 text-grey-darker"
                type="text"
                placeholder="Enter College name"
              />
            </div>
            <div className="sm:w-1/2 ml-1 w-full">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                for="InstituteCode"
              >
                Institute Code
              </label>
              <input
                className="appearance-none w-full border rounded py-2 px-3 text-grey-darker"
                id="InstituteCode"
                type="number"
                placeholder="Institute Code"
              />
            </div>
          </div>
          <div className="flex mb-4 flex-wrap bg sm:flex-nowrap">
            <div className="sm:w-1/2  mr-1  w-full">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                for="CollegeUnder"
              >
                College Under
              </label>
              <select className="appearance-none border  w-full rounded py-2 px-3 text-grey-darker">
                <option value="Government">Government</option>
                <option value="Private">Private</option>
              </select>
            </div>
            <div className="sm:w-1/2 ml-1 w-full">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                for="CollegeType"
              >
                College Type
              </label>
              <select className="appearance-none border  w-full rounded py-2 px-3 text-grey-darker">
                <option value="Autonomous">Autonomous</option>
                <option value="Non-Autonomous">Non-Autonomous</option>
              </select>
            </div>
          </div>

          <div className="flex mb-4 flex-wrap bg sm:flex-nowrap">
            <div className="sm:w-1/2  mr-1  w-full">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                for="ApprovedBy"
              >
                Approved By
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                id="ApprovedBy"
                type="text"
                placeholder="Enter Approved By"
              />
            </div>
            <div className="sm:w-1/2  mr-1  w-full">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                for="Rating"
              >
                Rating
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                id="Rating"
                type="text"
                placeholder="Enter Rating"
              />
            </div>
          </div>

          <div className=" font-semibold text-slate-400 bg-white py-5">
            Location
          </div>

          <div className="flex mb-4 flex-wrap bg sm:flex-nowrap">
            <div className="sm:w-1/2  mr-1  w-full">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                for="AddressLine"
              >
                Address Line
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                id="AddressLine"
                type="text"
                placeholder="Enter College Address"
              />
            </div>
            <div className="sm:w-1/2  mr-1  w-full">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                for="Taluka"
              >
                Taluka
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                id="Taluka"
                type="text"
                placeholder="Enter Taluka"
              />
            </div>
          </div>

          <div className="flex mb-4 flex-wrap bg sm:flex-nowrap">
            <div className="sm:w-1/2  mr-1  w-full">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                for="District"
              >
                District
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                id="District"
                type="text"
                placeholder="Enter District"
              />
            </div>
            <div className="sm:w-1/2  mr-1  w-full">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                for="City"
              >
                City
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                id="City"
                type="text"
                placeholder="Enter City"
              />
            </div>
          </div>

          <div className="flex mb-4 flex-wrap bg sm:flex-nowrap">
            <div className="sm:w-1/2  mr-1  w-full">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                for="Longitute"
              >
                Longitute
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                id="Longitute"
                type="text"
                placeholder="Enter Longitute"
              />
            </div>
            <div className="sm:w-1/2  mr-1  w-full">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                for="Latitute"
              >
                Latitute
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                id="Latitute"
                type="text"
                placeholder="Enter Latitute"
              />
            </div>
          </div>

          <div className=" font-semibold text-slate-400 bg-white py-5">
            Contact Information
          </div>

          <div className="flex mb-4 flex-wrap bg sm:flex-nowrap">
            <div className="sm:w-1/2  mr-1  w-full">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                for="ContactNO"
              >
                Contact NO
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                id="ContactNO"
                type="number"
                placeholder="Enter Contact NO"
              />
            </div>
            <div className="sm:w-1/2  mr-1  w-full">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                for="Website"
              >
                Website
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                id="Website"
                type="text"
                placeholder="Enter Website"
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              for="Email"
            >
              E-mail
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="Email"
              type="email"
              placeholder="Enter Email"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              for="TopRecuiters"
            >
              Top Recuiters
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="TopRecuiters"
              type="text"
              placeholder="Enter Top Recuiters"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-grey-darker text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              id="password"
              type="password"
              placeholder="Your secure password"
            />
            <p className="text-grey text-xs mt-1">At least 6 characters</p>
          </div>
          <button className=" w-32 pBtn px-5 py-3  " type="submit">
            Submit
          </button>
        </div>
      </AddCollegeDetails>
    </>
  );
};

export default CollegeDetail;
