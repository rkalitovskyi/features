import { FormikContextType } from "formik";
import { act, render } from "@testing-library/react";
import * as useFormikContext from "formik";
import ThirdStep from "../ThirdStep";
import { describe, vi, test, expect } from "vitest";

vi.mock("../Slider/Slider", () => {
    const Slider = vi.fn(() => <div>Slider</div>);
    const SliderVariants = vi.fn();

    return {
        __esModule: true,
        default: Slider,
        SliderVariants
    };
});
vi.mock("../../../components/StepHeader/StepHeader", () => ({ default: () => <div>StepHeader</div> }));
vi.mock("../../../components/BlackRibbon/BlackRibbon", () => ({ default: () => <div>BlackRibbon</div> }));

describe("ThirdStep", () => {
    test("ThirdStep renders correctly", async () => {
        act(() => {
            vi.spyOn(useFormikContext, "useFormikContext").mockReturnValue({
                handleChange: vi.fn(),
                setFieldValue: vi.fn(),
                values: {
                    investmentApp: {
                        investmentAppAmount: 10000,
                        investmentAppPercentage: 0.12
                    },
                    comfortableR: {
                        comfortableRAmount: 123233,
                        comfortableRPercentage: 0.31
                    }
                }
            } as unknown as FormikContextType<unknown>);
        });

        const { asFragment } = render(<ThirdStep />);

        expect(asFragment()).toMatchSnapshot();
    });
});
