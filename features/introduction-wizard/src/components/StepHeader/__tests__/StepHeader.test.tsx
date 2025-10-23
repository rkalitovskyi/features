import { render } from "@testing-library/react";
import StepHeader from "../StepHeader";
import { describe, it, expect } from "vitest";

describe("StepHeader", () => {
    it("StepHeader renders correctly", () => {
        const { asFragment } = render(<StepHeader subtitle="subtitle" title="title" />);

        expect(asFragment()).toMatchSnapshot();
    });
});
