import LiIcon from "./LiIcon";
import { useRef } from "react";
import { motion } from "framer-motion";

const DetailsExperience = ({ position, company, companyLink, time, work }) => {
	const ref = useRef(null);
	return (
		<li
			ref={ref}
			className="my-8 first:mt-0 last:mb-0 w-[70%] mx-auto flex flex-col items-center justify-between "
		>
			<LiIcon reference={ref} />
			<motion.div
				initial={{ y: 50 }}
				whileInView={{ y: 0 }}
				transition={{ duration: 0.5, type: "spring" }}
			>
				<h3 className="capitalize font-bold text-2xl">
					{position}
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
export default DetailsExperience;
