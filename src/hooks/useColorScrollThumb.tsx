import React, { useEffect } from 'react';

const useColorScrollThumb = () => {
  useEffect(() => {
    const root = document.documentElement;

    const toggleThumbColor = () => {
      console.log('wheel');
      console.log(root.style);
      root.style.setProperty('--scrollbar-thumb-color', '#eb8715');
    };

    window.addEventListener('wheel', toggleThumbColor);

    return window.removeEventListener('wheel', toggleThumbColor);
  }, []);

  return null;
};

export default useColorScrollThumb;
