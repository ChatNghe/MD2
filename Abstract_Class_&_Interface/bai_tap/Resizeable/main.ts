import {ResizeCircle} from "./ResizeCircle";
import {ResizeRectangle} from "./ResizeRectangle";
import {ResizeSquare} from "./ResizeSquare";

let circle = new ResizeCircle('circle',2,200)
circle.resize(50)
console.log(circle);

let rectangle = new ResizeRectangle(1,2,'rectangle',200)
rectangle.resize(50)
console.log(rectangle);

let square = new ResizeSquare('square',2,200)
square.resize(50)
console.log(square);