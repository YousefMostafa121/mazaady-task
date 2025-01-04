import Link from "next/link";

export default function Home() {
  return (
    <div className=" w-screen h-screen flex items-center justify-center gap-5 flex-wrap">
      <Link
        href={"/task1"}
        className=" bg-main-gradient text-16 text-white font-[700] py-3 px-5 min-w-[200px] text-center rounded-[14px]"
      >
        View Task 1
      </Link>
      <Link
        href={"/task2"}
        className=" bg-main-gradient text-16 text-white font-[700] py-3 px-5 min-w-[200px] text-center rounded-[14px]"
      >
        View Task 2
      </Link>
    </div>
  );
}
