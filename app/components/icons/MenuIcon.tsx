import type { IconProps } from "./types";

const MenuIcon = ({ size = 28, className, ...props }: IconProps) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth={0}
    viewBox="0 0 24 24"
    height={size}
    width={size}
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z" />
  </svg>
);

export default MenuIcon;
