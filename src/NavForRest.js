import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Select from "react-select";
import {MyTable} from './MyTable.js'

function NavForRest() {
	const langOptions = [
		{ value: "EN", label: "EN" },
		{ value: "HINDI", label: "HINDI" },
		{ value: "SANSKRIT", label: "SANSKRIT" },
	];

	const currencyOptions = [
		{ value: "INR", label: "INR" },
		{ value: "INR", label: "INR" },
		{ value: "AUD", label: "AUD" },
	];

	return (
		<div
			className="d-flex flex-row justify-content-between w-80 mt-0 mb-0"
			style={{ width: "80%", margin: "auto" }}>
			<div style={{ display: "flex", gap: "1rem" }}>
				<span>
					<Select options={langOptions} />
				</span>
				<span>
					<Select options={currencyOptions} />
				</span>
			</div>
			<MyTable />
		</div>
	);
}

export default NavForRest;

