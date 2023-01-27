import {ThemeProvider } from "@mui/material";
import CssBaseline  from "@mui/material/CssBaseline";
import { Route, Routes } from "react-router-dom";
import { ColorModeContext, useMode } from "./context/theme";
import AppBaar from "./global/AppBaar";
import SideBaar from "./global/SideBaar";
import DashBoard from "./scenes/DashBoard";
import Team from "./scenes/Team";



function App() {
  const [theme,colorMode]=useMode();
  return(
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
   <CssBaseline/>
    <div className="app">

      <SideBaar/>
     <main className="content">
      <AppBaar/>
      <Routes>

<Route path='/' element={<DashBoard/>}></Route>
<Route path='/team' element={<Team/>}></Route>
</Routes>
     </main>
    
  </div>

  </ThemeProvider>
  </ColorModeContext.Provider>)

}

export default App;
