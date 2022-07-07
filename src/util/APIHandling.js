const baseURL = 'http://localhost:3000';

const getProjects = async () => {
  const response = await fetch(`${baseURL}/projects`);
  const responseFormated = await response.json();
  const data = await responseFormated.data;
  return data.map((entry) => entry.attributes);
};

const loginUser = async (data) => {
  const response = await fetch(`${baseURL}/login`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const responseFormated = await response.json();

  if (response.status === 200) {
    localStorage.user = JSON.stringify(responseFormated);
  }
  return { status: response.status, data: responseFormated };
};

export { getProjects, loginUser };
