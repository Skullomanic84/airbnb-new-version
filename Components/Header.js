import Image from 'next/image';
import { SearchIcon } from '@heroicons/react/solid';



function Header() {
    return (
        <navbar className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
        {/*logo section*/}
            <div className="relative Navbar__logo-wrapper flex items-center h-10 cursor-pointer my-auto">
            <Image 
            src="https://links.papareact.com/qd3"
            layout="fill"
            objectFit ="contain"
            objectPosition="left" />
            
            </div>
        {/*search section*/}
            <div className="Navbar__search-wrapper flex item-center md:border-2 rounded-full py-2 md:shadow-sm">

                <input type="text" placeholder="start your search" className="outline-none pl-5 bg-transparent flex-grow text-sm text-gray-600 placeholder-gray-400"/>

                <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />

            </div>

            <div className="Navbar__user-wrapper">
            
            </div>

        </navbar>
    )
}

export default Header

