import { initFeedbackMobile } from "./feedback.js";
import { initDkFeedback } from "./dkfeedback.js";
import { initHeader } from "./header.js";

function init(){
    try{
        initHeader();
        initFeedbackMobile();
        initDkFeedback();

    }catch(error){
        console.error("Erro de inicialização", error);
    }
}

document.addEventListener('DOMContentLoaded', init);