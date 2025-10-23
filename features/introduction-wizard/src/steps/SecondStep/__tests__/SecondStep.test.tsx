import { FormikContextType } from "formik";
import * as useFormikContext from "formik";
import { act, render } from "@testing-library/react";
import SecondStep from "../SecondStep";
import { describe, vi, test, expect } from "vitest";

vi.mock("../IndicatorInfo/IndicatorInfo", () => ({ default: () => <div>IndicatorInfo</div> }));
vi.mock("@mui/icons-material/KeyboardArrowDown", () => ({ default: () => <span>KeyboardArrowDownIcon</span> }));
vi.mock("../../../components/StepHeader/StepHeader", () => ({ default: () => <div>StepHeader</div> }));
vi.mock("../../../components/FieldExplanation/FieldExplanation", () => ({ default: () => <div>FieldExplanation</div> }));
vi.mock("../../../components/Lines/Lines", () => ({ default: () => <div>lines</div> }));
vi.mock("../OfferingCard/OfferingCard", () => ({ default: () => <div>OfferingCard</div> }));

describe("SecondStep", () => {
    test("SecondStep renders correctly", async () => {
        act(() => {
            vi.spyOn(useFormikContext, "useFormikContext").mockReturnValue({
                setFieldValue: vi.fn(),
                values: { isExpandedSecondStep: false }
            } as unknown as FormikContextType<unknown>);
        });

        const { asFragment } = render(<SecondStep />);

        expect(asFragment()).toMatchSnapshot();
    });

    test("Expanded SecondStep renders correctly", async () => {
        act(() => {
            vi.spyOn(useFormikContext, "useFormikContext").mockReturnValue({
                setFieldValue: vi.fn(),
                values: { isExpandedSecondStep: true }
            } as unknown as FormikContextType<unknown>);
        });

        const { asFragment } = render(<SecondStep />);

        expect(asFragment()).toMatchSnapshot();
    });
});
