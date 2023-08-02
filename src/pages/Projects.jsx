import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Parallax, Pagination, Navigation } from 'swiper/modules';
import { mockupPack } from '../images/projects/export';
import { GithubIcon } from '../components/Icons';
import { language } from '../images/Icons/export';

const Projects = () => {
  return (
    <>
      <div className="my-10 flex flex-col items-center justify-center text-center md:pb-10">
        <h2 className="font-Sugarpunch text-3xl text-dark dark:text-light md:text-8xl ">
          Meus projetos
          <div className="mx-auto w-1/2 border-b-[3px] border-solid border-primary dark:border-primaryDark " />
        </h2>
      </div>
      <section className="flex max-w-[100vw] flex-col md:h-[calc(100vh-290px)] md:w-auto md:flex-row md:items-center md:justify-center    ">
        <Swiper
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }}
          speed={600}
          parallax={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Parallax, Pagination, Navigation]}
          className="  h-screen w-screen bg-gradient-to-tl from-slate-200 via-slate-300 to-light dark:from-zinc-700 dark:via-gray-900 dark:to-black  md:h-auto md:w-auto"
        >
          <SwiperSlide className="">
            <section className="flex max-h-screen w-screen flex-col items-center justify-center md:h-auto md:w-auto md:flex-row  ">
              <div className="mx-10 my-10 flex w-full flex-col items-start justify-center gap-5 self-center text-dark dark:text-white md:ml-32 md:mr-32 md:h-full md:w-1/2  md:gap-7 ">
                <h2
                  className="ml-10 text-3xl font-bold md:ml-0 md:text-9xl "
                  data-swiper-parallax="-300"
                >
                  Teste
                </h2>
                <div
                  className="ml-10 max-w-[80vw] text-base md:ml-0 md:max-w-[40vw] md:text-2xl"
                  data-swiper-parallax="-100"
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam dictum mattis velit, sit amet faucibus felis iaculis
                    nec. Nulla laoreet justo vitae porttitor porttitor.
                    Suspendisse in sem justo. Integer laoreet magna nec elit
                  </p>
                </div>
                <div className="mx-auto my-10 items-center justify-center md:my-0 md:hidden">
                  <img className="w-72 rounded-xl" src={mockupPack} alt="" />
                </div>
                <div className="flex w-full items-center justify-center gap-10 md:items-start md:justify-between md:gap-0">
                  <button className="flex items-center gap-2 rounded-lg border-solid border-black bg-light px-4 py-4 text-dark md:mt-10 ">
                    Github
                    <GithubIcon className="w-[30px]" />
                  </button>
                  <button className=" flex items-center gap-2 rounded-lg border-solid border-black bg-light px-4 py-4 text-dark md:mt-10 ">
                    Website
                    <img className="w-[20px] invert" src={language} alt="" />
                  </button>
                </div>
              </div>
              <div className="hidden items-center justify-center self-center md:mr-32 md:flex md:h-[80vh] md:w-1/2 ">
                <img className="rounded-xl" src={mockupPack} alt="" />
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide className="">
            <section className="flex max-h-screen w-screen flex-col items-center justify-center md:h-auto md:w-auto md:flex-row  ">
              <div className="mx-10 my-10 flex w-full flex-col items-start justify-center gap-5 self-center text-dark dark:text-white md:ml-32 md:mr-32 md:h-full md:w-1/2  md:gap-7 ">
                <h2
                  className="ml-10 text-3xl font-bold md:ml-0 md:text-9xl "
                  data-swiper-parallax="-300"
                >
                  Teste
                </h2>
                <div
                  className="ml-10 max-w-[80vw] text-base md:ml-0 md:max-w-[40vw] md:text-2xl"
                  data-swiper-parallax="-100"
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam dictum mattis velit, sit amet faucibus felis iaculis
                    nec. Nulla laoreet justo vitae porttitor porttitor.
                    Suspendisse in sem justo. Integer laoreet magna nec elit
                  </p>
                </div>
                <div className="mx-auto my-10 items-center justify-center md:my-0 md:hidden">
                  <img className="w-72 rounded-xl" src={mockupPack} alt="" />
                </div>
                <div className="flex w-full items-center justify-center gap-10 md:items-start md:justify-between md:gap-0">
                  <button className="flex items-center gap-2 rounded-lg border-solid border-black bg-light px-4 py-4 text-dark md:mt-10 ">
                    Github
                    <GithubIcon className="w-[30px]" />
                  </button>
                  <button className=" flex items-center gap-2 rounded-lg border-solid border-black bg-light px-4 py-4 text-dark md:mt-10 ">
                    Website
                    <img className="w-[20px] invert" src={language} alt="" />
                  </button>
                </div>
              </div>
              <div className="hidden items-center justify-center self-center md:mr-32 md:flex md:h-[80vh] md:w-1/2 ">
                <img className="rounded-xl" src={mockupPack} alt="" />
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide className="">
            <section className="flex max-h-screen w-screen flex-col items-center justify-center md:h-auto md:w-auto md:flex-row  ">
              <div className="mx-10 my-10 flex w-full flex-col items-start justify-center gap-5 self-center text-dark dark:text-white md:ml-32 md:mr-32 md:h-full md:w-1/2  md:gap-7 ">
                <h2
                  className="ml-10 text-3xl font-bold md:ml-0 md:text-9xl "
                  data-swiper-parallax="-300"
                >
                  Teste
                </h2>
                <div
                  className="ml-10 max-w-[80vw] text-base md:ml-0 md:max-w-[40vw] md:text-2xl"
                  data-swiper-parallax="-100"
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam dictum mattis velit, sit amet faucibus felis iaculis
                    nec. Nulla laoreet justo vitae porttitor porttitor.
                    Suspendisse in sem justo. Integer laoreet magna nec elit
                  </p>
                </div>
                <div className="mx-auto my-10 items-center justify-center md:my-0 md:hidden">
                  <img className="w-72 rounded-xl" src={mockupPack} alt="" />
                </div>
                <div className="flex w-full items-center justify-center gap-10 md:items-start md:justify-between md:gap-0">
                  <button className="flex items-center gap-2 rounded-lg border-solid border-black bg-light px-4 py-4 text-dark md:mt-10 ">
                    Github
                    <GithubIcon className="w-[30px]" />
                  </button>
                  <button className=" flex items-center gap-2 rounded-lg border-solid border-black bg-light px-4 py-4 text-dark md:mt-10 ">
                    Website
                    <img className="w-[20px] invert" src={language} alt="" />
                  </button>
                </div>
              </div>
              <div className="hidden items-center justify-center self-center md:mr-32 md:flex md:h-[80vh] md:w-1/2 ">
                <img className="rounded-xl" src={mockupPack} alt="" />
              </div>
            </section>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Projects;
