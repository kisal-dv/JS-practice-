class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a sound.`);
    }
  }
  
  const dog = new Animal("Dog");
  dog.speak();     
  

// little call back example

function greet(name, callback) {
    console.log("hell0," + name);
    callback();
    
}

function saygoodbye() {
    console.log("good bye !")
    
}
greet("kisal",saygoodbye);


///

function greeting1(name, callback) {
    console.log("Hello," +name)
    callback();
    
}
function saygoodmorining() {
    console.log("Good morining  !");
    
}
greeting1("kisal 1 ",saygoodmorining);


////////////////////////
