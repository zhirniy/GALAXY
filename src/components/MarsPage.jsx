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
          <img  alt="Terra" src='img/M01.jpg'/>
          <Carousel.Caption>
                </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img alt="Terra" src='img/M02.jpg'/>
          <Carousel.Caption>
                </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img alt="Terra" src='img/M03.jpg'/>
          <Carousel.Caption>
                  </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

     </Col>
        <Col md={7}>
        <div id="m">
         <Tabs defaultActiveKey={1} bsStyle="tabs" bsSize="large" id="uncontrolled-tab-example">
    <Tab eventKey={1} title="Общая информация" bsStyle="success">
    <br /><p>
 
Марс — четвёртая по удалённости от Солнца и седьмая по размерам планета Солнечной системы; масса планеты составляет 10,7 % массы Земли; объём — 0,15 объёма Земли, а средний линейный диаметр — 0,53 диаметра Земли. Названа в честь Марса — древнеримского бога войны, соответствующего древнегреческому Аресу. Иногда Марс называют «красной планетой» из-за красноватого оттенка поверхности, придаваемого ей оксидом железа.
<br /></p>
<p>
Температура на планете колеблется от −153 °C на полюсе зимой и до более +20 °C на экваторе в полдень. Средняя температура составляет −50 °C.<br /></p>
<p>
Две трети поверхности Марса занимают светлые области, получившие название материков, около трети — тёмные участки, называемые морями. Моря сосредоточены главным образом в южном полушарии планеты, между 10 и 40° широты. В северном полушарии есть только два крупных моря — Ацидалийское и Большой Сирт.<br /></p>
<p>
Современные модели внутреннего строения Марса предполагают, что он состоит из коры со средней толщиной 50 км (максимальная оценка — не более 125 км), силикатной мантии и ядра радиусом, по разным оценкам, от 1480 до 1800 км. 
<br /></p>



    </Tab>


    <Tab eventKey={2} title="Спутники">
 
    <Tabs defaultActiveKey={1} bsStyle="tabs" id="uncontrolled-tab-example">
    <Tab eventKey={1} title="Фобос">
    <img  alt="Fobos" src='img/MF01.gif' className="image" />
    <br /><p>
    Фо́бос — один из двух спутников Марса. Был открыт американским астрономом Асафом Холлом в 1877 году и назван в честь древнегреческого бога Фобоса, спутника бога войны Ареса.</p>
    <p>Фобос имеет форму, близкую к трёхосному эллипсоиду, большая ось которого направлена на Марс. Размеры Фобоса составляют 26,8×22,4×18,4 км.</p>
    </Tab>
    <Tab eventKey={2} title="Деймос">
    <img  alt="Deymos" src='img/MF01.gif' className="image" />
   <br /> <p>Де́ймос — один из двух спутников Марса (наряду с Фобосом). Был открыт американским астрономом Асафом Холлом в 1877 году и назван им в честь древнегреческого бога ужаса Деймоса, спутника бога войны Ареса.</p>
    <p>Деймос имеет форму, приближающуюся к трёхосному эллипсоиду. Размеры составляют 15×12,2×10,4 км. В XX веке Деймос считался самым маленьким из известных в Солнечной системе спутников.</p>
    </Tab>
    </Tabs>
    </Tab>


    <Tab eventKey={3} title="История">
    <br /><p>

Первые наблюдения Марса проводились до изобретения телескопа. Это были позиционные наблюдения с целью определения положений планеты по отношению к звёздам. Существование Марса как блуждающего объекта в ночном небе было письменно засвидетельствовано древнеегипетскими астрономами в 1534 году до н. э.
    </p>


<p>
    Голландский астроном Христиан Гюйгенс первым составил карту поверхности Марса, отражающую множество деталей. 28 ноября 1659 года он сделал несколько рисунков Марса, на которых были отображены различные темные области, позже сопоставленные с плато Большой Сирт.</p>
   <p> Расцвет телескопических наблюдений Марса пришёлся на конец XIX — середину XX века. Во многом он обусловлен общественным интересом и известными научными спорами вокруг наблюдавшихся марсианских каналов.
</p>

<p>

С 1960-х годов к Марсу для подробного изучения планеты с орбиты и фотографирования поверхности были направлены несколько автоматических межпланетных станций (АМС). Кроме того, продолжалось дистанционное зондирование Марса с Земли в большей части электромагнитного спектра с помощью наземных и орбитальных телескопов, например, в инфракрасном для определения состава поверхности, в ультрафиолетовом и субмиллиметровом диапазонах — для исследования состава атмосферы, в радиодиапазоне — для измерения скорости ветра.
</p>


    </Tab>
  </Tabs>
  </div>

      
        </Col>
      </Row>

      <Row className="show-grid">
       
        <div className="footer">
        <p className="footer_p">
        ПЛАНЕТЫ ЗЕМНОЙ ГРУППЫ (МАРС)
        </p>
        </div>
       
      </Row>



    
 </Grid>     

 </div>




    
          


            
    );
  }
});

export default AboutPage;
