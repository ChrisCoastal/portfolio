import React, { FC, useRef } from 'react';

import CodeBlock from '@/components/UI/CodeBlock/CodeBlock';
import ClickableCursor from '@/components/UI/Cursor/ClickableCursor';
import CodeIcon from '@/components/UI/icons/CodeIcon/CodeIcon';
import type { CodeSnippet } from '@/constants/content';
import { animated, useSpring } from '@react-spring/web';

type CodeDropDownProps = {
  snippets: CodeSnippet[];
  show?: boolean;
  className?: string;
};

const CodeDropDown: FC<CodeDropDownProps> = ({
  snippets,
  show = false,
  className,
}) => {
  const dropDownRef = React.useRef<HTMLDivElement>(null);
  const showCodeRef = React.useRef<boolean>(show);
  const [dropDownStyles, animateDropDown] = useSpring(() => ({
    opacity: show ? 1 : 0,
    height: show ? 500 : 0,
    config: {
      tension: 280,
      friction: 30,
      mass: 0.2,
    },
  }));

  function toggleShowCode() {
    const showCode = !showCodeRef.current;
    animateDropDown.start({
      opacity: showCode ? 1 : 0,
      height: showCode ? 500 : 0,
      config: {
        // tension: show ? 500 : 280,
        friction: show ? 300 : 30,
        mass: show ? 0.1 : 0.2,
      },
    });
    showCodeRef.current = showCode;
  }

  return (
    <div className={`${className} mx-20 mb-20`}>
      <div className="flex p-4">
        <span className="w-full"></span>
        <ClickableCursor text="link">
          <span onClick={toggleShowCode}>
            <CodeIcon
              height="32px"
              width="32px"
              color="#292524"
              className={``}
            />
          </span>
        </ClickableCursor>
      </div>
      <animated.div
        style={{
          maxHeight: dropDownStyles.height,
          opacity: dropDownStyles.opacity,
        }}
        ref={dropDownRef}
        className="overflow-auto"
      >
        {snippets.map((snippet) => (
          <CodeBlock
            key={snippet.fileName}
            // language={snippet.language}
            fileName={snippet.fileName}
          >
            {snippet.code}
          </CodeBlock>
        ))}
      </animated.div>
    </div>
  );
};

export default CodeDropDown;
