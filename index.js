// Code your solutions in this file



function writeCards(arr, event){

    const newArray = [];

    for(let i = 0; i <= arr.length -1; i++){
        newArray[i] = `Thank you, ${arr[i]}, for the wonderful ${event} gift!`
    }

    return newArray;
}

function countDown(num){
    while(num > -1){
        console.log(num)
        num--;
    }
}