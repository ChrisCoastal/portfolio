import React, { FC } from 'react';

type ProjectLedeProps = {
  lede: {
    first: string;
    second?: string;
  };
};

const ProjectLede: FC<ProjectLedeProps> = ({ lede }) => {
  return (
    <>
      <p className="row-start-2 font-light md:col-start-1 lg:col-start-2">
        {lede.first}
      </p>
      {lede.second && (
        <p className="row-start-3 font-light md:col-start-2 lg:col-start-3">
          {lede.second}
        </p>
      )}
    </>
  );
};

export default ProjectLede;
