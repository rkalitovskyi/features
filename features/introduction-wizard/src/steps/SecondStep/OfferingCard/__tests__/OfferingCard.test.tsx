import { StaticImageData } from "next/image";
import { render } from "@testing-library/react";
import { IndicatorColor } from "@frontend/ui";
import OfferingCard from "../OfferingCard";
import { describe, vi, it, expect } from "vitest";

vi.mock("../../IndicatorInfo/IndicatorInfo", () => ({ default: () => <div>IndicatorInfo</div> }));

describe("OfferingCard", () => {
    it("OfferingCard renders correctly", () => {
        const { asFragment } = render(<OfferingCard {...mockCardData} expand={false} />);

        expect(asFragment()).toMatchSnapshot();
    });

    it("Expanded OfferingCard renders correctly", () => {
        const { asFragment } = render(<OfferingCard {...mockCardData} expand={false} />);

        expect(asFragment()).toMatchSnapshot();
    });
});
