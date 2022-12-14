import React from "react";
import './Index.css';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputBase from "@mui/material/InputBase";
import styled from "@emotion/styled";
// import Numaric from "../../images/numaric.png"


const StyledSelect = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
  border: "none",
  backgroundColor: "#5fa7a7",
  fontSize: 20,
  fontWeight:700,
  padding: "0px 26px 3px 12px",
  minWidth: "70px",
  height: "30px",
  color: "#eed184",
  "&:focus": {
    color: "#fff",
 },
 "&:hover": {
  color: "#fff",
 }
  }
  }));

const Index = () => {
  
  return (
    <div className="headerMainContainer">
      {/* <img src={Numaric} alt="" className="headerLogoImage"/> */}
      <div className="headerTextContainer"> 
      <Box sx={{ minWidth: 200 }}>
      <FormControl fullWidth className="headerTexContainerSelectContent">
        {/* <InputLabel id="demo-simple-select-label">Product</InputLabel> */}
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          defaultValue={10}
          input={<StyledSelect />}
        >
          <MenuItem value={10}><Link to="/" className="headerLinkItems">Product</Link></MenuItem>
          <Link to="/product/close" className="headerLinkItems"><MenuItem value="close">Close</MenuItem></Link>
          <Link to="/product/reconcile" className="headerLinkItems"><MenuItem value="reconclie">Reconclie </MenuItem></Link>
          <Link to="/product/analyze" className="headerLinkItems"><MenuItem value="analyze">Analyze</MenuItem></Link>
        </Select>
      </FormControl>
    </Box>
        <Link to="/about" className="headerLinkItems"> <p className="headerTexContainertagsContnents">About Us</p></Link>
        <Link to="/blog" className="headerLinkItems"> <p className="headerTexContainertagsContnents">Blog</p></Link>
      </div>
      <div className="headerSignInContainer">
        <p className="headerSignIn">Sign In</p>
        <button className="headerSignInScheduleButton">Schedule Demo</button>
      </div>
      <div className="ResponsiveView">
      <div className="headerTextContainer"> 
      <Box sx={{ minWidth: 200 }}>
      <FormControl fullWidth className="headerTexContainerSelectContent">
        {/* <InputLabel id="demo-simple-select-label">Product</InputLabel> */}
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          defaultValue={10}
          input={<StyledSelect />}
        >
          <MenuItem value={10}><Link to="/" className="headerLinkItems">Product</Link></MenuItem>
          <MenuItem value="core_features">Core features</MenuItem>
          <Link to="/product/close" className="headerLinkItems"><MenuItem value="close">Close</MenuItem></Link>
          <Link to="/product/reconcile" className="headerLinkItems"><MenuItem value="reconclie">Reconclie </MenuItem></Link>
          <Link to="/product/analyze" className="headerLinkItems"><MenuItem value="analyze">Analyze</MenuItem></Link>
        </Select>
      </FormControl>
    </Box>
        <Link to="/about" className="headerLinkItems"> <p className="headerTexContainertagsContnents">About Us</p></Link>
        <p className="headerTexContainertagsContnents">Careers</p>
        <Link to="/blog" className="headerLinkItems"> <p className="headerTexContainertagsContnents">Blog</p></Link>
      </div>
      <div className="headerSignInContainer">
        <p className="headerSignIn">Sign In</p>
        <button className="headerSignInScheduleButton">Schedule Demo</button>
      </div>
      </div>
    </div>
  );
};
export default Index;
