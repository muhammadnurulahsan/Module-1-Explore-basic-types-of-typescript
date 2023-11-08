// Reference Type --> Object

const user: {
  firstName: string;
  middleName?: string; // optional type
  lastName: string;
  isMarried: boolean;
  readonly company: "Google"; // literal type
} = {
  firstName: "Nurul",
  middleName: "Ahsan",
  lastName: "Rifat",
  isMarried: false,
  company: "Google",
};
