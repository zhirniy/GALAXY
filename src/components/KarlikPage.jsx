import React from 'react';
import {Carousel, Grid, Row, Col, Pagination, Tabs, Tab} from 'react-bootstrap';



const AboutPage = React.createClass({
  
    render() {
            return (

         <div>
         <Grid>
        <Row className="show-grid">
        <Col md={5}>

           <Carousel>
        <Carousel.Item>
          <img  alt="Terra" src='img/PLUT.jpg'/>
          <Carousel.Caption>
                </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img alt="Terra" src='img/Haumeya.jpg'/>
          <Carousel.Caption>
                </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img alt="Terra" src='img/Make.jpg'/>
          <Carousel.Caption>
                  </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img alt="Terra" src='img/Erida.jpg'/>
          <Carousel.Caption>
                  </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img alt="Terra" src='img/Cerera.jpg'/>
          <Carousel.Caption>
                  </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

     </Col>
        <Col md={7}>
         <Tabs defaultActiveKey={1} bsStyle="tabs" id="uncontrolled-tab-example">
    <Tab eventKey={1} title="Плутон" bsStyle="success">
   
<img width={300} height={300}  alt="Terra" src='img/PLUT.jpg' className="image"/>
 <br /><p>Плутон —  
<br /></p>
    </Tab>


    <Tab eventKey={2} title="Хаумеа">

<img width={300} height={300}  alt="Terra" src='img/Haumeya.jpg' className="image"/>
 br /><p>Хаумеа —  </p>
 
    
    </Tab>


    <Tab eventKey={3} title="Макемаке">
   <img width={300} height={300}  alt="Terra" src='img/Make.jpg' className="image"/>
    <br /><p>Макемаке —  </p>
    

    </Tab>


    
    <Tab eventKey={4} title="Эрида">
   <img width={300} height={300}  alt="Terra" src='img/Erida.jpg' className="image"/>
    <br /><p>Эрида —  </p>
    

    </Tab>

     <Tab eventKey={5} title="Церера">
   <img width={300} height={300}  alt="Terra" src='img/Cerera.jpg' className="image"/>
    <br /><p>Церера —  </p>
    

    </Tab>

  </Tabs>

      
        </Col>
      </Row>

      <Row className="show-grid">
       
        <div className="footer">
        <p className="footer_p">
        КАРЛИКОВЫЕ ПЛАНЕТЫ
        </p>
        </div>
       
      </Row>



    
 </Grid>     

 </div>




    
          


            
    );
  }
});

export default AboutPage;
