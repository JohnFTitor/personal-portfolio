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

const deleteProject = async (id, token) => {
  const response = await fetch(`${baseURL}/projects/${id}`, {
    method: 'DELETE',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  });
  const responseFormated = await response.json();
  return { status: response.status, data: responseFormated };
};

const createProject = async (data, token) => {
  const response = await fetch(`${baseURL}/projects`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify(data),
  });
  const responseFormated = await response.json();
  return { status: response.status, project: responseFormated };
};

export {
  getProjects,
  loginUser,
  deleteProject,
  createProject,
};
