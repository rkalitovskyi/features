import { render } from "@testing-library/react";
import BlackRibbon from "../BlackRibbon";
import { describe, it, expect } from "vitest";

describe("BlackRibbon", () => {
    it("StepHeader renders correctly", () => {
        const { asFragment } = render(
            <BlackRibbon>
                <>
                    text with <span>highlights</span>
                </>
            </BlackRibbon>
        );

        expect(asFragment()).toMatchSnapshot();
    });
});
