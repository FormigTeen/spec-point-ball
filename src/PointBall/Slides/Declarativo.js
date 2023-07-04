import React from 'react';
import {
    FlexBox,
    Box,
    Heading,
    Slide, UnorderedList, ListItem
} from 'spectacle';

const Declarativo = () => <Slide>
        <FlexBox flexDirection="row" alignItems="start" flex={1}>
            <Box width="100%" height="100%">
                <FlexBox flexDirection="column" height="100%">
                    <Box>
                        <Heading margin="0px 32px" color="primary" fontSize="30px">
                            Seus Fundamentos
                        </Heading>
                        <UnorderedList fontSize="25px">
                            <ListItem>DSL (Linguagem Específica de Domínio)</ListItem>
                            <ListItem>Nível de abstração alto</ListItem>
                            <ListItem>É descrito o que o resultado que deve ser computado, não como deve ser</ListItem>
                            <ListItem>Exemplos de DSLs: HTML, SQL, JSX</ListItem>
                        </UnorderedList>
                    </Box>
                </FlexBox>
            </Box>
            <Box width="100%" height="100%">
                <FlexBox flexDirection="column" justifyContent="center" alignItems="center" height="100%">
                    <Heading margin="0px" fontSize="50px">
                        O Paradigma Declarativo
                    </Heading>
                </FlexBox>
            </Box>
        </FlexBox>
    </Slide>

export default Declarativo
