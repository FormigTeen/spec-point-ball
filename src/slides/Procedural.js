import React from 'react';
import {
    FlexBox,
    Box,
    Heading,
    Slide
} from 'spectacle';



const Procedural = () => <Slide>
        <FlexBox flexDirection="row" alignItems="start" flex={1}>
            <Box width="100%" height="100%">
                <FlexBox flexDirection="column" ustifyContent="center" alignItems="center" height="100%">
                    <Heading margin="0px" fontSize="50px">
                        O Paradigma Procedural
                    </Heading>
                </FlexBox>
            </Box>
            <Box width="100%" backgroundColor="black">
                 <Heading margin="0px 32px" color="primary" fontSize="h3">
                O Caminho entre Paradigmas
            </Heading>
            </Box>
        </FlexBox>
    </Slide>

export default Procedural
