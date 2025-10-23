import { ChangeEvent } from "react";
import { Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import classnames from "classnames";

import styles from "./survey.module.scss";

type SurveyProps = {
    answers: { value: number; label: string }[];
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    questions: { id: number; content: string }[];
    values: { [key: number]: string };
};

const Survey = ({ answers, handleChange, questions, values }: SurveyProps) => (
    <div className={styles.container}>
        <div className={styles["answers-header"]}>
            <Typography className="desktop-12">
                {answers[0].label}
                {"\n"}Important
            </Typography>
            <div className={styles.answers}>
                {answers.map(({ value }) => (
                    <Typography className="desktop-17" key={value}>
                        {value}
                    </Typography>
                ))}
            </div>
            <Typography className="desktop-12">
                {answers[answers.length - 1].label}
                {"\n"}Important
            </Typography>
        </div>
        <div className={styles.questions}>
            {questions.map(({ content, id }, index) => (
                <FormControl className={styles.question} key={id}>
                    <FormLabel className={styles["label-container"]}>
                        <Typography className={classnames("desktop-17", styles.label)}>
                            <span>{index + 1}.</span>
                            {content}
                        </Typography>
                    </FormLabel>
                    <RadioGroup row>
                        {answers.map(({ value: answerId }) => (
                            <FormControlLabel
                                control={
                                    <Radio
                                        checked={values[id] === String(answerId)}
                                        name={`questionnaire.importanceQuestions[${String(id)}]`}
                                        onChange={handleChange}
                                    />
                                }
                                key={answerId}
                                label=""
                                value={answerId}
                            />
                        ))}
                    </RadioGroup>
                </FormControl>
            ))}
        </div>
        <Typography className={classnames("mobile-14", styles.legend)}>
            *Lorem ipsum dolor sit amet, consectetur adipisicing.
        </Typography>
    </div>
);
export default Survey;
