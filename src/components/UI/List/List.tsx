import React, { FC } from 'react';

import { ProjectList } from '@/@types/types';
type ListProps = {
  text: ProjectList;
};

const List: FC<ListProps> = ({ text }) => {
  return (
    <div>
      <p>{text.intro}</p>
      <ul>
        {text.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
