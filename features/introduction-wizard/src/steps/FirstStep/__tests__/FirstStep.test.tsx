import { act, render } from "@testing-library/react";
import FirstStep from "../FirstStep";
import * as useWizardStaticResources from "../../../context/useWizardStaticResources";
import { IWizardStaticResourcesContext } from "../../../context/useWizardStaticResources";
import { describe, vi, test, expect } from "vitest";

vi.mock("../../../components/StepHeader/StepHeader", () => ({ default: () => <div>StepHeader</div> }));

vi.mock("@frontend/shared/components/Media", () => ({ default: () => <div>Media</div> }));

const staticResourcesMock = {
    finalDisclaimImagePreview: "finalDisclaimImagePreview",
    finalDisclaimVideo: "finalDisclaimVideo"
};

describe("FirstStep", () => {
    test("StepHeader renders correctly without staticResources", async () => {
        act(() => {
            vi.spyOn(useWizardStaticResources, "default").mockReturnValue({
                wizardStaticResources: null
            } as unknown as IWizardStaticResourcesContext);
        });

        const { asFragment } = render(<FirstStep />);

        expect(asFragment()).toMatchSnapshot();
    });

    test("StepHeader renders correctly with staticResources", async () => {
        act(() => {
            vi.spyOn(useWizardStaticResources, "default").mockReturnValue({
                wizardStaticResources: staticResourcesMock
            } as unknown as IWizardStaticResourcesContext);
        });

        const { asFragment } = render(<FirstStep />);

        expect(asFragment()).toMatchSnapshot();
    });
});
