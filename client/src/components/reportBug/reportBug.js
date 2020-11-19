import React from 'react';
import { Formik } from 'formik';
import {Form,Col,Button, Container} from 'react-bootstrap';
import Drawer from '../Drawer/drawer';
import Footer from '../footer/footer';
import classes from '../home/home.module.css';

const ReportBug = (props)=>{
    return(
        <div className={classes.Background}>
            <Drawer/>
            <Container style={{color:'white'}}> 
            <hr/>
            <center><h2>Report Bug</h2></center>
            <hr/>
             <Formik 
                    initialValues={{ Product: '', Component: '' }} 
                    onSubmit={
                        async(values,{setSubmitting,resetForm})=>{
                            setSubmitting(true);
                        }
                    }>
                        {({values,errors,touched,handleChange,handleBlur,handleSubmit,isSubmitting})=>(
                            <Form onSubmit={handleSubmit}>
                                <Form.Row> 
                                <Form.Group as={Col} controlId="formBasicProduct">
                                    <Form.Label>Product</Form.Label>
                                    <Form.Control
                                    name="Product"
                                    type="text" 
                                    placeholder="Enter Product"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.Product}
                                    className={touched.Product && errors.name ? "has-error":null}/> 
                                    <Form.Text className="text-muted">
                                    {errors.Product && touched.Product && errors.email}
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formBasicPassword">
                                    <Form.Label>Component</Form.Label>
                                    <Form.Control 
                                    name="Component"
                                    type="text" 
                                    placeholder="Enter Component"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.Component}
                                    className={touched.Component && errors.Component ? "has-error":null} />
                                    <Form.Text className="text-muted">
                                    {errors.Component && touched.Component && errors.Component}
                                    </Form.Text>
                                </Form.Group>
                                </Form.Row>
                                <Form.Row> 
                                <Form.Group as={Col} controlId="formBasicAssignee">
                                    <Form.Label>Assignee</Form.Label>
                                    <Form.Control
                                    name="Assignee"
                                    type="text" 
                                    placeholder="Enter Assignee"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.Assignee}
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
                                    <Form.Label>Summary</Form.Label>
                                    <Form.Control 
                                    name="Summary"
                                    type="text" 
                                    placeholder="Enter Summary"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.Summary}
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
                                    <Form.Label>Hardware</Form.Label>
                                    <Form.Control
                                    name="Hardware"
                                    type="text" 
                                    placeholder="Enter Hardware"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.Hardware}
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
                                    <Form.Label>OS</Form.Label>
                                    <Form.Control
                                    name="OS"
                                    type="text" 
                                    placeholder="Enter OS"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.OS}
                                    className={touched.OS && errors.OS ? "has-error":null}/> 
                                </Form.Group>
                                <Form.Group as={Col} controlId="formBasicPriority">
                                    <Form.Label>Priority</Form.Label>
                                    <Form.Control 
                                    name="Priority"
                                    type="text" 
                                    placeholder="Enter Priority"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.Priority}
                                    className={touched.Priority && errors.Priority ? "has-error":null} />
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
                                <Form.Group as={Col} controlId="formBasicReporter">
                                    <Form.Label>Reporter</Form.Label>
                                    <Form.Control
                                    name="Reporter"
                                    type="text" 
                                    placeholder="Enter Reporter"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.Reporter}
                                    className={touched.Reporter && errors.name ? "has-error":null}/> 
                                </Form.Group>
                                <Form.Group as={Col} controlId="formBasicReporterRealName">
                                    <Form.Label>Reporter Real Name</Form.Label>
                                    <Form.Control 
                                    name="ReporterRealName"
                                    type="text" 
                                    placeholder="Reporter Real Name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.ReporterRealName}
                                    />
                                </Form.Group>
                                </Form.Row>
                                <Form.Row> 
                                <Form.Group as={Col} controlId="formBasicSeverity">
                                    <Form.Label>Severity</Form.Label>
                                    <Form.Control
                                    name="Severity"
                                    type="text" 
                                    placeholder="Enter Severity"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.Severity}
                                    className={touched.Severity && errors.Severity ? "has-error":null}/> 
                                </Form.Group>
                                <Form.Group as={Col} controlId="formBasicSummary__1">
                                    <Form.Label>Summary__1</Form.Label>
                                    <Form.Control 
                                    name="Priority"
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
                            </Form>
                        )}
                    </Formik>
                    </Container>
                    <Footer/>
        </div>
    )
}
export default ReportBug;