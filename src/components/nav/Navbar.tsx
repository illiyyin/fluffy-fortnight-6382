import React from "react";
import { Button, Parent } from "../../styles/Navbar";
import { useLocation } from "wouter";
// const Parent = styled

export default function Navbar() {
	const [location, setLocation] = useLocation();
	return (
		<Parent>
			<ul>
				<li onClick={() => setLocation("/")}>Home</li>
				<li onClick={() => setLocation("/collection")}>Collection</li>
			</ul>
		</Parent>
	);
}
