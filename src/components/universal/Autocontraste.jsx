
import '../../index.css';
import $ from 'jquery';
import React, { useState } from 'react';
import { VscCircleLargeFilled, VscColorMode } from "react-icons/vsc";


function Autocontraste() {
  const [escuro, setEscuro] = useState(false)


  const alterar = () => {
    setEscuro(!escuro)
    if($("body").hasClass("claro")){
      $("body").removeClass("claro").addClass("escuro");
      $("body").children().removeClass("claro").addClass("escuro");
      document.documentElement.style.setProperty('--cor-texto', '#fff');
      document.documentElement.style.setProperty('--cor-bg', '#000');

    } else {
      document.documentElement.style.setProperty('--cor-texto', '#000');
      document.documentElement.style.setProperty('--cor-bg', '#fff');

      $("body").removeClass("escuro").addClass("claro");
      $("body").children().removeClass("escuro");
    }
  }

  const alterarGrey = () =>{
    if($("body").hasClass("grayscale")){
      $("body").removeClass("grayscale");
    } else {
      $("body").addClass("grayscale");
    }
  }
  return (
  <>
      <div class="jumbotron">
        <div class="container">
        </div>
      </div>
    <div class="container py-2">
        <div class="row">
          <div class="col-md-12">
            <button class="btn btn-primary bt-custom" id="contraste" onClick={() => alterar()} ><VscCircleLargeFilled color={escuro? '#fff': '#000'}/></button>
            <button class="btn btn-primary bt-custom" id="grayescale" onClick={() => alterarGrey() }><VscColorMode color={escuro? '#fff': '#000'}/></button>
           </div>
        </div>
      </div>
      </>
  );
}

 

export default  Autocontraste;