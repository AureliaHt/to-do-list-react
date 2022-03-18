import React, {useState, createContext} from "react";

export const ThemeColors = {
    day: "white",
    night: "black",
    purple: "purple",
    yellow: "yellow",
    blue: "blue",
    teal: "teal"
};

export const ThemeColorContext = createContext ({
    color: ThemeColors.teal,
    changeColor: (color) => {},
});

export default function ThemeColorWrapper (props) {
    const [color, setColor] = useState(ThemeColors.teal);

    const changeColor = (color) => {
        setColor(color);
    };

    return (
        <ThemeColorContext.Provider
            value={{ color: color, changeColor: changeColor}}>
                {props.children}
        </ThemeColorContext.Provider>
    );
};
