import {
    FlexBox,
    SpectacleLogo,
    Notes,
    Slide
} from 'spectacle';
import React from 'react';
const Logo = () => <Slide>
    <FlexBox height="100%">
        <SpectacleLogo size={500} />
    </FlexBox>
    <Notes>
        Spectacle supports notes per slide.
        <ol>
            <li>Notes can now be HTML markup!</li>
            <li>Lists can make it easier to make points.</li>
        </ol>
    </Notes>
</Slide>

export default Logo
