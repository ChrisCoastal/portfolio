import React, { FC, useRef, useState } from 'react';

import type { CodeSnippet } from '@/@types/types';
import CodeBlock from '@/components/UI/CodeBlock/CodeBlock';
import ClickableCursor from '@/components/UI/Cursor/ClickableCursor';
import CodeIcon from '@/components/UI/icons/CodeIcon/CodeIcon';
import CodeTagIcon from '@/components/UI/icons/CodeTagIcon/CodeTagIcon';
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
  const [open, setOpen] = useState<boolean>(false);
  const dropDownRef = useRef<HTMLDivElement>(null);
  const showCodeRef = useRef<boolean>(show);
  const iconRef = useRef<HTMLDivElement>(null);
  const [dropDownStyles, animateDropDown] = useSpring(() => ({
    opacity: showCodeRef.current ? 1 : 0,
    height: showCodeRef.current ? 500 : 0,
    bg: showCodeRef.current ? '#29252400' : '#29252422',
    deg: showCodeRef.current ? 45 : 0,
    config: {
      tension: 280,
      friction: 30,
      mass: 0.2,
    },
  }));

  function toggleShowCode() {
    const showCode = !open;
    animateDropDown.start({
      opacity: showCode ? 1 : 0,
      height: showCode ? 500 : 0,
      bg: showCode ? '#29252400' : '#29252422',
      deg: showCode ? 45 : 0,
    });
    setOpen(showCode);
  }

  return (
    <div className={`${className}`}>
      {!show ? (
        <div className="flex justify-end">
          <ClickableCursor text={open ? 'hideCode' : 'showCode'}>
            <animated.div
              style={{
                transform: `rotate(${dropDownStyles.deg}deg)`,
              }}
              onClick={toggleShowCode}
              className="relative z-10 flex origin-center -translate-x-[14px] translate-y-12  sm:-translate-x-8"
              ref={iconRef}
            >
              <CodeTagIcon
                height="48px"
                width="24px"
                color={'currentColor'}
                open={open}
                side="left"
                className={`${
                  open ? 'translate-x-5 fill-stone-100' : null
                } borderbackdrop-blur-[1px] transition-all duration-300`}
              />
              <CodeTagIcon
                height="48px"
                width="24px"
                color={'currentColor'}
                open={open}
                side="right"
                className={`${
                  open ? '-translate-x-5 fill-stone-100' : null
                } borderbackdrop-blur-[1px] rotate-180 transition-all duration-300`}
              />
            </animated.div>
          </ClickableCursor>
        </div>
      ) : null}
      <animated.div
        style={{
          maxHeight: dropDownStyles.height,
          width: '96vw',
          maxWidth: '72rem',
          opacity: dropDownStyles.opacity,
        }}
        ref={dropDownRef}
        id="code-container"
        className="invert-scrollbar flex flex-col gap-8 overflow-x-clip overflow-y-scroll bg-stone-800 p-3 py-8 shadow-md sm:p-7"
      >
        {snippets.map((snippet) => (
          <CodeBlock
            key={snippet.fileName}
            language={snippet.language}
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
