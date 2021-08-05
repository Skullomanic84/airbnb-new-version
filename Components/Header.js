import Image from 'next/image'



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
            <div className="Navbar__search-wrapper">
            
            </div>

            <div className="Navbar__user-wrapper">
            
            </div>

        </navbar>
    )
}

export default Header

