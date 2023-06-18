import React from 'react';
import {
    FlexBox,
    Box,
    Heading,
    Slide, UnorderedList, ListItem, Stepper
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
                        <Stepper tagName="span" alwaysVisible values={[0, 1]}>
                            {(value, step, isActive) =>
                                <Choose>
                                    <When condition={ step === -1 }>
                                        <Box>
                                            <Heading margin="0px 32px" color="primary" fontSize="30px">
                                                Os Fundamentos do Paradigma Imperativo
                                            </Heading>
                                            <UnorderedList fontSize="25px">
                                                <ListItem>Se Preocupa com o <i>Como?</i></ListItem>
                                                <ListItem>Comandos Sequenciais</ListItem>
                                            </UnorderedList>
                                        </Box>
                                    </When>
                                    <When condition={value === 0}>
                                        <Box>
                                        <Heading margin="0px 32px" color="primary" fontSize="30px">
                                            Os Fundamentos do Paradigma Estrutural
                                        </Heading>
                                        <UnorderedList fontSize="25px">
                                            <ListItem><u>Não uso do <b>Goto</b> ou <b>Jump</b></u></ListItem>
                                            <ListItem>Definições de Variáveis</ListItem>
                                            <ListItem>Estruturas de Seleção</ListItem>
                                            <ListItem>Estruturas de Repetição</ListItem>
                                        </UnorderedList>
                                        </Box>
                                    </When>
                                    <Otherwise>
                                        <Box>
                                            <Heading margin="0px 32px" color="primary" fontSize="30px">
                                                Seus Fundamentos
                                            </Heading>
                                            <UnorderedList fontSize="25px">
                                                <ListItem>Estrutura de Procedimentos e Funções Modulares</ListItem>
                                            </UnorderedList>
                                        </Box>
                                    </Otherwise>
                                </Choose>
                            }
                        </Stepper>
                </FlexBox>
            </Box>
        </FlexBox>
    </Slide>

export default Procedural
