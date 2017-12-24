//arguments object - no longer bound with arrow functions

const add = (a, b) => {
    //console.log(arguments);
    return a + b;
};

console.log(add(55,1));

//this keyword - no longer bound
const user = {
    name: 'Jason',
    cities: ['new york', 'orlando', 'raleigh'],
    printPlacesLived(){
        return this.cities.map((city) => `${this.name} has lived in ${city}`);
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // });
    }
};

console.log(user.printPlacesLived());

const multiplier = {
    //numbers - array of numbers
    numbers: [10, 20, 30],
    //multiplyBy - single number
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());