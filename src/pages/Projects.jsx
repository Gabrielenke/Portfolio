import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Parallax, Pagination, Navigation } from 'swiper/modules';
import SwiperSlideContent from '../components/SwiperSlideContent';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="my-10 flex flex-col items-center justify-center text-center md:pb-10">
        <h2 className="font-Sugarpunch text-3xl text-dark dark:text-light md:text-8xl ">
          {t('projects.title')}
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
            <SwiperSlideContent
              title="Em breve"
              description="projects.project1.description"
              githubLink="/"
              WebsiteLink="/"
            />
          </SwiperSlide>
          <SwiperSlide className="">
            <SwiperSlideContent
              title="Em breve"
              description="projects.project1.description"
              githubLink="/"
              WebsiteLink="/"
            />
          </SwiperSlide>
          <SwiperSlide className="">
            <SwiperSlideContent
              title="Em breve"
              description="projects.project1.description"
              githubLink="/"
              WebsiteLink="/"
            />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Projects;
