import { HomeLeft, HomeRight } from '../images/homeImg/export';
import Experience from '../components/Experience';
import { motion } from 'framer-motion';
import { aboutPhoto, planet, rocket } from '../images/aboutImg/export';

const About = () => {
  return (
    <>
      <main className="flex w-full flex-col items-center justify-center  dark:text-light ">
        <img
          className="absolute left-0 top-[70%] hidden md:block"
          src={HomeLeft}
          alt=""
        />
        <img
          className="absolute right-0 top-[180%] hidden md:block "
          src={HomeRight}
          alt=""
        />
        <img
          className="absolute right-[7%] top-[75%] rotate-[225deg] dark:invert md:hidden "
          src={rocket}
          alt=""
        />
        <img
          className="absolute left-0 w-52 xxs:top-[140%] xs:top-[135%] md:hidden "
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
                About
                <div className="h-4 w-1/2 border-b-[3px] border-solid border-primary dark:border-primaryDark " />
              </h2>
              <p className="text-xl font-medium">
                Olá, sou Gabriel Enke, Sou apaixonado por aprender coisas novas
                e estou sempre em busca de novos desafios. Atualmente estou
                estudando ReactJs
              </p>
              <p className="text-xl font-medium">
                Atualmente estou cursando o 2º semestre de Engenharia de
                Computação na Escola de Engenharia de Piracicaba - EEP.
              </p>
              <p className="font medium text-xl">
                Busco minha primeira experiência profissional na área de
                desenvolvedor.
              </p>
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
