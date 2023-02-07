import HomeLayout from "directsecondyearadmission/Layout/HomeLayout";
import React, { useState } from "react";
import Link from "next/link";
const Profile = () => {
  const [modalOpen, setModalOpen] = useState("hidden");
  const toggleUser = () => {
    if (modalOpen == "hidden") {
      setModalOpen("block");
    } else {
      setModalOpen("hidden");
    }
  };

  const ModelHeader = (props) => {
    return (
      <header className="bgColor p-5 flex justify-between items-center rounded-sm">
        <div className="flex justify-center items-center gap-5">
          <i
            onClick={toggleUser}
            className="bi bi-arrow-left text-2xl text-white cursor-pointer"
          ></i>
          <span className="border-b-2 border-yellow-300 text-base font-semibold text-white">
            {props.name}
          </span>
        </div>
        <div>
          <i
            onClick={toggleUser}
            className=" text-2xl text-white cursor-pointer bi bi-x-lg"
          ></i>
        </div>
      </header>
    );
  };

  const BasicDetails = () => {
    const BasicDetailModal = () => {
      return (
        <div className={`fixed top-0 ${modalOpen} left-0 h-full  w-full  `}>
          <div className="z-10  relative w-full flex justify-center items-center h-full modalColor">
            <div className="absolute h-full w-full sm:w-4/6 sm:h-4/5 p-5 mt-24 sm:mt-0 rounded-sm bg-white">
              <ModelHeader name="Basic Detail" />
            </div>
          </div>
        </div>
      );
    };
    return (
      <div className="bg-white p-5 rounded-sm ">
        <BasicDetailModal />
        <div className="header flex pb-2  justify-between items-center">
          <h1 className="text-lg font-bold">Basic Details</h1>
          <i
            className="bi bi-pencil-square font-extrabold text-2xl cursor-pointer "
            onClick={toggleUser}
          ></i>
        </div>

        <div className=" flex flex-wrap mt-3 justify-between items-center">
          <div className="w-2/6 detailWrap">
            <div className="text-slate-400 text-sm">Full Name</div>
            <div className="text-sm">Gaurav Narnaware</div>
          </div>
          <div className="w-2/6 detailWrap">
            <div className="text-slate-400 text-sm">DOB</div>
            <div className="text-sm">03/11/2003</div>
          </div>
          <div className="w-2/6 detailWrap">
            <div className="text-slate-400 text-sm">Social Category</div>
            <div className="text-sm">ST</div>
          </div>
        </div>

        <div className=" flex flex-wrap mt-2 justify-between items-center">
          <div className="w-2/6 detailWrap">
            <div className="text-slate-400 text-sm">Gender</div>
            <div className="text-sm">Male</div>
          </div>
          <div className="w-2/6 detailWrap">
            <div className="text-slate-400 text-sm">Marital Status</div>
            <div className="text-sm">Unmaried</div>
          </div>
          <div className="w-2/6 detailWrap">
            <div className="text-slate-400 text-sm">Physically Challenged</div>
            <div className="text-sm">N/A</div>
          </div>
        </div>
      </div>
    );
  };

  const ContactDetails = () => {
    return (
      <div className="bg-white p-5 mt-5 rounded-sm">
        <div className="header flex pb-2  justify-between items-center">
          <h1 className="text-lg font-bold">Contact Details</h1>
          <i className="bi bi-pencil-square font-extrabold text-2xl cursor-pointer "></i>
        </div>

        <div className=" flex flex-wrap mt-3 justify-between items-center">
          <div className="w-2/6 detailWrap">
            <div className="text-slate-400 text-sm">Mobile No.</div>
            <div className="text-sm">7796305801e</div>
          </div>
          <div className="w-2/6 detailWrap">
            <div className="text-slate-400 text-sm">E-mail Address</div>
            <div className="text-sm">gauravnarnaware3112003@gmail.com</div>
          </div>
          <div className="w-2/6 detailWrap">
            <div className="text-slate-400 text-sm">City</div>
            <div className="text-sm">Ghatanji</div>
          </div>
        </div>

        <div className=" flex flex-wrap mt-2 justify-between items-center">
          <div className="w-2/6 detailWrap">
            <div className="text-slate-400 text-sm">State</div>
            <div className="text-sm">Maharashtra</div>
          </div>
        </div>
      </div>
    );
  };

  const EducationDetails = () => {
    return (
      <div className="bg-white p-5 rounded-sm mt-5">
        <div className="header flex pb-2  justify-between items-center">
          <h1 className="text-lg font-bold">Education Details</h1>
          <i className="bi bi-pencil-square font-extrabold text-2xl cursor-pointer "></i>
        </div>
        <h3 className="text-base text-slate-500 sm:font-semibold font-bold ">
          Class X
        </h3>
        <div className=" flex flex-wrap mt-3 justify-between items-center">
          <div className="w-2/6 detailWrap">
            <div className="text-slate-400 text-sm">Board</div>
            <div className="text-sm">N/A</div>
          </div>
          <div className="w-2/6 detailWrap">
            <div className="text-slate-400 text-sm">School</div>
            <div className="text-sm">N/A</div>
          </div>
          <div className="w-2/6 detailWrap">
            <div className="text-slate-400 text-sm">Passing Year</div>
            <div className="text-sm">N/A</div>
          </div>
        </div>

        <div className=" flex flex-wrap mt-2 justify-between items-center">
          <div className="w-2/6 detailWrap">
            <div className="text-slate-400 text-sm">Mark Type</div>
            <div className="text-sm">N/A</div>
          </div>
          <div className="w-2/6 detailWrap">
            <div className="text-slate-400 text-sm">Percentage/CGPA</div>
            <div className="text-sm">N/A</div>
          </div>
          <div className="w-2/6 detailWrap" />
        </div>
        <div className="border-b-2 mt-5" />
        <h3 className="text-base text-slate-500 sm:font-semibold font-bold mt-5">
          Diploma
        </h3>
        <div className=" flex flex-wrap mt-3 justify-between items-center">
          <div className="w-2/6 detailWrap">
            <div className="text-slate-400 text-sm">Board</div>
            <div className="text-sm">N/A</div>
          </div>
          <div className="w-2/6 detailWrap">
            <div className="text-slate-400 text-sm">School</div>
            <div className="text-sm">N/A</div>
          </div>
          <div className="w-2/6 detailWrap">
            <div className="text-slate-400 text-sm">Passing Year</div>
            <div className="text-sm">N/A</div>
          </div>
        </div>

        <div className=" flex flex-wrap mt-2 justify-between items-center">
          <div className="w-2/6 detailWrap">
            <div className="text-slate-400 text-sm">Mark Type</div>
            <div className="text-sm">N/A</div>
          </div>
          <div className="w-2/6 detailWrap">
            <div className="text-slate-400 text-sm">Percentage/CGPA</div>
            <div className="text-sm">N/A</div>
          </div>
          <div className="w-2/6 detailWrap" />
        </div>
      </div>
    );
  };

  const PreferenceDetails = () => {
    return (
      <div className="bg-white p-5 mt-5 rounded-sm">
        <div className="header flex pb-2  justify-between items-center">
          <h1 className="text-lg font-bold">Preferences</h1>
          <i className="bi bi-pencil-square font-extrabold text-2xl cursor-pointer "></i>
        </div>

        <div className=" flex flex-wrap mt-3 justify-between items-center">
          <div className="w-2/6 detailWrap">
            <div className="text-slate-400 text-sm">Univercity</div>
            <div className="text-sm">7796305801e</div>
          </div>
          <div className="w-2/6 detailWrap">
            <div className="text-slate-400 text-sm">Branch</div>
            <div className="text-sm">Computer Engineering</div>
          </div>
          <div className="w-2/6 detailWrap">
            <div className="text-slate-400 text-sm">Location</div>
            <div className="text-sm">Ghatanji</div>
          </div>
        </div>
        <div className=" flex flex-wrap mt-3  items-center">
          <div className="w-2/6 detailWrap">
            <div className="text-slate-400 text-sm">College Type</div>
            <div className="text-sm">7796305801e</div>
          </div>
          <div className="w-2/6 detailWrap">
            <div className="text-slate-400 text-sm">Need a loan?</div>
            <div className="text-sm">Computer Engineering</div>
          </div>
        </div>
      </div>
    );
  };

  const BasicDetailModal = () => {
    return (
      <div className={`fixed top-0 ${modalOpen} left-0 h-full  w-full  `}>
        <div className="z-10  relative w-full flex justify-center items-center h-full modalColor">
          <div className="absolute h-full w-full sm:w-4/6 sm:h-4/5 p-5 mt-24 sm:mt-0 rounded-sm bg-white">
            <header className="bgColor p-5 flex justify-between items-center rounded-sm">
              <div className="flex justify-center items-center gap-5">
                <i
                  onClick={toggleUser}
                  className="bi bi-arrow-left text-2xl text-white cursor-pointer"
                ></i>
                <span className="border-b-2 border-yellow-300 text-base font-semibold text-white">
                  Basic Details
                </span>
              </div>
              <div>
                <i
                  onClick={toggleUser}
                  className=" text-2xl text-white cursor-pointer bi bi-x-lg"
                ></i>
              </div>
            </header>
          </div>
        </div>
      </div>
    );
  };
  return (
    <HomeLayout>
      <BasicDetails />
      <ContactDetails />
      <EducationDetails />
      <PreferenceDetails />
    </HomeLayout>
  );
};

export default Profile;
