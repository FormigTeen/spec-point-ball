import {
  FlexBox,
  Heading,
  UnorderedList,
  CodeSpan,
  OrderedList,
  ListItem,
  FullScreen,
  Progress,
  Appear,
  Slide,
  Deck,
  Text,
  Grid,
  Box,
  Image,
  MarkdownSlide,
  MarkdownSlideSet,
} from 'spectacle';
import Title from "./PointBall/Slides/Title";
import Procedural from "./PointBall/Slides/Procedural";
import CodeProcedural from "./PointBall/Slides/CodeProcedural";
import Funcional from "./PointBall/Slides/Funcional";
import CodeFuncional from "./PointBall/Slides/CodeFuncional";
import CodeBadFuncional from "./PointBall/Slides/CodeBadFuncional";
import Declarativo from './PointBall/Slides/Declarativo';
import CodeDeclarativo from './PointBall/Slides/CodeDeclarativo';
import CodeDeclarativo2 from './PointBall/Slides/CodeDeclarativo2';

const formidableLogo =
    'https://avatars2.githubusercontent.com/u/5078602?s=280&v=4';

export const Theme = {
    colors: {
        primary: '##f1f2f6',
        secondary: '#ff4c30\n',
        tertiary: '#faf4d3\n'
    },
    fonts: {
        header: 'Lato, "Open Sans Condensed", Helvetica, Arial, sans-serif',
        text: 'Lato, "Open Sans Condensed", Helvetica, Arial, sans-serif'
    }
};
// SPECTACLE_CLI_THEME_END

// SPECTACLE_CLI_TEMPLATE_START
const template = () => (
    <FlexBox
        justifyContent="space-between"
        position="absolute"
        bottom={0}
        width={1}
    >
      <Box padding="0 1em">
        <FullScreen />
      </Box>
      <Box padding="1em">
        <Progress />
      </Box>
    </FlexBox>
);
// SPECTACLE_CLI_TEMPLATE_END

const SlideFragments = () => (
    <>
      <Slide>
        <Text>This is a slide fragment.</Text>
      </Slide>
      <Slide>
        <Text>This is also a slide fragment.</Text>
        <Appear>
          <Text>This item shows up!</Text>
        </Appear>
        <Appear>
          <Text>This item also shows up!</Text>
        </Appear>
      </Slide>
    </>
);

const Presentation = () => (
    <Deck theme={Theme} template={template}>
      <Title />
        <Procedural />
        <CodeProcedural />
        <Funcional />
        <CodeBadFuncional />
        <CodeFuncional />
        <Declarativo />
        <CodeDeclarativo />
        <CodeDeclarativo2 />
      <Slide
          transition={{
            from: {
              transform: 'scale(0.5) rotate(45deg)',
              opacity: 0
            },
            enter: {
              transform: 'scale(1) rotate(0)',
              opacity: 1
            },
            leave: {
              transform: 'scale(0.2) rotate(315deg)',
              opacity: 0
            }
          }}
          backgroundColor="tertiary"
          backgroundImage="url(https://github.com/FormidableLabs/dogs/blob/main/src/beau.jpg?raw=true)"
          backgroundOpacity={0.5}
      >
        <Heading>Custom Backgrounds</Heading>
        <UnorderedList>
          <ListItem>
            <CodeSpan>backgroundColor</CodeSpan>
          </ListItem>
          <ListItem>
            <CodeSpan>backgroundImage</CodeSpan>
          </ListItem>
          <ListItem>
            <CodeSpan>backgroundOpacity</CodeSpan>
          </ListItem>
          <ListItem>
            <CodeSpan>backgroundSize</CodeSpan>
          </ListItem>
          <ListItem>
            <CodeSpan>backgroundPosition</CodeSpan>
          </ListItem>
          <ListItem>
            <CodeSpan>backgroundRepeat</CodeSpan>
          </ListItem>
        </UnorderedList>
      </Slide>
      <Slide>
        <Heading>Animated Elements</Heading>
        <OrderedList>
          <Appear>
            <ListItem>Elements can animate in!</ListItem>
          </Appear>
          <Appear>
            <ListItem>Out of order</ListItem>
          </Appear>
          <Appear priority={0}>
            <ListItem>
              Just identify the order with the prop <CodeSpan>priority</CodeSpan>!
            </ListItem>
          </Appear>
        </OrderedList>
      </Slide>
      <Slide>
        <FlexBox>
          <Text>These</Text>
          <Text>Text</Text>
          <Text color="secondary">Items</Text>
          <Text fontWeight="bold">Flex</Text>
        </FlexBox>
        <Grid gridTemplateColumns="1fr 2fr" gridColumnGap={15}>
          <Box backgroundColor="primary">
            <Text color="secondary">Single-size Grid Item</Text>
          </Box>
          <Box backgroundColor="secondary">
            <Text>Double-size Grid Item</Text>
          </Box>
        </Grid>
        <Grid
            gridTemplateColumns="1fr 1fr 1fr"
            gridTemplateRows="1fr 1fr 1fr"
            alignItems="center"
            justifyContent="center"
            gridRowGap={1}
        >
          {Array(9)
              .fill('')
              .map((_, index) => (
                  <FlexBox paddingTop={0} key={`formidable-logo-${index}`} flex={1}>
                    <Image src={formidableLogo} width={100} />
                  </FlexBox>
              ))}
        </Grid>
      </Slide>
      <SlideFragments />
      <div>
        <Slide>
          <Heading>This is a slide embedded in a div</Heading>
        </Slide>
      </div>
      <MarkdownSlide componentProps={{ color: 'yellow' }}>
        {`
        # This is a Markdown Slide

        - You can pass props down to all elements on the slide.
        - Just use the \`componentProps\` prop.
        `}
      </MarkdownSlide>
      <MarkdownSlide animateListItems>
        {`
       # This is also a Markdown Slide

       It uses the \`animateListItems\` prop.

       - Its list items...
       - ...will appear...
       - ...one at a time.
      `}
      </MarkdownSlide>
      <Slide>
        <Grid
            flex={1}
            gridTemplateColumns="50% 50%"
            gridTemplateRows="50% 50%"
            height="100%"
        >
          <FlexBox alignItems="center" justifyContent="center">
            <Heading>This is a 4x4 Grid</Heading>
          </FlexBox>
          <FlexBox alignItems="center" justifyContent="center">
            <Text textAlign="center">
              With all the content aligned and justified center.
            </Text>
          </FlexBox>
          <FlexBox alignItems="center" justifyContent="center">
            <Text textAlign="center">
              It uses Spectacle <CodeSpan>{'<Grid />'}</CodeSpan> and{' '}
              <CodeSpan>{'<FlexBox />'}</CodeSpan> components.
            </Text>
          </FlexBox>
          <FlexBox alignItems="center" justifyContent="center">
            <Box width={200} height={200} backgroundColor="secondary" />
          </FlexBox>
        </Grid>
      </Slide>
      <MarkdownSlideSet>
        {`
        # This is the first slide of a Markdown Slide Set
        ---
        # This is the second slide of a Markdown Slide Set
        `}
      </MarkdownSlideSet>
    </Deck>
);
function App() {
  return <Presentation />
}

export default App;
