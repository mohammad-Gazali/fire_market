import React, { useState } from "react";
import NavLink from "./NavLink";
import NavLogo from "./NavLogo";
import { FaFire, FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5"
import NavLinkSmallDevice from "./NavLinkSmallDevice";
import NavPersonal from "./NavPersonal";


const Navbar = () => {
	const [open, setOpen] = useState(false);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setOpen((preState) => !preState);
    }

	return (
		<nav>
			<section className={`h-16 myp bg-mydark flex items-center justify-between shadow-lg transition-all`}>
                <NavPersonal big={false} />
                <NavLogo name="Fire Market" icon={<FaFire />} />
                <ul className="items-center gap-8 md:flex hidden">
                    <NavLink name="Test" href="/" />
                    <NavLink name="Test" href="/" />
                    <NavLink name="Test" href="/" />
                    <NavLink name="Test" href="/" />
                    <NavPersonal big/>
                </ul>
                <button className={`md:hidden block relative text-2xl mr-4 text-white transition-all`} onClick={handleClick}>
                    <FaBars className={`transition-all delay-100 ${ open ? "scale-0" : "scale-100" } absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2`} />
                    <IoClose className={`transition-all delay-100 text-3xl ${ open ? "scale-100" : "scale-0" } absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2`} />
                </button>
            </section>
			<ul className={`md:hidden origin-top ${open ? " max-h-64 mypady" : "max-h-0"} overflow-hidden flex flex-col gap-3 bg-mydark/90 mypadx transition-all duration-300`}>
                <NavLinkSmallDevice icon={<FaFire />} name="Test" href="/" />
                <NavLinkSmallDevice icon={<FaFire />} name="Test" href="/" />
                <NavLinkSmallDevice icon={<FaFire />} name="Test" href="/" />
                <NavLinkSmallDevice icon={<FaFire />} name="Test" href="/" />
            </ul>
		</nav>
	);
};

export default Navbar;
