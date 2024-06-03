import {
  associateBrands,
  brands,
  goldSponsors,
  platinumSponsors,
  silverSponsors,
} from "@/constants";

type TitleSponsorProps = {
  imgSrc: string;
  Alt: string;
  name: string;
};

const Brand = () => {
  return (
    <>
      <section className="bg-white py-20 dark:bg-dark lg:py-[120px]">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="flex flex-wrap items-center justify-center">
                <h1 className="text-center text-5xl mb-5 font-bold">
                  Title Sponsors
                </h1>
                <div className="flex w-full">
                  <div className="w-full">
                    <TitleSponsor
                      Alt="title sponsors"
                      imgSrc="/sponsors/relwood.jpeg"
                      name="RelWood"
                    />
                  </div>
                  <div className="w-full">
                    <TitleSponsor
                      Alt="title sponsors"
                      imgSrc="/sponsors/llyod_insulations.png"
                      name="RelWood"
                    />
                  </div>
                </div>
                <div className="w-full mt-16">
                  <h1 className="text-center text-5xl mb-5 font-bold">
                    Associate Sponsors
                  </h1>
                </div>
                {associateBrands.map((brand, index) => (
                  <SingleImage
                    key={index}
                    Alt={brand.alt ? brand.alt : "Brand Image"}
                    imgSrc={brand.imgSrc}
                    name={brand.name}
                  />
                ))}
                <div className="w-full mt-16">
                  <h1 className="text-center text-5xl mb-5 font-bold">
                    Gold Sponsors
                  </h1>
                </div>
                {goldSponsors.map((brand, index) => (
                  <SingleImage
                    key={index}
                    Alt={brand.alt ? brand.alt : "Brand Image"}
                    imgSrc={brand.imgSrc}
                    name={brand.name}
                  />
                ))}
                <div className="w-full mt-16">
                  <h1 className="text-center text-5xl mb-5 font-bold">
                    Platinum Sponsors
                  </h1>
                </div>
                {platinumSponsors.map((brand, index) => (
                  <SingleImage
                    key={index}
                    Alt={brand.alt ? brand.alt : "Brand Image"}
                    imgSrc={brand.imgSrc}
                    name={brand.name}
                  />
                ))}
                <div className="w-full mt-16">
                  <h1 className="text-center text-5xl mb-5 font-bold">
                    Silver Sponsors
                  </h1>
                </div>
                {silverSponsors.map((brand, index) => (
                  <SingleImage
                    key={index}
                    Alt={brand.alt ? brand.alt : "Brand Image"}
                    imgSrc={brand.imgSrc}
                    name={brand.name}
                  />
                ))}
                <span className="border-2 border-pink-200 w-4/5 h-1 mt-14"></span>
                {/* <SingleImage /> */}
                {brands.map((brand, index) => (
                  <SingleImage
                    key={index}
                    Alt={brand.alt ? brand.alt : "Brand Image"}
                    imgSrc={brand.imgSrc}
                    name={brand.name}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className=" text-gray-900 bg-white  ">
        <div className="mx-auto max-w-screen-xl px-4 py-32 pt-10 lg:flex  lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1
              // className="bg-gradient-to-r from-green-300 via-blue-800 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
              className="text-3xl font-extrabold text-gray-700 sm:text-5xl"
            >
              Message To Sponsors
            </h1>
            <p className="mx-auto text-gray-900 mt-4 max-w-7xl text-lg sm:text-lg/relaxed">
              Our season at IIT Bombay Racing starts tentatively in July with
              the formation of the team, followed by Ideation, Designing,
              Planning, Manufacturing and testing. Once our car is all set and
              running, we represent India in the Formula Student UK competition
              held annually. We were overall Champions in FSUK 21 concept class
              among all EV Teams in Formula Student UK in 2021. This is the best
              rank achieved by any Indian team in European competition. IIT
              Bombay Racing is also proud to have the fastest Student Electric
              Racecar in the Indian Circuit. We plan to take our performance to
              a whole new level for the upcoming season and bring better results
              for the nation. This journey is made possible through the regular
              Monetary and Technical support of our sponsors and Industry
              collaborations. We believe in offering exclusivity to our
              sponsors. We offer a wide variety of on-ground and digital events
              at both national and international platforms to publicize our
              sponsors. Kindly have a look at the team brochure and events
              timeline to get the details of where you can fit perfectly with
              our team.
            </p>
            <p className="mx-auto font-bold text-gray-400 mt-4 max-w-xl sm:text-xl/relaxed">
              Download our Sponsorship package
            </p>
            <a
              href="https://drive.google.com/file/d/1qxyF1vGTgS2Ig6zqUIDn6So7cvOlOHIv/view?usp=sharing"
              target="_blank"
            >
              <button
                className="border-2 bg-gray-900 text-white rounded-xl my-2"
                type="download"
              >
                Download
              </button>
            </a>
          </div>
        </div>
      </section> */}
      {/* ====== Brands Section End */}
    </>
  );
};

export default Brand;

const SingleImage: React.FC<TitleSponsorProps> = ({ imgSrc, Alt, name }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <span className="mx-4 flex w-100 items-center justify-center hover:bg-gray-400 transition-all p-10 ">
        <img src={imgSrc} alt={Alt} className="w-full h-20" />
      </span>
      <span className="text-gray-600">{name}</span>
    </div>
  );
};
const TitleSponsor: React.FC<TitleSponsorProps> = ({ imgSrc, Alt, name }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <span className="mx-4 flex w-100 items-center justify-center hover:bg-gray-400 transition-all p-10 ">
        <img src={imgSrc} alt={Alt} className="w-full h-100" />
      </span>
      <span className="text-gray-600">{name}</span>
    </div>
  );
};
