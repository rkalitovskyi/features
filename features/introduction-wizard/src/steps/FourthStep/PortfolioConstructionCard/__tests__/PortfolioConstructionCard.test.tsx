import { render } from "@testing-library/react";
import PortfolioConstructionCard from "../PortfolioConstructionCard";
import { describe, vi, it, expect } from "vitest";

vi.mock("@mui/icons-material/Done", () => ({ default: () => <span>icon</span> }));

describe("PortfolioConstructionCard", () => {
    it("PortfolioConstructionCard rendres correctly", () => {
        const { asFragment } = render(
            <PortfolioConstructionCard
                ap="ap"
                goals={["goals"]}
                cScore="cScore"
                riskT="riskT"
                secondaryFocus="riskT"
                title="riskT"
            />
        );

        expect(asFragment()).toMatchSnapshot();
    });
});
