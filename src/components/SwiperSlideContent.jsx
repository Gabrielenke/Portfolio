import React from 'react';
import { GithubIcon } from './Icons';
import { language } from '../images/Icons/export';
import { useTranslation } from 'react-i18next';
import { mockupPack } from '../images/projects/export';

const SwiperSlideContent = ({
  title,
  description,
  githubLink,
  WebsiteLink,
}) => {
  const { t } = useTranslation();
  return (
    <section className="flex max-h-screen w-screen flex-col items-center justify-center md:h-auto md:w-auto md:flex-row  ">
      <div className="mx-10 my-10 flex w-full flex-col items-start justify-center gap-5 self-center text-dark dark:text-white md:ml-32 md:mr-32 md:h-full md:w-1/2  md:gap-7 ">
        <h2
          className="ml-10 text-3xl font-bold md:ml-0 md:text-9xl "
          data-swiper-parallax="-300"
        >
          {title}
        </h2>
        <div
          className="ml-10 max-w-[80vw] text-base md:ml-0 md:max-w-[40vw] md:text-2xl"
          data-swiper-parallax="-100"
        >
          <p>{t(description)}</p>
        </div>
        <div className="mx-auto my-10 items-center justify-center md:my-0 md:hidden">
          <img className="w-72 rounded-xl" src={mockupPack} alt="" />
        </div>
        <div className="flex w-full items-center justify-center gap-10 md:items-start md:justify-between md:gap-0">
          <a
            href={githubLink}
            className="flex items-center gap-2 rounded-lg border-solid border-black bg-light px-4 py-4 text-dark md:mt-10 "
          >
            Github
            <GithubIcon className="w-[30px]" />
          </a>
          <a
            href={WebsiteLink}
            className=" flex items-center gap-2 rounded-lg border-solid border-black bg-light px-4 py-4 text-dark md:mt-10 "
          >
            Website
            <img className="w-[20px] invert" src={language} alt="" />
          </a>
        </div>
      </div>
      <div className="hidden items-center justify-center self-center md:mr-32 md:flex md:h-[80vh] md:w-1/2 ">
        <img className="rounded-xl" src={mockupPack} alt="" />
      </div>
    </section>
  );
};

export default SwiperSlideContent;
