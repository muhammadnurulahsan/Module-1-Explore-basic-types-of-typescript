{
  // Learning Function
  // Normal Function
  // Arrow Function

  function add(a: number, b: number = 10): number {
    return a + b;
  }

  add(1, 5);

  const addArrow = (num1: number, num2: number): number => num1 + num2;

  // object --> function --> method

  const poorUser = {
    name: "ahsan",
    balance: 0,
    addBalance(balance: number): string {
      return `My New Balance: ${this.balance + balance}`;
    },
  };

  const array: number[] = [1, 2, 3];
  const newArray = array.map((elem: number): number => elem * elem);
}
