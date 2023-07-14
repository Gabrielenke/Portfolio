import { GITHUB } from "../images/Icons/export";
import { Project1 } from "../images/projects/export";
import { GithubIcon } from "./Icons";

export const ProjectSec = ({ reverse = false }) => {
	return (
		<>
			<div className="text-white  items-center justify-center max-w-[90vw] mx-auto md:w-[70vw] md:items-start p-10 mb-32 border border-solid shadow-[5px_0px_0px_5px] rounded-2xl ">
				<div
					className={`flex flex-col gap-10 ${
						reverse ? "md:flex-row-reverse" : "md:flex-row"
					}`}
				>
					<div className="w-[80vw] self-center ">
						<img className="rounded-xl" src={Project1} alt="" />
					</div>
					<div className="flex flex-col md:w-[60vw] gap-5">
						<h4 className="text-4xl font-bold">Something here</h4>
						<p className="text-sm ">
							A feature-rich Crypto Screener App using React, Tailwind CSS,
							Context API, React Router and Recharts. It shows detail regarding
							almost all the cryptocurrency. You can easily convert the price in
							your local currency.
						</p>
						<div className="flex items-center text-center justify-between gap-5">
							<a href="/">
								<GithubIcon className="!w-12" />
							</a>
							<a className=" flex items-center justify-center text-center gap-2 px-5 py-5  bg-primary dark:bg-primaryDark rounded-lg">
								Visit Project
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
