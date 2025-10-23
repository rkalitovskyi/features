import { IntroductionWizardQuestionTypeEnum as QuestionType } from "@frontend/utils/enums";
import { act, render } from "@testing-library/react";
import * as useFormikContext from "formik";
import { FormikContextType } from "formik";
import FifthStep from "../FifthStep";
import * as useWizardStaticResources from "../../../context/useWizardStaticResources";
import { IWizardStaticResourcesContext } from "../../../context/useWizardStaticResources";
import { describe, test, vi, expect } from "vitest";

vi.mock("../../../components/StepHeader/StepHeader", () => ({ default: () => <div>StepHeader</div> }));
vi.mock("../../../components/BlackRibbon/BlackRibbon", () => ({ default: () => <div>BlackRibbon</div> }));
vi.mock("../Survey/Survey", () => ({ default: () => <div>Survey</div> }));
vi.mock("../HotspotQuestions/HotspotQuestions", () => ({ default: () => <div>HotspotQuestions</div> }));

describe("FifthStep", () => {
    test("FifthStep renders correctly for client portal", async () => {
        act(() => {
            vi.spyOn(useFormikContext, "useFormikContext").mockReturnValue({
                handleChange: vi.fn(),
                values: {
                    questionnaire: {
                        currentSituation: [],
                        sophistication: [],
                        importanceQuestions: {}
                    }
                }
            } as unknown as FormikContextType<unknown>);
            vi.spyOn(useWizardStaticResources, "default").mockReturnValue({
                questionnaire: [{ questionType: QuestionType.ItemImportance, questions: ["1"] }]
            } as unknown as IWizardStaticResourcesContext);
        });
        const { asFragment } = render(<FifthStep isHubspotVersion={false} />);

        expect(asFragment()).toMatchSnapshot();
    });

    test("FifthStep renders correctly for Hubspot clients", async () => {
        act(() => {
            vi.spyOn(useFormikContext, "useFormikContext").mockReturnValue({
                handleChange: vi.fn(),
                values: {
                    questionnaire: {
                        currentSituation: [],
                        sophistication: [],
                        importanceQuestions: {}
                    }
                }
            } as unknown as FormikContextType<unknown>);
            vi.spyOn(useWizardStaticResources, "default").mockReturnValue({
                questionnaire: [
                    { questionType: QuestionType.ItemImportance, questions: ["1"] },
                    { questionType: QuestionType.DstSophistication, questions: ["1"] },
                    { questionType: QuestionType.CurrentSituation, questions: ["1"] }
                ]
            } as unknown as IWizardStaticResourcesContext);
        });
        const { asFragment } = render(<FifthStep isHubspotVersion />);

        expect(asFragment()).toMatchSnapshot();
    });

    test("FifthStep renders correctly for advisor portal", async () => {
        act(() => {
            vi.spyOn(useFormikContext, "useFormikContext").mockReturnValue({
                handleChange: vi.fn(),
                values: {
                    questionnaire: {
                        currentSituation: [],
                        sophistication: [],
                        importanceQuestions: {}
                    }
                }
            } as unknown as FormikContextType<unknown>);
            vi.spyOn(useWizardStaticResources, "default").mockReturnValue({
                questionnaire: [{ questionType: QuestionType.ItemImportance, questions: ["1"] }]
            } as unknown as IWizardStaticResourcesContext);
        });
        const { asFragment } = render(<FifthStep isHubspotVersion={false} />);

        expect(asFragment()).toMatchSnapshot();
    });
});
