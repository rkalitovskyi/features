import { Typography } from "@mui/material";
import { Indicator } from "@frontend/ui";
import { IndicatorColor } from "@frontend/ui";

import styles from "./indicatorInfo.module.scss";

type IndicatorInfoProps = {
    value: string;
    color: IndicatorColor;
};

const IndicatorInfo = ({ color, value }: IndicatorInfoProps) => (
    <div className={styles.container}>
        <Indicator color={color} />
        <Typography className="desktop-15" variant="body1">
            {value}
        </Typography>
    </div>
);

export default IndicatorInfo;
