import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Switch, Route } from "wouter";
import { gql, useQuery } from "@apollo/client";
import ListAnime from "./pages/ListAnime";
import Navbar from "./components/nav/Navbar";
import DetailAnime from "./pages/DetailAnime";
import ListCollection from "./pages/ListCollection";
import DetailCollection from "./pages/DetailCollection";
import { AppContext } from "./context/AppContext";

var query = gql`
	query {
		Media(id: 15125, type: ANIME) {
			id
			title {
				romaji
				english
				native
			}
		}
	}
`;

function App() {
	const [count, setCount] = useState(0);
	// const { loading, error, data } = useQuery(query);
	const [datas, setDatas] = useState(JSON.parse(localStorage.getItem("collection") || "[]"));
	
	// console.log({ loading, error, data })
	// useEffect(() => {
	// 	const storage = JSON.parse(localStorage.getItem("collection") || "[]");
	// 	localStorage.setItem("collection", JSON.stringify(storage));
	// 	setDatas(storage);
	// }, []);

	useEffect(() => {
		// if (localStorage.getItem("collection"))
			localStorage.setItem("collection", JSON.stringify(datas));
	}, [datas, setDatas]);
	console.log(datas);

	return (
		<>
			<AppContext.Provider value={{ datas, setDatas}}>
				<Navbar />
				<Switch>
					<Route path="/">
						<ListAnime />
					</Route>
					<Route path="/anime/:idAnime">
						<DetailAnime />
					</Route>
					<Route path="/collection">
						<ListCollection />
					</Route>
					<Route path="/collection/:idCollection">
						<DetailCollection />
					</Route>
				</Switch>
			</AppContext.Provider>
		</>
	);
}

export default App;
