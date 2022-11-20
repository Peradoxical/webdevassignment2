'use strict';
/**
 * 
 * @param {Node} button 
 */
function toggleButton(button){
    button.disabled=!button.disabled;
}


async function initializeSelectData(JSONfile){
    let jsonRequest=new Request(JSONfile);
    jsonRequest.mode='no-cors';
    let JSONobject= await fetch(jsonRequest);
    let currencies=JSON.parse(JSONobject);
        for (let i of currencies){
            let addOption=document.createElement("option");
            addOption.value=i["code"];
            addOption.innerHTML=i["name_plural"];
            select.appendChild(addOption);
        }
}