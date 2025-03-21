import React from 'react';

function Intro({scrollToPortfolio}) {
    return (
        <div className="flex flex-col items-center justify-between h-screen">
            <div className="flex flex-col items-center justify-center text-center flex-grow">
                <h1 className='text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold'>Hyeokjin Jin</h1>
                <p className='text-base md:text-xl mv-3 font-medium'>Computer Science Student @ Georgia Institute of Technology</p>
                <div className="container max-w-screen-lg mx-auto mt-2">
					<div>
						<div className="flex flex-wrap justify-center gap-2">
                        <a 
								href="https://github.com/hyeokjinjin"
                                target='_blank'
                                rel='noopener noreferrer'
								className="bg-stone-300 dark:bg-stone-700 text-stone-800 dark:text-stone-100 p-2 font-semibold inline-flex items-center space-x-2 rounded-full">
								<svg
								xmlns="http://www.w3.org/2000/svg"
								xmlnsXlink="http://www.w3.org/1999/xlink"
								aria-hidden="true"
								role="img"
								className="w-5"
								preserveAspectRatio="xMidYMid meet"
								viewBox="0 0 24 24"
								>
								<g fill="none">
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
										fill="currentColor"
									/>
								</g>
								</svg>
							</a>
                            <a 
								href="https://linkedin.com/in/hyeokjinjin"
                                target='_blank'
                                rel='noopener noreferrer'
								className="bg-stone-300 dark:bg-stone-700 text-stone-800 dark:text-stone-100 p-2 font-semibold inline-flex items-center space-x-2 rounded-full">
								<svg
								className="w-5 h-5 fill-current"
								role="img"
								viewBox="0 0 256 256"
								xmlns="http://www.w3.org/2000/svg"
								>
								<g>
									<path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055" />
								</g>
								</svg>
							</a>
							<a 
								href="/assets/2025_Resume.pdf"
                                target='_blank'
                                rel='noopener noreferrer'
								className="bg-stone-300 dark:bg-stone-700 text-stone-800 dark:text-stone-100 p-2 font-semibold inline-flex items-center space-x-2 rounded-full">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 0 24 24" fill="currentColor" class="w-5 h-5">
									<path fill-rule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5H5.625ZM7.5 15a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 15Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H8.25Z" clip-rule="evenodd" />
									<path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
								</svg>
							</a>
							<a 
								href="mailto:hyeokjin808@gmail.com"
								className="bg-stone-300 dark:bg-stone-700 text-stone-800 dark:text-stone-100 p-2 font-semibold inline-flex items-center space-x-2 rounded-full">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
									<path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
									<path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
								</svg>
							</a>
						</div>
					</div>
				</div>
            </div>
            <a 
                href="#portfolioID"
                onClick={scrollToPortfolio}
                className="animate-bounce mb-10 bg-stone-300 dark:bg-stone-700 text-stone-800 dark:text-stone-100 p-2 font-semibold inline-flex items-center space-x-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </a>
        </div>
    )
}

export default Intro;