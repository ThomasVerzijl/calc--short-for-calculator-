let first_number = "";
let second_number;
let oparator;
let result;
function calculate(key) {
  console.log("pre" + key);
  if (key != "-" && key != "+") {
    if (!first_number) {
      first_number = key;
      console.log("first" + key);
      document.getElementById("result").innerHTML = "result:" + first_number;
    }
    if (first_number && oparator && !second_number) {
      second_number = key;
      console.log("2nd" + key);
      document.getElementById("result").innerHTML =
        "result:" + first_number + oparator + second_number;
    }
  }
  if (
    (first_number && !oparator && key === "-") ||
    key === "+" ||
    key === "*" ||
    key === "/"
  ) {
    oparator = key;
    console.log("op" + key);
    document.getElementById("result").innerHTML =
      "result:" + first_number + oparator;
  }

  if (first_number && oparator && second_number) {
    if (oparator === "+") {
      result = first_number + second_number;
    } else if (oparator === "-") {
      result = first_number - second_number;
    } else if (oparator === "*") {
      result = first_number * second_number;
    } else if (oparator === "/") {
      result = first_number / second_number;
    } else {
      console.log("somthing went wrong");
    }
    console.log("result: " + result);
    document.getElementById("result").innerHTML =
      "result:" + first_number + oparator + second_number + " = " + result;
    first_number = "";
    second_number = "";
    oparator = "";
  }
}
