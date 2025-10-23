import StepHeader from "../../../components/StepHeader";
import BlackRibbon from "../../../components/BlackRibbon";
import Carousel from "./Carousel/Carousel";

import styles from "./thirdStep.module.scss";

const ThirdStep = () => (
    <div className={styles.container}>
        <StepHeader
            subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur, eaque est necessitatibus nobis odio odit quidem quos. Consequatur, quisquam."
            title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum, temporibus?"
        />
        <BlackRibbon>
            <>
                Lorem. <span>Lorem ipsum dolor.</span> Lorem ipsum dolor sit amet, consectetur. <span>Lorem ipsum.</span> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </>
        </BlackRibbon>
        <div className={styles["carousel-wrapper"]}>
            <Carousel />
        </div>
    </div>
);

export default ThirdStep;
