import type { IconProps } from "./types";

const SearchIcon = ({ size = 34, className, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 34 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <circle cx={17} cy={17} r={16.5} fill="white" stroke="#EDEDED" />
    <path
      d="M16.5 23.9968C20.366 23.9968 23.5 20.8628 23.5 16.9968C23.5 13.1308 20.366 9.99683 16.5 9.99683C12.634 9.99683 9.5 13.1308 9.5 16.9968C9.5 20.8628 12.634 23.9968 16.5 23.9968Z"
      stroke="#003F6B"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.5 12.9968C17.5609 12.9968 18.5783 13.4183 19.3284 14.1684C20.0786 14.9185 20.5 15.936 20.5 16.9968"
      stroke="#003F6B"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21.5 21.9968L24.5 24.9968"
      stroke="#003F6B"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SearchIcon;
