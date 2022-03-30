import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Divider from '@mui/material/Divider';

import { Languages } from '../../language';
import { Themes } from '../../theme';

const languageOptions = [
  { value: Languages.En, label: 'English', icon: "translate" },
  { value: Languages.Ro, label: 'Romanian', icon: "translate" },
];

const themeOptions = [
  { value: Themes.Light, label: 'Light', icon: "style" },
  { value: Themes.Black, label: 'Black', icon: "style" },
];

const Component = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);

  let navigate = useNavigate();
  const { model } = props;

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <div>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Home</MenuItem>
            <MenuItem onClick={handleClose}>How Ecosia works</MenuItem>
            <MenuItem onClick={handleClose}>About us</MenuItem>
            <MenuItem onClick={handleClose}>Mobile app</MenuItem>
            <MenuItem onClick={handleClose}>Privacy</MenuItem>
            <Divider></Divider>
            <MenuItem onClick={handleClose}>Language</MenuItem>
            <MenuItem onClick={handleClose}>Theme</MenuItem>
          </Menu>
        </div>

      </Toolbar>
    </AppBar>
  );
};

export default Component;

// function createMenu(navigate, model) {
//   const pages = [
//     { url: '/', text: 'Home', icon: "home", },
//     { url: '/how-it-works', text: 'How Ecosia works', icon: "build", },
//     { url: '/about-us', text: 'About us', icon: 'help' },
//     { url: '/mobile', text: 'Mobile app', icon: 'mobile-phone' },
//     { url: '/privacy', text: 'Privacy', icon: 'shield' },
//   ];

//   const onClick = (url) => () => {
//     navigate(url, { replace: true });
//   }

//   const changeLanguage = (option) => {
//     model.setLanguage(option.value);
//   }

//   const changeTheme = (option) => {
//     model.setTheme(option.value);
//   }

//   return (
//     <Menu>
//       {pages.map(({ icon, text, url }, index) => <MenuItem key={`menuItem_${index}`} icon={icon} text={text} onClick={onClick(url)} />)}
//       <MenuDivider />
//       <MenuItem icon="translate" text="Language" onClick={() => { }}>
//         {languageOptions.map((option, index) => <MenuItem key={`language_${index}`} icon={option.icon} text={option.label} selected={model.language === option.value} onClick={() => changeLanguage(option)} />)}
//       </MenuItem>
//       <MenuItem icon="style" text="Theme" onClick={() => { }}>
//         {themeOptions.map((option, index) => <MenuItem key={`theme_${index}`} icon={option.icon} text={option.label} selected={model.theme === option.value} onClick={() => changeTheme(option)} />)}
//       </MenuItem>
//     </Menu>
//   );
// }

