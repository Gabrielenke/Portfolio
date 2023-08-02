import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import Details from './DetailsExperience';
import { useTranslation } from 'react-i18next';

const Experience = ({ education }) => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });

  return (
    <>
      {education ? (
        <div className="my-32 ">
          <h2 className="mb-32 text-center font-Sugarpunch text-6xl font-bold">
            {t('education.title')}
          </h2>
          <div ref={ref} className="relative mx-auto w-[80%] ">
            <ul className="ml-6 flex w-full flex-col items-start justify-between md:ml-0">
              <motion.div
                className="absolute left-9 top-0 h-full w-[4px] origin-top bg-dark dark:bg-light "
                style={{ scaleY: scrollYProgress }}
              />
              <Details
                title={t('education.course.title')}
                time={t('education.year')}
                place={t('education.place')}
              />
            </ul>
          </div>
        </div>
      ) : (
        <div className="my-32 ">
          <h2 className="mb-32 text-center font-Sugarpunch text-6xl font-bold">
            {t('experience.title')}
          </h2>
          <div ref={ref} className="relative mx-auto w-[80%] ">
            <ul className="ml-6 flex w-full flex-col items-start justify-between md:ml-0">
              <motion.div
                className="absolute left-9 top-0 h-full w-[4px] origin-top bg-dark dark:bg-light "
                style={{ scaleY: scrollYProgress }}
              />
              <Details
                title={t('experience.course1.title')}
                company="Udemy"
                time={t('experience.course1.month')}
                description={t('experience.course1.description')}
              />
              <Details
                title={t('experience.course2.title')}
                company="Udemy"
                time={t('experience.course2.month')}
                description={t('experience.course2.description')}
              />
              <Details
                title={t('experience.course3.title')}
                company="Udemy"
                time={t('experience.course3.month')}
                description={t('experience.course3.description')}
              />
              <Details
                title={t('experience.course4.title')}
                company="Meta"
                time={t('experience.course4.month')}
                description={t('experience.course4.description')}
              />
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Experience;
