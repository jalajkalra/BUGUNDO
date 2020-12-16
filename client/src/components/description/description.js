import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Table, Button, Form } from 'react-bootstrap';
import DrawerLeft from '../Drawer/drawer';
import Footer from '../footer/footer';
import classes from '../home/home.module.css';
import bug from '../../assets/bug1.png';
import classesx from './description.module.css';   
import {secret} from '../../config/config';
import CryptoJS from 'crypto-js'; 

const Description = (props)=>{
    const [data,updateData] = useState([]);
    const [comment,updateComment] = useState('');
    console.log(props.match.params.id);
    useEffect(()=>{
        (async()=>{
            const res = await fetch(`http://localhost:8000/data/bug/id/${props.match.params.id}`,{
            method:'get'
        });
        const json = await res.json();
        updateData(json.data);
        })()
    },[])
    const handleSubmit = async(id)=>{
        const userID = localStorage.getItem('Ab291Xy5Qrt1C259');
        const userId = CryptoJS.AES.decrypt(userID,`${secret}`).toString(CryptoJS.enc.Utf8);
        const response = await fetch('http://localhost:8000/data/addComment',{
            method:'post',
            headers:{
                'Accept': 'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({comment,userId,id:`${props.match.params.id}`})
        });
        const json = await response.json();
        updateData(json.data);
        updateComment('');
    }
    return(
        <>
            <div className={classes.Background} style={{overflowX:"hidden"}}>
                <DrawerLeft/>
                {
                    data.map((val,key)=>
                    <Container style={{background:'white',marginTop:'15px'}}>
                        <Row>
                            <Col sm={4} xs={12}>
                                <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100%'}}>
                                    <img src={bug} alt="Bug Image" className={classes.Img}/>
                                </div>
                            </Col>
                            <Col sm={8} xs={12}>
                            <div>
                                <center><h2>Package Viewer: order resource folders before resources</h2></center>
                                <Table bordered hover>
                                    <tbody>
                                        <tr>
                                        <td>Product</td>
                                        <td>{val.Product}</td>
                                        </tr>
                                        <tr>
                                        <td>Component</td>
                                        <td>{val.Component}</td>
                                        </tr>
                                        <tr>
                                        <td>Priority</td>
                                        <td>{val.Priority}</td>
                                        </tr>
                                        <tr>
                                        <td>Severity</td>
                                        <td>{val.Severity}</td>
                                        </tr>
                                        <tr>
                                        <td>Assignee</td>
                                        <td>{val.Assignee}</td>
                                        </tr>
                                        <tr>
                                        <td>OS</td>
                                        <td>{val.OS}</td>
                                        </tr>
                                        <tr>
                                        <td>Hardware</td>
                                        <td>{val.Hardware}</td>
                                        </tr>
                                        <tr>
                                        <td>Keywords</td>
                                        <td>{val.Keywords}</td>
                                        </tr>
                                        <tr>
                                        <td>URL</td>
                                        <td>{val.URL}</td>
                                        </tr>
                                        <tr>
                                        <td>Reporter</td>
                                        <td>{val.Reporter}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Col>
                    </Row>
                    <hr/>
                    <div>
                        <h3>Comments:</h3>
                        <Form style={{marginBottom:'15px'}}>
                            <Form.Group as={Row} controlId="formPlaintextInput">
                                <Col sm="10">
                                <Form.Control  
                                    name="comment"
                                    placeholder="Add Comment"
                                    type="text"
                                    onChange={(e)=>updateComment(e.target.value)}
                                    value={comment}
                                    required
                                />
                                </Col>
                                <Col sm="2">
                                    <Button variant="success" onClick={()=>handleSubmit()}>Submit</Button>
                                </Col>
                            </Form.Group>
                        </Form> 
                        <ul className={classesx.Ul}>
                            <li>
                                <Container fluid>
                                    {
                                        val.Comments.map((item,key)=>
                                            <Row style={{marginBottom:'15px'}} key={key}>
                                                <Col xs={2}>
                                                    <i className="fas fa-user-circle fa-3x" style={{display:'flex',justifyContent:'flex-end'}}></i>
                                                </Col>
                                                <Col xs={10}>
                                                    <div className={classesx.Comment}>{item.comment}</div>
                                                    <div>-{item.sender}</div>
                                                </Col>
                                            </Row>     
                                        )
                                    }      
                                </Container>
                            </li>    
                        </ul>   
                    </div>
                </Container>
                )
            }
                <Footer/>
            </div>    
        </>
    )
}
export default Description;