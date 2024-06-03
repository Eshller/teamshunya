import { TEAM } from "@/constants";
import React from "react";

interface TeamMember {
  name: string;
  subunit: string;
  profile: string;
  role: string;
  insta?: string;
  linkedin?: string;
}
interface TeamBySubunits {
  [subunit: string]: TeamMember[];
}
const Team = () => {
  // Group members by subunits
  const teamBySubunits = TEAM.reduce<TeamBySubunits>((acc, member) => {
    if (!acc[member.subunit]) {
      acc[member.subunit] = [];
    }
    acc[member.subunit].push(member);
    return acc;
  }, {});

  return (
    <>
      <div className="bg-white rounded-lg shadow dark:bg-gray-800">
        <p className="pt-10 text-3xl font-bold text-center text-gray-800 dark:text-white">
          Team
        </p>
        <p className="mb-12 text-xl font-normal text-center text-gray-500 dark:text-gray-300">
          Meet the mastermind team behind SHUNYA
        </p>
        {Object.keys(teamBySubunits).map((subunit) => (
          <div key={subunit} className="mb-8">
            <h2 className="text-2xl font-semibold text-center text-gray-700 dark:text-white mb-4">
              {subunit}
            </h2>
            <div className="flex justify-center">
              <div
                className={`flex flex-wrap justify-center ${
                  teamBySubunits[subunit].length === 1 ? "w-full" : ""
                } ${teamBySubunits[subunit].length === 3 ? "w-full" : ""}`}
              >
                {teamBySubunits[subunit].map((member) => (
                  <div
                    className={`p-4 w-full md:w-1/4 ${
                      teamBySubunits[subunit].length === 1
                        ? "flex justify-center"
                        : ""
                    }`}
                    key={member.name}
                  >
                    <div className="flex-col flex justify-center">
                      <div className="flex-shrink-0">
                        <a href="#" className="relative block">
                          <img
                            alt={member.name}
                            src={member.profile}
                            className="mx-auto object-cover rounded-full h-56 w-56 hover:scale-[1.05] transition-all hover:shadow-slate-500 hover:shadow-md"
                          />
                        </a>
                      </div>
                      <div className="mt-2 text-center flex flex-col">
                        <span className="text-lg font-medium text-gray-600 dark:text-white">
                          {member.name}
                        </span>
                        <span className="text-xs text-gray-400">
                          {member.role}
                        </span>
                      </div>
                      <div className="mt-2 text-center flex flex-row gap-2 justify-center">
                        {member.insta && (
                          <a href={member.insta}>
                            <img
                              src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Instagram-1024.png"
                              alt=""
                              className="w-5 h-5 hover:scale-[1.05] transition-all hover:transition-all hover:border-[1px] hover:rounded-full"
                            />
                          </a>
                        )}
                        {member.linkedin && (
                          <a href={member.linkedin}>
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
        ))}
      </div>
    </>
  );
};

export default Team;
