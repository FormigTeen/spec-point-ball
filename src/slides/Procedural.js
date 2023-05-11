import React from 'react';
import {
    FlexBox,
    Box,
    Heading,
    Slide, CodePane, UnorderedList, ListItem, Appear, Stepper
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
                        <Stepper tagName="span" alwaysVisible priority="0" values={[" Imperativo", " Estruturado"]}>
                            {(value, step, isActive) => value
                            }
                        </Stepper>
                    </Heading>
                    <Appear priority="1">
                        <UnorderedList fontSize="25px">
                            <ListItem>Se Preocupa com o <i>Como?</i></ListItem>
                            <ListItem>Comandos Sequenciais</ListItem>
                        </UnorderedList>

                    </Appear>
                </FlexBox>
            </Box>
        </FlexBox>
    </Slide>

export default Procedural
