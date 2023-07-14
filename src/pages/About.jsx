import AnimatedText from "../components/AnimatedText";
import { FotoAbout } from "../images/profile/export";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Education from "../components/Education";

const about = () => {
	return (
		<>
			<main className="flex flex-col w-full items-center justify-center  dark:text-light ">
				<section className="flex flex-col gap-20 min-h-screen items-center justify-center">
					<AnimatedText
						text={`practice makes perfect`}
						className="!text-4xl !mt-16 "
					/>
					<div className="flex flex-col-reverse w-full items-center justify-center mx-auto gap-20 ">
						<div
							className=" flex  w-[80vw] flex-col items-start
						 self-center justify-center gap-2 mb-32"
						>
							<h2 className="mb-4 text-4xl font-bold uppercase text-dark/75 dark:text-light/75">
								About
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

						<div className="w-[50vw]  rounded-full  ">
							<img
								src={FotoAbout}
								alt="gabrielenke"
								className="w-full h-auto rounded-2xl"
							/>
						</div>
					</div>
				</section>

				<Skills />
				<Experience />
				<Education />
			</main>
		</>
	);
};

export default about;
