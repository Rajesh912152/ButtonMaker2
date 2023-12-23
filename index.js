let backgroundColorEl=document.getElementById("backgroundColor")
let fontColorEl=document.getElementById("fontColor");
let fontSizeEl=document.getElementById("fontSize");
let fontWeightEl=document.getElementById("fontWeight");
let paddingEl=document.getElementById("padding");
let borderRadiesEl=document.getElementById("borderRadies");

let customBtnEl=document.getElementById("customBtn")

function apply(){
    customBtnEl.style.backgroundColor=backgroundColorEl.value;
    customBtnEl.style.color=fontColorEl.value
    customBtnEl.style.fontSize=fontSizeEl.value
    customBtnEl.style.fontWeight=fontWeightEl.value
    customBtnEl.style.padding=paddingEl.value
    customBtnEl.style.borderRadius=borderRadiesEl.value
}