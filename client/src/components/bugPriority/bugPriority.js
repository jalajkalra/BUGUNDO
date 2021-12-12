import React, { useEffect } from 'react';
import classes from '../home/home.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';
import { add } from '../../entities/action/action';
import { useDispatch } from 'react-redux';

const risks = [
    {value:"highRank",key:"High"},
    {value:"mediumRank",key:"Medium"},
    {value:"lowRank",key:"Low"},
]

const BugPriority = ({type})=>{
    const dispatch = useDispatch();
    const bugs = useSelector(state=>state.data);
    useEffect(()=>{
        dispatch(add(type));
    },[type])
    return(
        <Container>
            <Row>
                {
                    risks.map(item=>
                        <Col lg={4} md={12} key={item.key}>
                            <div className={classes.Elements}>
                                <ul className={classes.UL}>
                                    <center><h3>{item.key} Risk</h3></center>
                                    {
                                        bugs?.[item.value]?.map((bug,key)=>
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
                    )
                }
            </Row>
        </Container>
    )
}
export default BugPriority;