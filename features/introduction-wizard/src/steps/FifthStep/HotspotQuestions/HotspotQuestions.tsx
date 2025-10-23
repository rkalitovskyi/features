import { ChangeEvent } from "react";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import { Checkbox, checkboxClasses } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { IHubspotWizardQuestions } from "../../../interfaces/IStaticResources";
import BlackRibbon from "../../../components/BlackRibbon/BlackRibbon";

import styles from "./hotspotQuestions.module.scss";

type HotspotQuestionsProps = IHubspotWizardQuestions & {
    currentSituationValue: string[];
    sophisticationValue: string[];
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const HotspotQuestions = ({
    currentSituation,
    currentSituationValue,
    sophistication,
    sophisticationValue,
    handleChange
}: HotspotQuestionsProps) => (
    <div className={styles.container}>
        <BlackRibbon textAlignment="left">
            <>
                1. Lorem <span>sophisticated</span> Lorem ipsum dolor sit. <span>Lorem ipsum dolor sit.</span>
                ?
            </>
        </BlackRibbon>
        <FormControl className={styles.questions}>
            <RadioGroup>
                {sophistication.map(({ content, id }) => (
                    <FormControlLabel
                        checked={String(id) === sophisticationValue[0]}
                        className={styles.question}
                        control={<Radio name="questionnaire.sophistication[0]" onChange={handleChange} />}
                        key={id}
                        label={content}
                        value={id}
                    />
                ))}
            </RadioGroup>
        </FormControl>

        <BlackRibbon textAlignment="left">
            <>
                2. Lorem ipsum dolor. <span>Lorem ipsum dolor sit amet.</span> Lorem ipsum dolor sit amet.
            </>
        </BlackRibbon>
        <FormControl className={styles.questions}>
            {currentSituation.map(({ content, id }) => (
                <FormControlLabel
                    className={styles.question}
                    control={
                        <Checkbox
                            checked={currentSituationValue.includes(String(id))}
                            name="questionnaire.currentSituation"
                            onChange={handleChange}
                            sx={{
                                [`&.${checkboxClasses.checked} svg`]: {
                                    fill: "#004d71"
                                }
                            }}
                        />
                    }
                    key={id}
                    label={content}
                    value={id}
                />
            ))}
        </FormControl>
    </div>
);

export default HotspotQuestions;
