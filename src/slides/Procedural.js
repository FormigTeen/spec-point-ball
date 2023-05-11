import React from 'react';
import {
    FlexBox,
    Box,
    Heading,
    Slide, UnorderedList, ListItem, Appear, Stepper
} from 'spectacle';

const Procedural = () => <Slide>
        <FlexBox flexDirection="row" alignItems="start" flex={1}>
            <Box width="100%" height="100%">
                <FlexBox flexDirection="column" justifyContent="center" alignItems="center" height="100%">
                    <Heading margin="0px" fontSize="50px">
                        O Paradigma Procedural
                    </Heading>
                </FlexBox>
            </Box>
            <Box width="100%" height="100%">
                <FlexBox flexDirection="column" height="100%">
                    <Heading margin="0px 32px" color="primary" fontSize="30px">
                        É uma Evolução do Paradigma
                        <Stepper tagName="span" alwaysVisible priority="1" values={Array(0).keys()}>
                            {(value, step, isActive) =>
                                <Choose>
                                    <When condition={ step === -1 }> Imperativo</When>
                                    <Otherwise> Estruturado</Otherwise>
                                </Choose>
                            }
                        </Stepper>
                    </Heading>
                        <UnorderedList fontSize="25px">
                            <Appear priority="0">
                                <ListItem>Se Preocupa com o <i>Como?</i></ListItem>
                                <ListItem>Comandos Sequenciais</ListItem>
                            </Appear>
                            <Appear priority="1">
                                <ListItem>Não uso do <b>Goto</b> ou <b>Jump</b></ListItem>
                                <ListItem>Definições de Variáveis</ListItem>
                                <ListItem>Estruturas de Seleção</ListItem>
                                <ListItem>Estruturas de Repetição</ListItem>
                            </Appear>
                        </UnorderedList>
                </FlexBox>
            </Box>
        </FlexBox>
    </Slide>

export default Procedural
