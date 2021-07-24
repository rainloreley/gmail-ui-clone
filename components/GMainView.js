import { useEffect, useState } from 'react';

export default function GMainView() {
	const [emails, setEmails] = useState([]);

	useEffect(() => {
		var newEmails = [];
		for (var i = 0; i < 20; i++) {
			if (i == 5) {
				newEmails.push({
					sender: 'Rick Astley',
					subject: 'cool video',
					message:
						"I've found a really cool video! https://www.youtube.com/watch?v=F4qicK39ISc pls go watch this, it's really cool hahahahahaha",
				});
			} else {
				newEmails.push({
					sender: 'somebody',
					subject: 'This is a test',
					message:
						'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et',
				});
			}
		}
		setEmails(newEmails);
	}, []);
	return (
		<div
			id="centerview"
			className="w-full flex-grow flex flex-col overflow-x-hidden flex-1"
		>
			<div
				id="controls"
				className="mt-4 flex justify-between border-b dark:border-gray-500 pb-3"
			>
				<div className="flex pl-2 overflow-hidden">
					<button className="border-2 border-gray-600 dark:border-gray-400 rounded-sm w-4 h-4 self-center"></button>
					<button>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="feather feather-rotate-cw stroke-current text-gray-800 dark:text-gray-400 self-center ml-6 w-4"
						>
							<polyline points="23 4 23 10 17 10"></polyline>
							<path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
						</svg>
					</button>
					<button>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="feather feather-more-vertical stroke-current text-gray-800 dark:text-gray-400 ml-6 w-4"
						>
							<circle cx="12" cy="12" r="1"></circle>
							<circle cx="12" cy="5" r="1"></circle>
							<circle cx="12" cy="19" r="1"></circle>
						</svg>
					</button>
				</div>
				<div className="mr-4 flex flex-row">
					<p className="text-sm text-gray-500 dark:text-gray-400 self-center mr-4">
						1-50 of 69,420
					</p>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="feather feather-chevron-left stroke-current text-gray-400 self-center w-4 mr-4"
					>
						<polyline points="15 18 9 12 15 6"></polyline>
					</svg>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="feather feather-chevron-right stroke-current text-gray-400 self-center w-4"
					>
						<polyline points="9 18 15 12 9 6"></polyline>
					</svg>
				</div>
			</div>
			<div id="categoryselector" className="flex flex-row mt-4">
				<GCenterViewCategorySelectorCell
					svg={
						<svg>
							<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
							<path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
						</svg>
					}
					text="Primary"
					isSelected={true}
				/>
				<GCenterViewCategorySelectorCell
					svg={
						<svg>
							<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
							<circle cx="9" cy="7" r="4"></circle>
							<path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
							<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
						</svg>
					}
					text="Social"
				/>
				<GCenterViewCategorySelectorCell
					svg={
						<svg>
							<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
							<line x1="7" y1="7" x2="7.01" y2="7"></line>
						</svg>
					}
					text="Promotions"
				/>
				<div className="w-1/3"></div>
			</div>

			<ul className=" flex flex-col flex-grow h-full bg-gray-100 dark:bg-dark-secondary">
				{emails.map((email) => (
					<li className="flex flex-row p-2 border-b dark:border-gray-600">
						<button className="border-2 border-gray-400 rounded-sm w-4 h-4 self-center"></button>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="feather feather-star stroke-current text-gray-400 w-5 ml-2"
						>
							<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
						</svg>
						<p className="font-semibold ml-2 w-56 dark:text-gray-200">
							{email.sender}
						</p>
						<p className="truncate overflow-hidden overflow-ellipsis break-all w-3/4 text-gray-500 dark:text-gray-400">
							<b>{email.subject}</b> - {email.message}
						</p>
					</li>
				))}
			</ul>
			<div className="flex flex-row justify-between m-4">
				<div id="gdriveprogressbar">
					<div className="w-40 bg-gray-300 dark:bg-gray-600 h-2 rounded">
						<div className="w-1/3 bg-gray-600 dark:bg-gray-400 h-2 rounded"></div>
					</div>
					<p className="text-gray-400 text-sm">5 GB of 15 GB used</p>
				</div>
				<div className="flex flex-row">
					<p className="text-sm text-gray-600 dark:text-gray-400">
						<a className="hover:underline">Terms</a> •{' '}
						<a
							className="hover:underline"
							href="https://abmgrt.dev/privacy"
							target="_blank"
						>
							Privacy
						</a>{' '}
						• <a className="hover:underline">Program Policies</a>
					</p>
				</div>
				<p className="text-gray-500 text-sm">
					Last account activity: 1 second ago
				</p>
			</div>
		</div>
	);
}

function GCenterViewCategorySelectorCell({ svg, text, isSelected }) {
	return (
		<div
			className={`${
				isSelected ? 'border-b-2 border-red-500' : ''
			} flex-grow mx-2`}
		>
			<div className="flex flex-row mb-3 ml-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class={`feather feather-rotate-cw stroke-current ${
						isSelected ? 'text-red-500' : 'text-gray-600 dark:text-gray-400'
					} self-center`}
				>
					{svg}
				</svg>
				<p
					className={`font-medium ${
						isSelected ? 'text-red-500' : 'text-gray-600 dark:text-gray-400'
					} ml-2 self-center`}
				>
					{text}
				</p>
			</div>
		</div>
	);
}
