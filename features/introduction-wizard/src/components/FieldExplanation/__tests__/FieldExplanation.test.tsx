import { render } from "@testing-library/react";
import FieldExplanation from "../FieldExplanation";
import { describe, it, vi, expect } from "vitest";

vi.mock("@mui/icons-material/HelpOutline", () => ({ default: () => <div>icon</div> }));

describe("FieldExplanation", () => {
    it("FieldExplanation rendres correctly", () => {
        const { asFragment } = render(<FieldExplanation description="description" label="label" />);

        expect(asFragment()).toMatchSnapshot();
    });
});
