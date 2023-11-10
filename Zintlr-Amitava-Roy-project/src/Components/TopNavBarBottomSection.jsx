import React from "react";
import image from "../assets/illustration.svg";
import {
  BsPersonPlus,
  BsPersonGear,
  BsPersonSquare,
  BsLightningChargeFill,
} from "react-icons/bs";
import { HiOutlineExclamationCircle } from "react-icons/hi2";
import TopNavBarCard from "./TopNavBarCard";
import {
  useNavigate,
  useNavigation,
} from "react-router-dom";
const TopNavBarBottomSection = () => {
  const navigate = useNavigate();
  return (
    <div className="flex gap-5 items-center">
      <div className="flex bg-blue-50 p-3 w-fit rounded-xl gap-1">
        <div className="flex flex-col">
          <h2 className="text-2xl text-gray-900 font-normal mb-1">
            Hello Shakir!
          </h2>
          <p className="text-sm text-gray-500  tracking-wider mb-4">
            you have 134 consumers this week.
          </p>
          <div className="flex gap-2 tracking-wider text-sm">
            <button className="text-white bg-slate-800 tracking-wider py-1 px-2 rounded-md font-bold flex items-center gap-2 ">
              <BsPersonPlus /> Add Customers
            </button>
            <button
              onClick={() => {
                navigate("/customize");
              }}
              className="text-gray-800 bg-white border-2 border-gray-900 font-bold  py-1 px-2 rounded-md flex items-center gap-2 "
            >
              <BsPersonGear />
              Manage Customers
            </button>
          </div>
        </div>
        <img
          src={image}
          className="w-24 h-24"
          alt="illustration"
        />
      </div>
      <div className="flex gap-5">
        <TopNavBarCard bgColor={"bg-red-100"}>
          <div className="  text-gray-600 flex flex-col ">
            <p className="flex gap-1 items-center">
              <span className="text-lg text-yellow-700">
                <BsPersonSquare />
              </span>
              <span>You have</span>
              <span className="text-gray-800 text-2xl font-semibold">
                276
              </span>
            </p>
            <p>KYC approval pending</p>
          </div>
        </TopNavBarCard>
        <TopNavBarCard bgColor={"bg-red-100"}>
          <div className="  text-gray-600 flex flex-col ">
            <p className="flex gap-1 items-center">
              <span className="text-xl text-red-700">
                <HiOutlineExclamationCircle />
              </span>
              <span>There are</span>
              <span className="text-gray-800 text-2xl font-semibold">
                182
              </span>
            </p>
            <p>high risk consumers</p>
          </div>
        </TopNavBarCard>
        <TopNavBarCard bgColor={"bg-blue-50"}>
          <div className="  text-gray-600">
            <p className="flex gap-1 items-center">
              <span className="text-lg text-blue-700">
                <BsLightningChargeFill />
              </span>
              <span>There are</span>
              <span className="text-gray-800 text-2xl font-semibold">
                182
              </span>
            </p>
            <p>high risk consumers</p>
          </div>
        </TopNavBarCard>
      </div>
    </div>
  );
};

export default TopNavBarBottomSection;
