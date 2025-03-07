// src/ui/tooltip.jsx
import * as React from "react";

export const TooltipProvider = ({ children, delayDuration }) => {
    return <div>{children}</div>;
};

export const Tooltip = ({ children }) => {
    return <div>{children}</div>;
};

export const TooltipTrigger = ({ children, className }) => {
    return <div className={className}>{children}</div>;
};

export const TooltipContent = ({ children }) => {
    return <div>{children}</div>;
};