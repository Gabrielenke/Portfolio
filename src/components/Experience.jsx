import { useRef } from "react";

import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
	const ref = useRef(null);
	return (
		<li
			ref={ref}
			className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between "
		>
			<LiIcon reference={ref} />
			<motion.div
				initial={{ y: 50 }}
				whileInView={{ y: 0 }}
				transition={{ duration: 0.5, type: "spring" }}
			>
				<h3 className="capitalize font-bold text-2xl">
					{position}&nbsp;{" "}
					<a
						href={companyLink}
						target="_blank"
						className="text-primary capitalize"
					>
						@{company}
					</a>
				</h3>
				<span className="capitalize  font-medium text-dark/75 dark:text-light/75 ">
					{time}
				</span>
				<p className="font-medium w-full">{work}</p>
			</motion.div>
		</li>
	);
};

const Experience = () => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "center start"],
	});

	return (
		<div className="my-64 ">
			<h2 className="font-bold text-6xl mb-32 text-center">Cursos</h2>
			<div ref={ref} className="w-[75%] mx-auto relative ">
				<ul className="w-full flex flex-col items-start justify-between ml-4">
					<motion.div
						className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light "
						style={{ scaleY: scrollYProgress }}
					/>
					<Details
						position="JavaScript do básico ao avançado (c/ Node.js e projetos)"
						company="Udemy"
						time="Maio-2023"
						work="Aprenda tudo sobre JavaScript(ES6+), lógica de prog., orientação a objetos, crie
						projetos para web com Node.js e Express"
					/>
					<Details
						position="Curso de Python 3 do Básico Ao Avançado (com projetos reais)"
						company="Udemy"
						time="Junho-2023"
						work="Python 3 completo: PySide6, Django, Selenium, Regexp, Testes, TDD, POO, Design
						Patterns GoF, algoritmos e programação."
					/>
					<Details
						position="Curso de React.Js e Next.Js (Intermediário e 
							Avançado)"
						company="Udemy"
						time="Julho-2023"
						work="Aprenda ReactJS, NextJS, Styled-Components, Testes com Jest , Storybook,
						Strapi, HTML e CSS com TypeScript e JavaScript."
					/>
					<Details
						position="Introdução ao Desenvolvimento Front-End  "
						company="Meta"
						time="Junho-2023"
						work="Um curso on-line sem créditos autorizado pela Meta e ministrado
						através do Coursera , que ensina os fundamentos do desenvolvimento front-end "
					/>
				</ul>
			</div>
		</div>
	);
};

export default Experience;
