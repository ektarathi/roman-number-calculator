import * as React from "react";
export interface TableProps {}

const Table: React.SFC<TableProps> = () => {
	return (
		<div className="table prettytable centered">
			<div className="caption">Roman Numerals Chart</div>
			<div className="row">
				<div className="cell headerCell">Roman Numeral</div>
				<div className="cell headerCell">Number Value</div>
				<div className="cell headerCell">Use As Inputs</div>
			</div>
			<div className="row">
				<div className="cell roman">I</div>
				<div className="cell alignRight">1</div>
				<div className="cell">I</div>
			</div>
			<div className="row">
				<div className="cell roman">V</div>
				<div className="cell alignRight">5</div>
				<div className="cell">V</div>
			</div>
			<div className="row">
				<div className="cell roman">X</div>
				<div className="cell alignRight">10</div>
				<div className="cell">X</div>
			</div>
			<div className="row">
				<div className="cell roman">L</div>
				<div className="cell alignRight">50</div>
				<div className="cell ">L</div>
			</div>
			<div className="row">
				<div className="cell roman">C</div>
				<div className="cell alignRight">100</div>
				<div className="cell ">C</div>
			</div>
			<div className="row">
				<div className="cell roman">D</div>
				<div className="cell alignRight">500</div>
				<div className="cell ">D</div>
			</div>
			<div className="row">
				<div className="cell roman">M</div>
				<div className="cell alignRight">1,000</div>
				<div className="cell ">M</div>
			</div>
			<div className="row">
				<div className="cell roman">
					<span className="overline">(V)</span>
				</div>
				<div className="cell alignRight">5,000</div>
				<div className="cell ">V̅</div>
			</div>
			<div className="row">
				<div className="cell roman">
					<span className="overline">(X)</span>
				</div>
				<div className="cell alignRight">10,000</div>
				<div className="cell ">X̅</div>
			</div>
			<div className="row">
				<div className="cell roman">
					<span className="overline">(L)</span>
				</div>
				<div className="cell alignRight">50,000</div>
				<div className="cell ">L̅</div>
			</div>
			<div className="row">
				<div className="cell roman">
					<span className="overline">(C)</span>
				</div>
				<div className="cell alignRight">100,000</div>
				<div className="cell ">C̅</div>
			</div>
			<div className="row">
				<div className="cell roman">
					<span className="overline">(D)</span>
				</div>
				<div className="cell alignRight">500,000</div>
				<div className="cell ">D̅</div>
			</div>
			<div className="row">
				<div className="cell roman">
					<span className="overline">(M)</span>
				</div>
				<div className="cell alignRight">1,000,000</div>
				<div className="cell ">M̅</div>
			</div>
		</div>
	);
};

export default Table;
