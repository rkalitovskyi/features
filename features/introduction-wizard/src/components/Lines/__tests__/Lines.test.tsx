import { render } from "@testing-library/react";
import Lines from "../Lines";
import { describe, it, vi, expect } from "vitest";

vi.mock("@mui/icons-material/HelpOutline", () => ({ default: () => <div>icon</div> }));

describe("Lines", () => {
    it("Lines rendres correctly", () => {
        const { asFragment } = render(<Lines count={5} left={123} top={20} />);

        expect(asFragment()).toMatchSnapshot();
    });
});
