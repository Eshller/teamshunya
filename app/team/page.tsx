import { TEAM } from "@/constants";
import React from "react";

const Team = () => {
  return (
    <>
      <div className="p-8 bg-white rounded-lg shadow dark:bg-gray-800">
        <p className="text-3xl font-bold text-center text-gray-800 dark:text-white">
          Team
        </p>
        <p className="mb-12 text-xl font-normal text-center text-gray-500 dark:text-gray-300">
          Meet the best team in world
        </p>
        <div className="flex justify-center h-full">
          <div className="flex flex-wrap justify-center border-red-800">
            {/* <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"> */}
            <div className="p-4 w-full">
              <div className="flex-col flex justify-center">
                <div className="flex-shrink-0">
                  <a href="#" className="relative block">
                    <img
                      alt="profil"
                      src="/profile/prabhat_sharma.jpg"
                      className="mx-auto object-cover rounded-full h-48 w-48 hover:scale-[1.05] transition-all hover:shadow-slate-500 hover:shadow-md"
                    />
                  </a>
                </div>
                <div className="mt-2 text-center flex flex-col">
                  <span className="text-lg font-medium text-gray-600 dark:text-white">
                    Prabhat Sharma
                  </span>
                  <span className="text-xs text-gray-400">Team Lead</span>
                </div>
                <div className="mt-2 text-center flex flex-row gap-2 justify-center">
                  <a href="https://www.linkedin.com/in/prabhat-sharma-319570143">
                    <img
                      src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-1024.png"
                      alt=""
                      className="w-5 h-5 hover:scale-[1.05] transition-all hover:transition-all hover:border-[1px] hover:rounded-full"
                    />
                  </a>
                </div>
              </div>
            </div>
            {TEAM?.slice(1).map((team: any) => (
              <div
                className="p-4 py-5 w-full md:w-1/3 lg:w-1/4"
                key={team.name}
              >
                <div className="flex-col  flex justify-center w-full">
                  <div className="flex-shrink-0">
                    <a href="#" className="relative block">
                      <img
                        alt={team.name}
                        src={team.profile}
                        className="mx-auto object-cover rounded-full h-56 w-56 hover:scale-[1.05] transition-all hover:shadow-slate-500 hover:shadow-md"
                      />
                    </a>
                  </div>
                  <div className="mt-2 text-center flex flex-col">
                    <span className="text-lg font-medium text-gray-600 dark:text-white">
                      {team.name}
                    </span>
                    <span className="text-xs text-gray-400">{team.role}</span>
                  </div>
                  <div className="mt-2 text-center flex flex-row gap-2 justify-center">
                    {team.insta && (
                      <a href={team.insta}>
                        <img
                          src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Instagram-1024.png"
                          alt=""
                          className="w-5 h-5 hover:scale-[1.05] transition-all hover:transition-all hover:border-[1px] hover:rounded-full"
                        />
                      </a>
                    )}
                    {team.linkedin && (
                      <a href={team.linkedin}>
                        <img
                          src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-1024.png"
                          alt=""
                          className="w-5 h-5 hover:scale-[1.05] transition-all hover:transition-all hover:border-[1px] hover:rounded-full"
                        />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Team;
