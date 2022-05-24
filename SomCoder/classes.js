// prototype and Classes
// =====================

// = prototype language, waxa ay isticmaashaa object
// object-oriented-language = sidaa daraateed ayaa loogu magacaabay

// prototype
// ---------
// ES6 before 

// var User = function (name, email) {
//     this.name = name;
//     this.email = email;
// }

// User.prototype.information = function () {
//     return "Name: " + this.name + "Email: " + this.email;
// }

// const Mohamed = new User("Mohamed ", " Mohamed44@gmail.com");

// console.log(Mohamed.information());

// // extend 

// const Admin = function (name, email, role) {
//     User.call(this, name, email);
//     this.role = role;
// }

// Object.getPrototypeOf(Admin, User.prototype); // extend

// Admin.prototype.AdminInformation = function () {
//     return "Name: " + this.name + " Email: " + this.email + " Role: " + this.role;
// }

// const subeer = new Admin("Subeer", "Subeer44@gmail.com", "Admin");

// console.log(subeer.AdminInformation());
// -----------------------------------------------------------------------

// Classes

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    Information() {
        return `name:${this.name} email:${this.email} `
    }
}

let Faarax = new User("faarax", "faarax44@yahoo.com");

// console.log(cali.Information());


// extend

class Admin extends User {
    constructor(name, email, role) {
        super(name, email,);
        this.role = role;
    }
    AdminInformation() {
        return `Name:${this.name} Email:${this.email} Role:${this.role}`
    }
}

let subeer = new Admin("subeer", "subeer44@gamil.com", "Admin");

// console.log(subeer.AdminInformation());

// Circle

// class Circle {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }
//     circumfuris() {
//         return `60: ${this.width} 100: ${this.height}`
//     }
// }

// let radius = new Circle(60 + 100, 2(3.14));

// console.log(radius.circumfuris());

// // extends

// class square extends Circle {
//     constructor(width, height, length) {
//         super(width, height);
//         this.length = length;
//     }
//     total() {
//         return `60: ${this.width} 100: ${this.height} 10: ${this.length}`
//     }
// }

// let sum = new square(60 + 100, 3.14, 10);

// console.log(sum.square());