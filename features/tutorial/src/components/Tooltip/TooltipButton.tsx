import classNames from "classnames";
import { Typography } from "@mui/material";

import styles from "./tooltip.module.scss";

type TooltipButtonProps = {
    onClick: () => void;
    label: string;
};

const TooltipButton = ({ label, onClick }: TooltipButtonProps) => (
    <Typography className={classNames("desktop-16", "bold", styles["action-text"])} onClick={onClick}>
        {label}
    </Typography>
);

export default TooltipButton;
