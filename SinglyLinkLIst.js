import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SingleLinkListViewer from "./components/SinglyLinkListViewer";
import SinglyList from "./components/utils/algorithms/singlyLinkedListAlgo";
import AddInputButton from "./components/AddInputButton";
// This for snackbar
import { useSnackbar } from "notistack";
import {BsFillFileCodeFill} from "react-icons/bs";
import { Button } from "@material-ui/core";

const singlyList = new SinglyList();

const useStyles = makeStyles({
	CanvasContainer: {
		width: "100%",
		height: "85vh",
		// border: "1px solid green",
		display: "flex",
		flexDirection: "column",
		background:"#0A2647",
	},
	divcolor:{
		background:"#0A2647",
	},

	numberDisplay: {
		height: "5%",
		width: "100%",
		display: "flex",
		justifyContent: "center",
		flexDirection: "row ",
		alignItems: "center",
		background: "black",
		border: "1px solid #f1f1f1",
	},
	Controller: {
		width: "100%",
		height: "20%",
		// border: "1px dashed red",
		display: "flex",
		justifyContent: "space-evenly",
		alignItems: "center",
		background: "#0A2647",
		marginTop: "4px",
	},
});

const SinglyLinkList = () => {
	//This is for snackbar
	const { enqueueSnackbar } = useSnackbar();

	const [number, setNumber] = useState(0);

	const [arr, setArr] = useState(singlyList.print());

	const classes = useStyles();
	const { CanvasContainer, Controller ,divcolor } = classes;

	const addElement = () => {
		if (arr.length < 14) {
			singlyList.push(number);
			setArr(singlyList.print());
		} else {
			enqueueSnackbar(
				"Sorry Cannot add Element because display will overload",
				{
					anchorOrigin: {
						vertical: "top",
						horizontal: "right",
					},
					variant: "error",
				}
			);
		}
	};

	const onDelete = () => {
		singlyList.pop();
		setArr(singlyList.print());
	};

	return (
		<div className={divcolor}>
			<h2
				style={{
					fontWeight: "800",
					padding: "2px",
					textTransform: "uppercase",
					textAlign: "center",
					color: "rgb(58 30 7)",
    				background: "rgb(126 123 120)",
					width: "20%",
					display: "flex",
					justifyContent: "center",
					flexDirection: "column ",
					alignItems: "center",
					marginTop: "5px",
					marginLeft: "auto",
					marginRight: "auto ",
					borderRadius: "4px",
				}}
			>
				Singly Linked List
				<hr
					style={{ width: "230px", border: "none ", height: "1px" }}
					color="#fff"
				/>
			</h2>

			<div className={CanvasContainer}>
				<SingleLinkListViewer heightInPercent={80} arr={arr} />
				<div className={Controller}>
					<AddInputButton
						num={number}
						setNum={setNumber}
						name="Insert"
						addElement={addElement}
					/>
					<AddInputButton
						num={number}
						setNum={setNumber}
						name="Delete"
						onDelete={onDelete}
					/>
					<a href="https://www.geeksforgeeks.org/data-structures/linked-list/" target="_blank">
							<Button
							size="medium"
							variant="contained"
							color="success"
							startIcon={<BsFillFileCodeFill />}
						>
							Code
						</Button>
						</a>

				</div>
			</div>
		</div>
	);
};

export default SinglyLinkList;
