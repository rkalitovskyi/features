type Step = {
    id: string;
    order: number;
    title: string;
    description: string;
};

export type TooltipShadowVariant = "default" | "large";

export type TooltipSettings = {
    rewatchLabel?: string;
    placement?: "top" | "right-start" | "right" | "right-end";
    shadow?: TooltipShadowVariant;
    zIndex?: number;
};

export type { Step };
