import { useContext } from "react";
import {ThemeColorContext} from "./context/ThemeContext";

const Header = () => {
    const {color} = useContext(ThemeColorContext);

    return (
        <div className="heading">
            <h1>TO DO LIST</h1>
        </div>
    );
};

export default Header;