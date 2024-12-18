import React from 'react'
import Logo from "../assets/logo.png"
import Profile from "../assets/profile.png"

const Navbar = () => {
    return (
        <>
            <div className='max-padd-container flexBetween py-2'>
                <img src={Logo} alt="ogoIcon" height={155} width={155} />
                <img src={Profile} alt="profileImg" height={50} width={50} className=' rounded-full' />
            </div>
        </>
    )
}

export default Navbar
