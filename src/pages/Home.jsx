import AnimatedText from '../components/AnimatedText';
import { Link } from 'react-router-dom';
import { gifCV, pngCV } from '../images/Icons/export';
import { motion } from 'framer-motion';
import { GithubIcon, LinkedInIcon } from '../components/Icons';
import { HomeLeft, HomeRight } from '../images/homeImg/export';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className="relative -mt-36 flex min-h-screen items-center justify-center md:-mt-32 md:h-[calc(100vh-204px)]">
        <div className="flex flex-col items-center justify-center text-dark dark:text-light">
          <p className="mb-5 font-Sugarpunch text-2xl md:text-4xl">
            {t('hello')}
          </p>
          <h1 className=" mb-4 font-Sugarpunch text-6xl md:text-8xl">
            Gabriel
          </h1>
          <h1 className="font-Sugarpunch text-6xl md:text-8xl">Enke</h1>
          <AnimatedText className="md:mt-6 md:!text-3xl" text={t('school')} />
          <AnimatedText
            className="md:my-6 md:!text-3xl"
            text="Front-end Developer"
          />
          <Link
            to="/gabrielenkeResume.pdf"
            target={'_blank'}
            className="group flex items-center rounded-lg border-2 border-solid border-transparent 
									bg-dark p-2.5 px-6 text-lg font-semibold 
									text-light hover:border-dark hover:bg-light hover:text-dark 
									
									dark:bg-light dark:text-dark hover:dark:border-light hover:dark:bg-dark
									hover:dark:text-light "
            download={true}
          >
            Download CV
            <img
              className=" w-5 pl-1 invert group-hover:hidden dark:invert-0 "
              src={pngCV}
              alt=""
            />
            <img
              className="hidden w-5 pl-1 group-hover:block  dark:invert"
              src={gifCV}
              alt=""
            />
          </Link>
          <div className="my-6 flex gap-6 md:my-12">
            <motion.a href="" whileHover={{ y: -2 }} className="w-10">
              <GithubIcon className="text-dark dark:text-light" />
            </motion.a>
            <motion.a href="/" whileHover={{ y: -2 }} className="w-10">
              <LinkedInIcon className="" />
            </motion.a>
          </div>
        </div>
        <img
          className="absolute left-0 top-[75%] w-40 md:top-[60%] md:w-56 xl:top-1/4 xl:w-96 2xl:w-[500px] "
          src={HomeLeft}
          alt=""
        />
        <img
          className="absolute right-0 top-[80%] w-40 md:top-[65%] md:w-56 xl:top-1/4 xl:w-96 2xl:w-[500px] "
          src={HomeRight}
          alt=""
        />
      </section>
    </>
  );
};

export default Home;
