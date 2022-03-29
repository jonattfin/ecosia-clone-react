import { Navbar, Alignment, Button, Tag, Intent, Menu, MenuItem, Popover, Position } from '@blueprintjs/core';
import React from 'react';
import Select from 'react-select'

import { Languages, Themes } from '../../constants';

const languageOptions = [
  { value: Languages.En, label: 'English' },
  { value: Languages.Fr, label: 'French' },
  { value: Languages.Ro, label: 'Romanian' },
];

const themeOptions = [
  { value: Themes.Light, label: 'Light' },
  { value: Themes.Black, label: 'Black' },
];

class Component extends React.Component {


  renderMenu = () => {
    return (
      <Menu>
        <MenuItem icon="code" onClick={() => { }} text="Home"></MenuItem>
        <MenuItem icon="build" onClick={() => { }} text="About us"></MenuItem>
        <MenuItem icon="draw" onClick={() => { }} text="How it works"></MenuItem>
        <MenuItem icon="download" onClick={() => { }} text="Mobile"></MenuItem>
        <MenuItem icon="endorsed" onClick={() => { }} text="Privacy"></MenuItem>
      </Menu>
    );
  }

  render() {
    const props = this.props;

    return (
      <Navbar>
        <Navbar.Group align={Alignment.RIGHT}>
          <Tag icon="tree" intent={Intent.SUCCESS}>0</Tag>
          <Navbar.Divider />
          <Select options={languageOptions} value={languageOptions[props.language]} onChange={(option) => { props.setLanguage(option.value) }} />
          <Navbar.Divider />
          <Select options={themeOptions} value={themeOptions[props.theme]} onChange={(option) => { props.setTheme(option.value) }} />
          <Navbar.Divider />
          <Popover content={this.renderMenu()} position={Position.TOP_RIGHT}>
            <Button icon="menu" intent={Intent.PRIMARY} />
          </Popover>
        </Navbar.Group>
      </Navbar>
    )
  };
}

export default Component;
