import { useState } from "react";
import { Row } from "react-bootstrap";
import GetData from "./fetchcomponent";


export default function ButtonComp(props) {
    
    const dataGet = () => {
        if (props.onClick) {
          props.onClick();
        }
      };


    return (
    <div>
            <button className='buttonBackground' onClick={dataGet}></button>
    </div>
    )
}