import { GITHUB } from "../images/Icons/export";
import { Project1 } from "../images/projects/export";
import { GithubIcon } from "./Icons";
import { motion } from "framer-motion";

export const ProjectSec = ({ reverse = false }) => {
	return (
		<>
			<div className="text-dark dark:text-light  items-center justify-center max-w-[90vw] mx-auto md:w-[70vw] 2xl:w-[60vw] md:items-start p-10 mb-32 border border-solid shadow-[5px_0px_0px_5px] rounded-2xl ">
				<div
					className={`flex flex-col gap-10 ${
						reverse ? "md:flex-row-reverse" : "md:flex-row"
					}`}
				>
					<div className="w-[80vw] md:w-[40vw] self-center ">
						<img className="rounded-xl" src={Project1} alt="" />
					</div>
					<div className="flex flex-col md:w-[60vw] gap-5">
						<h4 className="text-4xl font-bold text-primary dark:text-primaryDark">
							Alguma coisa aqui
						</h4>
						<p className="text-sm md:text-base 2xl:text-lg  ">
							ainda nao tenho nenhum projeto para colocar aqui, mas estou
							trabalhando nisso e em breve tera algo aqui :)
						</p>
						<div className="flex items-center text-center justify-between gap-5">
							<motion.a href="/" whileHover={({ scale: 1.05 }, { y: -4 })}>
								<GithubIcon className="!w-12" />
							</motion.a>
							<motion.a
								className=" flex items-center justify-center text-center gap-2 px-5 py-5  bg-primary dark:bg-primaryDark rounded-lg cursor-pointer text-light "
								whileHover={{ scale: 1.05 }}
							>
								Visit Project
							</motion.a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
