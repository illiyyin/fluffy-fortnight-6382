import React from "react";

export default function IconLeft({ fill }: { fill: string }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke={fill}
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			className="feather feather-chevron-left"
		>
			<polyline points="15 18 9 12 15 6"></polyline>
		</svg>
	);
}
