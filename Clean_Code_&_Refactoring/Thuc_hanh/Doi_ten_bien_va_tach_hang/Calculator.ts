// export class Calculator {
//     public static calculate(a: number, b: number, o: string): number | string {
//         switch (o) {
//             case '+':
//                 return a + b;
//             case '-':
//                 return a - b;
//             case '*':
//                 return a * b;
//             case '/':
//                 if (b != 0)
//                     return a / b;
//                 else
//                     return "Can not divide by 0";
//             default:
//                 return "Unsupported operation";
//         }
//     }
// }
export class Calculator {
    static readonly ADDITION = '+';
    static readonly SUBTRACTION = '-';
    static readonly MULTIPLICATION = '*';
    static readonly DIVISION = '/';

    public static calculate(firstOperand: number, secondOperand: number, operator: string): number|string {
        switch (operator) {
            case this.ADDITION:
                return firstOperand + secondOperand;
            case this.SUBTRACTION:
                return firstOperand - secondOperand;
            case this.MULTIPLICATION:
                return firstOperand * secondOperand;
            case this.DIVISION:
                if (secondOperand != 0)
                    return firstOperand / secondOperand;
                else
                    return "Can not divide by 0";
            default:
                return "Unsupported operation";
        }
    }
}
