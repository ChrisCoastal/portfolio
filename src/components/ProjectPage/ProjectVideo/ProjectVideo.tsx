import React, { FC } from 'react';

type ProjectVideoProps = {
  video?: string;
};

const ProjectVideo: FC<ProjectVideoProps> = ({ video }) => {
  return (
    <>
      {video ? (
        <div className="bg-stone-800 p-0 shadow-md sm:p-20">
          <video muted autoPlay loop playsInline>
            <source src={`${video}.webm`} type="video/webm" />
            <source src={`${video}.mp4`} type="video/mp4" />
          </video>
        </div>
      ) : null}
    </>
  );
};

export default ProjectVideo;
