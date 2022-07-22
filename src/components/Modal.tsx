import React, { useEffect, useState } from "react";
import { IModal } from "../interface/Index";

export default function Modal({ show, setShow, children }: IModal) {
	const [unmount, setUnmount] = useState(show);

	useEffect(() => {
		setTimeout(() => {
			!show ? setUnmount(false) : setUnmount(true);
		}, 200);
	}, [show]);
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
