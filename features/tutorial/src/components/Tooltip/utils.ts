import { TooltipShadowVariant } from "../../types";

const getShadow = (shadowVariant?: TooltipShadowVariant) => {
    switch (shadowVariant) {
        case "default":
            return "inherit";
        case "large":
            return "0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 3px 3px 0px rgba(0, 0, 0, 0.12), 0px 1px 8px 0px rgba(0, 0, 0, 0.20)";
        default:
            return "inherit";
    }
};

const getArrowBorder = (shadowVariant?: TooltipShadowVariant) => {
    switch (shadowVariant) {
        case "default":
            return "none";
        case "large":
            return "1px solid #CCCCCC";
        default:
            return "none";
    }
};

export { getShadow, getArrowBorder };
