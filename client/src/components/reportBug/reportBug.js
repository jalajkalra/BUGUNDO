import React, { useState,useEffect } from 'react';
import { Formik } from 'formik';
import {Form,Col,Button, Container} from 'react-bootstrap';
import Drawer from '../Drawer/drawer';
import Footer from '../footer/footer';
import classes from '../home/home.module.css';
import {secret} from '../../config/config';
import CryptoJS from 'crypto-js';
import {useSelector} from 'react-redux';

const ReportBug = (props)=>{
    const isAuth = useSelector(state=>state.isLoggedIn);
    const [message,updateMessage] = useState('');
    const userID = localStorage.getItem('Ab291Xy5Qrt1C259');
    const userId = CryptoJS.AES.decrypt(userID,`${secret}`).toString(CryptoJS.enc.Utf8);
    useEffect(()=>{
        setTimeout(()=>{
            updateMessage('');
        },5000);
    },[message]);
    return(
        <>
        {
            isAuth?
            <div className={classes.Background}>
            <Drawer/>
            <Container style={{color:'white'}}> 
            <hr/>
            <center><h2>Report Bug</h2></center>
            <hr/>
             <Formik 
                    initialValues={{ Product: '', 
                                    Component: '',
                                    Severity:'',
                                    OS:'',
                                    Priority:'',
                                    Assignee:'',
                                    Summary:'',
                                    Summary__1:'',
                                    AssigneeRealName:'',
                                    Hardware:'',
                                    QAContact:'',
                                    QAContactRealName:'',
                                    TargetMilestone:'',
                                    Tags:'',
                                    Status:'',
                                    Resolution:'',
                                    Changed:'',
                                    Classification:'',
                                    Flags:'',
                                    Keywords:'',
                                    Whiteboard:'',
                                    Alias:'' ,
                                    Version:'',
                                    URL:''}} 
                    onSubmit={
                        async(values,{setSubmitting,resetForm})=>{
                            if(values.Priority != ''&& values.Severity != ''){
                                const res = await fetch('http://localhost:8000/data/bugs',{
                                method:'post',
                                headers:{
                                    'Content-Type':'application/json'
                                },
                                body:JSON.stringify({...values,userId})
                                });
                                const json = await res.json();
                                if(json.message==="success"){
                                    updateMessage("Successfully Filled The Bug");
                                }
                            }
                            setSubmitting(false);
                            resetForm();
                        }
                    }>
                        {({values,errors,touched,handleChange,handleBlur,handleSubmit,isSubmitting})=>(
                            <Form onSubmit={handleSubmit}>
                                <Form.Row> 
                                <Form.Group as={Col} controlId="formBasicProduct">
                                    <Form.Label>Product (*)</Form.Label>
                                    <Form.Control
                                    name="Product"
                                    type="text" 
                                    placeholder="Enter Product"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.Product}
                                    required
                                    className={touched.Product && errors.name ? "has-error":null}/> 
                                    <Form.Text className="text-muted">
                                    {errors.Product && touched.Product && errors.email}
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formBasicPassword">
                                    <Form.Label>Component (*)</Form.Label>
                                    <Form.Control 
                                    name="Component"
                                    type="text" 
                                    placeholder="Enter Component"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.Component}
                                    required
                                    className={touched.Component && errors.Component ? "has-error":null} />
                                    <Form.Text className="text-muted">
                                    {errors.Component && touched.Component && errors.Component}
                                    </Form.Text>
                                </Form.Group>
                                </Form.Row>
                                <Form.Row> 
                                <Form.Group as={Col} controlId="formBasicAssignee">
                                    <Form.Label>Assignee (*)</Form.Label>
                                    <Form.Control
                                    name="Assignee"
                                    type="text" 
                                    placeholder="Enter Assignee"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.Assignee}
                                    required
                                    className={touched.Assignee && errors.name ? "has-error":null}/> 
                                </Form.Group>
                                <Form.Group as={Col} controlId="formBasicStatus">
                                    <Form.Label>Status</Form.Label>
                                    <Form.Control 
                                    name="Status"
                                    type="text" 
                                    placeholder="Enter Status"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.Status}
                                    className={touched.Status && errors.Status ? "has-error":null} />
                                </Form.Group>
                                </Form.Row>
                                <Form.Row> 
                                <Form.Group as={Col} controlId="formBasicResolution">
                                    <Form.Label>Resolution</Form.Label>
                                    <Form.Control
                                    name="Resolution"
                                    type="text" 
                                    placeholder="Enter Resolution"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.Resolution}
                                    className={touched.Resolution && errors.name ? "has-error":null}/> 
                                </Form.Group>
                                <Form.Group as={Col} controlId="formBasicSummary">
                                    <Form.Label>Summary (*)</Form.Label>
                                    <Form.Control 
                                    name="Summary"
                                    type="text" 
                                    placeholder="Enter Summary"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.Summary}
                                    required
                                    className={touched.Summary && errors.Summary ? "has-error":null} />
                                </Form.Group>
                                </Form.Row>
                                <Form.Row> 
                                <Form.Group as={Col} controlId="formBasicChanged">
                                    <Form.Label>Changed</Form.Label>
                                    <Form.Control
                                    name="Changed"
                                    type="text" 
                                    placeholder="Enter Changed"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.Changed}
                                    className={touched.Changed && errors.name ? "has-error":null}/> 
                                </Form.Group>
                                <Form.Group as={Col} controlId="formBasicAssigneeRealName">
                                    <Form.Label>Assignee Real Name</Form.Label>
                                    <Form.Control 
                                    name="AssigneeRealName"
                                    type="text" 
                                    placeholder="Enter Assignee Real Name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.AssigneeRealName}
                                    className={touched.AssigneeRealName && errors.AssigneeRealName ? "has-error":null} />
                                </Form.Group>
                                </Form.Row>
                                <Form.Row> 
                                <Form.Group as={Col} controlId="formBasicClassification">
                                    <Form.Label>Classification</Form.Label>
                                    <Form.Control
                                    name="Classification"
                                    type="text" 
                                    placeholder="Enter Classification"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.Classification}
                                    className={touched.Classification && errors.name ? "has-error":null}/> 
                                </Form.Group>
                                <Form.Group as={Col} controlId="formBasicFlags">
                                    <Form.Label>Flags</Form.Label>
                                    <Form.Control 
                                    name="Flags"
                                    type="text" 
                                    placeholder="Enter Flags"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.Flags}
                                    />
                                </Form.Group>
                                </Form.Row>
                                <Form.Row> 
                                <Form.Group as={Col} controlId="formBasicHardware">
                                    <Form.Label>Hardware (*)</Form.Label>
                                    <Form.Control
                                    name="Hardware"
                                    type="text" 
                                    placeholder="Enter Hardware"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.Hardware}
                                    required
                                    className={touched.Resolution && errors.name ? "has-error":null}/> 
                                </Form.Group>
                                <Form.Group as={Col} controlId="formBasicKeywords">
                                    <Form.Label>Keywords</Form.Label>
                                    <Form.Control 
                                    name="Keywords"
                                    type="text" 
                                    placeholder="Enter Keywords"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.Keywords}
                                    />
                                </Form.Group>
                                </Form.Row>
                                <Form.Row> 
                                <Form.Group as={Col} controlId="formBasicOS">
                                    <Form.Label>OS (*)</Form.Label>
                                    <Form.Control
                                    name="OS"
                                    as="select"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                    className={touched.OS && errors.OS ? "has-error":null}>
                                        <option value="">----Select----</option>
                                        <option value="Windows">Windows</option>
                                        <option value="macOS">macOS</option>
                                        <option value="Linux">Linux</option>
                                        <option value="Microsoft">Microsoft</option>
                                    </Form.Control>  
                                </Form.Group>
                                <Form.Group as={Col} controlId="formBasicPriority">
                                    <Form.Label>Priority (*)</Form.Label>
                                    <Form.Control 
                                    name="Priority"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                    as="select"
                                    className={touched.Priority && errors.Priority ? "has-error":null}>
                                        <option value="">----Select----</option>
                                        <option value="P1">P1</option>
                                        <option value="P2">P2</option>
                                        <option value="P3">P3</option>
                                    </Form.Control> 
                                </Form.Group>
                                </Form.Row>
                                <Form.Row> 
                                <Form.Group as={Col} controlId="formBasicQAContact">
                                    <Form.Label>QA Contact</Form.Label>
                                    <Form.Control
                                    name="QAContact"
                                    type="text" 
                                    placeholder="Enter QA Contact"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.QAContact}
                                    /> 
                                </Form.Group>
                                <Form.Group as={Col} controlId="formBasicQAContactRealName">
                                    <Form.Label>QA Contact Real Name</Form.Label>
                                    <Form.Control 
                                    name="QAContactRealName"
                                    type="text" 
                                    placeholder="Enter QA Contact Real Name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.QAContactRealName}
                                    />
                                </Form.Group>
                                </Form.Row>
                                <Form.Row> 
                                <Form.Group as={Col} controlId="formBasicSeverity">
                                    <Form.Label>Severity (*)</Form.Label>
                                    <Form.Control
                                    name="Severity" 
                                    as="select"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                    className={touched.Severity && errors.Severity ? "has-error":null}>
                                        <option value="">----Select----</option>
                                        <option value="Blocker">Blocker</option>
                                        <option value="Critical">Critical</option>
                                        <option value="Regression">Regression</option>
                                        <option value="Major">Major</option>
                                        <option value="Normal">Normal</option>
                                        <option value="Minor">Minor</option>
                                        <option value="Trivial">Trivial</option>
                                        <option value="Enhancement">Enhancement</option> 
                                    </Form.Control> 
                                </Form.Group>
                                <Form.Group as={Col} controlId="formBasicSummary__1">
                                    <Form.Label>Summary__1</Form.Label>
                                    <Form.Control 
                                    name="Summary__1"
                                    type="text" 
                                    placeholder="Enter Summary__1"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.Summary__1}
                                    className={touched.Summary__1 && errors.Summary__1 ? "has-error":null} />
                                </Form.Group>
                                </Form.Row>
                                <Form.Row> 
                                <Form.Group as={Col} controlId="formBasicTags">
                                    <Form.Label>Tags</Form.Label>
                                    <Form.Control
                                    name="Tags"
                                    type="text" 
                                    placeholder="Enter Tags"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.Tags}
                                    /> 
                                </Form.Group>
                                <Form.Group as={Col} controlId="formBasicTargetMilestone">
                                    <Form.Label>Target Milestone</Form.Label>
                                    <Form.Control 
                                    name="TargetMilestone"
                                    type="text" 
                                    placeholder="Enter Target Milestone"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.TargetMilestone}
                                    />
                                </Form.Group>
                                </Form.Row>
                                <Form.Row> 
                                <Form.Group as={Col} controlId="formBasicVersion">
                                    <Form.Label>Version</Form.Label>
                                    <Form.Control
                                    name="Version"
                                    type="text" 
                                    placeholder="Enter Version"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.Version}
                                    /> 
                                </Form.Group>
                                <Form.Group as={Col} controlId="formBasicWhiteboard">
                                    <Form.Label>Whiteboard</Form.Label>
                                    <Form.Control 
                                    name="Whiteboard"
                                    type="text" 
                                    placeholder="Enter Whiteboard"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.Whiteboard}
                                    />
                                </Form.Group>
                                </Form.Row>
                                <Form.Row> 
                                <Form.Group as={Col} controlId="formBasicAlias">
                                    <Form.Label>Alias</Form.Label>
                                    <Form.Control
                                    name="Alias"
                                    type="text" 
                                    placeholder="Enter Alias"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.Alias}
                                    /> 
                                </Form.Group>
                                <Form.Group as={Col} controlId="formBasicURL">
                                    <Form.Label>URL</Form.Label>
                                    <Form.Control 
                                    name="URL"
                                    type="text" 
                                    placeholder="Enter URL"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.URL}
                                    />
                                </Form.Group>
                                </Form.Row>
                                <center> 
                                <Button 
                                size="lg" 
                                variant="primary" 
                                type="submit" 
                                style={{margin:'5% 0',borderRadius:'1.57rem'}}
                                disabled={isSubmitting}
                                >
                                Submit
                                </Button>
                                <Button 
                                size="lg" 
                                variant="danger"  
                                style={{margin:'5% 2%',borderRadius:'1.57rem'}}
                                onClick={()=>props.history.push('/home')}
                                >
                                Cancel
                                </Button>
                                </center>
                                {
                                    message.length>0?
                                    <center>
                                        <p style={{background:'green',padding:'15px',fontWeight:'bold'}}>
                                            {message}
                                        </p>
                                    </center>:null
                                }
                            </Form>
                        )}
                    </Formik>
                    </Container>
                    <Footer/>
                </div>
            :
            <div className={classes.Background}>
                <center>
                    <h2 style={{color:'white'}}>Page Not found !!!</h2>
                </center>
            </div>
        }
        </>
    )
}
export default ReportBug;