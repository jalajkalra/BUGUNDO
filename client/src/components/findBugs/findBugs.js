import React, { useState, Fragment, useEffect } from 'react';
import classes from './findBugs.module.css';
import classesx from '../home/home.module.css';
import Footer from '../footer/footer';
import ResponsiveDrawer from '../Drawer/drawer';
import {Form,Container,Col} from 'react-bootstrap';
import Page from '../pagination/pagination';
import { Link } from 'react-router-dom';
 
const FindBugs = (props)=>{
    const [category,updateCategory] = useState('id');
    const [search,updateSearch] = useState('');
    const [error,updateError] = useState('');
    const [currentPage,updateCurrentPage] = useState(1);
    const [count,updateCount] = useState(0)
    const postPerPage = 4;
    const [post,updatePost] = useState([]);
    const handleChange = (event,value)=>{
        updateCurrentPage(value)
    }
    useEffect(()=>{
        updateCount(Math.ceil(post.length/postPerPage))
    },[post])
    const submitHandler = async(e)=>{
        e.preventDefault();
        let url = `http://localhost:8000/data/bug/${category}/${search}`;
        const response = await fetch(url,{
            method:'get'
        });
        const json = await response.json();
        updatePost(json.data);
    }
    const indexOfLast = currentPage*postPerPage;
    const indexOfFirst = indexOfLast - postPerPage;
    const currentPosts = post.slice(indexOfFirst,indexOfLast);
    return(
        <div className={classesx.Background}> 
        <ResponsiveDrawer/>
        <Container style={{color:'white'}}>
            <hr/>
            <h2 className={classes.Body}>Find Bugs</h2>
            <hr/>
            {
                error?
                    <Fragment>
                        <p className={classes.Error}>{error}</p> 
                        {
                            setTimeout(() => { 
                                updateError('')
                            }, 3000) 
                        }
                    </Fragment>:null
            }
            <p className={classes.Body}>To find bugs please select a category(ID, Product, Component, Keywords) and enter what bug you want to search.</p>
            <Form className={classes.Form}>
                <Form.Row> 
                <Form.Group controlId="exampleForm.ControlSelect2" as={Col} value={category} onChange={(e)=>updateCategory(e.target.value)}>
                    <Form.Label>Category</Form.Label>
                    <Form.Control as="select">
                    <option value="id">ID</option>
                    <option value="product">Product</option>
                    <option value="component">Component</option>
                    <option value="keywords">Keywords</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="formBasicEmail" as={Col}>
                    <Form.Label style={{fontWeight:'600'}}>Search</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Search" 
                    className={classes.Input}
                    onChange={(e)=>updateSearch(e.target.value)}
                    value={search}/>
                </Form.Group>
                </Form.Row>
                <center>
                    <button type="submit" onClick={submitHandler} size="lg" className={classes.Button}>
                        Find
                    </button>
                </center>    
            </Form>
        </Container>
        <Container>
                {
                    currentPosts.length>0?
                    <Fragment>
                        <div className={classesx.Elements}>
                            <ul className={classesx.UL}>
                                <center><h3 style={{marginBottom:'40px'}}>Search Results</h3></center>
                                {
                                    currentPosts.map((item,key)=>
                                        <Link to={`/bugs/${item._id}`} id="noStyle"> 
                                        <li className={classesx.LI}>
                                            <div style={{display:'flex'}}>
                                                <div><i className="fas fa-exclamation-circle fa-2x" style={{margin:'20px',color:'green'}}></i></div>
                                                <div>
                                                    <p className={classesx.BugName}>{item.Summary}</p>
                                                    <p className={classesx.OpenedBy}>#00{key+1} opened by {item.Reporter}</p>
                                                    <p><span className={classesx.RedCircle}>Bug</span><span className={classesx.OrangeCircle}>Priority : P1</span></p>
                                                </div>
                                            </div>
                                        </li>
                                        </Link>
                                    )    
                                }
                            </ul>
                        </div>
                    </Fragment>:null
                }
            <div style={{display:'flex',justifyContent:'center',margin:'3%'}}>
                <Page count={count} change={handleChange} page={currentPage}/> 
            </div>
        </Container>
        <Footer/>
        </div>
    )
}
export default FindBugs;