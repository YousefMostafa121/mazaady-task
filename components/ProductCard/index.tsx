import { Heart } from "lucide-react";
import Image, { StaticImageData } from "next/image";

type Props = {
  image: string | StaticImageData;
  title: string;
  price: string;
  days: string;
  hours: string;
  minutes: string;
  isFavorite: boolean;
  status: string;
};
const Index = ({
  image,
  title,
  price,
  days,
  hours,
  minutes,
  isFavorite,
  status,
}: Props) => {
  return (
    <div className=" relative flex  gap-3">
      <div className=" relative w-[87px] h-[72px] lg:w-[145px] lg:h-[127px] rounded-[15px] lg:rounded-[28px]  overflow-hidden">
        <Image src={image} alt="product" fill className=" object-cover" />
        <span
          className={`text-[6px] lg:text-12 text-white ${
            status == "Live auction" ? "bg-[#D20653]" : "bg-orange"
          } h-[20px]  lg:h-[37px] px-5 flex items-center justify-center rounded-tl-[33px] absolute bottom-0 right-0 text-nowrap `}
        >
          {status}
        </span>
      </div>
      <div className=" flex flex-col justify-between py-2">
        <p className="text-18 text-gray-1">{title}</p>
        <p className="text-18 text-[#828282]">
          starting price
          <span className="text-24 text-gray-1 font-[700]"> {price}</span>
        </p>
        <div className=" flex flex-col md:flex-row md:items-center  gap-2">
          <p className="text-18 text-gray-3">Lot starts in</p>
          <div className=" flex items-center gap-2">
            <p className=" bg-[#FFF5E9] h-[34px] lg:h-[40px] rounded-full w-[60px] lg:w-[100px] text-[14px] lg:text-20 text-orange font-[700] flex items-center justify-center px-6">
              {days}{" "}
              <span className=" text-[8px] lg:text-14 capitalize ms-1">
                {" "}
                days
              </span>
            </p>
            <p className=" bg-[#FFF5E9] h-[34px] lg:h-[40px] rounded-full w-[60px] lg:w-[100px] text-[14px] lg:text-20 text-orange font-[700] flex items-center justify-center px-6">
              {hours}{" "}
              <span className=" text-[8px] lg:text-14 capitalize ms-1">
                {" "}
                hours
              </span>
            </p>
            <p className=" bg-[#FFF5E9] h-[34px] lg:h-[40px] rounded-full w-[60px] lg:w-[100px] text-[14px] lg:text-20 text-orange font-[700] flex items-center justify-center px-6">
              {minutes}{" "}
              <span className=" text-[8px] lg:text-14 capitalize ms-1">
                {" "}
                minutes
              </span>
            </p>
          </div>
        </div>
      </div>
      <span className=" w-[24px] h-[24px] bg-white rounded-full flex items-center justify-center absolute top-1.5 left-1.5 md:top-4 md:right-5 md:left-auto">
        <Heart className="text-[#292D32] w-[14px] lg:w-[22px]" />
      </span>
    </div>
  );
};

export default Index;
