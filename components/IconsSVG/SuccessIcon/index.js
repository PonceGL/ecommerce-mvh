export const SuccessIcon = ({ width = "100%" }) => {
  return (
    <svg
      width={width}
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M250 500C388.071 500 500 388.071 500 250C500 111.929 388.071 0 250 0C111.929 0 0 111.929 0 250C0 388.071 111.929 500 250 500Z"
        fill="url(#paint0_linear)"
      />
      <path
        d="M380 150L220 330L120 250"
        stroke="var(--background)"
        strokeWidth="8"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="115"
          y1="4.24698e-06"
          x2="405.5"
          y2="446.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--blue)" />
          <stop offset="1" stopColor="var(--light-blue)" />
        </linearGradient>
      </defs>
    </svg>
  );
};
