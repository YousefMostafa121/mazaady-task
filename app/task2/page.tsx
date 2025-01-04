import Header from "@/components/Header";
import Products from "@/components/Products";
import SideContent from "@/components/SideContent";

const Page = () => {
  return (
    <>
      <Header />
      <section className=" container mt-10 flex flex-col lg:flex-row gap-5">
        <SideContent />
        <Products />
      </section>
    </>
  );
};

export default Page;
