import { skillsImages } from "./ReactIcons";
import AnimatedText from "./AnimatedText";
import { motion } from "framer-motion";
const Skills = () => {
	return (
		<>
			<section className="flex flex-col  justify-center items-center min-h-screen text-center ">
				<div className=" flex flex-col mx-auto gap-5 justify-center items-center   ">
					<AnimatedText text="Skills" className="!text-6xl" />

					<div className="flex items-center text-center justify-center font-bold text-2xl">
						<h2 className="">
							Para mais informacoes acesse meu perfil no{" "}
							<a className="text-primary dark:text-primaryDark " href="">
								Linkedin
							</a>
						</h2>
					</div>
				</div>

				<div className="flex gap-10  mt-10  w-[100vw] justify-center mx-auto flex-wrap md:w-[80vw] ">
					{skillsImages.map((skill) => (
						<motion.div
							key={skill.title}
							whileHover={{
								scale: 1.05,
								transition: { duration: 0.2 },
								y: -10,
							}}
							className="flex h-[30vh] justify-center  flex-col w-[40vw] text-center items-center
							 shadow-dark shadow-[5px_0px_0px_5px] rounded-2xl border-solid border-dark 
							
							
							 dark:shadow-[#000] dark:border-white
							 
							 md:h-[20vh] md:w-[15vw]
							 "
						>
							<div className="text-dark dark:text-white ">
								<img
									className="w-32 lg:w-24"
									src={skill.img}
									alt={skill.title}
								/>
							</div>
						</motion.div>
					))}
				</div>
			</section>
		</>
	);
};

export default Skills;
