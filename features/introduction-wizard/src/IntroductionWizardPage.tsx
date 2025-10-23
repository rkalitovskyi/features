import { Formik } from "formik";
import { noop } from "lodash";
import QuestionType from "./enums/IntroductionWizardQuestionTypeEnum";
import IntroductionWizard from "./IntroductionWizard";
import { IQuestionnaire, IWizardStaticResources } from "./interfaces/IStaticResources";
import { getQuestionsByType, getPercentageByRange, getWizardValidationSchema } from "./utils";
import { WizardStaticResourcesProvider } from "./context/useWizardStaticResources";
import {
    IMarketplaceIntroductionWizardAdvisor,
    IMarketplaceIntroductionWizardClient
} from "./interfaces/IMarketplaceIntroductionWizard";

const ranges = {
    comfortableRAmount: {
        max: 100000,
        min: 0
    },
    investmentAppAmount: {
        max: 100000,
        min: 0
    }
};

const investmentAppAmount = 15000;
const comfortableRAmount = 10000;

const {
    comfortableRAmount: comfortableRAmountRanges,
    investmentAppAmount: investmentAppAmountRanges
} = ranges;

const initialValues = {
    isExpandedSecondStep: false,
    investmentApp: {
        investmentAppAmount,
        investmentAppPercentage: getPercentageByRange(
            investmentAppAmountRanges,
            investmentAppAmount
        )
    },
    comfortableR: {
        comfortableRAmount,
        comfortableRPercentage: getPercentageByRange(comfortableRAmountRanges, comfortableRAmount)
    },
    questionnaire: {
        sophistication: [],
        currentSituation: [],
        importanceQuestions: {}
    }
};

type IntroductionWizardPageProps = {
    isClientCreatedFromHubSpot: boolean;
    wizardStaticResources: IWizardStaticResources | null;
    questionnaire: IQuestionnaire[] | null;
    onFinishWizard: (
        data: IMarketplaceIntroductionWizardAdvisor | IMarketplaceIntroductionWizardClient
    ) => Promise<void>;
    isAdvisorPortal?: boolean;
};

const IntroductionWizardPage = ({
    isAdvisorPortal,
    isClientCreatedFromHubSpot,
    onFinishWizard,
    questionnaire,
    wizardStaticResources
}: IntroductionWizardPageProps) => (
    <WizardStaticResourcesProvider questionnaire={questionnaire} wizardStaticResources={wizardStaticResources}>
        <Formik
            initialValues={initialValues}
            onSubmit={noop}
            validationSchema={() =>
                getWizardValidationSchema(
                    getQuestionsByType(questionnaire, QuestionType.ItemImportance)?.length ?? 0,
                    isClientCreatedFromHubSpot || !!isAdvisorPortal
                )
            }
            validateOnMount
        >
            <IntroductionWizard
                isAdvisorPortal={!!isAdvisorPortal}
                isClientCreatedFromHubSpot={isClientCreatedFromHubSpot}
                onFinishWizard={onFinishWizard}
            />
        </Formik>
    </WizardStaticResourcesProvider>
);

export default IntroductionWizardPage;
