interface IIntroductionWizard {
    isExpandedSecondStep: boolean;
    investmentApp: {
        investmentAppAmount: number;
        investmentAppPercentage: number;
    };
    comfortableR: {
        comfortableRAmount: number;
        comfortableRPercentage: number;
    };
    questionnaire: {
        importanceQuestions: { [key: number]: string };
        sophistication: string[];
        currentSituation: string[];
    };
}

export default IIntroductionWizard;
