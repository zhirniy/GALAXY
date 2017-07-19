import React from 'react';
import {Carousel, Grid, Row, Col, Pagination, Tabs, Tab} from 'react-bootstrap';



const AboutPage = React.createClass({
  
    render() {
            return (

         <div>
         <Grid>
        <Row className="show-grid">
        <Col md={6}>

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
        <Col md={6}>
         <Tabs defaultActiveKey={1} bsStyle="tabs" id="uncontrolled-tab-example">
    <Tab eventKey={1} title="Плутон" bsStyle="success">
   
<img width={300} height={300}  alt="Terra" src='img/PLUT.jpg' className="image"/>
 <br /><p>Один из самых маленьких объектов Солнечной системы, радиусом всего 1153 км. Период обращения по орбите вокруг Солнца составляет 90 613 суток (около 248 лет), а оборот вокруг своей оси занимает 6,4 земных суток. Несколько десятилетий с момента открытия в 1930 году считался девятой планетой, пока в 2006 году астрономы не пришли к выводу, что его всё-таки стоит причислить к карликовым планетам в поясе Койпера, получившим своё название после открытия в 2005 году нескольких подобных Плутону объектов.

 
<br /></p>
    </Tab>


    <Tab eventKey={2} title="Хаумеа">

<img width={300} height={300}  alt="Terra" src='img/Haumeya.jpg' className="image"/>
< br /><p>Самая быстровращающаяся из всех планет, известных на сегодняшний день в нашей системе – один оборот вокруг собственной оси занимает всего 4 часа, в то же время как полный облёт Солнца занимает 102937 суток (почти 282 года). Один из самых маленьких объектов, средний радиус составляет всего 718 км, при этом, в отличие от остальных небесных тел, обладает неправильной, как бы сплюснутой, формой. При этом имеется и 2 спутника – Хииака и Намака.

</p>
 
    
    </Tab>


    <Tab eventKey={3} title="Макемаке">
   <img width={300} height={300}  alt="Terra" src='img/Make.jpg' className="image"/>
    <br /><p>Размер третьей по величине планеты до сих пор не известен точно. Предполагается, что средний радиус приблизительно равен 740 с точностью до 17 км. Зато продолжительность года на ней удалось установить довольно точно — 111867 суток (что примерно равно 306 годам). Спутников на её орбите не обнаружено.

</p>
    

    </Tab>


    
    <Tab eventKey={4} title="Эрида">
   <img width={300} height={300}  alt="Terra" src='img/Erida.jpg' className="image"/>
    <br /><p>Один из самых больших объектов пояса Койпера лишь ненамного превосходит Плутон – 1163 км. Оборот вокруг Солнца занимает 205 029 сут (чуть больше, чем 561 год).
Обнаружившие её ученые в 2005 году изначально были уверены, что открыли 10 планету солнечной системы, но впоследствии она была признана карликовой планетой.
Открытие этого небесного тела, можно сказать, положило начало новой эры для астрономии, поскольку именно факт её открытия положил начало многочисленным спорам о статусе Плутона.
</p>
    

    </Tab>

     <Tab eventKey={5} title="Церера">
   <img width={300} height={300}  alt="Terra" src='img/Cerera.jpg' className="image"/>
    <br /><p>Примечательна тем, что еще совсем недавно была в разряде астероидов и занимала среди них первое место по размеру. Продолжительность года, по сравнению с другим удаленными карликовыми планетами — смехотворна, всего 4,6 года.
В сравнении с другими, ее диаметр не столь впечатляет и составляет 975×909 км. Период вращения вокруг оси имеет продолжительность около 0,3781 суток. У Цереры спутники не обнаружены.
</p>
    

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
