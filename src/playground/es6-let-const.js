var nameVar = 'Jason';
nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Mark';
console.log('nameLet', nameLet);

const nameConst = 'Noah';
console.log('nameConst', nameConst);

//block scoping

const fullName = 'Jason Portilla';

if(fullName) {
    var firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);
