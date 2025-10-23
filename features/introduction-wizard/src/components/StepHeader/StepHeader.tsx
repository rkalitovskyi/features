import React from "react";
import { Typography } from "@mui/material";
import classNames from "classnames";

import styles from "./stepHeader.module.scss";

type StepHeaderProps = {
    subtitle: string;
    title: string;
};

const StepHeader = ({ subtitle, title }: StepHeaderProps) => (
    <>
        <Typography className={classNames("font-proxima", "desktop-34", styles.title)} variant="h1">
            {title}
        </Typography>
        <Typography className={classNames("desktop-20", styles.subtitle)}>{subtitle}</Typography>
    </>
);

export default StepHeader;
