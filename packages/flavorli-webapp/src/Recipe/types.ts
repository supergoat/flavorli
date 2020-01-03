export interface IRecipe {
  name: string;
  image: string;
  preparation: string;
  cooking: string;
  portions: string;
  difficulty: string;
  tasks: {
    name: string;
    ingredients: {qty: string; name: string}[];
    steps: string[];
  }[];
}
