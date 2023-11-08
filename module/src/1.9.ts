{
  // Type Alias

  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
  };

  const student1: Student = {
    name: "ahsan",
    age: 24,
    gender: "male",
    contactNo: "0185447854",
    address: "dhaka",
  };

  const student2: Student = {
    name: "hasan",
    age: 30,
    gender: "male",
    address: "dhaka",
  };

  type UserName = string;
  type IsAdmin = boolean;
  const userName: UserName = "Ahsan";
  const isAdmin: IsAdmin = true;

  type Add = (num1: number, num2: number) => number;

  const add: Add = (num1, num2) => num1 + num2;


  
}
