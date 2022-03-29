import React from 'react'
import {
  Button,
  Position,
  Menu,
  MenuItem,
  Tag,
  Navbar,
  Alignment,
  Intent
} from "@blueprintjs/core";
import { useNavigate } from "react-router-dom";
import Select from 'react-select';
import { Popover2 as Popover } from '@blueprintjs/popover2';

// import styles from './styles.module.scss';

import { Languages } from '../../language';
import { Themes } from '../../theme';

const languageOptions = [
  { value: Languages.En, label: 'English' },
  { value: Languages.Ro, label: 'Romanian' },
];

const themeOptions = [
  { value: Themes.Light, label: 'Light' },
  { value: Themes.Black, label: 'Black' },
];

const Component = (props) => {
  let navigate = useNavigate();
  const { model } = props;

  return (
    <Navbar>
      <Navbar.Group align={Alignment.RIGHT}>
        <Tag icon={'tree'} intent={Intent.SUCCESS}>
          {model.payload.numberOfSearches}
        </Tag>
        <Navbar.Divider />
        <Select options={languageOptions} value={languageOptions[model.language]} onChange={(option) => { model.setLanguage(option.value) }} />
        <Navbar.Divider />
        <Select options={themeOptions} value={themeOptions[model.theme]} onChange={(option) => { model.setTheme(option.value) }} />
        <Navbar.Divider />
        <Popover content={createMenu(navigate)} position={Position.RIGHT}>
          <Button icon="menu" />
        </Popover>
      </Navbar.Group>
    </Navbar>
  );
};

export default Component;

function createMenu(navigate) {
  const pages = [
    { url: '/', text: 'Home', icon: "home", },
    { url: '/how-it-works', text: 'How Ecosia works', icon: "build", },
    { url: '/about-us', text: 'About us', icon: 'help' },
    { url: '/mobile', text: 'Mobile app', icon: 'mobile-phone' },
    { url: '/privacy', text: 'Privacy', icon: 'shield' },
  ];

  const onClick = (url) => () => {
    navigate(url, { replace: true });
  }

  return (
    <Menu>
      {pages.map(({ icon, text, url }, index) => <MenuItem key={`menuItem_${index}`} icon={icon} text={text} onClick={onClick(url)} />)}
    </Menu>
  );
}

