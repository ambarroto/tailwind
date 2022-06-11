import ShowData from './ShowData';

export default function PageHeadings() {
  return (
	<div className="lg:flex lg:items-center lg:justify-between mb-6">
	  <div className="flex-1 min-w-0">
		<h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Page Name</h2>
	  </div>
	  <div className="mt-5 flex lg:mt-0 lg:ml-4">
		<span className="sm:block mr-2">
			<ShowData />
		</span>
		<span className="sm:block">
			<div className="relative">
				<div className="absolute text-gray-600 dark:text-gray-400 flex items-center pl-4 h-full cursor-pointer">
					<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
						<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
						<circle cx="10" cy="10" r="7" />
						<line x1="21" y1="21" x2="15" y2="15" />
					</svg>
				</div>
				<input className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-12 text-sm border-gray-300 rounded border shadow" placeholder="Filter" />
			</div>
		</span>
	  </div>
	</div>
  )
}
