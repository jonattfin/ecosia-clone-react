import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Divider from '@mui/material/Divider';
import Badge from '@mui/material/Badge';
import ForestOutlinedIcon from '@mui/icons-material/ForestOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

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

const pages = [
  { url: '/', text: 'Home', icon: "home", },
  { url: '/how-it-works', text: 'How Ecosia works', icon: "build", },
  { url: '/about-us', text: 'About us', icon: 'help' },
  { url: '/mobile', text: 'Mobile app', icon: 'mobile-phone' },
  { url: '/privacy', text: 'Privacy', icon: 'shield' },
];

const Component = (props) => {
  const { model } = props;

  var navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (url) => {
    setAnchorEl(null);
    navigate(url, { replace: true });
  };

  const handleChangeLanguage = (option) => {
    setAnchorEl(null);
    model.setLanguage(option.value)
  }

  const handleChangeTheme = (option) => {
    setAnchorEl(null);
    model.setTheme(option.value)
  }

  const getLanguage = () => {
    var otherLanguage = languageOptions.find(x => x.value !== model.language);
    return otherLanguage;
  }

  const getTheme = () => {
    var otherTheme = themeOptions.find(x => x.value !== model.theme);
    return otherTheme;
  }

  const language = getLanguage();
  const theme = getTheme();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color='transparent'>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {/* Photos */}
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="" color="inherit">
              <Badge badgeContent={1} color="success">
                <ForestOutlinedIcon color="info" />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label=""
              color="inherit"
            >
              <Badge color="default">
                <NotificationsNoneOutlinedIcon color="disabled"/>
              </Badge>
            </IconButton>
          </Box>
          <Menu
            id="menu-appbar"
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
            {pages.map(({ icon, text, url }, index) => <MenuItem key={`menuItem_${index}`} onClick={() => handleClose(url)}>{text}</MenuItem>)}
            <Divider />
            <MenuItem onClick={() => handleChangeLanguage(language)}>Change language ({language.label})</MenuItem>
            <MenuItem onClick={() => handleChangeTheme(theme)}>Change theme ({theme.label})</MenuItem>
          </Menu>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <MenuIcon color="primary" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box >
  );
}

export default Component;

// function createMenu(navigate, model) {


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

