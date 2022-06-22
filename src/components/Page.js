import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import LoadingAnimation from './LoadingAnimation';

const Page = (props) => {
  const [loaded, setLoaded] = useState(false);
  const { element, animation } = props;

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1000);
  }, [loaded]);

  return (
    <main>
      { loaded ? element : <LoadingAnimation animation={animation} />}
    </main>
  );
};

Page.propTypes = {
  element: PropTypes.element.isRequired,
  animation: PropTypes.string.isRequired,
};

export default Page;
