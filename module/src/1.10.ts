{
  // Union Type

  type FrontendDeveloper = "fakibazDeveloper" | "juniorDeveloper";
  type FullStackDeveloper = "juniorDeveloper" | "expertDeveloper";

  type Developer = FrontendDeveloper | FullStackDeveloper;

  const newDeveloper: FrontendDeveloper = "juniorDeveloper";

  type User = {
    name: string;
    email: string;
    gender: "male" | "female";
    bloodGroup: "O+" | "A+" | "AB+";
  };

  const user1: User = {
    name: "ahsan",
    email: "@gmail.com",
    gender: "male",
    bloodGroup: "AB+",
  };

  type NewFrontendDeveloper = {
    skills: string[];
    designation1: "Frontend Developer";
  };
  type NewBackendDeveloper = {
    skills: string[];
    designation2: "Backend Developer";
  };

  type FullStackDeveloperNew = NewFrontendDeveloper & NewBackendDeveloper;

  const FullStackDeveloperNew: FullStackDeveloperNew = {
    skills: ["HTML", "CSS", "EXPRESS"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };
}
