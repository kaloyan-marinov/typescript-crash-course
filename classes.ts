class User {
  name: string;
  email: string;
  age: number;
  // private name: string;
  // private email: string;
  // private age: number;

  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;

    console.log(`User Created: ${this.name}`);
  }

  register() {
    console.log(`${this.name} is now registered`);
  }
  // private register() {
  //   console.log(`${this.name} is now registered`);
  // }
}

let john = new User('John Doe', 'john.doe@gmail.com', 34);

console.log(john.age);

john.register();
