import { ReactNode } from "react";
import { renderHook } from "@testing-library/react";
import useWizardStaticResources, { WizardStaticResourcesProvider } from "../useWizardStaticResources";
import { describe, it, vi, expect } from "vitest";

const callUseWizard = () =>
    renderHook(() => useWizardStaticResources(), {
        wrapper: ({ children }: { children: ReactNode }) => (
            <WizardStaticResourcesProvider
                answers={[]}
                questions={[]}
                wizardStaticResources={{ finalDisclaimImagePreview: "123", finalDisclaimVideo: "123" }}
            >
                {children}
            </WizardStaticResourcesProvider>
        )
    });

describe("useWizardStaticResources hook", () => {
    window.scrollTo = vi.fn();

    it("useWizardStaticResources with init state", () => {
        const { result } = callUseWizard();

        expect(result.current).toMatchSnapshot();
    });
});
