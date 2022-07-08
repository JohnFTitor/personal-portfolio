import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import LoadingAnimation from './LoadingAnimation';

const Page = (props) => {
  const [loaded, setLoaded] = useState(false);
  const { element, animation, condition } = props;

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1000);
  }, [loaded]);

  return (
    <main className="dark:bg-zinc-900">
      { (loaded && condition) ? element : <LoadingAnimation animation={animation} />}
    </main>
  );
};

Page.defaultProps = {
  condition: true,
};

Page.propTypes = {
  element: PropTypes.element.isRequired,
  animation: PropTypes.string.isRequired,
  condition: PropTypes.bool,
};

export default Page;
