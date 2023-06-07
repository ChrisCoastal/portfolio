import React, { FC, useEffect, useRef, useState } from 'react';

import type { CodeSnippet } from '@/@types/types';
import CodeBlock from '@/components/UI/CodeBlock/CodeBlock';
import ClickableCursor from '@/components/UI/Cursor/ClickableCursor';
import CodeIcon from '@/components/UI/icons/CodeIcon/CodeIcon';
import useDimensions from '@/hooks/useDimensions';
import useResizeWindow from '@/hooks/useResizeWindow';
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
  // const [showCode, setShowCode] = useState<boolean>(show);
  const dropDownRef = React.useRef<HTMLDivElement>(null);
  const showCodeRef = React.useRef<boolean>(show);
  const [dropDownStyles, animateDropDown] = useSpring(() => ({
    opacity: showCodeRef.current ? 1 : 0,
    height: showCodeRef.current ? 500 : 0,
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
        // duration: showCode ? 500 : undefined,
        tension: showCode ? 500 : 280,
        friction: showCode ? 300 : 30,
        mass: showCode ? 0.1 : 0.2,
      },
    });
    showCodeRef.current = showCode;
  }

  // const { width, height } = useDimensions(dropDownRef);

  const { windowSize: size, breakPoints } = useResizeWindow();

  // useEffect(() => {
  //   console.log(width, height);
  // }, [width, height]);

  return (
    <div className={`${className}`}>
      <div className="flex">
        {/* <span className="w-full"></span> */}
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
          width: size.innerWidth > breakPoints.sm ? '92vw' : '96vw',
          maxWidth: '72rem',
          opacity: dropDownStyles.opacity,
        }}
        ref={dropDownRef}
        id="code-container"
        className="flex flex-col gap-8 overflow-x-clip overflow-y-scroll bg-stone-800 p-3 pt-4 sm:p-8"
      >
        {snippets.map((snippet) => (
          <CodeBlock
            key={snippet.fileName}
            // language={snippet.language}
            fileName={snippet.fileName}
            code={snippet.code}
          >
            {snippet.code}
          </CodeBlock>
        ))}
      </animated.div>
    </div>
  );
};

export default CodeDropDown;
