export async function fetchUsers() {
  const response = await fetch("https://dummyjson.com/users?limit=20");
  const data = await response.json();
  return data.users;
}

export async function fetchPosts(userId: number) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  return response.json();
}
