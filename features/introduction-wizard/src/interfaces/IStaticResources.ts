import { IntroductionWizardQuestionTypeEnum as QuestionType } from "@frontend/utils/enums";

export interface IWizardStaticResources {
    finalDisclaimImagePreview: string;
    finalDisclaimVideo: string;
}

export interface IWizardQuestion {
    id: number;
    content: string;
}

export interface IHubspotWizardQuestions {
    sophistication: IWizardQuestion[];
    currentSituation: IWizardQuestion[];
}

export interface IQuestionnaire {
    questionType: QuestionType;
    questions: IWizardQuestion[];
}
