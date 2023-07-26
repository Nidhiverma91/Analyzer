
import React from "react";
import Logo from "./Logo";
import "../../css/NavBar.css";
import { Link, NavLink } from "react-router-dom";
import {BsFillBarChartFill,BsBoundingBoxCircles} from "react-icons/bs";
import {FaChartBar} from "react-icons/fa";
import {RxDashboard} from "react-icons/rx";
import {BiNetworkChart} from "react-icons/bi";
function NavBar() {
	// console.log("path of ->" + logo);
	return (
		<nav style={{ zIndex: "99" }} className="navv">
			<Logo heightInPixel={47} style={{ cursor: "pointer" }} to="/" />

			<div className="Link-Container">
				<NavLink to="/bubblesort">
				<BsFillBarChartFill style={{ marginTop: "3px" , fontSize:"15px"}}/>	Bubble Sort
				</NavLink>

				<NavLink to="/quicksort">
				<FaChartBar style={{ marginTop: "3px" , fontSize:"15px"}} />	Quick Sort
				</NavLink>

				<NavLink to="/singlylinklist">
				<BsBoundingBoxCircles style={{ marginTop: "3px" , fontSize:"15px"}} />	Singly Linked List
				</NavLink>

				<NavLink to="/dfs">
				<RxDashboard style={{ marginTop: "3px" , fontSize:"15px"}} />	DFS
				</NavLink>

				{/* <Link to="/dijkstra">
          <BiNetworkChart style={{ marginTop: "3px" , fontSize:"15px"}} />Dijkstra Algo
        </Link> */}
			</div>
		</nav>
	);
}

export default NavBar;
