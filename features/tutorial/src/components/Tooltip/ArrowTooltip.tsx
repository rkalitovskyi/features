import { styled } from "@mui/material/styles";
import { TooltipProps as MuiTooltipProps } from "@mui/material/Tooltip/Tooltip";
import MuiTooltip, { tooltipClasses } from "@mui/material/Tooltip";

const ArrowTooltip = styled(({ className, ...props }: MuiTooltipProps) => (
    <MuiTooltip
        {...props}
        PopperProps={{
            popperOptions: {
                modifiers: [
                    {
                        name: "offset",
                        options: { offset: [0, 8] }
                    }
                ]
            }
        }}
        classes={{ popper: className }}
        sx={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)" }}
    />
))((props: MuiTooltipProps & { arrowBorder: string; shadow: string }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: "white",
        "&::before": {
            backgroundColor: "white",
            border: props.arrowBorder
        }
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: "white",
        boxShadow: props.shadow
    }
}));

export default ArrowTooltip;
