import { HomeLeft, HomeRight } from '../images/homeImg/export';
import Experience from '../components/Experience';
import { motion } from 'framer-motion';
import { aboutPhoto, rocket } from '../images/aboutImg/export';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <main className="flex w-full flex-col items-center justify-center  dark:text-light ">
        <img
          className="absolute left-0 hidden md:top-[80%] md:block 2xl:top-[70%]"
          src={HomeLeft}
          alt=""
        />
        <img
          className="absolute right-0 hidden md:top-[180%] md:block md:w-[450px] 2xl:top-[180%] 2xl:w-auto "
          src={HomeRight}
          alt=""
        />
        <img
          className="absolute right-[7%] top-[75%] rotate-[225deg] dark:invert md:hidden "
          src={rocket}
          alt=""
        />
        <img
          className="absolute left-0 w-52 xxs:top-[150%] xs:top-[135%] md:hidden "
          src={HomeLeft}
          alt=""
        />
        <section className="flex min-h-screen flex-col items-center justify-center gap-20 ">
          <div
            className="mx-auto mb-32 	flex  w-full flex-col-reverse items-center justify-center gap-20
						md:w-[60vw] md:flex-row	
					
					"
          >
            <div
              className=" z-50  flex w-[80vw] flex-col
						 items-start justify-center gap-2 self-center"
            >
              <h2 className="mb-4 font-Sugarpunch text-4xl font-bold uppercase text-dark/75 dark:text-light/75">
                {t('about')}
                <div className="h-4 w-3/4 border-b-[3px] border-solid border-primary dark:border-primaryDark " />
              </h2>
              <p className="text-xl font-medium">{t('aboutP1')}</p>
              <p className="text-xl font-medium">{t('aboutP2')}</p>
              <p className="font medium text-xl">{t('aboutP3')}</p>
            </div>

            <motion.div className="w-[50vw]  ">
              <img
                src={aboutPhoto}
                alt="gabrielenke"
                className=" w-full rounded-xl  "
              />
            </motion.div>
          </div>
        </section>
        <section>
          <Experience />
          <Experience education={true} />
        </section>
      </main>
    </>
  );
};

export default About;
