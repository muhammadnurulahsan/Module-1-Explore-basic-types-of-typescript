{
  // Spread Operator
  // Rest Operator
  // Destructuring

  // Learn Spread Operator
  const brothers: string[] = ["Mir", "Firoz", "Mizan"];
  const brothers2: string[] = ["Tanmoy", "Nahid", "Rahat"];

  brothers.push(...brothers2);

  const mentors = {
    typescript: "Mezba",
    redux: "Mir",
    dbms: "Mizan",
  };
  const mentors2 = {
    prisma: "Firoz",
    next: "Tanmoy",
    cloud: "Nahid",
  };

  const mentorsList = {
    ...mentors,
    ...mentors2,
  };

  // Learn Rest Operator

  const greetFriends = (...friends: string[]) => {
    friends.forEach((friend: string) => console.log(`Hi ${friend}`));
  };

  greetFriends("Abul", "Babul", "Kabul", "Ubul");
}
