// 1.Variable that is not initialzed will give underfined
//2.function with no return
//3.parameter that is not passed will be undefind
//4. if return has nothing on the right side return undefined
//6. accessing array elements outside of the index range


let first;
//console.log(first);

function second(a, b){
    const total = a + b;
}

const result = second();
//console.log(result);

function third(a, b, c, d){
    const total = a + b + c + d;
    //console.log(a, b, c,d)
}
third(2, 4,);

function noNegative(a, b){
    if(a < 0 || b< 0){
        return;
    }
    return a + b;
}
const total = noNegative(2,-5);

const sixth = [4, 89, 56, 58]
console.log(sixth[1],sixth[9])
