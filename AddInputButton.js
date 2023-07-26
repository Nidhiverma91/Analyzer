import React from "react";
import { InputNumber, Button } from "antd";

import "antd/dist/antd.css";
import sleepFun from "./utils/sleepFun";
import {RiDeleteBin5Fill} from "react-icons/ri";
import {AiFillFileAdd} from "react-icons/ai";

export default function AddInputButton({
	num,
	setNum,
	name,
	addElement,
	onDelete,
}) {
	const onChangeHandler = (e) => {
		setNum(e);
	};

	const onClickHandle = () => {
		addElement();
	};

	const onDeleteClick = async () => {
		await sleepFun(300);
		onDelete();
	};

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				height: "100%",
				justifyContent: "center",
			}}
		>
			{name === "Insert" && (
				<InputNumber
					style={{ marginBottom: "15px" }}
					value={num}
					onChange={onChangeHandler}
				/>
			)}
			{name === "Insert" ? (
				<Button
					type="primary"
					onClick={onClickHandle}
					icon={<AiFillFileAdd />}
				>
					{name}
				</Button>
			) : (
				<>
					<Button
						style={{ marginTop: "60%" }}
						type="primary"
						danger
						onClick={onDeleteClick}
						icon={<RiDeleteBin5Fill />}
					>
						{name}
					</Button>
				</>
			)}
		</div>
	);
}
