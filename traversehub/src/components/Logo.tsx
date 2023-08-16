import logo from '/traversehub-logo.png';
import { NavLink } from "react-router-dom";

export const Logo = () => {
    return (
        <NavLink to="/">
            <img src={logo} alt='Logo' width={150} height={50} style={{
                objectFit:"cover"
            }}/>
        </NavLink>
    )
}
