import React, { FC } from 'react';

type ButtonProps = {
  text?: string;
  className?: string;
};

const Button: FC<ButtonProps> = ({ text, className }) => {
  return (
    <button className={`${className} `}>
      <div className="absolute left-0 top-0 h-8 w-28 bg-stone-800" />
      <div className="flex h-8 w-28 -translate-y-1 translate-x-1 items-center justify-center border border-stone-800/50 bg-white text-center text-sm transition-all duration-700 ease-in-out hover:-translate-y-1 hover:translate-x-1 active:-translate-y-0.5 active:translate-x-0.5 sm:translate-x-0 sm:translate-y-0">
        <p>{text}</p>
      </div>
    </button>
  );
};

export default Button;
