const fValue = document.getElementById("first_value");
const sValue = document.getElementById("second_value");
const answer = document.getElementById("answer");

let First = Math.random();
let second = Math.random();

const val1 = (fValue.innerHTML = Math.floor(First * 1000));
const val2 = (sValue.innerHTML = Math.floor(second * 1000));
const total = val1 + val2;
console.log(total);

const btn = document.getElementById("btn");
const submitHandler = () => {
  const value = document.getElementById("value").value;
  // console.log(value)
  if (value == total) {
    answer.innerHTML = `Right answer`;
  } else {
    answer.innerHTML = `Wrong answer`;
  }
  document.getElementById("value").value = "";
};

btn.addEventListener("click", submitHandler);
