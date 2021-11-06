function fibonacciCalculator() {
    const negativeFibonacci = (n, first=-1, second=-2) => {
        if(n==-1){
            return 1
        }else if(n ===-2){
            return second/2
        }else{
            return negativeFibonacci(n+2,first,second) - negativeFibonacci(n+1,first,second)
        }
    }

    const fibonacci = (n, first=0, second=1) => {
        if(n==0){
            return first
        }else if(n==1){
            return second
        }else{
            return fibonacci(n-1,first,second) + fibonacci(n-2,first,second)
        }
    }

    let number = prompt('Enter a number');
    while ((Number(number).toFixed(0)!=number) || isNaN(number || number == "")) {
        number = prompt('Enter a number again')
    }

    if (number >= 0) {
        alert(fibonacci(Number(number)))
    }else if (number < 0) {
        alert(negativeFibonacci(Number(number)))
    }
}

fibonacciCalculator()
