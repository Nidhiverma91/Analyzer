import React from "react";
import Card from "./components/Card";
import { makeStyles } from "@material-ui/core/styles";
import BubbleSortImg from "./../images/Algo Pics/bubblesort.jpg";
import QuickSortImg from "./../images/Algo Pics/quicksortt.png";
import LinkedListImg from "./../images/Algo Pics/singlylinkedlist.png";
import DfsImg from "./../images/Algo Pics/dfs.jpg";
import { Link } from "react-router-dom";
import Footer from "./Footer";

import image from "./../Assets/bggif.gif";
const Style = makeStyles({
	MainDiv: {
		backgroundImage: `url(${image})`,
		background: "currentcolor",
		height: "150vh",
		width: "100%",
	},

	cards: {
		display: "flex",
		alignItems: "flex-start",
		justifyContent: "center",
	},
});

function Home() {
	const classes = Style();
	const { MainDiv, cards } = classes;
	const numOfCard = [
		[
			{
				title: "Bubble Sort",
				imgSrc: BubbleSortImg,
				url: "/bubblesort",
				desc:
					"Bubble sort is a simple sorting algorithm. This sorting algorithm is comparison-based algorithm in which each pair of adjacent elements is compared and the elements are swapped if they are not in order. This algorithm is not suitable for large data sets as its average and worst case complexity are of Ο(n2) where n is the number of items."		
			},
			{
				title: "Quick Sort",
				imgSrc: QuickSortImg,
				url: "/quicksort",
				desc:
					"Quick sort is a highly efficient sorting algorithm and is based on partitioning of array of data into smaller arrays. A large array is partitioned into two arrays one of which holds values smaller than the specified value, say pivot, based on which the partition is made and another array holds values greater than the pivot value.This algorithm has average and worst-case complexity are O(n2), respectively."	},
			{
				title: " Singly Linked List",
				imgSrc: LinkedListImg,
				url: "/singlylinklist",
				desc:
					"Singly linked list can be defined as the collection of ordered set of elements. The number of elements may vary according to need of the program. A node in the singly linked list consist of two parts: data part and link part. Data part of the node stores actual information that is to be represented by the node while the link part of the node stores the address of its immediate successor."		
			},
		],

		[
			{
				title: "Dfs",
				imgSrc: DfsImg,
				url: "/dfs",
				desc:
					"DFS is a recursive traversal algorithm for searching all the vertices of a graph or tree data structure. It starts from the first node of graph G and then goes to further vertices until the goal vertex is reached.The depth-first search (DFS) algorithm starts with the initial node of graph G and goes deeper until we find the goal node or the node with no children.Because of the recursive nature, stack data structure can be used to implement the DFS algorithm. The process of implementing the DFS is similar to the BFS algorithm."		
			},
		],
	];
	return (
		<div className={MainDiv}>
			{numOfCard.map((e, i) => (
				<div key={`cards-${i}`} className={cards}>
					{e.map((e1, j) => (
						<Link key={`link-${i}-${j}`} to={e1.url}>
							<Card
								key={`card-${i}-${j}`}
								img={e1.imgSrc}
								title={e1.title}
								author="NV"
								description={e1.desc}
							/>
						</Link>
					))}
				</div>
			))}
			<Footer/>


		</div>
	);
}

export default Home;
