{
  // Ternary Operator
  // Optional Chaining
  // Nullish Coalescing Operator

  const age: number = 18;
  if (age >= 18) {
    console.log("adult");
  } else {
    console.log("not adult");
  }

  const isAdult = age >= 16 ? "adult" : "not adult";
  //   console.log({ isAdult})

  // Nullish Coalescing Operator
  // Null or Undefined ----> Decision Making

  const isAuthenticated = null;

  const result = isAuthenticated ?? "Guest";
  const result2 = isAuthenticated ? isAuthenticated : "Guest";
  console.log({ result }, { result2 });

  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };

  const user: User = {
    name: "Ahsan",
    address: {
      city: "ashi dag",
      road: "ibrahipur",
      presentAddress: "dhaka",
    },
  };

  const permanentAddress = user?.address?.permanentAddress ?? "N/A";
  console.log({ permanentAddress });
}
