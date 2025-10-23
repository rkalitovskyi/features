import { ReactNode } from "react";
import classnames from "classnames";
import { Typography } from "@mui/material";

import styles from "./blackRibbon.module.scss";

type BlackRibbonProps = {
    children: ReactNode;
    textAlignment?: "left" | "center";
};

const BlackRibbon = ({ children, textAlignment = "center" }: BlackRibbonProps) => (
    <div className={classnames(styles.container, styles[textAlignment])}>
        <Typography className={classnames("desktop-20", "bold")} variant="body1">
            {children}
        </Typography>
    </div>
);

export default BlackRibbon;
