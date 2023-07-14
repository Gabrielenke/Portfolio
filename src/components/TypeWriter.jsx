import { useRef, useEffect } from "react";

const TypeWriter = () => {
	function sleep(ms) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	const phrases = ["Front-end Developer"];

	const el = useRef(null);

	const sleepTime = 100;

	let curPhraseIndex = 0;

	const writeLoop = async () => {
		while (true) {
			let curWord = phrases[curPhraseIndex];

			for (let i = 0; i < curWord.length; i++) {
				el.current.innerText = curWord.substring(0, i + 1);
				await sleep(sleepTime);
			}

			await sleep(sleepTime * 10);

			for (let i = curWord.length; i > 0; i--) {
				el.current.innerText = curWord.substring(0, i - 1);

				await sleep(sleepTime);
			}

			await sleep(sleepTime * 10);

			if (curPhraseIndex === phrases.length - 1) {
				curPhraseIndex = 0;
			} else {
				curPhraseIndex++;
			}
		}
	};

	useEffect(() => {
		writeLoop();
	}, []);

	return (
		<div className="w-auto h-32px mb-5 ">
			<span
				className="text-primary dark:text-primaryDark font-bold text-2xl mb-5 border-r-2 border-solid animate-typing   "
				ref={el}
			></span>
		</div>
	);
};

export default TypeWriter;
