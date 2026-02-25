export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  image: string;
  company: {
    name: string;
    title: string;
  };
}

export interface PostAPI {
  userId: number;
  id: number;
  title: string;
  body: string;
}
