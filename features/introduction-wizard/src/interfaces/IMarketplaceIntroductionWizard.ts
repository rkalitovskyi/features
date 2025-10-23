interface IMarketplaceWizardAnswerItem {
    questionId: number;
    answer: number | null;
}

interface IMarketplaceIntroductionWizard {
    answers: IMarketplaceWizardAnswerItem[];
}

export interface IMarketplaceIntroductionWizardClient extends IMarketplaceIntroductionWizard {
    riskT: {
        comfortableRAmount: number | null;
        comfortableRPercentage: number | null;
        investmentAppAmount: number | null;
        investmentAppPercentage: number | null;
    };
}

export interface IMarketplaceIntroductionWizardAdvisor extends IMarketplaceIntroductionWizard {
    riskT: {
        comfortableRAmount: never;
        comfortableRPercentage: never;
        investmentAppAmount: never;
        investmentAppPercentage: never;
    };
}

export default IMarketplaceIntroductionWizard;
