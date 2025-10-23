import yup from "@frontend/yup";
import { IntroductionWizardQuestionTypeEnum as QuestionType } from "@frontend/utils/enums";
import { IQuestionnaire } from "./interfaces/IStaticResources";

export const getQuestionsByType = (questionnaire: IQuestionnaire[] | null, questionType: QuestionType) =>
    questionnaire?.find((question) => question.questionType === questionType)?.questions;

type RiskTKeys =
    | "comfortableRAmount"
    | "comfortableRPercentage"
    | "investmentAppAmount"
    | "investmentAppPercentage";

const riskTDefaultValues = {
    comfortableRAmount: 10,
    comfortableRPercentage: 0.1,
    investmentAppAmount: 15,
    investmentAppPercentage: 0.15
};

const getRiskValue = (value: number, name: RiskTKeys, isNegative?: boolean) => {
    const multiplier = isNegative ? -1 : 1;

    return riskTDefaultValues[name] === value ? null : value * multiplier;
};

const getWizardValidationSchema = (surveyQuestionsCount: number, isHotspotClient: boolean) =>
    yup.object().shape({
        questionnaire: yup.object().shape({
            sophistication: yup.array().min(Number(isHotspotClient)),
            currentSituation: yup.array().min(Number(isHotspotClient)),
            importanceQuestions: yup
                .array()
                .transform((obj) => Object.keys(obj))
                .min(surveyQuestionsCount)
        })
    });

const formatValuesToData = (values: string[]) =>
    values.map((value) => ({ questionId: Number(value), answer: null }));

const getPercentageByRange = (range: { max: number; min: number }, value: number) => {
    const delta = range.max - range.min;
    const absoluteValue = value - range.min;
    return absoluteValue / delta;
};

export {
    getRiskValue,
    getWizardValidationSchema,
    formatValuesToData,
    getPercentageByRange
}
