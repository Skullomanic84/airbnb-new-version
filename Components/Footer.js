function Footer() {
    return (
        <div className='footer__container grid grid-cols-2 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
            <div className='first_column space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>ABOUT</h5>
            <p>How Airbnb works</p>
            <p>Newsroom</p>
            <p>Aribnb 2021</p>
            <p>Investors</p>
            <p>Airbnb Plus</p>
            </div>

            <div className='second_column space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>COMMUNITY</h5>
            <p>Diversity & Belonging</p>
            <p>Accessibility</p>
            <p>Airbnb Associates</p>
            <p>Guest Referrals</p>
            <p>Frontline Stays</p>

            </div>

            <div className='third_column space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>HOST</h5>
            <p>Host your home</p>
            <p>Host an Online Experience</p>
            <p>Host an Experience</p>
            <p>Responsible hosting</p>
            <p>Resource Center</p>

            </div>

            <div className='fourth_column space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>SUPPORT</h5>
            <p>Our COVID-19 Response</p>
            <p>Help Center</p>
            <p>Cancellation options</p>
            <p>Neighborhood Support</p>
            <p>Trust & Safety</p>

            </div>

        </div>
    )
}

export default Footer
