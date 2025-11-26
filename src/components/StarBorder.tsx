"use client";

import * as React from "react";

type AsElement = "button" | "div" | "section";

interface StarBorderProps extends React.HTMLAttributes<HTMLElement> {
  as?: AsElement;
  className?: string;
  color?: string;
  speed?: string;
  thickness?: number;
  children: React.ReactNode;
}

const StarBorder: React.FC<StarBorderProps> = ({
  as = "button",
  className = "",
  color = "white",
  speed = "6s",
  thickness = 1,
  children,
  style,
  ...rest
}) => {
  const Component: any = as;

  return (
    <Component
      className={`star-border-container ${className}`}
      style={{
        padding: `${thickness}px 0`,
        ...(style || {}),
      }}
      {...rest}
    >
      <div
        className="border-gradient-bottom"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div
        className="border-gradient-top"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div className="inner-content">{children}</div>
    </Component>
  );
};

export { StarBorder };
