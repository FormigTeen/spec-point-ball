import React from 'react';
import {
    FlexBox,
    Box,
    Heading,
    Slide, UnorderedList, ListItem
} from 'spectacle';

const Procedural = () => <Slide>
        <FlexBox flexDirection="row" alignItems="start" flex={1}>
            <Box width="100%" height="100%">
                <FlexBox flexDirection="column" height="100%">
                    <Box>
                        <Heading margin="0px 32px" color="primary" fontSize="30px">
                            Seus Fundamentos
                        </Heading>
                        <UnorderedList fontSize="25px">
                            <ListItem>Funções Puras</ListItem>
                            <ListItem>Transparência Referêncial ou Encapsulamento</ListItem>
                            <ListItem>Imutabilidade de Dados | Uso de Constantes</ListItem>
                            <ListItem>Composição de Funções</ListItem>
                            <ListItem>Funções como Entidades de Primeira Classe</ListItem>
                            <ListItem>Funções de Alta Ordem</ListItem>
                            <ListItem>Funções Anônimas ou Lambda</ListItem>
                        </UnorderedList>
                    </Box>
                </FlexBox>
            </Box>
            <Box width="100%" height="100%">
                <FlexBox flexDirection="column" justifyContent="center" alignItems="center" height="100%">
                    <Heading margin="0px" fontSize="50px">
                        O Paradigma Funcional
                    </Heading>
                </FlexBox>
            </Box>
        </FlexBox>
    </Slide>

export default Procedural
