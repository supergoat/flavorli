export interface IRecipe {
  id: string;
  author: string;
  name: string;
  image: string;
  preparation: number;
  cooking: number;
  portions: string;
  difficulty: string;
}

export interface IRecipeWithTasks extends IRecipe {
  tasks: {
    name: string;
    ingredients: {qty: string; name: string}[];
    steps: string[];
  }[];
}
