import { useEffect } from 'react';
import useWindowSize from '../util/useWindowSize';

interface AbilityProps {
  skill: string;
}

const Ability = (props: AbilityProps) => {
  const { skill } = props;

  const windowSize = useWindowSize();

  useEffect(() => {
    const elements = document.querySelectorAll('.ability');

    elements.forEach((element: any) => {
      const learningContainer = element.parentNode as any;
      const totalWidth = learningContainer.offsetWidth - element.offsetWidth;

      let position = Math.floor(Math.random() * (learningContainer.offsetWidth - 100));
      let pace = 1;

    const move = () => {
        window.requestAnimationFrame(move);
        position += pace;

        if (position >= totalWidth || position <= 0) {
          pace = -pace;
          position += pace;
        }

        // eslint-disable-next-line no-param-reassign
        element.style.left = `${position}px`;
      };

      move();
    });
  }, [windowSize.width]);

  return (
    <li
      className="relative text-primary-500 dark:text-primary-100 left-5 text-lg xl:text-xl 2xl:text-2xl font-medium ability w-fit"
    >
      {skill}
    </li>
  );
};

export default Ability;
