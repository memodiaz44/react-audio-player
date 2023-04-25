import { isContentEditable } from "@testing-library/user-event/dist/utils";
import React from "react";
import "../stylesheets.css/beats.css";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Text from "./SoundFiles";
import Handler from './HandlePop';
import Popup from 'reactjs-popup';

const Beats = (props) => {

 

    return (
      
      <div className="beat-conteinert"
      
     
      > <p className="text-info" >{props.info}</p>
      {props.children} 
      </div>
    );
  }
  
  export default Beats;
  