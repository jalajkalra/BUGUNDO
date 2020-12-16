import React, { useEffect } from 'react';
import classes from './home.module.css';
import Drawer from '../Drawer/drawer';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../footer/footer';
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';

const Home = (props)=>{
    const isAuth = useSelector(state=>state.isLoggedIn);
    const highRank = useSelector(state=>state.highRank);
    const lowRank = useSelector(state=>state.lowRank);
    const mediumRank = useSelector(state=>state.mediumRank);
    useEffect(()=>{
        if(!isAuth){
            props.history.push("/");
        }
    },[isAuth])
    return(
        <div className={classes.Background} style={{overflowX:"hidden"}}>
            <Drawer/>
            <Container>
                <Row>
                    <Col lg={4} md={12}>
                        <div className={classes.Elements}>
                            <ul className={classes.UL}>
                                <center><h3>High Risk</h3></center>
                                {
                                    highRank.map((bug,key)=>
                                        <Link to={`/bugs/${bug._id}`} key={key} id="noStyle"> 
                                        <li className={classes.LI}>
                                            <div style={{display:'flex'}}>
                                                <div><i className="fas fa-exclamation-circle fa-2x" style={{margin:'20px',color:'green'}}></i></div>
                                                <div>
                                                    <p className={classes.BugName}>{bug.Summary}</p>
                                                    <p className={classes.OpenedBy}>#00{key+1} opened by {bug.Reporter}</p>
                                                    <p>
                                                        <span className={classes.RedCircle}>Bug</span>
                                                        <span className={classes.OrangeCircle}>Priority : {bug.Priority}</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </li>  
                                        </Link>  
                                    )
                                }
                            </ul>
                        </div>
                    </Col>
                    <Col lg={4} md={12}>
                        <div className={classes.Elements}>
                            <ul className={classes.UL}>
                                <center><h3>Medium Risk</h3></center>
                                {
                                    mediumRank.map((bug,key)=>
                                    <Link to={`/bugs/${bug._id}`} key={key} id="noStyle"> 
                                        <li className={classes.LI}>
                                            <div style={{display:'flex'}}>
                                                <div><i className="fas fa-exclamation-circle fa-2x" style={{margin:'20px',color:'green'}}></i></div>
                                                <div>
                                                    <p className={classes.BugName}>{bug.Summary}</p>
                                                    <p className={classes.OpenedBy}>#00{key+1} opened by {bug.Reporter}</p>
                                                    <p>
                                                        <span className={classes.RedCircle}>Bug</span>
                                                        <span className={classes.OrangeCircle}>Priority : {bug.Priority}</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </li> 
                                    </Link>       
                                    )
                                }
                            </ul>
                        </div>
                    </Col>
                    <Col lg={4} md={12}>
                        <div className={classes.Elements}>
                            <ul className={classes.UL}>
                                <center><h3>Low Risk</h3></center>
                                {
                                    lowRank.map((bug,key)=>
                                    <Link to={`/bugs/${bug._id}`} key={key} id="noStyle"> 
                                        <li className={classes.LI}>
                                            <div style={{display:'flex'}}>
                                                <div><i className="fas fa-exclamation-circle fa-2x" style={{margin:'20px',color:'green'}}></i></div>
                                                <div>
                                                    <p className={classes.BugName}>{bug.Summary}</p>
                                                    <p className={classes.OpenedBy}>#00{key+1} opened by {bug.Reporter}</p>
                                                    <p>
                                                        <span className={classes.RedCircle}>Bug</span>
                                                        <span className={classes.OrangeCircle}>Priority : {bug.Priority}</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </li> 
                                    </Link>   
                                    )
                                }
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </div>
    )
}
export default Home;