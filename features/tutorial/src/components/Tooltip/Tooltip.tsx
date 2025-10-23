import { ReactElement, useEffect, useState } from "react";

import { getArrowBorder, getShadow } from "./utils";
import ArrowTooltip from "./ArrowTooltip";

import TooltipContent, { TooltipContentProps } from "./TooltipContent";

type TooltipProps = TooltipContentProps & {
    children: ReactElement;
}

const Tooltip = ({
    children,
    ...rest
}: TooltipProps) => {
    const [open, setOpen] = useState(false);

    const shadow = getShadow(rest.tooltipSettings.shadow);
    const arrowBorder = getArrowBorder(rest.tooltipSettings.shadow);

    useEffect(() => {
        setOpen(true);
    }, []);

    return (
        <ArrowTooltip
            arrowBorder={arrowBorder}
            open={open}
            placement={rest.tooltipSettings.placement}
            shadow={shadow}
            sx={{ zIndex: rest.tooltipSettings.zIndex }}
            title={<TooltipContent {...rest} />}
            arrow
        >
            {children}
        </ArrowTooltip>
    );
};

export default Tooltip;
