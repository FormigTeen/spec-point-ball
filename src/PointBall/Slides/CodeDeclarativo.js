
import React from 'react';
import {
    Slide,
    codePaneThemes
} from 'spectacle';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

const CodeDeclarativo = () => <Slide>
    <div style={{fontSize: '13px'}}>
        <SyntaxHighlighter language="ts" style={codePaneThemes.vsDark} showLineNumbers>{`
          import React, { useState } from 'react';

          export const Points = ({ points }) => {
            return (
              <div
                style={{
                  color: 'white',
                }}
              >
                {points} pontos
              </div>
            );
          };

          export const Ball = ({ onClick }) => {
            return (
              <div
                onClick={onClick}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '50%',
                  height: '100px',
                  width: '100px',
                  transform: 'translate(-50%, -50%)',
                  left: '50%',
                  top: '50%',
                  position: 'absolute',
                  cursor: 'pointer',
                }}
              />
            );
          };
          `}
    </SyntaxHighlighter>
    </div>
</Slide>

export default CodeDeclarativo
