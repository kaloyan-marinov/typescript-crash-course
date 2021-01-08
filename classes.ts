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

  payInvoice() {
    console.log(`${this.name} is paying an invoice...`)
  }
}

class Member extends User {
  id: number;

  constructor(id: number, name: string, email: string, age: number) {
    super(name, email, age);
    this.id = id;
  }

  payInvoice() {
    super.payInvoice()
  }
}

let john = new User('John Doe', 'john.doe@gmail.com', 34);
console.log(john.age);
john.register();

let mike: User = new Member(1, 'Mike Smith', 'mike.smith@hmail.com', 33)
mike.payInvoice();