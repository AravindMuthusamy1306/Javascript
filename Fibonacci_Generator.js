function fibonacciGenerator(n){
    let arr = [0,1];
    if(n === 1){
        return [0];
    }
    else if(n === 2){
        return [0, 1];
    }
    else{
        for(let i = 2; i<n; i++){
            arr[i] = arr[i - 2] + arr[i - 1];
        }
    }
    console.log(arr);
}

fibonacciGenerator(20);