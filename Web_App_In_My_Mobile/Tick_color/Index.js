// selectors 

let rangeInputs = document.querySelectorAll(".color-range #Range input");
let displayColor = document.querySelector(".container .display-color");
let copyInput = document.querySelector("#copyInput");
let data = localStorage.color;



// range color start 
//localStorage.clear()

// save color values in local storg

if(data){
  null
}else{
  let color = new Object({
    red : 25,
    green : 50,
    blue : 75,
    alphaChanel : 25,
    proposals : []
   })// add the objectin local storg
   
   color = JSON.stringify(color);
   localStorage.setItem("color",color);
}

// saving data done

// function to convert values of rgb color to percentage number
function conNum(num){
  return 250 * num / 100
}
// end 

// function to update value in local storage 
function updateValue(name,value){
  if(name === "red" || name === "green" || name === "blue" || name === "alphaChanel"){
    let respons = localStorage.color;
    respons = JSON.parse(respons);
    respons[name] = value;
    respons = JSON.stringify(respons);
    localStorage.color = respons
  }else{
    return false
  }
}
// to return rgb color to dont repeat text
function returnRangeValue (){
  return` rgb(${conNum(data.red)},
  ${conNum(data.green)},
  ${conNum(data.blue)},
  .${data.alphaChanel}) `;
}

// set default values
data = JSON.parse(data);
rangeInputs.forEach((input)=>{
  let name = input.getAttribute("data-color");
  input.value = data[name];
})

displayColor.style.backgroundColor = returnRangeValue()

copyInput.value = returnRangeValue()
copyInput.style.color = returnRangeValue()
//copyInput.style.
// set values of color in display
rangeInputs.forEach((inp)=>{
  inp.oninput = ()=>{
    ri = rangeInputs
    color = `
rgb(${conNum(ri[0].value)},
  ${conNum(ri[1].value)},
  ${conNum(ri[2].value)},
  .${ri[3].value})`;
    displayColor.style.backgroundColor = color
    // to append value in display field 
    copyInput.value =color
    copyInput.style.color = color
    // set color value in local srorage
    let colName = inp.getAttribute("data-color");
    let colValue = inp.value;
    updateValue(colName,colValue)
  }
})

displayColor.addEventListener("click",()=>{
  copyInput.select()
  document.execCommand("copy")
 copyInput.blur()
})

// range color end

// proposals start 
let ul = document.querySelector(".proposals  ul");
function addProposal(color){
  ul.innerHTML += `
  <li style="background: ${color};" data-type="color">
    <input type="text" value=${color}>
    <span id="copy" >copy</span>
    <span id="del" >del</span>
  </li>
  `
}

function removeProInStorge(color){
  let colorArray = JSON.parse(localStorage.color).proposals;
  console.log(colorArray)
  let result = [];
  if(colorArray.includes(color))
  colorArray.map((x)=>{
    if(x !== color){
      result.push(x)
    }
  })
  data.proposals = result
  data = JSON.stringify(data);
  localStorage.color = data;
}

function clearSpace(str){
  str = str.split("");
  let result = str.filter((x)=>{
    if(x !== " "){
      return x
      //console.log(x,1)
    }
  })
  return result.join("")
}


// validation of input popup
let popup = document.querySelector("#inputPopup")
let exceptAdd = document.querySelector("#inputPopup #exceptAdd");
let inputPopup = document.querySelector("#inputPopup  #inputColor");


exceptAdd.onclick = (event)=>{
  let inputValue = inputPopup.value;
  if(inputValue === ""){
    event.preventDefault()
  }else{
    let value = clearSpace(inputValue);
    
    addProposal(value);
    inputPopup.value = "";
   // set values in localStorage
   data = JSON.parse(localStorage.color);
   data.proposals.push(value);
   data = JSON.stringify(data);
   localStorage.color = data;
   // end of setting
   // displayed popup
   popup.style.display = "none";
   // displaying end
   displayButtons()
   //removeProposales()
   //to copy hexaColor 
   copyHexcolor()
   //to pervent keybaord up 
   pervrntKeybaordUp()
  }
}
//


function displayButtons(){
  let items = document.querySelectorAll("#colors li");
  items.forEach((item)=>{
    item.addEventListener("click",(e)=>{
      item.children[1].style.display = "block";
      item.children[2].style.display = "block";
      items.forEach((it)=>{
        if(item !== it){
          it.children[1].style.display = "none";
          it.children[2].style.display = "none";
        }
      })
    })
  })
  //console.log(items)
}

function removeProposales(){
  // to remove proposels
  let proposalsColors = document.querySelectorAll("#colors li");
  proposalsColors.forEach((color) => {
    color.children[2].onclick = () => {
      let colors = document.querySelector("#colors");
      colors.removeChild(color);
      console.log(color.children[0].value)
     //removeProInStorge(color.children[0].value)
    }
  })
}

function copyHexcolor(){
  // to copy hex color 
  let proposalsColors = document.querySelectorAll(".proposalsSliser #colors li ");
  
  proposalsColors.forEach((color) => {
  
    let hexColor = color.children[1];
    hexColor.onclick = () => {
      color.children[0].select();
      document.execCommand("copy");
      color.children[0].blur();
    }
  
  })
}

function pervrntKeybaordUp(){
  // to pervent keybaord up
  let hexColor = document.querySelectorAll("#colors li input");
  hexColor.forEach((text) => {
    text.onclick = () => {
      text.blur();
    }
  })
  //
}

// set proposals color  in display
data = JSON.parse(localStorage.color).proposals;
data.forEach((color)=>{
  addProposal(color);
})

//
displayButtons()
removeProposales()
copyHexcolor()
pervrntKeybaordUp()














// add event to main add button 
let mainAddButt = document.querySelector("#addColor");

mainAddButt.onclick = ()=>{
  popup.style.display = "flex";
  inputPopup.focus();
}
//

//to cancel inputPopup if visible 

let cancelPopup = document.querySelector("#cancel");
cancelPopup.onclick = ()=>{
  popup.style.display = "none";
}

//









let j = localStorage.color
console.log(JSON.parse(j))
//localStorage.clear()
