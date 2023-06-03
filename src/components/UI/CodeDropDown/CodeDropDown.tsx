import React, { FC, useRef } from 'react';

import CodeBlock from '@/components/UI/CodeBlock/CodeBlock';
import ClickableCursor from '@/components/UI/Cursor/ClickableCursor';
import CodeIcon from '@/components/UI/icons/CodeIcon/CodeIcon';
import type { CodeSnippet } from '@/constants/content';
import { animated, useSpring } from '@react-spring/web';

type CodeDropDownProps = {
  snippets: CodeSnippet[];
  show?: boolean;
};

const CodeDropDown: FC<CodeDropDownProps> = ({ snippets, show = false }) => {
  const codeBlockRef = React.useRef<HTMLDivElement>(null);
  const dropDownRef = React.useRef<HTMLDivElement>(null);
  const showCodeRef = React.useRef<boolean>(show);
  const [codeBlockStyles, animateCodeBlock] = useSpring(() => ({
    opacity: 0,
    // transform: 'translateY: -100px',
    // height: '0%',
    config: {
      tension: 320,
      friction: 18,
      mass: 0.2,
    },
  }));
  const [dropDownStyles, animateDropDown] = useSpring(() => ({
    opacity: 0,
    height: 0,
    config: {
      tension: 320,
      friction: 18,
      mass: 0.2,
    },
  }));

  function showCode() {
    console.log('click');
    const show = showCodeRef.current;
    animateDropDown.start({
      opacity: show ? 1 : 0,
      height: show ? 500 : 0,
    });
    animateCodeBlock.start({
      opacity: show ? 1 : 0,
      // transform: 'translateY: 0px',
      // height: show ? '100%' : '0%',
    });
    showCodeRef.current = !showCodeRef.current;
  }

  return (
    <div className="bg-white">
      <ClickableCursor text="link">
        <div onClick={showCode} className="inline-block">
          <CodeIcon
            height="32px"
            width="32px"
            color="black"
            className="inline"
          />
        </div>
      </ClickableCursor>
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
