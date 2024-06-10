function CountFroyo(prompt){
    const strArray = prompt.split(','); //<- what does do?
    const order = {};

    for(let i = 0; i < strArray.length; i++){
        if(order[strArray[i]] === undefined){
            order[strArray[i]] = 1;
        }
        else{
            order[strArray[i]] = order[strArray[i]] + 1;
        }
    }
return order
}

const userInput = prompt("Froyo Flavors Order Seperated by Commas", 
"vanilla,vanilla,vanilla,strawberry,coffee,coffee");

console.log(CountFroyo(userInput));

