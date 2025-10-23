import { render } from "@testing-library/react";
import Slider, { SliderVariants } from "../Slider";
import { describe, vi, it, expect } from "vitest";

describe("Slider", () => {
    it("Slider renders correctly", () => {
        const { asFragment } = render(
            <Slider
                handleChange={vi.fn}
                max={1000}
                min={0}
                name="test"
                percentageValue={0}
                step={1000}
                value={0}
                variant={SliderVariants.Green}
            />
        );

        expect(asFragment()).toMatchSnapshot();
    });

    it("Red Slider renders correctly", () => {
        const { asFragment } = render(
            <Slider
                handleChange={vi.fn}
                max={1000}
                min={0}
                name="test"
                percentageValue={0.2}
                step={1000}
                value={2000}
                variant={SliderVariants.Red}
            />
        );

        expect(asFragment()).toMatchSnapshot();
    });
});
