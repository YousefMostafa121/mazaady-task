import Search from "@/public/icons/Search";
import Notification from "@/public/icons/Notification";
import logo from "@/public/images/logo.svg";
import Image from "next/image";
import avatar from "@/public/images/avatar.png";
import Link from "next/link";
import AddCircle from "@/public/icons/AddCircle";
import Global from "@/public/icons/Global";
import Menu from "@/public/icons/Menu";
const Index = () => {
  return (
    <header className=" bg-white py-4">
      <div className=" container flex items-center gap-5 lg:gap-10">
        <span className=" lg:hidden">
          <Menu />
        </span>
        <Image src={logo} alt="logo" />
        <ul className="hidden lg:flex items-center gap-8">
          <li className="text-18 text-primaryColor font-[700] capitalize relative after:content-[''] after:w-[44px] after:h-[6px] after:bg-primaryColor after:absolute after:bottom-[-24px] after:left-0 after:rounded-t-[8px]">
            Home
          </li>
          <li className=" text-18 text-gray-3 capitalize">Blog</li>
          <li className=" text-18 text-gray-3 capitalize">Gifts</li>
        </ul>
        <div className=" flex items-center gap-5 ms-auto">
          <Search />
          <span className=" lg:border-x lg:border-[#FFEAD2] lg:px-5">
            <Notification />
          </span>
          <Image src={avatar} alt="avatar" className=" rounded-full" />
          <Link
            href={"#"}
            className=" bg-main-gradient text-white hidden lg:flex items-center justify-center gap-3 h-[40px] px-5 rounded-[10px]"
          >
            <AddCircle />
            <span className=" text-14 text-white font-[700] capitalize">
              Add new product
            </span>
          </Link>
          <button type="button" className="hidden lg:flex items-center gap-3">
            <Global />
            <span className=" w-[1px] h-[22px] block bg-[#E0E0E0]"></span>
            <span className=" text-18 text-[#333333] font-[700]">EN</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Index;
