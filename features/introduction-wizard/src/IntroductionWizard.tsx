import { useFormikContext } from "formik";
import React, { useCallback, useMemo } from "react";
import { Wizard } from "@frontend/ui";
import FirstStep from "./steps/FirstStep";
import SecondStep from "./steps/SecondStep";
import ThirdStepAdvisor from "./steps/ThirdStep/AdvisorPortal";
import ThirdStepClient from "./steps/ThirdStep/ClientPortal";
import FourthStep from "./steps/FourthStep";
import FifthStep from "./steps/FifthStep";
import IIntroductionWizard from "./interfaces/IIntroductionWizard";
import MarketplaceStepLabel from "./components/MarketplaceStepLabel";
import {
    IMarketplaceIntroductionWizardAdvisor,
    IMarketplaceIntroductionWizardClient
} from "./interfaces/IMarketplaceIntroductionWizard";
import { getRiskValue, formatValuesToData } from "./utils";

import styles from "./IntroductionWizard.module.scss";

type IntroductionWizardProps = {
    onFinishWizard: (
        data: IMarketplaceIntroductionWizardAdvisor | IMarketplaceIntroductionWizardClient
    ) => Promise<void>;
    isClientCreatedFromHubSpot: boolean;
    isAdvisorPortal: boolean;
};

const IntroductionWizard = ({
    isAdvisorPortal,
    isClientCreatedFromHubSpot,
    onFinishWizard
}: IntroductionWizardProps) => {
    const {
        isValid,
        values: {
            comfortableR: { comfortableRAmount, comfortableRPercentage },
            investmentApp: { investmentAppAmount, investmentAppPercentage },
            questionnaire: {
                currentSituation: currentSituationValue,
                sophistication: sophisticationValue,
                importanceQuestions: importanceQuestionsValue
            }
        }
    } = useFormikContext<IIntroductionWizard>();

    const steps = useMemo(
        () => [
            { id: 1, component: <FirstStep isAdvisorPortal={isAdvisorPortal} /> },
            { id: 2, component: <SecondStep /> },
            {
                id: 3,
                component: isAdvisorPortal ? <ThirdStepAdvisor /> : <ThirdStepClient />
            },
            {
                id: 4,
                component: <FourthStep isAdvisorPortal={isAdvisorPortal} />
            },
            {
                id: 5,
                component: (
                    <FifthStep isAdvisorPortal={isAdvisorPortal} isHubspotVersion={isClientCreatedFromHubSpot} />
                ),
                isDisableNext: !isValid,
                helpText:
                    isClientCreatedFromHubSpot || isAdvisorPortal
                        ? "Please answer all questions to finish and access our Marketplace"
                        : "Please select the option of importance in each question to finish and access our Marketplace",
                isLastStep: true
            },
            {
                id: 6,
                component: <></>,
                icon: <MarketplaceStepLabel label="Marketplace" />
            }
        ],
        [isAdvisorPortal, isClientCreatedFromHubSpot, isValid]
    );

    const handleFinishWizard = useCallback(async () => {
        const data = {
            answers: [
                ...formatValuesToData([...sophisticationValue, ...currentSituationValue]),
                ...Object.entries(importanceQuestionsValue).map(([question, answer]) => ({
                    questionId: Number(question),
                    answer: Number(answer)
                }))
            ],
            riskT: {
                comfortableRAmount: getRiskValue(
                    comfortableRAmount,
                    "comfortableRAmount",
                    true
                ),
                comfortableRPercentage: getRiskValue(
                    comfortableRPercentage,
                    "comfortableRPercentage",
                    true
                ),
                investmentAppAmount: getRiskValue(
                    investmentAppAmount,
                    "investmentAppAmount"
                ),
                investmentAppPercentage: getRiskValue(
                    investmentAppPercentage,
                    "investmentAppPercentage"
                )
            }
        };

        await onFinishWizard(data);
    }, [
        onFinishWizard,
        comfortableRAmount,
        comfortableRPercentage,
        investmentAppAmount,
        investmentAppPercentage,
        sophisticationValue,
        importanceQuestionsValue,
        currentSituationValue
    ]);

    return (
        <div className={styles.container}>
            <Wizard onFinish={handleFinishWizard} steps={steps} />
        </div>
    );
};

export default IntroductionWizard;
