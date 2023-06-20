import {createTheme } from "@mui/material"

export const Theme1 = createTheme ({
  palette: {
    primary: {
      main: '#1a237e',
    },
    secondary: {
      main: '#616161',
    },
    error: {
      main: '#ff0500',
    },
    background: {
      default: '#ffffff',
    },
    text: {
      primary: '#000000',
    },
  },
  typography: {
    fontFamily: "'Noto Sans Thai Looped','Noto Sans Thai','Sarabun',sans-serif",
  },
  props: {
    MuiAppBar: {
      color: "default",
    },
  },
  shape: {
    borderRadius: 5,
  },
})

export default function Theme(){
  return Theme1;
}