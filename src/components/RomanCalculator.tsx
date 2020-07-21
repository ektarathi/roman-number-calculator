import * as React from "react";
export interface RomanCalculatorProps {}

const RomanCalculator: React.SFC<RomanCalculatorProps> = () => {
	const [fieldValue1, setfieldValue1] = React.useState("");
	const [fieldValue2, setfieldValue2] = React.useState("");
	const [total, setTotal] = React.useState("");
	const [inputValue1, setInputValue1] = React.useState(0);
	const [inputValue2, setInputValue2] = React.useState(0);
    const [error, setError] = React.useState(false);
	const getRomanNumber = (array: any) => {
		let _letters = [
			"I",
			"V",
			"X",
			"L",
			"C",
			"D",
			"M",
			"(V)",
			"(X)",
			"(L)",
			"(C)",
			"(D)",
			"(M)",
        ];
        
		let roman = "";
		var parser = function (item: any, index: any, a: any) {
			switch (item) {
				case "0":
				case "1":
				case "2":
				case "3":
					roman = new Array(Number(item) + 1).join(_letters[index * 2]) + roman;
					break;

				case "4":
					roman = _letters[index * 2] + _letters[index * 2 + 1] + roman;
					break;

				case "5":
				case "6":
				case "7":
				case "8":
					roman =
						_letters[index * 2 + 1] +
						new Array(Number(item) - 4).join(_letters[index * 2]) +
						roman;
					break;

				case "9":
					roman = _letters[index * 2] + _letters[index * 2 + 2] + roman;
					break;
			}
		};

		array.forEach(parser);
		return roman;
	};

	const addNumbers = (event: any) => {
		event.preventDefault();
		let output = inputValue1 + inputValue2;
		console.log('output', inputValue2, inputValue2);
		if (output === 0) {
			setError(true);
		}
		var narray = String(output).split("").reverse();
		console.log(narray);
		let parseValue = getRomanNumber(narray);
		setTotal(parseValue);
	};

	const subtractNumbers = (event: any) => {
		event.preventDefault();
		let output;
		if (inputValue1 >= inputValue2) {
			output = inputValue1 - inputValue2;
		} else {
			output = inputValue2 - inputValue1;
		}
		if (output === 0) {
			setError(true);
		}
		var narray = String(output).split("").reverse();
		let parseValue = getRomanNumber(narray);
		setTotal(parseValue);
	};

	const multiplyNumbers = (event: any) => {
		event.preventDefault();
		let output = inputValue1 * inputValue2;
		if (output === 0) {
			setError(true);
		}
		var narray = String(output).split("").reverse();
		let parseValue = getRomanNumber(narray);
		setTotal(parseValue);
	};

	const getNumericalValue = (array: any) => {
		const conversionArray = {
			M̅: 1000000,
			D̅: 500000,
			C̅: 100000,
			L̅: 50000,
			X̅: 10000,
			V̅: 5000,
			M: 1000,
			D: 500,
			C: 100,
			L: 50,
			X: 10,
			V: 5,
			I: 1,
        };
        
		let current, currentValue, next, nextValue;
		let total = 0;
		for (let i = 0; i < array.length; i++) {
			current = array[i];
			if (array[i + 1] === "̅") {
				current += array[i + 1];
				i += 1;
			}

			currentValue = (conversionArray as any)[current];
			next = array[i + 1];
			nextValue = (conversionArray as any)[next];

			if (currentValue >= nextValue) {
				total += currentValue;
			} else if (currentValue < nextValue) {
				total -= currentValue;
			} else if (currentValue && !nextValue) {
				total += currentValue;
			}
		}
		return total;
    };
    
    const testRoman = (roman: any) =>{
        if(roman.match(/[^ivxlcdmIVXLCDM̅]/) != null){
            alert("SORRY, you entered a character that isn't a roman numeral: " + roman.match(/[^ivxlcdmIVXLCDM̅]/g));
            return;
        }

        if(roman.match(/(.[̅]*)\1\1\1/) != null){
            alert("It's against the rules to have 4 in a row: " + roman.match(/(.[̅]*)\1\1\1/));
            return;
        }
    }
    
	React.useEffect(() => {
		let total1, total2;
		const array1 = fieldValue1.toUpperCase().split("");
        const array2 = fieldValue2.toUpperCase().split("");
        testRoman(fieldValue1);
        testRoman(fieldValue2);

		total1 = getNumericalValue(array1);
		total2 = getNumericalValue(array2);

		setInputValue1(total1);
        setInputValue2(total2);
        
	}, [fieldValue1, fieldValue2, inputValue1, inputValue2]);

	return (
		<React.Fragment>
			<h1> Roman Number Calculator</h1>
			<div className="form-fields">
				<form>
					<input
						type="text"
						placeholder="Enter a valid roman number..."
						value={fieldValue1}
                        onChange={(event) => {setfieldValue1(event.target.value); setError(false)}}
					/>
					<div>{error ? <p className="error">Please enter the roman value</p>: ""}</div>
					<br />
					<input
						type="text"
						placeholder="Enter a valid roman number..."
						value={fieldValue2}
						onChange={(event) => {setfieldValue2(event.target.value); setError(false)}}
					/>
					<div>{error ? <p className="error">Please enter the roman value</p>: ""}</div>
					<br />
					<br />
					<button type="submit" onClick={addNumbers} className="add-button">
						Add Numbers (+)
					</button>
					<button
						type="submit"
						onClick={subtractNumbers}
						className="subtract-button"
					>
						Subtract Numbers (-)
					</button>
					<button
						type="submit"
						onClick={multiplyNumbers}
						className="multiply-button"
					>
						Multiply Numbers (*)
					</button>
				</form>
				<p style={{ fontWeight: "bold" }}> Total: {total}</p>
			</div>
		</React.Fragment>
	);
};

export default RomanCalculator;
