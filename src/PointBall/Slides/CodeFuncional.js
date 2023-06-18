import React from 'react';
import {
    Slide,
    codePaneThemes
} from 'spectacle';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

const CodeFuncional = () => <Slide>
    <div style={{fontSize: '13px'}}>
        <SyntaxHighlighter language="ts" style={codePaneThemes.vsDark} showLineNumbers>{`
        const setPointsOnState = points =>
            (_ => ({..._, points: points}))
                |> useGlobalState // Função de Alta Ordem
                |> setGlobalState

        const BallFactory =
            getEmptyProps()
                |> addStyle('position', 'absolute')
                |> addStyle('top', '50%')
                |> addStyle('left', '50%')
                |> addStyle('transform', "translate(-50%, -50%)")
                |> addStyle('width', '100px')
                |> addStyle('height', '100px')
                |> addStyle('borderRadius', '50%')
                |> addStyle('backgroundColor', 'white')
                |> addEvent(
                    'onClick',
                    () => querySelector("#points")|> setInner(getPointsOnState() |> add(1) |> setPointsOnState |> getPointsOnState)
                )
                |> getFactoryTo("div")

        const BackgroundFactory =
            getEmptyProps()
                |> addStyle("backgroundColor", "black")
                |> addStyle("height", "100vh")
                |> addStyle("width", "100%")
                |> addStyle("position", "relative")
                |> getFactoryTo("div")
                |> addChildToFactory(BoardFactory)
                |> addChildToFactory(BallFactory)

    return BackgroundFactory()
        `}
    </SyntaxHighlighter>
    </div>
</Slide>

export default CodeFuncional
