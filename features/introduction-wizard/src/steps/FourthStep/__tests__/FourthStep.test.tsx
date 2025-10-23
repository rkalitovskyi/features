import { render } from "@testing-library/react";
import FourthStep from "../FourthStep";
import { describe, vi, it, expect } from "vitest";

vi.mock("../../../components/Lines/Lines", () => ({ default: () => <div>lines</div> }));
vi.mock("../../../components/FieldExplanation/FieldExplanation", () => ({ default: () => <div>FieldExplanation</div> }));
vi.mock("../PortfolioConstructionCard/PortfolioConstructionCard", () => ({
    default: () => <div>PortfolioConstructionCard</div>
}));
vi.mock("../../../components/StepHeader/StepHeader", () => ({ default: () => <div>StepHeader</div> }));

describe("FourthStep", () => {
    it("FourthStep renders correctly for client portal", () => {
        const { asFragment } = render(<FourthStep />);

        expect(asFragment()).toMatchSnapshot();
    });

    it("FourthStep renders correctly for advisor portal", () => {
        const { asFragment } = render(<FourthStep />);

        expect(asFragment()).toMatchSnapshot();
    });
});
