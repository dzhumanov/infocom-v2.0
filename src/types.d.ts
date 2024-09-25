export interface UserData {
  name: string;
  surname: string;
  inn: string;
  taxMode: "simple" | "general";
  income: number;
}
