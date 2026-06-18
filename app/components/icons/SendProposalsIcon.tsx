import type { IconProps } from "./types";

const SendProposalsIcon = ({ size = 20, className, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      opacity={0.4}
      d="M10.3035 4.58106L19.5769 9.21773C23.7369 11.2977 23.7369 14.6994 19.5769 16.7794L10.3035 21.4161C4.06352 24.5361 1.51768 21.9794 4.63768 15.7502L5.58018 13.8761C5.85102 13.3236 5.85102 12.6844 5.58018 12.1319L4.63768 10.2469C1.51768 4.01772 4.07435 1.46106 10.3035 4.58106Z"
      fill="white"
    />
    <path
      d="M16.0766 13.8125H10.2266C9.7824 13.8125 9.41406 13.4442 9.41406 13C9.41406 12.5558 9.7824 12.1875 10.2266 12.1875H16.0766C16.5207 12.1875 16.8891 12.5558 16.8891 13C16.8891 13.4442 16.5207 13.8125 16.0766 13.8125Z"
      fill="white"
    />
  </svg>
);

export default SendProposalsIcon;
