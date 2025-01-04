import AddCircle from "@/public/icons/AddCircle";
import Link from "next/link";
import ProductCard from "../ProductCard";
import productImage from "@/public/images/product.png";
const Index = () => {
  return (
    <div className=" relative grow bg-white rounded-[21px] p-5 md:p-5 flex flex-col gap-5">
      <div className=" flex items-center gap-4 ">
        <button
          type="button"
          className="bg-[#FFF5E9] rounded-[14px] text-14 text-orange font-[700] border border-orange h-[35px] px-5"
        >
          Products
        </button>

        <button
          type="button"
          className="bg-white rounded-[14px] text-14 text-[#828282]  border border-[#E0E0E0] h-[35px] px-5"
        >
          Articles
        </button>
        <button
          type="button"
          className="bg-white rounded-[14px] text-14 text-[#828282]  border border-[#E0E0E0] h-[35px] px-5 me-auto"
        >
          Reviews
        </button>
        <Link
          href={"#"}
          className=" absolute top-[10%] right-0  md:relative bg-main-gradient text-white  flex items-center justify-center gap-3 h-[40px] px-5 rounded-[10px] z-20"
        >
          <AddCircle />
          <span className=" text-14 text-white font-[700] capitalize">
            Add Review
          </span>
        </Link>
      </div>
      <h1 className=" text-32 text-gray-1 font-[800]">
        Products <span className=" text-14 text-gray-3">( 12 )</span>
      </h1>
      {Array.from({ length: 6 }).map((_, index) => (
        <ProductCard
          key={index}
          image={productImage}
          title="Six-piece clothing set (blouse - pants - hat and ..."
          price="1000 EGP"
          days="2"
          hours="10"
          minutes="50"
          status={index === 3 ? "hot sale" : "Live auction"}
          isFavorite={index === 3 ? true : false}
        />
      ))}
    </div>
  );
};

export default Index;
