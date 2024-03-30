import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.svg";

const Navbar = () => {
    const activeStyle = "underline underline-offset-2 ";

    return (
        <nav className="w-full py-4 px-48 flex flex-row justify-between items-center">
            <img src={Logo} alt="logo Sweeties" className="w-24" />
            <ul className="flex flex-row gap-5 font-bodoni text-p2 text-eerie">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined}>
                        inicio
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/servicios"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined}>
                        servicios
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/galería"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined}>
                        galería
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/contacto"
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined}>
                        contacto
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;