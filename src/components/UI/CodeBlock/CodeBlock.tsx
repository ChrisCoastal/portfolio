'use client';
import React, { FC, ReactNode, useEffect } from 'react';
import { highlightAll } from 'prismjs';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx';
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import useResizeWindow from '@/hooks/useResizeWindow';

import 'prismjs/themes/prism-okaidia.css';

type CodeBlockProps = {
  children?: ReactNode;
  code?: string;
  width?: number;
  language?: string;
  fileName?: string;
  className?: string;
};

const CodeBlock: FC<CodeBlockProps> = ({
  children,
  code,
  width,
  language = 'js',
  fileName,
  className,
}) => {
  useEffect(() => {
    // Prismjs code highlighting
    highlightAll();
  }, [children]);

  const { windowSize: size } = useResizeWindow();

  // useEffect(() => {
  //   const codeContainer = document.getElementById('code');
  // }, [size]);

  // const width = size.innerWidth - 200;

  return (
    <div className="bg-stone-800">
      <div style={{ width: width || 0 - 12 }} className="ml-2">
        {fileName ? (
          <h4 className="!text-xs text-white sm:!text-sm">{fileName}</h4>
        ) : null}
        <pre
          className={`language-${language} invert-scrollbar !m-0 !whitespace-pre !rounded-none border border-stone-400/40 !bg-stone-800 text-sm`}
        >
          <code
            className={`${className} language-${language} !m-0 !bg-stone-800 !text-2xs sm:!text-sm`}
          >
            {children}
            {/* <SyntaxHighlighter language="tsx" style={monokai}>
          {code}
        </SyntaxHighlighter> */}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;
