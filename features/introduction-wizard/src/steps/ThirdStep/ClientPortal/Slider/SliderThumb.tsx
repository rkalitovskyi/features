import { HTMLAttributes, ReactNode } from "react";
import { SliderThumb as SliderThumbMUI } from "@mui/material/Slider";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";


import styles from "./slider.module.scss";

interface SliderThumbProps extends HTMLAttributes<unknown> {
    children: ReactNode;
}

const SliderThumb = ({ children, ...other }: SliderThumbProps) => (
    <SliderThumbMUI {...other}>
        {children}
        <div className={styles.thumb}>
            <MonetizationOnIcon fontSize="large" />
        </div>
    </SliderThumbMUI>
);

export default SliderThumb;
