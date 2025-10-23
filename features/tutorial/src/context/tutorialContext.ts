import { createContext } from "react";
import { Step, TooltipSettings } from "../types";

export interface ITutorialContext {
    showTutorial: boolean;
    currentStep: Step;
    isLastStep: boolean;
    stepsCount: number;
    handleNext: () => void;
    handleClose: () => void;
    handleReset: () => void;
    handleShowTutorial: (value: boolean) => void;
    getIsStepActiveById: (stepId: string) => boolean;
    goldFrame: boolean;
    tooltipSettings: TooltipSettings & {
        hasFinish: boolean;
    };
}

const TutorialContext = createContext<ITutorialContext>({} as ITutorialContext);

export default TutorialContext;
