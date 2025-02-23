import React, { useEffect, useState } from 'react';
import LoadingAnimation from './LoadingAnimation';

interface PageProps {
  element: React.ReactElement;
  animation: string;
  condition?: boolean;
}

const Page = (props: PageProps) => {
  const [loaded, setLoaded] = useState(false);
  const { element, animation, condition = true } = props;

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

export default Page;
