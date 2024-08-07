var firstName = 'matilda';

const bhavya = {
    firstName: 'Bhavya',
    year: 2001,
    calcAge: function(){
        console.log(this);
        console.log(2024 - this.year);
    },
    greet: () =>{ 
        console.log(this)
        console.log(`Hey ${this.firstName}`)},
}

bhavya.greet();
console.log(this.firstName)