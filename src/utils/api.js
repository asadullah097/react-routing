export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/asadullah097");
  return response.json();
};
