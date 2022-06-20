// Define initial state

import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    title: 'Project title',
    image: 'https://static.wixstatic.com/media/ea6ac8_b6b0cbe25615488e855f515846354dda~mv2.jpg/v1/fill/w_924,h_607,al_c,q_90/ea6ac8_b6b0cbe25615488e855f515846354dda~mv2.jpg',
    tags: [{ id: 1, description: 'JavaScript' }, { id: 2, description: 'React' }, { id: 3, description: 'Redux' }, { id: 4, description: 'Tailwind CSS' }],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id magna tincidunt, scelerisque nibh nec, tristique urna. Sed dolor odio, interdum in ornare ac, finibus ac arcu. Nullam malesuada ultricies bibendum. Curabitur sapien justo, ultricies eu pulvinar id, sagittis et elit. Aliquam vitae sollicitudin massa. Nam et aliquam nunc, in bibendum eros. Phasellus venenatis ipsum a porttitor vehicula. Cras porttitor pretium quam, non efficitur tortor.
    Cras metus metus, aliquam non fringilla ut, varius sed orci. Suspendisse potenti. Quisque interdum erat nec metus pretium varius. Sed nec consequat nibh. Cras pellentesque ut orci sed commodo. Etiam eu vulputate nisl. Nullam vitae porta enim. Nunc ut ligula ac felis gravida commodo nec nec ligula. Ut pulvinar suscipit turpis vitae pellentesque. Fusce nec massa vitae sem euismod accumsan at nec lorem. Maecenas fermentum pellentesque gravida. Nulla ac nisi in magna venenatis fringilla.
    Cras nec malesuada lacus. Etiam pharetra felis a ex lacinia, vitae interdum felis volutpat. Fusce vitae nisl urna. Donec et erat vitae ipsum suscipit varius eget elementum diam. Aenean suscipit tempor pretium. Aliquam ornare justo vitae tellus egestas feugiat. Fusce a eleifend justo. Praesent magna massa, consequat a suscipit non, faucibus eu tellus. Nullam non leo commodo, commodo mauris in, feugiat sem. Suspendisse efficitur mi at ipsum porttitor porttitor. Nulla sit amet eros enim.`,
    live: 'https://github.com/JohnFTitor/personal-portfolio',
    source: 'https://github.com/JohnFTitor/personal-portfolio',
  },
  {
    id: 2,
    title: 'Project title',
    image: 'https://static.wixstatic.com/media/ea6ac8_b6b0cbe25615488e855f515846354dda~mv2.jpg/v1/fill/w_924,h_607,al_c,q_90/ea6ac8_b6b0cbe25615488e855f515846354dda~mv2.jpg',
    tags: [{ id: 1, description: 'JavaScript' }, { id: 2, description: 'React' }, { id: 3, description: 'Redux' }, { id: 4, description: 'Tailwind CSS' }],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id magna tincidunt, scelerisque nibh nec, tristique urna. Sed dolor odio, interdum in ornare ac, finibus ac arcu. Nullam malesuada ultricies bibendum. Curabitur sapien justo, ultricies eu pulvinar id, sagittis et elit. Aliquam vitae sollicitudin massa. Nam et aliquam nunc, in bibendum eros. Phasellus venenatis ipsum a porttitor vehicula. Cras porttitor pretium quam, non efficitur tortor.
    Cras metus metus, aliquam non fringilla ut, varius sed orci. Suspendisse potenti. Quisque interdum erat nec metus pretium varius. Sed nec consequat nibh. Cras pellentesque ut orci sed commodo. Etiam eu vulputate nisl. Nullam vitae porta enim. Nunc ut ligula ac felis gravida commodo nec nec ligula. Ut pulvinar suscipit turpis vitae pellentesque. Fusce nec massa vitae sem euismod accumsan at nec lorem. Maecenas fermentum pellentesque gravida. Nulla ac nisi in magna venenatis fringilla.
    Cras nec malesuada lacus. Etiam pharetra felis a ex lacinia, vitae interdum felis volutpat. Fusce vitae nisl urna. Donec et erat vitae ipsum suscipit varius eget elementum diam. Aenean suscipit tempor pretium. Aliquam ornare justo vitae tellus egestas feugiat. Fusce a eleifend justo. Praesent magna massa, consequat a suscipit non, faucibus eu tellus. Nullam non leo commodo, commodo mauris in, feugiat sem. Suspendisse efficitur mi at ipsum porttitor porttitor. Nulla sit amet eros enim.`,
    live: 'https://github.com/JohnFTitor/personal-portfolio',
    source: 'https://github.com/JohnFTitor/personal-portfolio',
  },
  {
    id: 3,
    title: 'Project title',
    image: 'https://static.wixstatic.com/media/ea6ac8_b6b0cbe25615488e855f515846354dda~mv2.jpg/v1/fill/w_924,h_607,al_c,q_90/ea6ac8_b6b0cbe25615488e855f515846354dda~mv2.jpg',
    tags: [{ id: 1, description: 'JavaScript' }, { id: 2, description: 'React' }, { id: 3, description: 'Redux' }, { id: 4, description: 'Tailwind CSS' }],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id magna tincidunt, scelerisque nibh nec, tristique urna. Sed dolor odio, interdum in ornare ac, finibus ac arcu. Nullam malesuada ultricies bibendum. Curabitur sapien justo, ultricies eu pulvinar id, sagittis et elit. Aliquam vitae sollicitudin massa. Nam et aliquam nunc, in bibendum eros. Phasellus venenatis ipsum a porttitor vehicula. Cras porttitor pretium quam, non efficitur tortor.
    Cras metus metus, aliquam non fringilla ut, varius sed orci. Suspendisse potenti. Quisque interdum erat nec metus pretium varius. Sed nec consequat nibh. Cras pellentesque ut orci sed commodo. Etiam eu vulputate nisl. Nullam vitae porta enim. Nunc ut ligula ac felis gravida commodo nec nec ligula. Ut pulvinar suscipit turpis vitae pellentesque. Fusce nec massa vitae sem euismod accumsan at nec lorem. Maecenas fermentum pellentesque gravida. Nulla ac nisi in magna venenatis fringilla.
    Cras nec malesuada lacus. Etiam pharetra felis a ex lacinia, vitae interdum felis volutpat. Fusce vitae nisl urna. Donec et erat vitae ipsum suscipit varius eget elementum diam. Aenean suscipit tempor pretium. Aliquam ornare justo vitae tellus egestas feugiat. Fusce a eleifend justo. Praesent magna massa, consequat a suscipit non, faucibus eu tellus. Nullam non leo commodo, commodo mauris in, feugiat sem. Suspendisse efficitur mi at ipsum porttitor porttitor. Nulla sit amet eros enim.`,
    live: 'https://github.com/JohnFTitor/personal-portfolio',
    source: 'https://github.com/JohnFTitor/personal-portfolio',
  },
];

// Define Action
const getProjects = createAction('GET_PROJECTS');

export { getProjects };

// Define Reducer
const projectsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getProjects, (state) => state);
});

export default projectsReducer;
