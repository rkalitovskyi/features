import { IntroductionWizardQuestionTypeEnum as QuestionType } from "@frontend/utils/enums";
import { useFormikContext } from "formik";
import StepHeader from "../../components/StepHeader";
import BlackRibbon from "../../components/BlackRibbon";
import useWizardStaticResources from "../../context/useWizardStaticResources";
import Survey from "./Survey/Survey";
import IIntroductionWizard from "../../interfaces/IIntroductionWizard";
import HotspotQuestions from "./HotspotQuestions/HotspotQuestions";
import { getQuestionsByType } from "../../utils";
import { getAnswerDescription } from "./utils";

import styles from "./fifthStep.module.scss";

type FifthStepProps = {
    isHubspotVersion: boolean;
    isAdvisorPortal?: boolean;
};

const surveyOptions = [
    { value: 1, label: "Not at All" },
    { value: 2, label: "Not Really" },
    { value: 3, label: "Somewhat" },
    { value: 4, label: "Very" },
    { value: 5, label: "Extremely" }
];

const FifthStep = ({ isAdvisorPortal = false, isHubspotVersion = false }: FifthStepProps) => {
    const {
        handleChange,
        values: {
            questionnaire: {
                currentSituation: currentSituationValue,
                sophistication: sophisticationValue,
                importanceQuestions: importanceQuestionsValue
            }
        }
    } = useFormikContext<IIntroductionWizard>();
    const { questionnaire } = useWizardStaticResources();
    const isHubspotOrAdvisor = isHubspotVersion || isAdvisorPortal;
    const stepClientTitle = isHubspotVersion ? "Lorem ipsum dolor sit ame" : "Lorem ipsum dolor sit ame";
    const stepClientSubtitle = isHubspotVersion
        ? "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dolores facere illo iste quos ullam?"
        : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dolores facere illo iste quos ullam?";
    const stepAdvisorTitle = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dolores facere illo iste quos ullam?";
    const stepAdvisorSubtitle =
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dolores facere illo iste quos ullam?";

    const title = isAdvisorPortal ? stepAdvisorTitle : stepClientTitle;
    const subtitle = isAdvisorPortal ? stepAdvisorSubtitle : stepClientSubtitle;

    const sophistication = getQuestionsByType(questionnaire, QuestionType.DstSophistication);
    const currentSituation = getQuestionsByType(questionnaire, QuestionType.CurrentSituation);
    const itemImportance = getQuestionsByType(questionnaire, QuestionType.ItemImportance);

    const showHotspotQuestions = (isHubspotVersion || isAdvisorPortal) && sophistication && currentSituation;

    const firstAnswer = surveyOptions[0];
    const lastAnswer = surveyOptions[surveyOptions.length - 1];

    return (
        <div className={styles.container}>
            <StepHeader subtitle={subtitle} title={title} />
            {showHotspotQuestions && (
                <HotspotQuestions
                    currentSituation={currentSituation}
                    currentSituationValue={currentSituationValue}
                    sophistication={sophistication}
                    sophisticationValue={sophisticationValue}
                    handleChange={handleChange}
                />
            )}
            {itemImportance && (
                <>
                    <BlackRibbon textAlignment={isHubspotOrAdvisor ? "left" : "center"}>
                        <>
                            {isHubspotOrAdvisor ? "3. " : ""} Lorem ipsum dolor. <span>importance</span> Lorem ipsum dolor.{" "}
                            <span>{getAnswerDescription(firstAnswer)}</span> to{" "}
                            <span>{getAnswerDescription(lastAnswer)}</span>
                        </>
                    </BlackRibbon>
                    <Survey
                        answers={surveyOptions}
                        handleChange={handleChange}
                        questions={itemImportance}
                        values={importanceQuestionsValue}
                    />
                </>
            )}
        </div>
    );
};

export default FifthStep;
