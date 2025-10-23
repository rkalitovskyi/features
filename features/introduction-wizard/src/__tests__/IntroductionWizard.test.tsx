import { FormikContextType } from "formik";
import * as useFormikContext from "formik";
import { act, render } from "@testing-library/react";
import * as useWizardStaticResources from "../context/useWizardStaticResources";
import IntroductionWizard from "../IntroductionWizard";
import { IWizardStaticResourcesContext } from "../context/useWizardStaticResources";
import { describe, test, vi, expect } from "vitest";

vi.mock("../steps/FirstStep/FirstStep", () => ({ default: () => <div>step 1</div> }));
vi.mock("../steps/SecondStep/SecondStep", () => ({ default: () => <div>step 2</div> }));
vi.mock("../steps/ThirdStep/ThirdStep", () => ({ default: () => <div>step 3</div> }));
vi.mock("../steps/FourthStep/FourthStep", () => ({ default: () => <div>step 4</div> }));
vi.mock("../steps/FifthStep/FifthStep", () => ({ default: () => <div>step 5</div> }));
vi.mock("../components/MarketplaceStepLabel", () => ({ default: () => <div>Marketplace Step Label</div> }));
vi.mock("@frontend/ui", () => ({ Wizard: () => <div>wizard</div> }));

describe("IntroductionWizard", () => {
    test("IntroductionWizard renders correctly", async () => {
        act(() => {
            vi.spyOn(useFormikContext, "useFormikContext").mockReturnValue({
                values: {
                    questionnaire: {
                        sophistication: [],
                        currentSituation: [],
                        importanceQuestions: {}
                    },
                    investmentApp: {
                        investmentAppAmount: 10000,
                        investmentAppPercentage: 0.12
                    },
                    comfortableR: {
                        comfortableRAmount: 123233,
                        comfortableRPercentage: 0.31
                    }
                }
            } as unknown as FormikContextType<unknown>);
            vi.spyOn(useWizardStaticResources, "default").mockReturnValue({
                questions: []
            } as unknown as IWizardStaticResourcesContext);
        });

        const { asFragment } = render(
            <IntroductionWizard onFinishWizard={() => {}} isAdvisorPortal={false} isClientCreatedFromHubSpot={false} />
        );

        expect(asFragment()).toMatchSnapshot();
    });
});
