import Image from "next/image";
import React from "react";
import classnames from "classnames";
import { Typography } from "@mui/material";
import marketplaceIcon from "../public/images/wizard-marketplace.svg";

import styles from "./marketplaceStepLabel.module.scss";

const MarketplaceStepLabel = ({ label }: { label: string }) => (
    <div className={styles.container}>
        <div className={classnames(styles.arrow, styles.right)} />
        <Image alt="marketplace" src={marketplaceIcon} priority />
        <Typography className={classnames("desktop-15", styles.label)}>{label}</Typography>
    </div>
);

export default MarketplaceStepLabel;
