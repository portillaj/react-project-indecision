class Person {
    constructor(name, age) {
        this.name = name || 'test';
        this.age = age || 0;
    }

    getGreeting() {
        return `Hi. I am ${this.name}!`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person{
   constructor(name, age, major) {
    super();    
    this.major = major;
   }
   hasMajor() {
    return !!this.major; 
   }
   getDescription() {
      let description = super.getDescription();

      if(this.hasMajor()) {
          description += ` Their major is ${this.major}`;
      }

      return description;
   }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if(this.homeLocation) {
            greeting += ` I'm visiting from ${this.homeLocation}`;
        }

        return greeting;
    }
}

const me = new Traveler("Jason Portilla", 32, 'Apopka');
console.log(me.getGreeting());

const other = new Student();
console.log(other.getGreeting());

