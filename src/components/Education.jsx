import { useRef } from "react";

import { motion, useScroll } from "framer-motion";
import DetailsEducation from "./DetailsEducation";

const Education = () => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "center start"],
	});

	return (
		<div className="my-64 ">
			<h2 className="font-bold text-6xl mb-32 text-center ">Formação</h2>
			<div
				ref={ref}
				className="w-[75%] mx-auto relative md:w-[55vw] 2xl:w-[40vw] "
			>
				<ul className="w-full flex flex-col items-start justify-between ml-4">
					<motion.div
						className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light "
						style={{ scaleY: scrollYProgress }}
					/>
					<DetailsEducation
						type="Bacharelado em Engenharia de computação"
						time="2023-2027"
						place="Graduação EEP Escola de Engenharia de Piracicaba
						"
						info="Atualmente cursando segundo semestre do curso de Engenharia de Computação na EEP"
					/>
				</ul>
			</div>
		</div>
	);
};

export default Education;
