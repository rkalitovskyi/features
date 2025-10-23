import classnames from "classnames";
import SliderMUI from "@mui/material/Slider";
import { getFormattedCurrency, getFormattedPercentage } from "@frontend/utils/formatUtils";
import { SliderThumb } from "./SliderThumb"
import { getReversedValue } from "./utils"

import styles from "./slider.module.scss";

export const valueLabelFormat = (labelValue: number, percentage: number, reverse: boolean) => {
    const value = getReversedValue(labelValue, reverse);
    const percentageValue = getReversedValue(percentage, reverse);

    return (
        <>
            {getFormattedCurrency(value, {
                notation: "standard",
                maximumFractionDigits: 0,
                signDisplay: labelValue ? "always" : "never"
            })}
            <span className={styles["percentage-value"]}>
                {` (${getFormattedPercentage(percentageValue, 0, true, true)}%)`}
            </span>
        </>
    );
};

export enum SliderVariants {
    Green = "green",
    Red = "red"
}

type SliderProps = {
    handleChange: (e: Event, value: number | number[]) => void;
    max: number;
    min: number;
    name: string;
    reverse?: boolean;
    step: number;
    value: number;
    percentageValue: number;
    variant: SliderVariants;
};

const Slider = ({ handleChange, max, min, name, percentageValue, reverse, step, value, variant }: SliderProps) => (
    <SliderMUI
        aria-label="Always visible"
        className={classnames(styles.slider, styles[variant])}
        max={max}
        min={min}
        name={name}
        onChange={handleChange}
        slots={{ thumb: SliderThumb }}
        step={step}
        value={value}
        valueLabelDisplay="on"
        valueLabelFormat={(labelValue) => valueLabelFormat(labelValue, percentageValue, !!reverse)}
    />
);

export default Slider;
