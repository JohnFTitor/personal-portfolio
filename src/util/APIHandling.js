const baseURL = 'http://localhost:3000';

const getProjects = async () => {
  const response = await fetch(`${baseURL}/projects`);
  const responseFormated = await response.json();
  const data = await responseFormated.data;
  return data.map((entry) => entry.attributes);
};

export default getProjects;
