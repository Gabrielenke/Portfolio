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

  const handleLanguageChange = (languageOption) => {
    i18n.changeLanguage(languageOption.value);
    // Salvar a escolha do idioma no localStorage
    localStorage.setItem('selectedLanguage', languageOption.value);
  };

  return (
    <div className="flex gap-5">
      {languageOptions.map((languageOption) => (
        <motion.button
          whileHover={{ scale: 1.1 }}
          className=""
          key={languageOption.value}
          onClick={() => handleLanguageChange(languageOption)}
        >
          <img className="w-8" src={languageOption.flag} alt="" />
          {/* <span>{languageOption.name}</span> */}
        </motion.button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
