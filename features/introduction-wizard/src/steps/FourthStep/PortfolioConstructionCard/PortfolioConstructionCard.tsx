import Card from "@mui/material/Card";
import DoneIcon from "@mui/icons-material/Done";
import { Typography } from "@mui/material";
import classnames from "classnames";

import styles from "./portfolioConstructionCard.module.scss";

type CardProps = {
    ap: string;
    goals: string[];
    cScore: string;
    riskT: string;
    secondaryFocus: string;
    title: string;
};

const PortfolioConstructionCard = ({
    ap,
    goals,
    cScore,
    riskT,
    secondaryFocus,
    title
}: CardProps) => (
    <Card className={styles.card} elevation={3}>
        <Typography className={classnames("desktop-24", styles.title)}>{title}</Typography>
        <div className={styles.properties}>
            <Typography className="desktop-15">{riskT}</Typography>
            <Typography className="desktop-15">{secondaryFocus}</Typography>
            <Typography className="desktop-15">{ap}</Typography>
            <Typography className="desktop-15">{cScore}</Typography>
        </div>
        <div className={styles.goals}>
            {goals.map((goal) => (
                <div className={styles.goal} key={goal}>
                    <DoneIcon />
                    <Typography className="desktop-15">{goal}</Typography>
                </div>
            ))}
        </div>
    </Card>
);
export default PortfolioConstructionCard;
