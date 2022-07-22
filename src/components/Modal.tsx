import React, { useEffect, useState } from "react";

export default function Modal({ show, setShow, children }) {
	const [unmount, setUnmount] = useState(show);

	useEffect(() => {
		setTimeout(() => {
			!show ? setUnmount(false) : setUnmount(true);
		}, 200);
	}, [show]);
	// console.log({ show, unmount });
	return (
		<>
			{show && (
				<div
					style={{
						position: "fixed",
						pointerEvents: unmount ? "auto" : "none",
						opacity: unmount ? "100%" : "0%",
						backgroundColor: "#ff0000",
						marginTop: "300px",
						transition: "opacity 1s",
						transitionDelay: "",
					}}
				>
					<button onClick={() => setShow(false)}>close</button>
					{children}
				</div>
			)}
		</>
	);
}
