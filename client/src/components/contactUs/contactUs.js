import React from 'react';
import {Row,Col,Container} from 'react-bootstrap';
import Drawer from '../Drawer/drawer';
import contact from '../../assets/contact.jpg';
import classes from './contact.module.css';
import ContactForm from './contactForm';
import classesX from '../home/home.module.css';
import Footer from '../footer/footer';

const ContactPage = (props)=>{
    return(
        <div className={classesX.Background}> 
            <div>
                <Drawer/>
            </div>
            <Container fluid style={{margin:'20px 0'}}>
                <div className={classes.PhoneView}>
                    <img src={contact} alt="Contact Us" className={classes.Img}/>
                </div>
                <Container className={classes.Contact}>
                    <Row className={classes.ContactBackground}>
                        <Col sm={6} xs={5}>
                            <div>
                                <h1 className={classes.H1}>Contact Us</h1>
                                <p className={classes.ContactText}>We're here to help you and answer any question you might have. We look forward to hearing from you.</p>
                            </div>
                        </Col>
                        <Col sm={6} xs={7}>
                            <div className={classes.Background}>
                                <h1 className={classes.H12}>Drop us a line</h1>
                                <p className={classes.Fade}>Please feel free to contact us if you have any further questions or concerns</p>
                                <ContactForm/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Footer/>
        </div>
    )
}

export default ContactPage;