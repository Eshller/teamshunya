import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="max-container h-screen padding-container flex flex-col gap-20 py-10 md:pb-32 md:gap-28 lg:py-28 xl:flex-row">
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        {/* <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        /> */}
        <h1 className="bold-52 lg:bold-88">TEAM SHUNYA</h1>
        <p className="regular-16 mt-6 text-gray-50 xl:max-w-[520px]">
          We are team of young passionate students from IIT Bombay who have
          joined hands together for a sustainable future with the help of
          innovation in the field of Housing
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="hidden items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>

          <p className="bold-16 hidden lg:bold-20 text-blue-70">
            198k
            <span className="regular-16 lg:regular-20 ml-1">
              Excellent Reviews
            </span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button type="button" title="Explore more" variant="btn_green" />
          <Button
            type="button"
            title="How we work?"
            icon="/play.svg"
            variant="btn_white_text"
          />
        </div>
      </div>

      <div className="relative hidden md:flex flex-1 items-start">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Location</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-white">IIT Bombay</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              {/* <p className="regular-16 block text-gray-20">Distance</p> */}
              <p className="regular-16 block text-gray-20">Net Zero</p>
              <p className="bold-20 text-white">0%</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Carbon</p>
              <p className="bold-20 text-white">Emission</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
