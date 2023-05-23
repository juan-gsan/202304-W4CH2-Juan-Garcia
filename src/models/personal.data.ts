export type PersonalData = {
  name: string;
  lastName: string;
  birthDate: Date;
  gender: "male" | "female" | "other" | "prefer not to mention";
  email: string;
  newsletter: boolean;
};
