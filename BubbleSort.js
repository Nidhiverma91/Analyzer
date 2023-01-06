import React, { useState } from "react";
import Bar from "./components/Bar";
import { Slider, notification, Typography } from "antd";


import { WarningOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import Hr from "./components/Hr";
import sleep from "./components/utils/sleepFun";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {BsFillCaretRightSquareFill} from "react-icons/bs";
import {TbArrowsRandom} from "react-icons/tb";

import { message } from "antd";
import {BsFillFileCodeFill} from "react-icons/bs";


const useStyles = makeStyles({
	CanvasContainer: {
		width: "100%",
		height: "85vh",
		display: "flex",
		flexDirection: "column",
		background: "black",
	},
	divcolor:{
		background: "black",
	},

	numberDisplay: {
		height: "5%",
		width: "100%",
		display: "flex",
		justifyContent: "center",
		flexDirection: "row ",
		alignItems: "center",
		// backgroundColor:"",
		// border: "1px solid #f1f1f1",
	},
	Controller: {
		width: "100%",
		height: "21%",
		background: "",
		display: "flex",
		justifyContent: "space-around",
		alignItems: "center",
		marginTop: "4px",
		paddingBottom:"50px",
	},
	sliderContainer: {
		minWidth: "750px",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-around",
	},

	singleSliderContainer: {
		border: ".3px solid #ccc",
		background: "currentcolor",
		width: "40%",
		padding: "7px",
		borderRadius: "2px",
	},

	buttonStyle: {
		background: "#722ed1",
		border: "1px solid #7d53b8",

		"& hover": {
			background: "#865ebd",
		},
	},
});

const BubbleSort = () => {
	const [arr, setArr] = useState([
		{ number: 69, color: "#89CFFD" },
		{ number: 56, color: "#89CFFD" },
		{ number: 10, color: "#89CFFD" },
		{ number: 89, color: "#89CFFD" },
		{ number: 8, color: "#89CFFD" },
		{ number: 56, color: "#89CFFD" },
		{ number: 58, color: "#89CFFD" },
		{ number: 23, color: "#89CFFD" },
		{ number: 77, color: "#89CFFD" },
		{ number: 11, color: "#89CFFD" },
		{ number: 1, color: "#89CFFD" },
	]);

	const [disable, setDisable] = useState(false);
	const [time, setTime] = useState(4);
	const [alreadySorted, setAlreadySorted] = useState(false);
	const [sliderVal, setSliderVal] = useState(0);

	const classes = useStyles();
	const {
		CanvasContainer,
		Controller,
		sliderContainer,
		numberDisplay,
		singleSliderContainer,
		divcolor,
	} = classes;

	const handleChange = (v) => {
		setSliderVal(v);

		let arrCraeted = [];

		for (let i = 0; i < v / 1.4; i++) {
			arrCraeted.push({
				number: Math.floor(Math.random() * 100),
				color: "#7895B2",
			});
		}
		setAlreadySorted(false);
		setArr(arrCraeted);
	};

	const timeHandleChange = (t) => {
		setTime(t);
	};

	const handleClick = async () => {
		if (arr.length !== 0) {

			let key = "awqqk@bman";
			message.warning({
				content: "Bubble  Sort is Running ! Don't click any Button",
				key,
				duration: 0,
				style: {
					marginTop: "20vh",
					fontWeight: "500",
				},
			});
			setDisable(true);

			for (let round = 0; round < arr.length - 1; round++) {
				for (let element = 0; element < arr.length - 1 - round; element++) {
					await sleep(time);
					if (arr[element].number > arr[element + 1].number) {
						let temp;

						arr[element].color = "#42032C";
						arr[element + 1].color = "#A66CFF";

						temp = arr[element];
						arr[element] = arr[element + 1];
						arr[element + 1] = temp;

						setDisable(true);
						setArr([...arr]);
					}
					arr[element].color = "#2B7A0B";
					arr[element + 1].color = "#355764";
				}
			}
			for (let i = 0; i < arr.length; i++) {
				arr[i].color = "#4C3A51";
			}

			message.destroy(key);
			message.success({
				content: "Bubble Sort Completed",
				duration: 3,
				style: {
					marginTop: "20vh",
				},
			});



			setAlreadySorted(true);
			setDisable(false);
		}
	};

	const handleRandom = () => {
		if (sliderVal !== 0 || arr.length === 11) {
			let arrCraeted = [];
			let round = sliderVal === 0 ? arr.length : sliderVal / 1.4;
			for (let i = 0; i < round; i++) {
				arrCraeted.push({
					number: Math.floor(Math.random() * 100),
					color: "#89CFFD",
				});
			}

			setAlreadySorted(false);
			setArr(arrCraeted);
		}
	};

	const { Title } = Typography;

	return (
		<div className={divcolor}>
			<h2
				style={{
					fontWeight: "700",
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
					borderRadius: "3px",
				}}
			>
				Bubble Sort
				<hr
					style={{ width: "200px", border: "none ", height: "1px" }}
					color="#fff"
				/>
			</h2>

			<div className={CanvasContainer}>
				{/* //Here Position for "CANVAS" */}

				<Bar heightInPercent={85} element={arr} disable={disable} />
				<Hr />
				<div className={numberDisplay}>
					{arr.map((e, i) => (
						<div
							key={`num-${i}`}
							style={{
								width: `${Math.floor(1300 / arr.length)}px`,
								marginLeft: "2px",
								height: "80%",
								fontSize: "70%",
								fontWeight: "700",
								textAlign: "center",
								borderRadius: "3px",
								display: "flex",
								background: "brown",
								justifyContent: "center",
								alignItems: "center",
								backgroundColor: "#293462",
								color: "#fff",
								border: "1.5px solid #cfcfcf",
								boxShadow: "3px 4px 8px -1px rgba(0,0,0,0.73)",
							}}
						>
							{e.number}
						</div>
					))}
				</div>
				<Hr />
				<div className={Controller}>
					<div className={sliderContainer}>
						<div className={singleSliderContainer}>
							<Title level={5} type="success" >
								Value
							</Title>
							<Slider disabled={disable} step={1} onChange={handleChange} />
						</div>

						<div className={singleSliderContainer}>
							<Title level={5} type="success">
								Time
							</Title>
							<Slider
								disabled={disable}
								step={1}
								min={10}
								max={100}  
								onChange={timeHandleChange}
							/>
						</div>
					</div>

					<div
						style={{
							width: "350px",
							display: "flex",
							flexDirection: "row",
							justifyContent: "space-around",
							alignItems: "center",
							
						}}
					>
						<a href="https://www.geeksforgeeks.org/bubble-sort/" target="_blank">
							<Button
							disabled={disable}
							size="medium"
							variant="contained"
							color="success"
							//backgroundColor="#4700D8"
							//href="https://www.geeksforgeeks.org/bubble-sort/"
							startIcon={<BsFillFileCodeFill />}
						>
							Code
						</Button>
						</a>
						
						

						<Button
							disabled={disable}
							size="medium"
							variant="contained"
							color="secondary"
							//backgroundColor="#4700D8"
							onClick={handleRandom}
							startIcon={<TbArrowsRandom />}
						>
							Random
						</Button>

						<Button
							size="medium"
							variant="contained"
							startIcon={<BsFillCaretRightSquareFill />}
							color="primary"
							disabled={disable}
							onClick={
								alreadySorted === false
									? handleClick
									: () => {
											const key = "updatable";
											notification.open({
												key,
												description:
													"Array already sorted ! Please change slider ",
												duration: 2,
												style: {
													fontSize: "90%",
												},
												icon: <WarningOutlined style={{ color: "red" }} />,
											});
									  }
							}
						>
							Sort
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BubbleSort;
