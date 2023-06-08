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
  const leftCodeIconRef = useRef<SVGSVGElement>(null);
  const rightCodeIconRef = useRef<SVGSVGElement>(null);
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
    // const showCode = !showCodeRef.current;
    const showCode = !open;
    animateDropDown.start({
      opacity: showCode ? 1 : 0,
      height: showCode ? 500 : 0,
      bg: showCode ? '#29252400' : '#29252422',
      deg: showCode ? 45 : 0,
    });
    setOpen(showCode);
    // showCodeRef.current = showCode;
  }

  return (
    <div className={`${className}`}>
      <div className="flex justify-end">
        <ClickableCursor text="link">
          {/* <animated.span
            style={{
              color: dropDownStyles.fill,
              backgroundColor: dropDownStyles.bg,
              transform: `rotate(${dropDownStyles.deg}deg)`,
            }}
            onClick={toggleShowCode}
            className="relative z-50 origin-center"
            ref={iconRef}
          >
            <CodeIcon
              height="48px"
              width="48px"
              color={'currentColor'}
              // className={`mr-[10px] translate-y-8 backdrop-blur-[2px] transition-colors duration-300 sm:mr-[15px]`}
              className={`-translate-x-[14px] translate-y-12 border border-stone-400/40 backdrop-blur-[1px] sm:-translate-x-8`}
            />
          </animated.span> */}
          <animated.div
            style={{
              transform: `rotate(${dropDownStyles.deg}deg)`,
            }}
            onClick={toggleShowCode}
            className="relative z-50 flex origin-center -translate-x-[14px] translate-y-12 border-stone-400/40 sm:-translate-x-8"
            ref={iconRef}
          >
            <CodeTagIcon
              height="48px"
              width="24px"
              color={'currentColor'}
              open={open}
              side="left"
              // className={`mr-[10px] translate-y-8 backdrop-blur-[2px] transition-colors duration-300 sm:mr-[15px]`}
              className={`${
                open ? 'translate-x-5 fill-stone-100' : null
              } borderbackdrop-blur-[1px] transition-all duration-300`}
              // ref={leftCodeIconRef}
            />
            <CodeTagIcon
              height="48px"
              width="24px"
              color={'currentColor'}
              open={open}
              side="right"
              // className={`mr-[10px] translate-y-8 backdrop-blur-[2px] transition-colors duration-300 sm:mr-[15px]`}
              className={`${
                open ? '-translate-x-5 fill-stone-100' : null
              } borderbackdrop-blur-[1px] rotate-180 transition-all duration-300`}
              // ref={rightCodeIconRef}
            />
          </animated.div>
        </ClickableCursor>
      </div>
      <animated.div
        style={{
          maxHeight: dropDownStyles.height,
          width: '96vw',
          maxWidth: '72rem',
          opacity: dropDownStyles.opacity,
        }}
        ref={dropDownRef}
        id="code-container"
        className="invert-scrollbar flex flex-col gap-8 overflow-x-clip overflow-y-scroll bg-stone-800 p-3 py-8 sm:p-7"
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
