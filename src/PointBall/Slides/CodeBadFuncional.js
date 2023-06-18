import React from 'react';
import {codePaneThemes} from "spectacle";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
    Slide
} from 'spectacle';

const CodeFuncional = () => <Slide>
    <div style={{fontSize: '16px'}}>
    <SyntaxHighlighter language="ts" style={codePaneThemes.vsDark} showLineNumbers>{`
const BallFactory = 
        getFactoryTo("div")(
            addEvent(
                'onClick',
                () => querySelector("#points")|> setInner(getPointsOnState() |> add(1) |> setPointsOnState |> getPointsOnState)
            )(
                addStyle('backgroundColor', 'white')(
                    addStyle('borderRadius', '50%')(
                        addStyle('height', '100px')(
                            addStyle('width', '100px')(
                                addStyle('transform', "translate(-50%, -50%)")(
                                    addStyle('left', '50%')(
                                        addStyle('top', '50%')(
                                            addStyle('position', 'absolute')(
                                                getEmptyProps()
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            )
        )
        `}
    </SyntaxHighlighter>
    </div>
</Slide>

export default CodeFuncional
