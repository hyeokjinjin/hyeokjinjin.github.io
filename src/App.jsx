import React, {useEffect, useState} from 'react'
import { animateScroll as scroll } from 'react-scroll'
import Intro from './components/Intro'
import Portfolio from './components/Portfolio'
import Timeline from './components/Timeline'
import Footer from './components/Footer'
import About from './components/About'
import Courses from './components/Courses'

function App() {
	const [theme, setTheme] = useState(null);

	const scrollToPortfolio = () => {
		scroll.scrollTo(document.getElementById("portfolioID").offsetTop - 20, {
			duration: 600,
			smooth: true,
		});
	};

	useEffect(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	}, []);

	const handleThemeSwitch = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [theme]);

	const sun = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="white"
			className="w-6 h-6"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
			/>
		</svg>
	);

	const moon = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="black"
			className="w-6 h-6"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
			/>
		</svg>
	);

	return (
		<>
			<button
				type="button"
				onClick={handleThemeSwitch}
				className="fixed p-1 z-10 lg:right-10 right-4 top-4 bg-stone-200 dark:bg-stone-800 border-2 border-black dark:border-stone-200 text-lg p-1 rounded-md"
			>
				{theme === 'dark' ? sun : moon}
			</button>
			<div className="bg-stone-100 dark:bg-neutral-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter">
				<div className="max-w-5xl w-11/12 mx-auto">
					<Intro scrollToPortfolio={scrollToPortfolio}/>
					<Portfolio />
					<About />
					<Timeline />
					<Courses />
					<Footer />
				</div>
			</div>
		</>
	)
}

export default App
