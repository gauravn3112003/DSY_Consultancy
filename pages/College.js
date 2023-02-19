import HomeLayout from "directsecondyearadmission/Layout/HomeLayout";
import React, { useState } from "react";
import Link from "next/link";
import baseUrl from "directsecondyearadmission/baseUrl";

const College = ({ data }) => {
  const AllCollegesData = (props) => {
    return (
      <div className=" h-full flex flex-col-reverse overflow-y-scroll w-full ">
        {data.map((item, index) => {
          return (
            <span key={index}>
              {item.department.map((department, indexDep) => {
                return (
                  <span key={indexDep}>
                    {" "}
                    {item.instituteCode == props.data ? (
                      <SingleCollege
                        collegeName={item.name}
                        approvedBy={item.approvedBy}
                        collegeType={item.collegeType}
                        collegeId={item._id}
                        location={item.location.addressLine}
                        instituteCode={item.instituteCode}
                        image={item.image}
                        contactNo={item.contactNo}
                        department={department.courseName}
                      />
                    ) : (
                      ""
                    )}
                    {props.data == "" ? (
                      <SingleCollege
                        collegeName={item.name}
                        approvedBy={item.approvedBy}
                        image={item.image}
                        collegeId={item._id}
                        collegeType={item.collegeType}
                        location={item.location.addressLine}
                        instituteCode={item.instituteCode}
                        contactNo={item.contactNo}
                        department={department.courseName}
                      />
                    ) : (
                      ""
                    )}
                  </span>
                );
              })}
            </span>
          );
        })}
      </div>
    );
  };

  const SingleCollege = (props) => {
    return (
      <div className="flex-wrap flex   gap-5 sm:gap-5 bg-white mb-5  rounded-sm p-5 ">
        <div className="flex w-full gap-5">
          <div className="sm:w-32 w-20  grid place-items-center">
            <img
              className="rounded-full border-blue-900 border sm:h-24 w-10 h-10 sm:w-24"
              src={props.image}
              alt=""
            />
          </div>
          <div className="   w-full">
            <h1 className="font-bold text-xl">{props.collegeName} </h1>
            <div className="">
              <span className="text-xs">
                <span className="font-bold">Approved By :</span>{" "}
                {props.approvedBy}
              </span>
              <br />
              <span className="text-xs">
                <span className="font-bold">Type :</span> {props.collegeType}
              </span>
              <br />
              <span className="text-xs">
                <span className="font-bold">Location :</span> {props.location}
              </span>
              <br />
              <span className="text-xs">
                <span className="font-bold">Institute Code :</span>{" "}
                {props.instituteCode}
              </span>
              <span className="ml-5 text-xs">
                <span className="font-bold">Branch :</span> {props.department}
              </span>
            </div>
          </div>
        </div>

        <div className="  flex  gap-5 w-full">
          <Link
            href={{
              pathname: `/CollegeDa/[id]`,
              query: {
                id: props.collegeId,
                cName: props.collegeName.replace(" ","+"),
              },
            }}
          >
            <a
              type="button"
              target="_blank"
              className="pBtn w-2/4 text-center px-3 text-sm py-2"
            >
              Read More
            </a>
          </Link>

          <Link href={`tel:+91${props.contactNo}`}>
            <a
              type="button"
              className="border w-2/4 text-center px-3 text-sm py-2"
            >
              Schedule a call
            </a>
          </Link>
        </div>
      </div>
    );
  };

  const items = [
    {
      Name: "Category",
      Location: "/",
    },
    {
      Name: "Course",
      Location: "/",
    },
    {
      Name: "Rating",
      Location: "/",
    },
    {
      Name: "Near Me",
      Location: "/",
    },
    {
      Name: "Rating",
      Location: "/",
    },
  ];

  const NavItem = (props) => {
    return (
      <Link href={props.location}>
        <a
          className="text-gray-700 navItem block px-4 py-2 text-sm"
          role="menuitem"
          tabIndex="-1"
          id="menu-item-0"
        >
          {props.name}
        </a>
      </Link>
    );
  };

  const [userOpen, setUserOpen] = useState("hidden");
  const toggleUser = () => {
    if (userOpen == "hidden") {
      setUserOpen("block");
    } else {
      setUserOpen("hidden");
    }
  };

  const HeaderFilter = () => {
    const [search, setSearch] = useState("");
    const inputChangedHandler = (e) => {
      e.preventDefault();
      setSearch(e.target.value);
    };
    return (
      <>
        <div className="relative mb-5 rounded-sm   items-center p-5 flex justify-between h-14  bg-white w-full">
          {/* <p className="font-semibold text-slate-400">College</p> */}
          <div>
            <form>
              <input
                type="search"
                name="search"
                onChange={inputChangedHandler}
                className="text-sm outline-none rounded-sm bg-slate-100 px-2 py-1  "
                placeholder="Search"
              />
            </form>
          </div>
          <div className="cursor-pointer relative">
            <i className="bi bi-funnel-fill mr-4" onClick={toggleUser}></i>
            <span onClick={toggleUser} className="text-slate-400">
              Filter
            </span>
            <div
              className={`absolute ${userOpen} right-0 z-10 mt-2 w-56 origin-top-right rounded-sm bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex="-1"
            >
              <div className="py-1" role="none">
                {items.map((item, index) => {
                  return (
                    <NavItem
                      location={item.Location}
                      name={item.Name}
                      key={index}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <AllCollegesData data={search} />
      </>
    );
  };

  return (
    <HomeLayout>
      <HeaderFilter />
    </HomeLayout>
  );
};

export async function getServerSideProps() {
  // for show all Colleges
  const res = await fetch(baseUrl + "/api/Colleges", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return {
    props: { data },
  };
}

export default College;
