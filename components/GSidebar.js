export default function GSidebar() {
	return (
		<div id="sidebar" className="w-72 mr-4">
			<div className="ml-2 mb-4 mt-2">
				<button className="flex flex-row p-1 border shadow-lg rounded-full px-5 transition-all hover:shadow-xl hover:bg-gray-100 dark:border-gray-500 dark:hover:bg-dark-tertiary">
					<img
						src="https://www.gstatic.com/images/icons/material/colored_icons/2x/create_32dp.png"
						className="w-10 self-center"
					/>
					<p className="text-center self-center text-gray-700 dark:text-gray-300 ml-2 text-sm">
						Compose
					</p>
				</button>
			</div>
			<div id="emailFolders" className="border-b dark:border-gray-500 pb-2">
				<ul>
					<SidebarEmailCell
						svg={
							<svg>
								<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
								<path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
							</svg>
						}
						text="Inbox"
						isSelected={true}
					/>
					<SidebarEmailCell
						svg={
							<svg>
								<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
							</svg>
						}
						text="Starred"
						isSelected={false}
					/>
					<SidebarEmailCell
						svg={
							<svg>
								<circle cx="12" cy="12" r="10"></circle>
								<polyline points="12 6 12 12 16 14"></polyline>
							</svg>
						}
						text="Snoozed"
						isSelected={false}
					/>
					<SidebarEmailCell
						svg={
							<svg>
								<line x1="22" y1="2" x2="11" y2="13"></line>
								<polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
							</svg>
						}
						text="Sent"
					/>
					<SidebarEmailCell
						svg={
							<svg>
								<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
								<polyline points="13 2 13 9 20 9"></polyline>
							</svg>
						}
						text="Drafts"
					/>
				</ul>
			</div>
			<div id="meetmenu" className="border-b dark:border-gray-500 pb-2">
				<p className="ml-4 mt-2 font-bold dark:text-gray-200">Meet</p>
				<ul>
					<SidebarEmailCell
						svg={
							<svg>
								<polygon points="23 7 16 12 23 17 23 7"></polygon>
								<rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
							</svg>
						}
						text="New meeting"
					/>
					<SidebarEmailCell
						svg={
							<svg>
								<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
								<line x1="8" y1="21" x2="16" y2="21"></line>
								<line x1="12" y1="17" x2="12" y2="21"></line>
							</svg>
						}
						text="Join a meeting"
					/>
				</ul>
			</div>
			<div id="hangouts">
				<p className="ml-4 mt-2 font-bold dark:text-gray-200">Hangouts</p>
				<ul className="ml-4 mt-2">
					<SidebarHangoutsChatCell
						pictureurl="https://unavatar.io/twitter/elonmusk"
						name="Elon Musk"
						text="Jeff is back :("
					/>
					<SidebarHangoutsChatCell
						pictureurl="https://pbs.twimg.com/profile_images/1364264349204959235/fJPgOBd2_400x400.jpg"
						name="Marques Brownlee"
						text="You: Can't wait for your iPhone 69 review!"
					/>
				</ul>
			</div>
		</div>
	);
}
function SidebarHangoutsChatCell({ pictureurl, name, text }) {
	return (
		<li>
			<div className="flex flex-row mb-2">
				<img src={pictureurl} className="rounded-full w-8 h-8 self-center" />
				<div className="flex flex-col self-center ml-2">
					<p className="text-sm font-medium text-gray-700 dark:text-gray-300">
						{name}
					</p>
					<p className="text-xs text-gray-500 dark:text-gray-400">{text}</p>
				</div>
			</div>
		</li>
	);
}

function SidebarEmailCell({ svg, text, isSelected }) {
	return (
		<li>
			<div
				className={`${
					isSelected ? 'bg-red-200' : 'hover:bg-gray-100 dark:hover:bg-gray-800'
				} rounded-r-2xl p-1`}
			>
				<div className="flex flex-row ml-4">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						className={`feather w-5 self-center ${
							isSelected ? 'text-red-600' : 'text-gray-600 dark:text-gray-400'
						} stroke-current`}
					>
						{svg}
					</svg>
					<p
						className={`${
							isSelected ? 'text-red-600' : 'text-gray-600 dark:text-gray-400'
						} font-medium ml-3 text-sm self-center`}
					>
						{text}
					</p>
				</div>
			</div>
		</li>
	);
}
