import { render } from "@testing-library/react";
import Survey from "../Survey";
import { describe, vi, it, expect } from "vitest";

const questionsMock = [
    { id: 1, content: "question 1" },
    { id: 2, content: "question 2" },
    { id: 3, content: "question 3" }
];

const answersMock = [
    { value: 4, label: "answer 1" },
    { value: 5, label: "answer 2" },
    { value: 6, label: "answer 3" }
];

const mockValues = {
    [questionsMock[0].id]: String(answersMock[0].value)
};

describe("Survey", () => {
    it("Survey renders correctly with empty values", () => {
        const { asFragment } = render(
            <Survey answers={answersMock} handleChange={vi.fn()} questions={questionsMock} values={{}} />
        );

        expect(asFragment()).toMatchSnapshot();
    });

    it("Survey renders correctly with some values", () => {
        const { asFragment } = render(
            <Survey answers={answersMock} handleChange={vi.fn()} questions={questionsMock} values={mockValues} />
        );

        expect(asFragment()).toMatchSnapshot();
    });
});
