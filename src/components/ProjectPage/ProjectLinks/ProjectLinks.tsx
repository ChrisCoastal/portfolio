import React, { FC } from 'react';
import Link from 'next/link';

import ClickableCursor from '@/components/UI/Cursor/ClickableCursor';
import GitHubIcon from '@/components/UI/icons/GitHubIcon/GitHubIcon';
import LinkIcon from '@/components/UI/icons/LinkIcon/LinkIcon';
import { breakPoints } from '@/constants/constants';

type ProjectLinksProps = {
  gitHub?: string;
  site?: string;
  innerWidth: number;
};

const ProjectLinks: FC<ProjectLinksProps> = ({ gitHub, site }) => {
  const size = innerWidth < breakPoints.md ? '48px' : '38px';

  return (
    <div className="col-span-3 mb-4 flex items-center justify-end gap-8 self-start md:gap-6">
      {site ? (
        <ClickableCursor text="link">
          <Link href={site} target="_blank">
            <LinkIcon height={size} width={size} className="inline" />
          </Link>
        </ClickableCursor>
      ) : null}
      {gitHub ? (
        <ClickableCursor text="github">
          <Link href={gitHub} target="_blank">
            <GitHubIcon
              height={size}
              width={size}
              className="inline"
              fill="outline"
            />
          </Link>
        </ClickableCursor>
      ) : null}
    </div>
  );
};

export default ProjectLinks;
