import Download from "@/public/icons/Download";
import Eye from "@/public/icons/Eye";
import Follwers from "@/public/icons/Follwers";
import Follwing from "@/public/icons/Follwing";
import Rate from "@/public/icons/Rate";
import Share from "@/public/icons/Share";
import avatar from "@/public/images/avatarLarge.png";
import logo from "@/public/images/logo.svg";
import qr from "@/public/images/qr.jpg";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const Card = ({
  icon,
  number,
  text,
}: {
  icon: React.ReactNode;
  number: number;
  text: string;
}) => (
  <div className="bg-[#FFF5E9] rounded-[18px] p-2 flex items-center justify-center gap-2">
    {icon}
    <div>
      <p className="text-14 text-[#363333] font-[700]">{number}</p>
      <p className="text-12 text-orange">{text}</p>
    </div>
  </div>
);

const Index = () => {
  return (
    <div className=" flex flex-col gap-5">
      <div className="bg-white rounded-[21px] p-5 flex flex-col gap-2">
        <Image src={avatar} alt="avatar" />
        <h3 className="text-24 text-gray-1 font-[700]">Hala Ahmed</h3>
        <p className=" text-14 text-gray-2 max-w-[359px]">
          I am Hala Ahmed, I am the owner of the local brand called Beauty which
          is for Mackeup and Skin Care.
        </p>
        <div className=" grid grid-cols-3 gap-3 mt-4">
          <Card icon={<Follwing />} number={5} text="Following" />
          <Card icon={<Follwers />} number={20} text="Followers" />
          <Card icon={<Rate />} number={4.2} text="Rate" />
        </div>
        <button
          type="button"
          className="bg-main-gradient text-16  text-white gont-[700] h-[48px] rounded-[14px] mt-5"
        >
          Follow
        </button>
      </div>
      <div className="bg-white rounded-[21px] p-5 flex flex-col gap-2">
        <div className=" flex items-center  gap-5">
          <h2 className=" text-24 text-gray-1 font-[700] me-auto">QR Code</h2>
          <Eye />
          <Share />
          <Download color="#333333" />
          <label
            htmlFor="open"
            className="w-[24px] h-[24px] rounded-full bg-[#F6F4F5] flex items-center justify-center group lg:hidden"
          >
            <ChevronDown width={16} className="group-peer-checked:rotate-180" />
          </label>
        </div>
        <input type="checkbox" name="" id="open" className="peer hidden" />
        <div className=" h-0 overflow-hidden lg:h-fit  peer-checked:h-[395px] transition-all duration-300">
          <button
            type="button"
            className=" bg-[#FFF5E9] rounded-[18px] px-3 h-[59px] flex items-center justify-center gap-2 mt-3 w-full "
          >
            <Download color="#FF951D" />
            <span className=" text-12 text-gray-1">
              Download the QR code or share it with your friends.
            </span>
          </button>
          <div className=" bg-main-gradient p-5 rounded-[20px] mt-5 ">
            <div className=" bg-white p-5 rounded-[18px] flex flex-col items-center justify-center gap-2">
              <Image src={logo} alt="logo" />
              <p className=" text-24 text-gray-1 font-[700]">Hala Ahmed</p>
              <Image src={qr} alt="qr" />
              <p className="text-14 text-gray-3 mt-2">Follow Us On Mazaady</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
