import React from 'react';
import {
    Slide,
    codePaneThemes
} from 'spectacle';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

const CodeDeclarativo2 = () => <Slide>
    <div style={{fontSize: '15px'}}>
        <SyntaxHighlighter language="ts" style={codePaneThemes.vsDark} showLineNumbers>{`
          import React, { useState } from 'react';
          import { Ball, Points } from './components';

          function App() {
            const [points, setPoints] = useState(0);
  
            const handleBallClick = () => {
              setPoints(points + 1);
            };
  
            return (
              <div
                style={{
                  backgroundColor: 'black',
                  height: '100vh',
                  width: '100%',
                  position: 'relative',
                }}
              >
                <Ball onClick={handleBallClick} />
                <Points points={points} />
              </div>
            );
          }
  
          export default App;
          `}
    </SyntaxHighlighter>
    </div>
</Slide>

export default CodeDeclarativo2
