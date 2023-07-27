import { FotoTesteAbout2 } from "../images/profile/export";
import Experience from "../components/Experience";
import { motion } from "framer-motion";

const About = () => {
	return (
		<>
			<main className="flex flex-col w-full items-center justify-center  dark:text-light ">
				<section className="flex flex-col gap-20 min-h-screen items-center justify-center ">
					<div
						className="flex flex-col-reverse 	mb-32  w-full items-center justify-center mx-auto gap-20
						md:flex-row md:w-[60vw]	
					
					"
					>
						<div
							className=" flex  w-[80vw] flex-col items-start
						 self-center justify-center gap-2 "
						>
							<h2 className="mb-4 text-4xl font-bold uppercase text-dark/75 dark:text-light/75 ">
								About
								<div className="w-1/2 border-b-[3px] border-solid border-primary dark:border-primaryDark h-4 " />
							</h2>
							<p className="font-medium text-xl">
								Olá, sou Gabriel Enke, Sou apaixonado por aprender coisas novas
								e estou sempre em busca de novos desafios. Atualmente estou
								estudando ReactJs
							</p>
							<p className="font-medium text-xl">
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
								src={FotoTesteAbout2}
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
