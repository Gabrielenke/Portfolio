import LiIcon from "./LiIcon";
import { useRef } from "react";
import { motion } from "framer-motion";

const DetailsExperience = ({
	title,
	company,
	companyLink,
	time,
	description,
	place,
}) => {
	const ref = useRef(null);
	return (
		<>
			{place ? (
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
						<h3 className="font-bold text-2xl">{title}</h3>
						<span className="font-medium text-dark/75 dark:text-light/75 ">
							{time} | {place}
						</span>
						<p className="font-medium w-full">{description}</p>
					</motion.div>
				</li>
			) : (
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
						<h3 className="font-bold text-2xl">
							{title}
							<a
								href={companyLink}
								target="_blank"
								className="text-primary dark:text-primaryDark"
							>
								@{company}
							</a>
						</h3>
						<span className="font-medium text-dark/75 dark:text-light/75 ">
							{time}
						</span>
						<p className="font-medium w-full">{description}</p>
					</motion.div>
				</li>
			)}
		</>
	);
};
export default DetailsExperience;
