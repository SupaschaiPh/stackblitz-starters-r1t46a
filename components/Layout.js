import { ThemeProvider } from "@emotion/react";
import Navbar from "./Navbar";
import { Theme1 } from "./Theme";

export default function Layout({children}){
  return (
    <ThemeProvider theme={Theme1}>
      <div style={{height:"100%"}}>
        <Navbar siteName="แอป" />
        {children}
      </div>
    </ThemeProvider>
  )
}