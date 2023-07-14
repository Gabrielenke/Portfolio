import { Astronalta } from "../images/profile/export";
import AnimatedText from "../components/AnimatedText";
import { Link } from "react-router-dom";
import TypeWriter from "../components/TypeWriter";
import { gifCV, pngCV } from "../images/Icons/export";

const Home = () => {
	return (
		<>
			<main className="flex items-center justify-center  text-dark dark:text-light w-screen  mt-20 md:mt-0 md:h-[calc(100vh-104px)] ">
				<div className="flex flex-col items-center  justify-between w-full md:flex-row md:w-[80vw] ">
					<div className="flex justify-center items-center w-full  mx-auto md:w-screen  ">
						<img
							src={Astronalta}
							alt="GabrielEnke"
							className="w-[70vw] xl:w-[40vw] h-auto"
						/>
					</div>

					<div className="w-[70vw] md:w-full flex flex-col items-center  self-center md:items-center ">
						<AnimatedText
							className="!text-5xl md:!text-7xl"
							text="Gabriel Enke"
						/>
						<p className="my-4 text-base font-medium">
							<TypeWriter />
						</p>
						<div className="flex self-center flex-col gap-4 lg:gap-6 items-center mt-2 md:flex-row">
							<Link
								to="/gabrielenkeResume.pdf"
								target={"_blank"}
								className="group flex items-center bg-dark text-light p-2.5 px-6 
									rounded-lg text-lg font-semibold hover:bg-light hover:text-dark 
									border-2 border-solid border-transparent hover:border-dark
									
									dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
									hover:dark:border-light "
								download={true}
							>
								Download CV
								<img
									className=" pl-1 w-5 group-hover:hidden "
									src={pngCV}
									alt=""
								/>
								<img
									className="hidden pl-1 w-5 group-hover:block invert"
									src={gifCV}
									alt=""
								/>
							</Link>

							<Link
								to="mailto:gabrielenkee@icloud.com"
								className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light"
							>
								Contact
							</Link>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default Home;
