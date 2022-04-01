import { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { MenuItem, Menu, Divider, Badge } from '@mui/material';

import {
  ForestOutlined as ForestOutlinedIcon,
  NotificationsNoneOutlined as NotificationsNoneOutlinedIcon
}
  from "@mui/icons-material";

import { Languages } from '../../language';
import { Themes } from '../../theme';
import { CounterContext } from '../../counter';

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

  var counter = useContext(CounterContext);

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
              <Badge badgeContent={counter} color="success">
                <ForestOutlinedIcon color="info" />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label=""
              color="inherit"
            >
              <Badge color="default">
                <NotificationsNoneOutlinedIcon color="disabled" />
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
