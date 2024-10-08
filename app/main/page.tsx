"use client";
import { useEffect } from "react";
import useUserInfo from "../hooks/useUserInfo";
import { Link } from "@nextui-org/react";

const Main = () => {
  const userInfo = useUserInfo();
  const isAdmin = userInfo?.permission === "admin";

  useEffect(() => {
    alert("当前为测试环境，仅作展示，未连接后端！");
  }, []);

  return (
    <div className="flex flex-col gap-10 h-[80vh] w-full justify-center items-center">
      <Link
        href={"/notimetotravel/main/check"}
        className="text-[14px] sm:text-sm md:text-xl lg:text-2xl font-bold py-1 sm:py-3 px-2 sm:px-10 rounded-full text-white bg-primary-500 w-[40%] sm:w-[30%] max-w-[300px] text-center"
      >
        <span className="text-center w-full">审核游记→</span>
      </Link>
      {isAdmin && (
        <Link
          href={"/notimetotravel/main/authy"}
          className="text-[14px] sm:text-sm md:text-xl lg:text-2xl font-bold py-1 sm:py-3 px-2 sm:px-10 rounded-full text-white bg-primary-500 w-[40%] sm:w-[30%] max-w-[300px] text-center"
        >
          <span className=" text-center w-full">管理审核人员→</span>
        </Link>
      )}
    </div>
  );
};
export default Main;
