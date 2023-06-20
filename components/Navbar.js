import {
  AppBar,
  Avatar,
  Box,
  Button,
  Chip,
  IconButton,
  Stack,
  ThemeProvider,
  Typography,
  Menu,
  MenuItem,
  SwipeableDrawer,
  ListItem,
  List,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  Divider
} from '@mui/material';
import { Theme1 } from '../components/Theme';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import { useState } from 'react';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
let pagesListIcon = [<HomeRoundedIcon/>,<SchoolRoundedIcon/>]
function genNavBarButton(pages) {
  let res = '';
  res = pages?.map((page, i) => (
    <Button href={page === 'home' ? '/' : '/' + page} key={'navLinkPage' + i}>
      {page}
    </Button>
  ));
  return res;
}

function genDrawerButton(pages,sietName="") {
  let res = '';
  
  res = pages?.map((page, i) => (
    <ListItemButton
      href={page === 'home' ? '/' : '/' + page}
      key={'navLinkPage' + i}
    >
      <ListItemIcon>{pagesListIcon[i]}</ListItemIcon>
      <ListItemText>{page}</ListItemText>
      
    </ListItemButton>
  ));
  return (
  <List>
    <ListItem>{sietName}</ListItem>
    <Divider/>
    {res}
  </List>);
}

export default function Navbar({ pagesList = ['home', 'course'], siteName="App" }) {
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [profileMenuOpenAnchor, setProfileMenuOpenAnchor] = useState(false);

  return (
    <ThemeProvider theme={Theme1}>
      <AppBar sx={{bgcolor:"white"}} color="default" position="fixed">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={3}
          sx={{ padding: 1, pl: { md: 3 }, pr: { md: 3 }, overflow: 'hidden' }}
        >
          <Stack direction="row" spacing={3}>
            <IconButton
              onClick={() => {
                setDrawerOpen(true);
              }}
              sx={{ display: { sx: 'flex', sm: 'none' } }}
            >
              <MenuRoundedIcon />
            </IconButton>
            <Typography sx={{ fontSize: 25 }}>{siteName}</Typography>
            {
              <Stack
                sx={{ display: { xs: 'none', sm: 'flex' } }}
                direction="row"
              >
                {genNavBarButton(pagesList)}
              </Stack>
            }
          </Stack>

          <Stack alignItems="center">
            <Chip
              id="navProfile"
              clickable={true}
              icon={<PersonRoundedIcon />}
              variant="outlined"
              label="username"
              onClick={(e) => {
                setProfileMenuOpenAnchor(e.target);
                setProfileMenuOpen(true);
              }}
              color="primary"
              sx={{ backgroundColor: '#fff' }}
            />
            <Menu
              anchorEl={profileMenuOpenAnchor}
              open={profileMenuOpen}
              onClose={() => setProfileMenuOpen(false)}
              sx={{ p: 0 }}
            >
              <MenuItem>
                <LogoutRoundedIcon fontSize="small" />
                <Typography fontSize="small">Logout</Typography>
              </MenuItem>
            </Menu>
          </Stack>
        </Stack>
      </AppBar>
      <SwipeableDrawer
        anchor="left"
        open={drawerOpen}
        onClose={() => {
          setDrawerOpen(false);
        }}
        onOpen={() => {
          setDrawerOpen(true);
        }}
      >
        <Box width={250}>{genDrawerButton(pagesList,siteName)}</Box>
      </SwipeableDrawer>
    </ThemeProvider>
  );
}
