import { Project } from "../redux/types";

export interface LoginBody {
  username: string;
  password: string;
}

export type ProjectKeys = keyof Omit<Project, 'id'> | 'desktop_image' | 'mobile_image';

export interface AddProjectFormData extends FormData {
  get(key: ProjectKeys): FormDataEntryValue | null;
}
