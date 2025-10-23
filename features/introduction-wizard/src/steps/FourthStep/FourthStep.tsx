import StepHeader from "../../components/StepHeader/StepHeader";
import PortfolioConstructionCard from "./PortfolioConstructionCard/PortfolioConstructionCard";
import Lines from "../../components/Lines/Lines";
import FieldExplanation from "../../components/FieldExplanation/FieldExplanation";

import mockCardData from "./mockCardData";

import styles from "./fourthStep.module.scss";

const LINES_COUNT = 5;

type FourthStepProps = {
    isAdvisorPortal?: boolean;
};

const FourthStep = ({ isAdvisorPortal = false }: FourthStepProps) => {
    const title = isAdvisorPortal
        ? "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, quibusdam."
        : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, quibusdam.";
    const subtitle = isAdvisorPortal
        ? "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci aspernatur aut beatae commodi consequatur consequuntur corporis cumque dicta dolor esse ex, facere harum illum incidunt inventore laboriosam laudantium magni officiis perferendis praesentium quasi quos recusandae similique temporibus voluptatem voluptatibus?"
        : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor dolorem eveniet in iusto nisi omnis pariatur quibusdam suscipit, tempora tempore."

    return (
        <div className={styles.container}>
            <div className={styles["header-wrapper"]}>
                <StepHeader subtitle={subtitle} title={title} />
            </div>
            <div className={styles.cards}>
                <div className={styles["info-block"]}>
                    <FieldExplanation
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, quibusdam."
                        label="Lorem ipsum dolor sit amet."
                    />
                    <FieldExplanation
                        description="TLorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, quibusdam."
                        label="Lorem ipsum dolor sit amet."
                    />
                    <FieldExplanation
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, quibusdam."
                        label="Lorem ipsum dolor sit amet."
                    />
                    <FieldExplanation
                        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, quibusdam."
                        label="Lorem ipsum dolor sit amet."
                    />
                    <FieldExplanation description="Lorem ipsum dolor sit amet." label="Lorem ipsum dolor sit amet." />
                </div>
                {mockCardData.map((cardData) => (
                    <PortfolioConstructionCard key={cardData.title} {...cardData} />
                ))}
                <Lines count={LINES_COUNT} top={90} />
            </div>
        </div>
    );
};

export default FourthStep;
