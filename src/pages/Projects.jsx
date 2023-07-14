import AnimatedText from "../components/AnimatedText";
import { ProjectSec } from "../components/ProjectSec";

const Projects = () => {
	return (
		<>
			<section id="projects" className=" min-h-screen">
				<div className="text-white items-start max-w-[90vw] mx-auto md:w-[70vw] md:items-start mt-20  ">
					<AnimatedText text="Meus projetos" className="!text-6xl mb-20" />
				</div>
				<ProjectSec />
				<ProjectSec reverse={true} />
				<ProjectSec />
			</section>
		</>
	);
};

export default Projects;
