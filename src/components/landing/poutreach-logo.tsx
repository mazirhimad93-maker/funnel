import type { SVGProps } from "react";

export function PoutreachLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 40"
      width="120"
      height="30"
      {...props}
    >
      <text
        x="0"
        y="28"
        fontFamily="'Space Grotesk', sans-serif"
        fontSize="24"
        fontWeight="bold"
        fill="currentColor"
      >
        POUTREACH
      </text>
    </svg>
  );
}
