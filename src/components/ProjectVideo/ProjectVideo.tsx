import React, { FC } from 'react';

type ProjectVideoProps = {
  video?: string;
};

const ProjectVideo: FC<ProjectVideoProps> = (video) => {
  return (
    <>
      {video && (
        <div className="bg-stone-800 p-20">
          <video muted autoPlay loop className="h-auto !w-full">
            <source src={`${video}.webm`} type="video/webm" />
            <source src={`${video}.webm`} type="video/mp4" />
          </video>
        </div>
      )}
    </>
  );
};

export default ProjectVideo;
