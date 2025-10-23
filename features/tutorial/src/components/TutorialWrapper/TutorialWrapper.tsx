import { ReactNode } from "react";
import classNames from "classnames";

import { MAX_Z_INDEX } from "../../const/const";
import Tooltip from "../Tooltip/Tooltip";
import useTutorial from "../../context/useTutorial";

import styles from "./tutorialWrapper.module.scss";

type TutorialWrapperProps = {
    children?: ReactNode;
    id: string;
    wrapperClassNames?: string;
    hideFrame?: boolean;
};

const TOP_Z_INDEX = MAX_Z_INDEX + 3;
const CONTENT_Z_INDEX = TOP_Z_INDEX - 1;

const TutorialWrapper = ({ children, hideFrame, id, wrapperClassNames }: TutorialWrapperProps) => {
    const {
        currentStep: { description, id: currentStepId, order, title },
        goldFrame,
        handleClose,
        handleNext,
        handleReset,
        isLastStep,
        showTutorial,
        stepsCount,
        tooltipSettings
    } = useTutorial();

    const showTutorialWrapper = id === currentStepId && showTutorial;

    return showTutorialWrapper ? (
        <div className={styles.container} id={currentStepId} style={{ zIndex: tooltipSettings.zIndex || TOP_Z_INDEX }}>
            {!hideFrame && <div className={classNames(styles.frame, { [styles["gold-frame"]]: goldFrame })} />}
            <Tooltip
                currentStep={order + 1}
                description={description}
                isLastStep={isLastStep}
                onClose={handleClose}
                onNext={handleNext}
                onReset={handleReset}
                stepsCount={stepsCount}
                title={title}
                tooltipSettings={tooltipSettings}
            >
                <div className={wrapperClassNames} style={{ zIndex: TOP_Z_INDEX, position: "relative" }}>
                    <div
                        className={styles["disable-content-wrapper"]}
                        style={{
                            zIndex: CONTENT_Z_INDEX
                        }}
                    />
                    {children}
                </div>
            </Tooltip>
        </div>
    ) : (
        <>{children}</>
    );
};

export default TutorialWrapper;
