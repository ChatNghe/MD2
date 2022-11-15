class FizzBuzz {
    message: string;

    constructor(n: number) {
        let isFizz = n % 5 === 0;
        let isBuzz = n % 3 === 0;

        if (isBuzz && isBuzz) {
            this.message = 'FizzBuzz';
        } else if (isFizz) {
            this.message = 'Fizz';
        } else if(isBuzz) {
            this.message = 'Buzz';
        } else {
            this.message = n + ''
        }
    }
}

let fizzBuzz = new FizzBuzz(9);
console.log(fizzBuzz.message)
