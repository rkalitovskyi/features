import { useFormikContext } from "formik";
import React from "react";
import { Typography } from "@mui/material";
import classnames from "classnames";
import { IndicatorColor } from "@frontend/ui";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import OfferingCard from "./OfferingCard/OfferingCard";
import StepHeader from "../../components/StepHeader";
import FieldExplanation from "../../components/FieldExplanation";
import IndicatorInfo from "./IndicatorInfo/IndicatorInfo";
import offerings from "./mockCardData";
import IIntroductionWizard from "../../interfaces/IIntroductionWizard";
import Lines from "../../components/Lines";

import styles from "./secondStep.module.scss";

const LINES_COUNT = 7;

const SecondStep = () => {
    const {
        setFieldValue,
        values: { isExpandedSecondStep }
    } = useFormikContext<IIntroductionWizard>();

    return (
        <div className={classnames(styles.container, { [styles.expand]: isExpandedSecondStep })}>
            <div className={styles["header-container"]}>
                <StepHeader
                    subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor nihil qui repellat sunt. Aliquid animi dignissimos dolorem ducimus eveniet, iusto!"
                    title="Lorem ipsum dolor sit amet."
                />
                <div className={styles["black-box"]}>
                    <Typography className={classnames("desktop-20", "bold")} variant="body1">
                        Below are <span>3 hypothetical offerings</span> that seem similar but actually have very
                        different risk profiles
                    </Typography>
                </div>
            </div>
            <div className={styles.cards}>
                {isExpandedSecondStep && (
                    <>
                        <div className={styles["info-section"]}>
                            <FieldExplanation
                                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt hic incidunt nisi provident ratione veniam voluptatibus. Debitis explicabo quidem sunt!"
                                label="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                            />
                            <FieldExplanation
                                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt hic incidunt nisi provident ratione veniam voluptatibus. Debitis explicabo quidem sunt!"
                                label="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                            />
                            <FieldExplanation
                                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt hic incidunt nisi provident ratione veniam voluptatibus. Debitis explicabo quidem sunt!"
                                label="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                            />
                            <FieldExplanation
                                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt hic incidunt nisi provident ratione veniam voluptatibus. Debitis explicabo quidem sunt!"
                                label="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                            />
                            <FieldExplanation
                                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt hic incidunt nisi provident ratione veniam voluptatibus. Debitis explicabo quidem sunt!"
                                label="ELorem ipsum dolor sit amet, consectetur adipisicing elit."
                            />
                            <FieldExplanation
                                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt hic incidunt nisi provident ratione veniam voluptatibus. Debitis explicabo quidem sunt!"
                                label="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                            />
                            <FieldExplanation
                                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt hic incidunt nisi provident ratione veniam voluptatibus. Debitis explicabo quidem sunt!"
                                label="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                            />
                        </div>
                        <Lines bottom={34} count={LINES_COUNT} left={0} />
                    </>
                )}
                {offerings.map((offering) => (
                    <OfferingCard {...offering} expand={isExpandedSecondStep} key={offering.name} />
                ))}
            </div>
            <div className={styles["under-cards-block"]}>
                {isExpandedSecondStep ? (
                    <div className={styles.indicators}>
                        <IndicatorInfo color={IndicatorColor.Green} value="Positive Indicator" />
                        <IndicatorInfo color={IndicatorColor.Yellow} value="Neutral Indicator" />
                        <IndicatorInfo color={IndicatorColor.Red} value="Negative Indicator" />
                    </div>
                ) : (
                    <Typography
                        className={classnames("desktop-20", styles["open-details"])}
                        onClick={() => setFieldValue("isExpandedSecondStep", true)}
                    >
                        <KeyboardArrowDownIcon fontSize="large" />
                        Click here to see more details about each offering
                    </Typography>
                )}
            </div>
        </div>
    );
};

export default SecondStep;
