import AnimatedText from '../components/AnimatedText';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { Parallax, Pagination, Navigation } from 'swiper/modules';
import { mockupPack } from '../images/projects/export';

const Projects = () => {
  return (
    <>
      <div className="my-4 flex flex-col items-center justify-center text-center">
        <h2 className="font-Sugarpunch  text-8xl text-dark dark:text-light ">
          Meus projetos
          <div className="mx-auto h-4 w-1/2   border-b-[3px] border-solid border-primary dark:border-primaryDark " />
        </h2>
      </div>
      <section className="flex h-[calc(100vh-290px)] items-center justify-center    ">
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
          className=" bg-gradient-to-tl from-slate-200 via-slate-300 to-light dark:from-zinc-700  dark:via-gray-900 dark:to-black"
        >
          <SwiperSlide className=" ">
            <section className="flex items-center justify-center  ">
              <div className="ml-32 mr-32 flex h-full w-1/2 flex-col justify-center gap-7 self-center text-dark dark:text-white ">
                <h2 className="text-9xl font-bold " data-swiper-parallax="-300">
                  Teste
                </h2>
                <div
                  className="max-w-[40vw] text-2xl"
                  data-swiper-parallax="-100"
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam dictum mattis velit, sit amet faucibus felis iaculis
                    nec. Nulla laoreet justo vitae porttitor porttitor.
                    Suspendisse in sem justo. Integer laoreet magna nec elit
                    suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem
                    at elit facilisis rutrum. Ut at ullamcorper velit. Nulla
                    ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero.
                    Aenean feugiat non eros quis feugiat.
                  </p>
                </div>
                <div className="flex justify-between">
                  <button className="mt-10 rounded-lg border-solid border-black bg-light px-4 py-4 text-dark ">
                    View on github
                  </button>
                  <button className=" mt-10 rounded-lg border-solid border-black bg-light px-4 py-4 text-dark ">
                    View app website
                  </button>
                </div>
              </div>
              <div className="mr-32 flex h-[80vh] w-1/2 items-center justify-center self-center  ">
                <img className="rounded-xl" src={mockupPack} alt="" />
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide className=" ">
            <section className="flex items-center justify-center  ">
              <div className="ml-32 mr-32 flex h-full w-1/2 flex-col justify-center gap-7 self-center text-dark dark:text-white ">
                <h2 className="text-9xl font-bold " data-swiper-parallax="-300">
                  Teste
                </h2>
                <div
                  className="max-w-[40vw] text-2xl"
                  data-swiper-parallax="-100"
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam dictum mattis velit, sit amet faucibus felis iaculis
                    nec. Nulla laoreet justo vitae porttitor porttitor.
                    Suspendisse in sem justo. Integer laoreet magna nec elit
                    suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem
                    at elit facilisis rutrum. Ut at ullamcorper velit. Nulla
                    ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero.
                    Aenean feugiat non eros quis feugiat.
                  </p>
                </div>
                <div className="flex justify-between">
                  <button className="mt-10 rounded-lg border-solid border-black bg-light px-4 py-4 text-dark ">
                    View on github
                  </button>
                  <button className=" mt-10 rounded-lg border-solid border-black bg-light px-4 py-4 text-dark ">
                    View app website
                  </button>
                </div>
              </div>
              <div className="mr-32 flex h-[80vh] w-1/2 items-center justify-center self-center  ">
                <img className="rounded-xl" src={mockupPack} alt="" />
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide className=" ">
            <section className="flex items-center justify-center  ">
              <div className="ml-32 mr-32 flex h-full w-1/2 flex-col justify-center gap-7 self-center text-dark dark:text-white ">
                <h2 className="text-9xl font-bold " data-swiper-parallax="-300">
                  Teste
                </h2>
                <div
                  className="max-w-[40vw] text-2xl"
                  data-swiper-parallax="-100"
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam dictum mattis velit, sit amet faucibus felis iaculis
                    nec. Nulla laoreet justo vitae porttitor porttitor.
                    Suspendisse in sem justo. Integer laoreet magna nec elit
                    suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem
                    at elit facilisis rutrum. Ut at ullamcorper velit. Nulla
                    ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero.
                    Aenean feugiat non eros quis feugiat.
                  </p>
                </div>
                <div className="flex justify-between">
                  <button className="mt-10 rounded-lg border-solid border-black bg-light px-4 py-4 text-dark ">
                    View on github
                  </button>
                  <button className=" mt-10 rounded-lg border-solid border-black bg-light px-4 py-4 text-dark ">
                    View app website
                  </button>
                </div>
              </div>
              <div className="mr-32 flex h-[80vh] w-1/2 items-center justify-center self-center  ">
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
