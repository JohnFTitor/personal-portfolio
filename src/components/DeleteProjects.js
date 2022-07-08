import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchProjects, removeProject } from '../redux/projectsReducer';

const DeleteProjects = ({ user }) => {
  const { status, data } = useSelector((state) => state.projects);

  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'iddle') {
      dispatch(fetchProjects());
    }
  }, []);

  const destroyProject = async (id) => {
    dispatch(removeProject({
      id,
      token: user.token,
    }));
  };

  return (
    <ul className="min-h-content-screen flex flex-col gap-8 p-20">
      {data.map((project) => (
        <li key={project.id} className="flex w-full justify-around items-center p-5 border-2 border-solid border-primary-900 dark:border-primary-50">
          <span className="text-lg text-primary-900 dark:text-primary-50">
            { project.id }
          </span>
          <p className="text-lg text-primary-900 dark:text-primary-50">
            { project.title }
          </p>
          <Button type="button" className="bg-red-900 dark:bg-red-100 text-white dark:text-red-900" onClick={() => { destroyProject(project.id); }}> Delete </Button>
        </li>
      ))}
    </ul>
  );
};

DeleteProjects.propTypes = {
  user: PropTypes.shape({
    token: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
  }).isRequired,
};

export default DeleteProjects;
