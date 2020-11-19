import React from 'react';
import classes from './home.module.css';
import Drawer from '../Drawer/drawer';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../footer/footer';

const Home = ()=>{
    return(
        <div className={classes.Background} style={{overflowX:"hidden"}}>
            <Drawer/>
            <Container>
                <Row>
                    <Col lg={4} md={12}>
                        <div className={classes.Elements}>
                            <ul className={classes.UL}>
                                <center><h3>High Priority</h3></center>
                                <li className={classes.LI}>
                                    <div style={{display:'flex'}}>
                                        <div><i className="fas fa-exclamation-circle fa-2x" style={{margin:'20px',color:'green'}}></i></div>
                                        <div>
                                            <p className={classes.BugName}>LFS Merge Conflict Merges Pointers</p>
                                            <p className={classes.OpenedBy}>#7166 opened by Jalaj kalra</p>
                                            <p><span className={classes.RedCircle}>Bug</span><span className={classes.OrangeCircle}>Priority : P1</span></p>
                                        </div>
                                    </div>
                                </li>
                                <li className={classes.LI}>
                                    <div style={{display:'flex'}}>
                                        <div><i className="fas fa-exclamation-circle fa-2x" style={{margin:'20px',color:'green'}}></i></div>
                                        <div>
                                            <p className={classes.BugName}>GitHub Desktop launches with white screen and unresponsive</p>
                                            <p className={classes.OpenedBy}>#4054 opened by Be1con</p>
                                            <p><span className={classes.RedCircle}>Bug</span><span className={classes.OrangeCircle}>Priority : P3</span></p>
                                        </div>
                                    </div>
                                </li>
                                <li className={classes.LI}>
                                    <div style={{display:'flex'}}>
                                        <div><i className="fas fa-exclamation-circle fa-2x" style={{margin:'20px',color:'green'}}></i></div>
                                        <div>
                                            <p className={classes.BugName}>LFS Merge Conflict Merges Pointers</p>
                                            <p className={classes.OpenedBy}>#7166 opened by Jalaj kalra</p>
                                            <p><span className={classes.RedCircle}>Bug</span><span className={classes.OrangeCircle}>Priority : P1</span></p>
                                        </div>
                                    </div>
                                </li>
                                <li className={classes.LI}>
                                    <div style={{display:'flex'}}>
                                        <div><i className="fas fa-exclamation-circle fa-2x" style={{margin:'20px',color:'green'}}></i></div>
                                        <div>
                                            <p className={classes.BugName}>GitHub Desktop launches with white screen and unresponsive</p>
                                            <p className={classes.OpenedBy}>#4054 opened by Be1con</p>
                                            <p><span className={classes.RedCircle}>Bug</span><span className={classes.OrangeCircle}>Priority : P3</span></p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={4} md={12}>
                        <div className={classes.Elements}>
                            <ul className={classes.UL}>
                                <center><h3>Medium Priority</h3></center>
                                <li className={classes.LI}>
                                    <div style={{display:'flex'}}>
                                        <div><i className="fas fa-exclamation-circle fa-2x" style={{margin:'20px',color:'green'}}></i></div>
                                        <div>
                                            <p className={classes.BugName}>LFS Merge Conflict Merges Pointers</p>
                                            <p className={classes.OpenedBy}>#7166 opened by Jalaj kalra</p>
                                            <p><span className={classes.RedCircle}>Bug</span><span className={classes.OrangeCircle}>Priority : P1</span></p>
                                        </div>
                                    </div>
                                </li>
                                <li className={classes.LI}>
                                    <div style={{display:'flex'}}>
                                        <div><i className="fas fa-exclamation-circle fa-2x" style={{margin:'20px',color:'green'}}></i></div>
                                        <div>
                                            <p className={classes.BugName}>GitHub Desktop launches with white screen and unresponsive</p>
                                            <p className={classes.OpenedBy}>#4054 opened by Be1con</p>
                                            <p><span className={classes.RedCircle}>Bug</span><span className={classes.OrangeCircle}>Priority : P3</span></p>
                                        </div>
                                    </div>
                                </li>
                                <li className={classes.LI}>
                                    <div style={{display:'flex'}}>
                                        <div><i className="fas fa-exclamation-circle fa-2x" style={{margin:'20px',color:'green'}}></i></div>
                                        <div>
                                            <p className={classes.BugName}>LFS Merge Conflict Merges Pointers</p>
                                            <p className={classes.OpenedBy}>#7166 opened by Jalaj kalra</p>
                                            <p><span className={classes.RedCircle}>Bug</span><span className={classes.OrangeCircle}>Priority : P1</span></p>
                                        </div>
                                    </div>
                                </li>
                                <li className={classes.LI}>
                                    <div style={{display:'flex'}}>
                                        <div><i className="fas fa-exclamation-circle fa-2x" style={{margin:'20px',color:'green'}}></i></div>
                                        <div>
                                            <p className={classes.BugName}>GitHub Desktop launches with white screen and unresponsive</p>
                                            <p className={classes.OpenedBy}>#4054 opened by Be1con</p>
                                            <p><span className={classes.RedCircle}>Bug</span><span className={classes.OrangeCircle}>Priority : P3</span></p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={4} md={12}>
                        <div className={classes.Elements}>
                            <ul className={classes.UL}>
                                <center><h3>Low Priority</h3></center>
                                <li className={classes.LI}>
                                    <div style={{display:'flex'}}>
                                        <div><i className="fas fa-exclamation-circle fa-2x" style={{margin:'20px',color:'green'}}></i></div>
                                        <div>
                                            <p className={classes.BugName}>LFS Merge Conflict Merges Pointers</p>
                                            <p className={classes.OpenedBy}>#7166 opened by Jalaj kalra</p>
                                            <p><span className={classes.RedCircle}>Bug</span><span className={classes.OrangeCircle}>Priority : P1</span></p>
                                        </div>
                                    </div>
                                </li>
                                <li className={classes.LI}>
                                    <div style={{display:'flex'}}>
                                        <div><i className="fas fa-exclamation-circle fa-2x" style={{margin:'20px',color:'green'}}></i></div>
                                        <div>
                                            <p className={classes.BugName}>GitHub Desktop launches with white screen and unresponsive</p>
                                            <p className={classes.OpenedBy}>#4054 opened by Be1con</p>
                                            <p><span className={classes.RedCircle}>Bug</span><span className={classes.OrangeCircle}>Priority : P3</span></p>
                                        </div>
                                    </div>
                                </li>
                                <li className={classes.LI}>
                                    <div style={{display:'flex'}}>
                                        <div><i className="fas fa-exclamation-circle fa-2x" style={{margin:'20px',color:'green'}}></i></div>
                                        <div>
                                            <p className={classes.BugName}>LFS Merge Conflict Merges Pointers</p>
                                            <p className={classes.OpenedBy}>#7166 opened by Jalaj kalra</p>
                                            <p><span className={classes.RedCircle}>Bug</span><span className={classes.OrangeCircle}>Priority : P1</span></p>
                                        </div>
                                    </div>
                                </li>
                                <li className={classes.LI}>
                                    <div style={{display:'flex'}}>
                                        <div><i className="fas fa-exclamation-circle fa-2x" style={{margin:'20px',color:'green'}}></i></div>
                                        <div>
                                            <p className={classes.BugName}>GitHub Desktop launches with white screen and unresponsive</p>
                                            <p className={classes.OpenedBy}>#4054 opened by Be1con</p>
                                            <p><span className={classes.RedCircle}>Bug</span><span className={classes.OrangeCircle}>Priority : P3</span></p>
                                        </div>
                                    </div>
                                </li>
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