import Hero from "../components/layout/Hero";
import HomeMemu from "../components/layout/HomeMenu";
import SectionHeaders from "../components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMemu />
      <section id="about" className="text-center my-16">
        <SectionHeaders subHeader={"Our Story"} mainHeader={"About Us"} />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p className="">
            flex justify-center bg-primary uppercase flex items-center gap-2
            text-white px-4 py-2 rounded-full
          </p>
          <p className="">
            flex justify-center bg-primary uppercase flex items-center gap-2
            text-white px-4 py-2 rounded-full
          </p>
          <p className="">
            flex justify-center bg-primary uppercase flex items-center gap-2
            text-white px-4 py-2 rounded-full
          </p>
        </div>
      </section>
      <section id="contact" className="text-center my-8">
        <SectionHeaders
          subHeader={"Do not Hesitate"}
          mainHeader={"Contact Us"}
        />
        <div className="mt-8">
          <a
            className={"text-4xl underline text-gray-500"}
            href="tel:+1 234 567 8909"
          >
            +1 234 567 8909
          </a>
        </div>
      </section>
    </>
  );
}
