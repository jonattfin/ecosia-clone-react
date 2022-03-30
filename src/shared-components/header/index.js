import React from 'react'
import {
  Button,
  Position,
  Menu,
  MenuItem,
  Tag,
  Navbar,
  Alignment,
  Intent,
  MenuDivider
} from "@blueprintjs/core";
import { useNavigate } from "react-router-dom";
import { Popover2 as Popover } from '@blueprintjs/popover2';

// import styles from './styles.module.scss';

import { Languages } from '../../language';
import { Themes } from '../../theme';

const languageOptions = [
  { value: Languages.En, label: 'English', icon: "translate" },
  { value: Languages.Ro, label: 'Romanian', icon: "translate"},
];

const themeOptions = [
  { value: Themes.Light, label: 'Light', icon: "style" },
  { value: Themes.Black, label: 'Black', icon: "style" },
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
        <Popover content={createMenu(navigate, model)} position={Position.RIGHT}>
          <Button icon="menu" />
        </Popover>
      </Navbar.Group>
    </Navbar>
  );
};

export default Component;

function createMenu(navigate, model) {
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

  const changeLanguage = (option) => {
    model.setLanguage(option.value);
  }

  const changeTheme = (option) => {
    model.setTheme(option.value);
  }

  return (
    <Menu>
      {pages.map(({ icon, text, url }, index) => <MenuItem key={`menuItem_${index}`} icon={icon} text={text} onClick={onClick(url)} />)}
      <MenuDivider />
      <MenuItem icon="translate" text="Language" onClick={() => { }}>
        {languageOptions.map(option => <MenuItem icon={option.icon} text={option.label} selected={model.language === option.value} onClick={() => changeLanguage(option)} />)}
      </MenuItem>
      <MenuItem icon="style" text="Theme" onClick={() => { }}>
        {themeOptions.map(option => <MenuItem icon={option.icon} text={option.label} selected={model.theme === option.value} onClick={() => changeTheme(option)} />)}
      </MenuItem>
    </Menu>
  );
}

