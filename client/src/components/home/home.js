import React, { useEffect } from 'react';
import classes from './home.module.css';
import Drawer from '../Drawer/drawer';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Footer from '../footer/footer';
import {useSelector} from 'react-redux';
import BugPriority from '../bugPriority/bugPriority';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
const Home = (props)=>{
    const [value, setValue] = React.useState(0);
console.log(value)
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const isAuth = useSelector(state=>state.isLoggedIn);
    useEffect(()=>{
        if(!isAuth){
            props.history.push("/");
        }
    },[isAuth])
    return(
        <div className={classes.Background} style={{overflowX:"hidden"}}>
            <Drawer/>
            <Tabs 
                value={value} 
                onChange={handleChange} 
                style={{margin:'15px auto'}}
                centered
            >
                <Tab label="K-means" style={{color:`${value==0?"orange":"white"}`,fontWeight:'bold', fontSize:'22px'}}/>
                <Tab label="SVM" style={{color:`${value==1?"orange":"white"}`,fontWeight:'bold', fontSize:'22px'}}/>
                <Tab label="Decision Tree" style={{color:`${value==2?"orange":"white"}`,fontWeight:'bold', fontSize:'22px'}}/>
            </Tabs>
            <TabPanel value={value} index={0}>
                <BugPriority type="kmean"/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <BugPriority type="svm"/>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <BugPriority type="decisionTree"/>
            </TabPanel>
            <Footer/>
        </div>
    )
}
export default Home;