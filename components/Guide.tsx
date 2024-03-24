import Image from "next/image";
import React from "react";

const Guide = () => {
  return (
    <section className="flexCenter flex-col my-12">
      <div className="padding-container max-container w-full pb-24">
        {/* <Image src="/camp.svg" alt="camp" width={50} height={50} /> */}
        <p className="uppercase regular-18 mt-1  text-green-50">SHUNYA</p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            Aim &amp; Mission
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            Our aim is to build "affordable pre-fabricated net zero solar
            powered houses" making India's future energy secure. We strive to
            develop technology to build a solar-powered, sustainable house for
            the Indian middle class, which could serve as the answer to India's
            growing energy and housing problems. Our mission is to bring about a
            change in the Indian building industry, by demonstrating the
            affordability of sustainable housing, to formulate and document a
            design process, which could be replicated to create sustainable
            homes in a resource efficient way and to raise awareness in the
            nation about energy efficiency, responsible energy use and the
            potential of renewable technology with emphasis on solar energy.
          </p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
        <Image
          src="/map.jpg"
          alt="boat"
          width={1440}
          height={580}
          className="w-full max-h-[35rem] object-cover object-center 2xl:rounded-5xl"
        />

        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Net zero</p>
                <p className="bold-16 text-green-50">0%</p>
              </div>
              <p className="bold-20 mt-2">Solar Powered</p>
            </div>

            <div className="flex w-full flex-col">
              <p className="regular-16 text-gray-20">Carbon Emission</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">Nill</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
