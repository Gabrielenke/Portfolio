import { useRef, useEffect } from "react";

const TypeWriter = () => {
	function sleep(ms) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	const phrases = [
		"Welcome to my Portfolio",
		"Front-end Developer",
		"Computer Engineering student",
	];

	const el = useRef(null);

	const sleepTime = 100;

	const writeLoop = async () => {
		while (true) {
			for (let j = 0; j < phrases.length; j++) {
				let curPhrase = phrases[j];

				for (let i = 0; i <= curPhrase.length; i++) {
					el.current.innerText = curPhrase.substring(0, i);
					await sleep(sleepTime);
				}

				await sleep(sleepTime * 10);

				for (let i = curPhrase.length; i >= 0; i--) {
					el.current.innerText = curPhrase.substring(0, i);
					await sleep(sleepTime);
				}

				await sleep(sleepTime * 10);
			}
		}
	};

	useEffect(() => {
		writeLoop();
	}, []);

	return (
		<div className="w-auto h-32px mb-5 ">
			<span
				className=" text-primary dark:text-primaryDark font-bold text-2xl mb-5 border-r-2 border-solid animate-typing   "
				ref={el}
			></span>
		</div>
	);
};

export default TypeWriter;
