import { useTranslation } from 'react-i18next';
import { ptBR, us } from '../images/svgs/export';
import { motion } from 'framer-motion';

const languageOptions = [
  {
    name: 'Portuguese',
    value: 'ptBR',
    flag: ptBR,
  },
  {
    name: 'English',
    value: 'en',
    flag: us,
  },
];

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="flex gap-5">
      {languageOptions.map((languageOption) => {
        return (
          <motion.button
            whileHover={{ scale: 1.1 }}
            className=""
            key={languageOption.value}
            onClick={() => {
              i18n.changeLanguage(languageOption.value);
            }}
          >
            <img className=" w-8  " src={languageOption.flag} alt="" />
            {/* <span>{languageOption.name}</span> */}
          </motion.button>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
