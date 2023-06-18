import React from 'react';
import {
    Slide,
    CodePane
} from 'spectacle';

const CodeProcedural = () => <Slide>
    <CodePane language="ts">
        {`
        function processClick() {
            const pointElement = querySelector("#points")
            if ( pointElement ) {
                score = score + 1 // Observe o uso de recursos Globais
                pointElement.innerHTML = String(score);
            }
        }
        
        function Procedural() {
            /**
             * Código que cria outros objetos e definem as variavéis Ball e Board
             */  
            const Background = createElement("div", { // Criação de Elementos usando Procedimentos
                style : {
                    backgroundColor: "black",
                    height: "100vh",
                    width: "100%",
                    position: "relative"
                },
            }, [Ball, Board])
            
            return Background
        }
        
        `}
    </CodePane>
</Slide>

export default CodeProcedural
