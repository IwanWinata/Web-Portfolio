"use client";
import { text } from "stream/consumers";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import useSectionView from "@/hooks/useSectionView";

const infoData: TinfoDataArray[] = [
  { icon: <User2 size={20} />, text: "Iwan Winata" },
  { icon: <PhoneCall size={20} />, text: "+62822 6479 1439" },
  { icon: <MailIcon size={20} />, text: "iwanwinata12688@gmail.com" },
  {
    icon: <Calendar size={20} />,
    text: "Born on 5 Nov, 2003",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Undergraduate on Information System",
  },
  { icon: <HomeIcon size={20} />, text: "Surabaya, Indonesia" },
];

const qualificationData = [
  {
    title: "educations",
    data: [
      {
        university: "Binus Online University",
        qualification: "Bachelor of Computer Science",
        years: "Jul 2023 - present",
      },
      {
        university: "Hacktiv8",
        qualification: "Fullstack Javascript",
        years: "June 2022 - Sept 2022",
      },
    ],
  },
  {
    title: "experiences",
    data: [
      {
        company: "HappyHomes.id",
        role: "Fullstack Developer",
        years: "Oct 2022 - present",
      },
    ],
  },
];

const skillsData = [
  {
    title: "skills",
    data: [
      {
        name: "- JavaScript, TypeScript",
      },
      {
        name: "- NextJs, ReactJs, Vue",
      },
      {
        name: "- Redux, Redis, Pinia, VueX",
      },
      {
        name: "- ExpressJs, PostgresSql, sequelize, pg-promise",
      },
      {
        name: "- GCP, Docker, Caprover",
      },
      {
        name: "- MUI, Tailwind",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imagePath: "/images/vscode.svg",
      },
      {
        imagePath: "/images/postman.svg",
      },
      {
        imagePath: "/images/figma.svg",
      },
      {
        imagePath: "/images/xcode.svg",
      },
    ],
  },
];
const AboutSection = () => {
  const { ref } = useSectionView("About", 0.75);

  const getData = (
    arr: TinfoDataArray[] | TqualificationDataArray,
    title: string
  ) => {
    return arr.find((el) => el.title === title);
  };

  return (
    <section
      ref={ref}
      id="about"
      className="xl:h-auto xl:min-h-[600px] pb-12 pt-10"
    >
      <div className="container mx-auto items-center flex flex-col">
        <h2
          className="text-4xl font-bold relative w-max flex items-center justify-center gap-x-3 before:bg-dots_light 
        before:bg-no-repeat before:bg-center before:w-[24px] before:h-[24px]"
        >
          About Me
        </h2>
        <div className="mt-10">
          <Tabs defaultValue="personal">
            <TabsList className="w-full h-auto grid xl:grid-cols-3 xl:max-w-[520px] xl:border mx-auto p-1">
              <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                Personal Info
              </TabsTrigger>
              <TabsTrigger
                className="w-[162px] xl:w-auto"
                value="qualifications"
              >
                Qualification
              </TabsTrigger>
              <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                Skills
              </TabsTrigger>
            </TabsList>
            <div className="text-lg mt-10 mx-auto text-center ">
              <TabsContent
                value="personal"
                className="flex-col flex items-center"
              >
                <div className="text-2xl font-bold">
                  Software engineer with quality.
                </div>
                <div className="max-w-xl max-auto xl:mx-0 text-muted-foreground text-lg mb-8 font-light">
                  Specialize in crafting intuitive websites with cutting-edge
                  technologies.
                </div>
                <div className="grid xl:grid-cols-2 gap-4 mb-12">
                  {infoData.map((item, index) => {
                    return (
                      <div
                        className="flex items-center justify-center gap-x-4 mx-auto"
                        key={index}
                      >
                        <div className="text-[#e670bc]">{item.icon}</div>
                        <div>{item.text}</div>
                      </div>
                    );
                  })}
                </div>
              </TabsContent>
              <TabsContent value="qualifications">
                <div>
                  <div className="text-2xl font-bold xl:text-left mb-8">
                    My Journey
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-y-8">
                  {/* Experiences */}
                  <div>
                    <div className="flex gap-x-4 text-xl text-[#e670bc] ">
                      <Briefcase />
                      <h4 className="capitalize font-medium mb-2">
                        {getData(qualificationData, "experiences")?.title}
                      </h4>
                    </div>
                    <div className="capitalize font-medium text-start">
                      {getData(qualificationData, "experiences")?.data?.map(
                        (item: TexpericesData, index: number) => {
                          const { company, role, years } = item;
                          return (
                            <div key={index} className="flex gap-x-8 group">
                              <div className="h-[75px] w-[1px] bg-border relative ml-2">
                                <div
                                  className="w-[11px] h-[11px] rounded-full bg-[#e670bc] absolute -left-[5px] group-hover:translate-y-[75px] 
                                transition-all duration-500"
                                ></div>
                              </div>
                              <div>
                                <div className="font-semibold text-lg leading-none mb-2">
                                  {company}
                                </div>
                                <div className="text-[12px] leading-none mb-4 text-muted-foreground">
                                  {role}
                                </div>
                                <div className="text-sm font-medium">
                                  {years}
                                </div>
                              </div>
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                  {/* educations */}
                  <div>
                    <div className="flex gap-x-4 text-xl text-[#e670bc] ">
                      <GraduationCap />
                      <h4 className="capitalize font-medium mb-2">
                        {getData(qualificationData, "educations")?.title}
                      </h4>
                    </div>
                    <div className="capitalize font-medium text-start">
                      {getData(qualificationData, "educations")?.data?.map(
                        (item: TeducationsData, index: number) => {
                          const { university, qualification, years } = item;
                          return (
                            <div
                              key={index}
                              className="flex gap-x-8 group mb-4"
                            >
                              <div className="h-[80px] w-[1px] bg-border relative ml-2">
                                <div
                                  className="w-[11px] h-[11px] rounded-full bg-[#e670bc] absolute -left-[5px] group-hover:translate-y-[75px] 
                                transition-all duration-500"
                                ></div>
                              </div>
                              <div>
                                <div className="font-semibold text-lg leading-none mb-2">
                                  {university}
                                </div>
                                <div className="text-[12px] leading-none mb-4 text-muted-foreground">
                                  {qualification}
                                </div>
                                <div className="text-sm font-medium">
                                  {years}
                                </div>
                              </div>
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="skills">
                <div className="text-center xl:text-left">
                  <h3 className="text-2xl font-bold mb-8">
                    Tools I Use Everyday
                  </h3>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Skills</h4>
                    <div className="border-b border-border mb-4"></div>

                    <div className="mb-6">
                      {getData(skillsData, "skills").data.map(
                        (item: TskillData, index: number) => {
                          const { name } = item;
                          return (
                            <div
                              className="w-full text-center xl:text-left mx-auto xl:mx-0"
                              key={index}
                            >
                              <div className="font-medium">{name}</div>
                            </div>
                          );
                        }
                      )}
                    </div>
                    <h4 className="text-xl font-semibold mb-2">Tools</h4>
                    <div className="border-b border-border mb-4"></div>
                    <div className="flex flex-row gap-4">
                      {getData(skillsData, "tools").data.map(
                        (item: TtoolsData, index: number) => {
                          const { imagePath } = item;
                          return (
                            <div key={index}>
                              <Image
                                src={imagePath}
                                width={30}
                                height={30}
                                alt=""
                                priority
                              />
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
