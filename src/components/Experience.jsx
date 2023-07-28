import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Details from "./DetailsExperience";

const Experience = ({ education }) => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "center start"],
	});

	return (
		<>
			{education ? (
				<div className="my-32 ">
					<h2 className="font-bold text-6xl mb-32 text-center font-Sugarpunch">
						Formação
					</h2>
					<div ref={ref} className="w-[80%] mx-auto relative ">
						<ul className="w-full flex flex-col items-start justify-between ml-6 md:ml-0">
							<motion.div
								className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light "
								style={{ scaleY: scrollYProgress }}
							/>
							<Details
								title="Bacharelado em Engenharia de computação"
								// company="Udemy"
								time="2023-2027"
								place="Graduação EEP Escola de Engenharia de Piracicaba"
								description="Aprenda tudo sobre JavaScript(ES6+), lógica de prog., orientação a objetos, crie
					projetos para web com Node.js e Express"
							/>
						</ul>
					</div>
				</div>
			) : (
				<div className="my-32 ">
					<h2 className="font-bold text-6xl mb-32 text-center font-Sugarpunch">
						Cursos
					</h2>
					<div ref={ref} className="w-[80%] mx-auto relative ">
						<ul className="w-full flex flex-col items-start justify-between ml-6 md:ml-0">
							<motion.div
								className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light "
								style={{ scaleY: scrollYProgress }}
							/>
							<Details
								title="JavaScript do básico ao avançado (c/ Node.js e projetos)"
								company="Udemy"
								time="Maio-2023"
								description="Aprenda tudo sobre JavaScript(ES6+), lógica de prog., orientação a objetos, crie
						projetos para web com Node.js e Express"
							/>
							<Details
								title="Curso de Python 3 do Básico Ao Avançado (com projetos reais)"
								company="Udemy"
								time="Junho-2023"
								description="Python 3 completo: PySide6, Django, Selenium, Regexp, Testes, TDD, POO, Design
						Patterns GoF, algoritmos e programação."
							/>
							<Details
								title="Curso de React.Js e Next.Js (Intermediário e 
							Avançado)"
								company="Udemy"
								time="Julho-2023"
								description="Aprenda ReactJS, NextJS, Styled-Components, Testes com Jest , Storybook,
						Strapi, HTML e CSS com TypeScript e JavaScript."
							/>
							<Details
								title="Introdução ao Desenvolvimento Front-End"
								company="Meta"
								time="Junho-2023"
								description="Um curso on-line sem créditos autorizado pela Meta e ministrado
						através do Coursera , que ensina os fundamentos do desenvolvimento front-end "
							/>
						</ul>
					</div>
				</div>
			)}
		</>
	);
};

export default Experience;
