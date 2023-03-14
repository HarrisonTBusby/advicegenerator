import ButtonComp from "./buttoncomponent";
import { Container, Row } from "react-bootstrap";
import patternDivider from "../Assets/pattern-divider-desktop.png";
import patternDividerMobile from '../Assets/pattern-divider-mobile.png';
import { useState, useEffect } from "react";
import GetData from "./fetchcomponent";

export default function Box()
{

const [advice, setAdvice] = useState('');
const [id, setId] = useState('');

  const getAdvice = async () => {
    const data = await GetData();
    setAdvice(data.slip.advice);
    setId(data.slip.id);
  }

  useEffect(() => {
    getAdvice();
  }, []);

  let patternDividerSrc;
if (window.innerWidth < 600) {
  patternDividerSrc = patternDividerMobile;
} else {
  patternDividerSrc = patternDivider;
}
    
    return(
            <body>
                
        <Row className="pt">
            <div className="col-12 center2">

        <Container className="center2">
            <div className="box">
            <p className="font-2">Advice #{id}</p>
            <p className="font">{advice}</p>
        
        <Row className="center2">
            <img className="img-fluid" src={patternDividerSrc} alt='Pattern Divider'/>
        </Row>
        
        

            </div>
        </Container>
            </div>
        </Row>
        <Row className="text-center">
            <div className="col-12 center2">
            <ButtonComp onClick={getAdvice}/>
            </div>
        </Row>
        
  
            </body>
    )
}