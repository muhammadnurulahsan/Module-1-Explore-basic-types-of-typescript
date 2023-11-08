// Destructuring
{
  const user = {
    id: 432,
    name: {
      firstName: "Nurul",
      middleName: "Ahsan",
      lastName: "RIfat",
    },
    contactNo: "0170000000",
    address: "Bangladesh",
  };

  const {
    contactNo: phone,
    name: { middleName },
  } = user;

  // Array Destructuring

  const myFriends = ["sakib", "tamim", "shanto", "nurul"];

  const [a, b, c, ...rest] = myFriends;
}
