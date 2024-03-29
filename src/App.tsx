import { useEffect, useState } from "react";
import "./App.css";
import { Switch, Route } from "wouter";
import ListAnime from "./pages/ListAnime";
import Navbar from "./components/nav/Navbar";
import DetailAnime from "./pages/DetailAnime";
import ListCollection from "./pages/ListCollection";
import DetailCollection from "./pages/DetailCollection";
import { AppContext } from "./context/AppContext";
import "react-loading-skeleton/dist/skeleton.css";

function App() {
	const [datas, setDatas] = useState(
		JSON.parse(localStorage.getItem("collection") || "[]")
	);

	useEffect(() => {
		localStorage.setItem("collection", JSON.stringify(datas));
	}, [datas]);

	return (
		<>
			<AppContext.Provider value={{ datas, setDatas }}>
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
