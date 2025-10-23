import { useFormikContext } from "formik";
import { Typography } from "@mui/material";
import classnames from "classnames";
import StepHeader from "../../../components/StepHeader";
import IIntroductionWizard from "../../interfaces/IIntroductionWizard";
import BlackRibbon from "../../../components/BlackRibbon";
import Slider, { SliderVariants } from "./Slider/Slider";
import { ranges } from "../../../stateData";
import { getPercentageByRange } from "../../../utils";

import styles from "./thirdStep.module.scss";

const SLIDER_STEP = 1000;

const ThirdStep = () => {
    const {
        setFieldValue,
        values: {
            comfortableR: { comfortableRAmount, comfortableRPercentage },
            investmentApp: { investmentAppAmount, investmentAppPercentage }
        }
    } = useFormikContext<IIntroductionWizard>();
    const {
        comfortableRAmount: comfortableRAmountRanges,
        investmentAppAmount: investmentAppAmountRanges
    } = ranges;

    const handleInvestmentAppreciatingChanged = async (_: Event, value: number | number[]) => {
        setFieldValue("investmentApp", {
            investmentAppAmount: value,
            investmentAppPercentage: getPercentageByRange(
                investmentAppAmountRanges,
                value as unknown as number
            )
        });
    };

    const handleComfortableRiskingChanged = (_: Event, value: number | number[]) => {
        setFieldValue("comfortableR", {
            comfortableRAmount: value,
            comfortableRPercentage: getPercentageByRange(
                comfortableRAmountRanges,
                value as unknown as number
            )
        });
    };

    return (
        <div className={styles.container}>
            <div className={styles["header-wrapper"]}>
                <StepHeader
                    subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab accusamus alias aperiam dolores ducimus eveniet, fuga, illum laboriosam laudantium molestias neque nesciunt odit quaerat qui quisquam soluta vero voluptate."
                    title="Lorem ipsum dolor sit amet"
                />
            </div>
            <BlackRibbon>
                <>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolorem impedit iure, molestiae odio suscipit.
                </>
            </BlackRibbon>
            <div className={styles["sliders-container"]}>
                <div>
                    <Typography className="desktop-20" variant="body1">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, inventore.
                    </Typography>
                    <Slider
                        handleChange={handleInvestmentAppreciatingChanged}
                        max={investmentAppAmountRanges.max}
                        min={investmentAppAmountRanges.min}
                        name="investmentAppAmount"
                        percentageValue={investmentAppPercentage}
                        step={SLIDER_STEP}
                        value={investmentAppAmount}
                        variant={SliderVariants.Green}
                    />
                </div>
                <div>
                    <Typography className="desktop-20" variant="body1">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, laudantium?
                    </Typography>
                    <Slider
                        handleChange={handleComfortableRiskingChanged}
                        max={comfortableRAmountRanges.max}
                        min={comfortableRAmountRanges.min}
                        name="comfortableRAmount"
                        percentageValue={comfortableRPercentage}
                        step={SLIDER_STEP}
                        value={comfortableRAmount}
                        variant={SliderVariants.Red}
                        reverse
                    />
                </div>
                <Typography className={classnames("desktop-20", styles.hint)} variant="body1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, excepturi.
                </Typography>
            </div>
        </div>
    );
};

export default ThirdStep;
