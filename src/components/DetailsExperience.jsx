import LiIcon from './LiIcon';
import { useRef } from 'react';
import { motion } from 'framer-motion';

const DetailsExperience = ({
  title,
  company,
  companyLink,
  time,
  description,
  place,
}) => {
  const ref = useRef(null);
  return (
    <>
      {place ? (
        <li
          ref={ref}
          className="mx-auto my-8 flex w-[70%] flex-col items-center justify-between first:mt-0 last:mb-0 "
        >
          <LiIcon reference={ref} />
          <motion.div
            className="w-full"
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: 'spring' }}
          >
            <h3 className="mb-2 text-2xl font-bold">{title}</h3>
            <span className="font-medium text-dark/75 dark:text-light/75 ">
              {time} | {place}
            </span>
            <p className="w-full font-medium">{description}</p>
          </motion.div>
        </li>
      ) : (
        <li
          ref={ref}
          className="mx-auto my-8 flex w-[70%] flex-col items-center justify-between first:mt-0 last:mb-0 "
        >
          <LiIcon reference={ref} />
          <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: 'spring' }}
          >
            <h3 className="text-2xl font-bold">
              {title}
              <a
                href={companyLink}
                target="_blank"
                className="text-primary dark:text-primaryDark"
              >
                @{company}
              </a>
            </h3>
            <span className="font-medium text-dark/75 dark:text-light/75 ">
              {time}
            </span>
            <p className="w-full font-medium">{description}</p>
          </motion.div>
        </li>
      )}
    </>
  );
};
export default DetailsExperience;
