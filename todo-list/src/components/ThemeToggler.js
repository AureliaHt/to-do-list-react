import { useContext, useState } from "react";
import { Dropdown, DropdownToggle, Badge } from "reactstrap";
import {GrUserSettings} from "react-icons/gr";
import ThemeColors from "./context/ThemeContext";

const ThemeToggler = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleClick = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div className="themeTogglerButton">
            <Dropdown isOpen={dropdownOpen} toggle={handleClick}>
                <DropdownToggle tag="div">
                    <GrUserSettings />
                </DropdownToggle>
                <ul className="dropdownMenu show">
                    <li className="dropdownMenuHeader">
                        Select Theme
                    </li>
                    <li className="badgesColors">
                        <Badge
                            color="white"
                            className={props.bgColor === ThemeColors.day ? "active" : ""}
                            onClick={() => {props.handleTheme(ThemeColors.day);
                            }}
                        />{" "}
                        <Badge
                            color="black"
                            className={props.bgColor === ThemeColors.night ? "active" : ""}
                            onClick={() => {props.handleTheme(ThemeColors.night);
                            }}
                        />{" "}
                        <Badge
                            color="purple"
                            className={props.bgColor === ThemeColors.purple ? "active" : ""}
                            onClick={() => {props.handleTheme(ThemeColors.purple);
                            }}
                        />{" "}
                        <Badge
                            color="yellow"
                            className={props.bgColor === ThemeColors.yellow ? "active" : ""}
                            onClick={() => {props.handleTheme(ThemeColors.yellow);
                            }}
                        />{" "}
                        <Badge
                            color="blue"
                            className={props.bgColor === ThemeColors.blue ? "active" : ""}
                            onClick={() => {props.handleTheme(ThemeColors.blue);
                            }}
                        />{" "}
                        <Badge
                            color="teal"
                            className={props.bgColor === ThemeColors.teal ? "active" : ""}
                            onClick={() => {props.handleTheme(ThemeColors.teal);
                            }}
                        />{" "}
                    </li>
                </ul>
            </Dropdown>
        </div>
    );
};

export default ThemeToggler;