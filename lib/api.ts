import { User, PostAPI } from "@/types";

export async function fetchUsers(): Promise<User[]> {
  const response = await fetch("https://dummyjson.com/users?limit=20");
  if (!response.ok) {
    throw new Error(`Failed to fetch users: ${response.statusText}`);
  }
  const data = await response.json();
  return data.users;
}

export async function fetchPosts(userId: number): Promise<PostAPI[]> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch posts for user ${userId}: ${response.statusText}`);
  }
  return response.json();
}
