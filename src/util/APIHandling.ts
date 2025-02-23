const baseURL = 'https://johnftitor-portfolio-api.herokuapp.com/';
import { Project } from '../redux/types';
import { AddProjectFormData, LoginBody } from './types';

interface ProjectEntry {
  attributes: Project;
}

const getProjects = async (): Promise<Project[]> => {
  const response = await fetch(`${baseURL}/projects`);
  const responseFormatted = await response.json();
  const data = await responseFormatted.data;
  return data.map((entry: ProjectEntry) => entry.attributes);
};

const loginUser = async (data: LoginBody) => {
  const response = await fetch(`${baseURL}/login`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  
  const responseFormatted = await response.json();

  if (response.status === 200) {
    localStorage.user = JSON.stringify(responseFormatted);
  }
  return { status: response.status, data: responseFormatted };
};

const deleteProject = async (id: number, token: string) => {
  const response = await fetch(`${baseURL}/projects/${id}`, {
    method: 'DELETE',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  });
  const responseFormatted = await response.json();
  return { status: response.status, data: responseFormatted };
};

const createProject = async (formData: AddProjectFormData, token: string): Promise<{ status: number; project: Project }> => {
  const response = await fetch(`${baseURL}/projects`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      Authorization: token,
    },
    body: formData,
  });
  const responseFormatted = await response.json();
  return { status: response.status, project: responseFormatted };
};

export {
  getProjects,
  loginUser,
  deleteProject,
  createProject,
};
