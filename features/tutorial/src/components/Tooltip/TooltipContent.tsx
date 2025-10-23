import CloseIcon from "@mui/icons-material/Close";
import { Typography } from "@mui/material";
import classNames from "classnames";

import TooltipButton from "./TooltipButton";
import { TooltipSettings } from "../../types";

import styles from "./tooltip.module.scss";

export type TooltipContentProps = {
    title: string;
    tooltipSettings: TooltipSettings & {
        hasFinish: boolean;
    };
    description: string;
    currentStep: number;
    stepsCount: number;
    isLastStep: boolean;
    onNext: () => void | null;
    onClose: () => void | null;
    onReset: () => void | null;
};

const TooltipContent = ({
    currentStep,
    description,
    isLastStep,
    onClose,
    onNext,
    onReset,
    stepsCount,
    title,
    tooltipSettings
}: TooltipContentProps) => {
    const showNextStep = !isLastStep;
    const showFinish = isLastStep && tooltipSettings.hasFinish;
    const showCloseBtn = tooltipSettings.hasFinish;

    return (
        <div className={styles.container}>
            {showCloseBtn && (
                <div className={styles["icon-container"]}>
                    <CloseIcon className={styles["close-icon"]} onClick={onClose} />
                </div>
            )}
            <Typography className={classNames("desktop-20", "bold", styles.title)} variant="h3">
                {title}
            </Typography>
            <Typography className={classNames("desktop-16", styles.description)}>{description}</Typography>
            <div className={styles["step-section"]}>
                <Typography className={classNames("desktop-16", styles.steps)}>
                    {currentStep}/{stepsCount}
                </Typography>
                <div className={styles.buttons}>
                    {isLastStep && <TooltipButton label={tooltipSettings.rewatchLabel ?? ""} onClick={onReset} />}
                    {showNextStep && <TooltipButton label="Next" onClick={onNext} />}
                    {showFinish && <TooltipButton label="Finish" onClick={onNext} />}
                </div>
            </div>
        </div>
    );
};

export default TooltipContent;
