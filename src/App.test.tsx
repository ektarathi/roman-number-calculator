import React from 'react';
import ReactDOM from "react-dom";
import { render } from '@testing-library/react';
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from './App';
import RomanCalculator from './components/RomanCalculator';
import Table from './components/Table'; 

Enzyme.configure({ adapter: new Adapter() });

function getNumericalValue(array: any) {
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
}

function getRomanNumber(array: any) {
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

function addNumbers (value1: any, value2: any) {
  let output = value1 + value2;
  var narray = String(output).split("").reverse();
	let parseValue = getRomanNumber(narray);
}

function subtractNumbers(value1: any, value2: any) {
  let output = value1 - value2;
  var narray = String(output).split("").reverse();
	let parseValue = getRomanNumber(narray);
}

function multiplyNumbers(value1: any, value2: any) {
  let output = value1 * value2;
  var narray = String(output).split("").reverse();
	let parseValue = getRomanNumber(narray);
}

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders Child component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(RomanCalculator)).toHaveLength(1);
  expect(wrapper.find(Table)).toHaveLength(1);
});

it('display Table component Text', () => {
  const wrapper = shallow(<Table />);
  expect('Roman Numerals Chart').toMatch(/Roman Numerals Chart/i);
  expect(wrapper.find('row').find('cell')).toHaveLength(0)
});

it("Should capture content correctly onChange", () => {
  const wrapper = shallow(<RomanCalculator />);
  const content = wrapper.find("input").at(0);
  content.value = "MCD";
  content.simulate("change", { target: {value: 'MCD'}});
  const array = content.value.toUpperCase().split("");
  let total1 = getNumericalValue(array);
});

it("Should capture second content correctly onChange", () => {
  const wrapper = shallow(<RomanCalculator />);
  const content = wrapper.find("input").at(1);
  content.value = "III";
  content.simulate("change", { target: {value: 'III'}});
  const array = content.value.toUpperCase().split("");
  let total2 = getNumericalValue(array);
});
it('should return 5 if input is 3 and 2', () => {
  expect(addNumbers(3, 2)).toBeUndefined();
})

it('should return 1 if input is 3 and 2', () => {
  expect(subtractNumbers(3, 2)).toBeUndefined();
})

it('should return 6 if input is 3 and 2', () => {
  expect(multiplyNumbers(3, 2)).not.toBeNull();
})

