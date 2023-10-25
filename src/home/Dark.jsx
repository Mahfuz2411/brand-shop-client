import React from 'react';

const Dark = () => {
  const handleClick = ()=>{
    const theme =  document.documentElement.getAttribute('data-theme');
    console.log(theme);

    if(theme=="light") document.documentElement.setAttribute('data-theme', "dark");
    else document.documentElement.setAttribute('data-theme', "light");
  }

  return (
    <button onClick={handleClick} className="btn btn-outline btn-info fixed right-5 bottom-5 z-50">
      theme
    </button>
  );
};

export default Dark;