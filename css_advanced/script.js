const squareNumbers = (arr) => () => arr.map(a=>a*a)
const result = squareNumbers([2,4,5,8])
console.log(result())

const filterEvens = (arr) => arr.filter(a=>a%2===0)
console.log(filterEvens([2,1,5,4,8,13,16,20]))

const findMax = (arr) => arr.reduce((acc,curr) => curr>acc?curr:acc,0)
console.log(findMax([2,6,12,100,3,1]))


const createMultiplyByFunction = (n) => (m) => n*m;
const answer = createMultiplyByFunction(3)
console.log(answer(2))

const withPrefix = (prefix) => (mess) => prefix + " " + mess ;
const greet = withPrefix("Hello")
console.log(greet("Solo"))

const processNums = (arr) => {
    return arr
            .filter(a=>a%2===0)
            .map(a=>a*2)
            .reduce((acc,curr)=>acc+curr,0)
}

console.log(processNums([2,4,5,1,8,6,9]))

const logWrapper = (fs) => {
   console.log(`Arguments: ${arguments}`)
   return  fs()
}

const add = (a,b) => a+b

const loggedAdd = logWrapper(add(2,5)) 
console.log(loggedAdd)