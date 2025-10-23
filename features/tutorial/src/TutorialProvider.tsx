import { ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import { isFunction } from "lodash";
import TutorialContext from "./context/tutorialContext";
import Background from "./components/Background/Background";
import { Step, TooltipSettings } from "./types";

type TutorialProviderProps = {
    children: ReactNode;
    steps: Step[];
    onFinish?: () => Promise<null>;
    tooltipSettings?: TooltipSettings;
    showBackground?: boolean;
    goldFrame?: boolean;
};

const TutorialProvider = ({
    children,
    goldFrame = false,
    onFinish,
    showBackground = true,
    steps,
    tooltipSettings
}: TutorialProviderProps) => {
    const sortedSteps = steps.sort((prevStep, nextStep) => prevStep.order - nextStep.order);
    const [showTutorial, setShowTutorial] = useState<boolean>(false);
    const [currentStep, setCurrentStep] = useState<number>(0);
    const showBlackBackground = showTutorial && showBackground;

    const getIsStepActiveById = useCallback(
        (stepId: string) => showTutorial && sortedSteps[currentStep].id === stepId,
        [sortedSteps, showTutorial, currentStep]
    );

    const handleNext = useCallback(async () => {
        if (currentStep !== steps.length - 1) {
            setCurrentStep((prev) => prev + 1);
        } else {
            if (onFinish) {
                await onFinish();
            }
            setShowTutorial(false);
        }
    }, [onFinish, currentStep, steps.length]);

    const handleClose = useCallback(async () => {
        if (onFinish) {
            await onFinish();
        }
        setShowTutorial(false);
    }, [onFinish]);

    const handleReset = useCallback(() => {
        setCurrentStep(0);
    }, []);

    const handleShowTutorial = useCallback((value: boolean) => setShowTutorial(value), []);

    const providerValues = useMemo(
        () => ({
            showTutorial,
            handleNext,
            currentStep: sortedSteps[currentStep],
            isLastStep: sortedSteps.length - 1 === currentStep,
            stepsCount: sortedSteps.length,
            handleClose,
            handleReset,
            handleShowTutorial,
            getIsStepActiveById,
            tooltipSettings: {
                placement: tooltipSettings?.placement ?? "top",
                rewatchLabel: tooltipSettings?.rewatchLabel ?? "Restart",
                shadow: tooltipSettings?.shadow ?? "default",
                hasFinish: isFunction(onFinish),
                ...tooltipSettings
            },
            goldFrame
        }),
        [
            showTutorial,
            currentStep,
            sortedSteps,
            handleNext,
            handleClose,
            handleReset,
            getIsStepActiveById,
            handleShowTutorial,
            tooltipSettings,
            goldFrame,
            onFinish
        ]
    );

    useEffect(() => {
        const element = document.getElementById(sortedSteps[currentStep].id);

        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    }, [currentStep, sortedSteps]);

    return (
        <TutorialContext.Provider value={providerValues}>
            {children}
            {showBlackBackground && <Background />}
        </TutorialContext.Provider>
    );
};

export default TutorialProvider;
