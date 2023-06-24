import React, { FC } from 'react';
import Link from 'next/link';

import ClickableCursor from '@/components/UI/Cursor/ClickableCursor';
import GitHubIcon from '@/components/UI/icons/GitHubIcon/GitHubIcon';
import LinkIcon from '@/components/UI/icons/LinkIcon/LinkIcon';

type ProjectLinksProps = {
  gitHub?: string;
  site?: string;
};

const ProjectLinks: FC<ProjectLinksProps> = ({ gitHub, site }) => {
  return (
    <div className="flex items-center justify-end gap-4">
      {site ? (
        <ClickableCursor text="link">
          <Link href={site} target="_blank">
            <LinkIcon height="32px" width="32px" className="inline" />
          </Link>
        </ClickableCursor>
      ) : null}
      {gitHub ? (
        <ClickableCursor text="github">
          <Link href={gitHub} target="_blank">
            <GitHubIcon height="32px" width="32px" className="inline" />
          </Link>
        </ClickableCursor>
      ) : null}
    </div>
  );
};

export default ProjectLinks;
