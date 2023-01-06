
import "./App.css";
import React ,{ useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
//Components
import NavBar from "./pages/components/NavBar";
//Pages
import HomePage from "./pages/Home";
import BubbleSortPage from "./pages/BubbleSort";
import QuickSortPage from "./pages/QuickSort";
import SinglyLinkList from "./pages/SinglyLinkLIst";
import Dfs from "./pages/Dfs";
import { SnackbarProvider } from "notistack"; // to get notifications
import Preloader from "./components/Pre";



function App() {
const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);



	return (
		<SnackbarProvider>
			 <Preloader load={load} />
			<div className="App">
				<NavBar />
				<Switch>
					<Route path="/" exact component={HomePage} />
					<Route path="/bubblesort" exact component={BubbleSortPage} />
					<Route path="/quicksort" exact component={QuickSortPage} />
					<Route path="/singlylinklist" exact component={SinglyLinkList} />
					<Route path="/dfs" exact component={Dfs} />
					{/* <Route path="/dijkstra" exact component={Dijkstra} /> */}
				</Switch>
			</div>
		</SnackbarProvider>
	);
}

export default App;
