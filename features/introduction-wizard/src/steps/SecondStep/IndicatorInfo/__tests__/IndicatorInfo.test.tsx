import { render } from "@testing-library/react";
import { IndicatorColor } from "@frontend/ui";
import IndicatorInfo from "../IndicatorInfo";
import { describe, vi, it, expect } from "vitest";

vi.mock("@frontend/ui", () => ({
    Indicator: () => <div>Indicator</div>
}));

describe.skip("IndicatorInfo", () => {
    it("IndicatorInfo renders correctly", () => {
        const { asFragment } = render(<IndicatorInfo color={IndicatorColor.Orange} value="value" />);

        expect(asFragment()).toMatchSnapshot();
    });
});
