import { Typography } from "@mui/material";
import { DarkTooltip, HelpIcon } from "@frontend/ui";
import IconButton from "@mui/material/IconButton";

import styles from "./fieldExplanation.module.scss";

type FieldExplanationProps = {
    label: string;
    description: string;
};

const FieldExplanation = ({ description, label }: FieldExplanationProps) => (
    <div className={styles.container}>
        <Typography className="desktop-15 bold" variant="body1">
            <DarkTooltip placement="right" title={description}>
                <IconButton disableRipple>
                    <HelpIcon fontSize="small" />
                </IconButton>
            </DarkTooltip>
            <span>{label}</span>
        </Typography>
    </div>
);

export default FieldExplanation;
