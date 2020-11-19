import React, { Fragment } from 'react';
import {Form,Button} from 'react-bootstrap';
import {Formik} from 'formik';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import classes from './contact.module.css';

const ContactForm = (props)=>{
    return(
        <Fragment>
            <Formik 
                    initialValues={{ email: '', name: '',message:'',phone:''}} 
                    onSubmit={
                        (values,{setSubmitting,resetForm})=>{
                            console.log(values);
                        }
                    }>
                        {({values,handleChange,handleSubmit,isSubmitting})=>(
                            <Form onSubmit={handleSubmit}>
                                        <FormControl fullWidth> 
                                            <InputLabel>Your Name</InputLabel>
                                                <Input
                                                name="name"
                                                placeholder="Your Name"
                                                onChange={handleChange}
                                                value={values.name}
                                                className={classes.Input}
                                                type="text"
                                                required
                                                />
                                        </FormControl>
                                     
                                        <FormControl fullWidth> 
                                            <InputLabel>Your Email</InputLabel>
                                                <Input
                                                name="email"
                                                placeholder="Your Email"
                                                onChange={handleChange}
                                                value={values.email}
                                                className={classes.Input}
                                                type="text"
                                                required
                                                />
                                        </FormControl>

                                        <FormControl fullWidth> 
                                            <InputLabel>Your Phone</InputLabel>
                                                <Input
                                                name="email"
                                                placeholder="Your Phone"
                                                onChange={handleChange}
                                                value={values.phone}
                                                className={classes.Input}
                                                type="text"
                                                min={1000000000}
                                                required
                                                />
                                        </FormControl>
                              
                                        <FormControl fullWidth> 
                                            <InputLabel>Message</InputLabel>
                                                <Input
                                                name="message"
                                                placeholder="Message"
                                                onChange={handleChange}
                                                value={values.message}
                                                className={classes.Input}
                                                type="text"
                                                required
                                                />
                                        </FormControl>   
                                <center> 
                                <Button 
                                size="lg" 
                                type="submit" 
                                id="ContactUsButton"
                                style={{backgroundColor:'orange',borderRadius:'1.57rem',border:'none',margin:'2% 0'}}
                                disabled={isSubmitting}
                                >
                                Send message!
                                </Button>
                                </center>
                            </Form>
                        )}
                    </Formik>
        </Fragment>
    )
}
export default ContactForm;