import Image, { StaticImageData } from "next/image";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import { IndicatorColor } from "@frontend/ui";
import classnames from "classnames";
import IndicatorInfo from "../IndicatorInfo/IndicatorInfo";

import styles from "./offeringCard.module.scss";

type ValueType<T> = {
    value: T;
    color: IndicatorColor;
};

type OfferingCardProps = {
    name: string;
    state: string;
    rate: string;
    image: StaticImageData;
    score: ValueType<number>;
    sponsorTR: ValueType<string>;
    growth: ValueType<number>;
    oRate: ValueType<number>;
    fees: ValueType<number>;
    re: ValueType<number>;
    ap: ValueType<string>;
    expand: boolean;
};

const OfferingCard = ({
    ap,
    score,
    rate,
    fees,
    expand,
    image,
    name,
    oRate,
    growth,
    sponsorTR,
    state,
    re
}: OfferingCardProps) => (
    <Card className={styles.card} elevation={3}>
        <div>
            <Typography className={classnames(styles.title, "desktop-24", "bold")} variant="body1">
                {name}
            </Typography>
            <Typography className={classnames(styles.info, "desktop-17")} variant="body1">
                Lorem ipsum dolor sit. {state}
            </Typography>
        </div>
        <div className={styles["distribution-rate-container"]}>
            <Typography className={classnames(styles.percentage, "desktop-40")} variant="body1">
                {rate}%
            </Typography>
            <Typography className={classnames(styles.info, "desktop-17")} variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consequuntur ducimus enim harum, necessitatibus non porro quas recusandae unde vitae.
            </Typography>
        </div>
        <Image alt="offering image" objectFit="contain" src={image} width={246} />
        {expand && (
            <div className={styles["indicators-info"]}>
                <IndicatorInfo color={score.color} value={`${score.value}/100`} />
                <IndicatorInfo color={sponsorTR.color} value={sponsorTR.value} />
                <IndicatorInfo color={growth.color} value={`Lorem ipsum dolor sit amet ${growth.value}% Lorem ipsum dolor sit amet`} />
                <IndicatorInfo color={oRate.color} value={`${oRate.value}%`} />
                <IndicatorInfo color={fees.color} value={`${fees.value}%`} />
                <IndicatorInfo
                    color={re.color}
                    value={`Lorem ipsum dolor sit amet ${re.value}`}
                />
                <IndicatorInfo color={ap.color} value={ap.value} />
            </div>
        )}
    </Card>
);

export default OfferingCard;
