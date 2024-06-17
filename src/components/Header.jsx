export default function Header() {
	return (
		<header className="w-screen px-4 py-6 flex items-center">
			<div className="flex space-x-5 items-center">
			<div>
				<svg
					ariaHidden="true"
					focusable="false"
					className="w-20 h-20"
					role="img"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
				>
					<path
						fill="white"
						d="M215.4 96H144 107.8 96v8.8V144v40.4 89L.2 202.5c1.6-18.1 10.9-34.9 25.7-45.8L48 140.3V96c0-26.5 21.5-48 48-48h76.6l49.9-36.9C232.2 3.9 243.9 0 256 0s23.8 3.9 33.5 11L339.4 48H416c26.5 0 48 21.5 48 48v44.3l22.1 16.4c14.8 10.9 24.1 27.7 25.7 45.8L416 273.4v-89V144 104.8 96H404.2 368 296.6 215.4zM0 448V242.1L217.6 403.3c11.1 8.2 24.6 12.7 38.4 12.7s27.3-4.4 38.4-12.7L512 242.1V448v0c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64v0zM176 160H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
					></path>
				</svg>
			</div>
			<div>
				<h1 className="text-white font-bold text-2xl">Updated Licenses Checker</h1>
				<h2 className="text-white font-semibold text-base">Register of licensed sponsors: workers - GOV.UK</h2>
			</div>
			</div>
		</header>
	)
}
