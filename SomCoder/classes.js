// prototype and Classes
// =====================

// = prototype language, waxa ay isticmaashaa object
// object-oriented-language = sidaa daraateed ayaa loogu magacaabay

// prototype
// ---------
// ES6 before 

var User = function (name, email) {
    this.name = name;
    this.email = email;
}

User.prototype.information = function () {
    return "Name: " + this.name + "Email: " + this.email;
}

const Mohamed = new User("Mohamed ", " Mohamed44@gmail.com");

console.log(Mohamed.information());