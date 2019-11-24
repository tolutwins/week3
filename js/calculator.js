function Add(s, t) {
    return parseInt(s) + parseInt(t);
}

function Subtract(s, t) {
    return s - t;
}

function buttonAddClick() {
    var txtFirst = document.getElementById("txtFirst").value;
    var txtSecond = document.getElementById("txtSecond").value;

    if(txtFirst == "" || txtSecond == "") {
        alert("Please supply numbers");
    } else {
        var result = Add(txtFirst, txtSecond);
        document.getElementById("result").innerHTML = `The result is: ${result}`;
    }
}