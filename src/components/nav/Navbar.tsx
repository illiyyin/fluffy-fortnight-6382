import React from "react";
import { Button, Parent } from "../../styles/Navbar";
import { useLocation } from "wouter";
// const Parent = styled

export default function Navbar() {
	const [location, setLocation] = useLocation();
	return (
		<Parent>
			<ul>
				<li onClick={() => setLocation("/")}>
					<Button route={location} path="/">
						Home
					</Button>
				</li>
				<li onClick={() => setLocation("/collection")}>
					<Button route={location} path="/collection">
						Collection
					</Button>
				</li>
			</ul>
		</Parent>
	);
}
