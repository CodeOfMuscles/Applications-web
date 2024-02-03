// to append content of buttons 
//localStorage.setItem("stuts","light")
let buttons = document.querySelectorAll("button");
let lis = ["CL","DEL","%","÷","7","8","9","×","4","5","6","-","1","2","3","+","0",".","moon","="]
let num = 0
let booleanVOfMoon = true
buttons.forEach(function(ele){
  if(ele === buttons[18]){
    ele.innerHTML = `
    <img src="/white calculator /moon.png" width="20px"> 
    `
    ele.setAttribute("data","moon")
    num += 1
  }else{
    ele.textContent = lis[num]
    ele.setAttribute("data",`${lis[num]}`)
    num += 1
    
  }
})


// end 

// to appen the opration in feild
let result = document.querySelector("input");
result.value = ""

buttons.forEach(function(ele){
  ele.onclick = (e)=>{
    let valueOfEle = ele.getAttribute("data");

    if(valueOfEle === "CL"){
      
      let valueI = result.value;
      
      if(valueI !== ""){
        result.value = valueI.slice(0,valueI.length -1)
      }
      
    }else if(valueOfEle === "moon"){
      let inp = document.querySelector("input");
      let color = "#121212";
      let body = document.body;
      let container = document.querySelector(".container");
      let moImg = buttons[18]
      if(booleanVOfMoon){
        
        body.style.background = color
        
        inp.style.background = color
        inp.style.boxShadow = `
              inset 5px 5px 12px rgb(0,0,0,0.3),inset -5px -5px 12px rgb(0,0,0,0.3)
              `
        inp.style.color = "#fff"
        
        container.style.cssText = `
              box-shadow :inset 5px 5px 12px rgb(255,255,255,0.06),
              inset -5px 5px 12px rgb(255,255,255,0.06),
              
              5px 5px 12px rgb(0,0,0,0.6 ), 
              -5px -5px 12px rgb(255,255,255,0.03);
              background:${color};
              `
        
        //console.log(lis[18])
        
        
        buttons.forEach((e) => {
          e.style.background = color
          e.style.color = "#fff"
          e.style.boxShadow = `
                5px 5px 12px rgb(0,0,0,0.6),
                -5px -5px 12px rgb(255,255,255,0.06)
                `
        });
        moImg.children[0]
        moImg.src = "moon1.png"
        booleanVOfMoon = false
        localStorage.setItem("stuts","dark");
        
      }else {
        let mainCol = "#ecf0f3";
        
        
        inp.style.cssText =`
        box-shadow: inset 5px 5px 12px rgba(0, 0, 0, 0.06),
        inset -5 px -5px 12px rgba(255, 255, 255, 0.8),
        inset 5px 5px 12px 5px rgba(0, 0, 0, 0.06);
        background: #ecf0f3;
        `
        
        container.style.cssText =`

        box-shadow: inset -5px -5px 12px rgba(255, 255, 255, .9),
        inset 5px 5px 12px rgba(255, 255, 255, 0.06),
        inset -5px -5px 12px rgba(0, 0, 0, 0.6),
        inset 5px 5px 12px rgba(255, 255, 255, 0.6),
        10px 10px 12px rgba(0, 0, 0, 0.06),
        -5px -5px 12px rgba(255, 255, 255, 0.9);
        background = ${mainCol}
        `
        body.style.background = mainCol
        
        
        buttons.forEach((el)=>{
          el.style.cssText =`
          box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.16), -5px -5px 5px rgba(255, 255, 255, 0.8);
          background: ${mainCol};
          `
        })
        
        booleanVOfMoon = true;
        localStorage.setItem("stuts","light")
      }
    
    }else if(valueOfEle === "DEL"){
      result.value = ""
    
    }else {
      
      if(valueOfEle === "="){
        let newResult = ""
        // to replace opraters 
        result.value = result.value.replace("×","*");
        
        result.value = result.value.replace("÷","/");
        
        result.value = eval(result.value)
      }else{
         
        result.value += valueOfEle
      }
    }
    
  }
})




// the end of code in calculater 

// to stor stuts in local storage
let stuts = localStorage.getItem("stuts");
  
if(stuts){
  
  if(stuts === "light"){
    null
  }else if(stuts === "dark"){
    buttons[18].click()
  }
}

