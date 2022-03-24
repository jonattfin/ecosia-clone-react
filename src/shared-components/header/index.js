import { Navbar, Alignment, Button, Tag, Intent } from '@blueprintjs/core';

const Component = () => {
  return (
    <Navbar>
      <Navbar.Group align={Alignment.RIGHT}>
        <Tag icon="tree" intent={Intent.SUCCESS}>0</Tag>
        <Navbar.Divider />
        <Button text="Home" icon="document" intent={Intent.PRIMARY} />
        <Button minimal icon="code" text="About us" />
        <Button minimal icon="build" text="About us" ></Button>
        <Button minimal icon="draw" text="How it works" />
        <Button minimal icon="download" text="Mobile" />
        <Button minimal icon="endorsed" text="Privacy" />
      </Navbar.Group>
    </Navbar>
  )
};

export default Component;
