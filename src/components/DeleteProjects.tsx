import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { removeProject } from '../redux/projectsReducer';
import { RootState } from '../redux/store';
import { useAppDispatch } from '../redux/store';

interface DeleteProjectsProps {
  user: {
    token: string;
    role: string;
  };
}

const DeleteProjects = ({
  user
}: DeleteProjectsProps) => {
  const { data } = useSelector((state: RootState) => state.projects);

  const dispatch = useAppDispatch();

  const destroyProject = async (id: number) => {
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

export default DeleteProjects;
