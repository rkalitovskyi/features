import { render } from "@testing-library/react";
import MarketplaceStepLabel from "../MarketplaceStepLabel";
import { describe, it, expect } from "vitest";

describe("MarketplaceStepLabel", () => {
    it("MarketplaceStepLabel renders correctly", () => {
        const { asFragment } = render(<MarketplaceStepLabel label="Marketplave" />);

        expect(asFragment()).toMatchSnapshot();
    });
});
