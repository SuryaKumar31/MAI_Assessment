import type { IconProps } from "./types";

const ChevronDownIcon = ({ size = 16, className, ...props }: IconProps) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth={0}
    viewBox="0 0 512 512"
    height={size}
    width={size}
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path d="M256 294.1L150.6 188.7 128 211.3 256 339.3 384 211.3 361.4 188.7z" />
  </svg>
);

export default ChevronDownIcon;
