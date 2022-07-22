import React, { useEffect, useState } from "react";
import { IModal } from "../interface/Index";
import { CloseArea, CloseButton, Container, ModalBox } from "../styles/Modal";
import IconClose from "../assets/x.svg";

export default function Modal({ show, setShow, children, header }: IModal) {
	const [unmount, setUnmount] = useState(show);

	useEffect(() => {
		setTimeout(() => {
			!show ? setUnmount(false) : setUnmount(true);
		}, 200);
	}, [show]);
	return (
		<>
			{show && (
				<Container unmount={unmount}>
					<CloseArea onClick={() => setShow(false)} />
					<ModalBox>
						<h3>{header}</h3>
						<CloseButton
							onClick={() => setShow(false)}
							aria-label="Close Modal"
						>
							<img src={IconClose} alt="icon-close" />
						</CloseButton>
						{children}
					</ModalBox>
				</Container>
			)}
		</>
	);
}
