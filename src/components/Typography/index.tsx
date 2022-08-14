import React from "react";
import Color from "../../models/Colors";
import "./typography.scss";

type Variant =
  | "maxHeading"
  | "heading"
  | "subheading"
  | "title"
  | "subtitle"
  | "body"
  | "caption";

type Align = "left" | "center" | "right" | "justify";
type fontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800;

interface Props {
  variant: Variant;
  color?: Color;
  children: React.ReactNode;
  align?: Align;
  weight?: fontWeight;
  className?: string;
}

const Typography: React.FC<Props> = ({
  variant,
  color,
  weight,
  align,
  className,
  children,
}) => {
  const colorClass = color ? ` color-${color}` : "";
  const weightClass = weight ? ` font-${weight}` : "";
  const textAlignClass = align ? ` text-${align}` : "";
  const extraClass = className ? ` ${className}` : "";
  const elementClass = `typography ${variant}${colorClass}${weightClass}${textAlignClass}${extraClass}`;

  switch (variant) {
    case "maxHeading":
        return <h1 className={elementClass}>{children}</h1>;
    case "heading":
      return <h2 className={elementClass}>{children}</h2>;
    case "subheading":
      return <h3 className={elementClass}>{children}</h3>;
    case "title":
      return <h4 className={elementClass}>{children}</h4>;
    case "subtitle":
      return <h5 className={elementClass}>{children}</h5>;
    case "body":
      return <p className={elementClass}>{children}</p>;
    case "caption":
      return <p className={elementClass}>{children}</p>;
    default:
      return <></>;
  }
};

export default Typography;
