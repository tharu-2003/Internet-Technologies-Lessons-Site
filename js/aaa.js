
function clearDisplay(){
    document.getElementById('input-text').value = ' ';
}

function appendNumber(number) {
    document.getElementById('input-text').value += number;
}

function appendOperator(oparator){
    // let finallyNumber = ' ';
    let expression = ' ';

    let finallyNumber = document.getElementById('input-text').value;
    console.log(finallyNumber);

    document.getElementById('input-text').value = ' ';

    if (oparator == '=') {
        // ex = finallyNumber
        console.log("ok")
        console.log(expression + "a");
        expression = `${expression } ${finallyNumber}`;
        console.log(expression);

        let result = eval(expression);
        document.getElementById('input-text').value = result;
        
    } else {
        let withOparator = `${finallyNumber } ${oparator}`;

        console.log(withOparator);
        expression = `${expression } ${withOparator}`;
        console.log(expression);

        // let halfExpression = halfExpression(withOparator);
        // console.log(halfExpression(withOparator));
        // console.log("else" + halfExpression);
    }
}

function halfExpression(withOparator) {
   
        console.log(withOparator);
        expression = `${expression } ${withOparator}`;
        console.log(expression);

        return expression;
}









// function calculate(){
//     // let expression = document.getElementById('input-text').value;
//     let result = eval(expression);
//     document.getElementById('input-text').value = result;
// }