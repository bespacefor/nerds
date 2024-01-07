export interface IElixir {
  id: string;
  name: string;
  effect?: string;
  sideEffects?: string;
  characteristics?: string;
  time?: string;
  difficulty: string;
  ingredients?: Array<{
    id: string;
    name: string;
  }>;
  inventors: Array<{
    id: string;
    firstName: string;
    lastName: string;
  }>;
  manufacturer?: string;
}
