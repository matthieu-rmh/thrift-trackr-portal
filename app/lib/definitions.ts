export type Item = {
    name: string;
    category: Category;

  };
  
export type Category = {
    name: string;
};

// DUMMY STATE TYPE FOR LOGIN FORM VALIDATION
export type LoginFormState =
  | {
      errors?: {
        name?: string[]
        password?: string[]
      }
    }
  | undefined