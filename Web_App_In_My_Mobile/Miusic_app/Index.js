let header = document.querySelector("header");
let displayContainer = document.querySelector("#disContainer");
let disSongs = document.querySelector(".disSongs");
let disPlayLists = document.querySelector(".disPlayLists");
let toolsButts = document.querySelectorAll(".tools img");
let moreSec = document.querySelector(".more");// select more section .

// Configuration of localstorage Start
if (!localStorage.miusicApp){
  miusicApp = new Object({
    mode:"songs",
    songsHistory:[],
    videosHistory:[],
    songsFavorites:[],
    videosFavorites:[],
    currentSong : {
      songUrl : "/ZMusic Player/songs/جميع اغاني واناشيد الساروت.mp3",
      image : "",
      name : "",
      deurarion : 0,
    }
  });
  jsonObject = JSON.stringify(miusicApp);// to convert js object to json 
  localStorage.miusicApp = jsonObject;// add the configuration  to localstorage
}
// Configuration of localstorage End

//console.log(localStorage.miusicApp)
//localStorage.clear()


// HEADER FUNCTION CONTAINER Start

// function  to transfer to searching section 
function SearchHandel() {
  // function to convert the header section to search header .
  let searchButt = document.querySelector(".fa-magnifying-glass");
  // we stoped here 
  console.log(searchButt)
  setTimeout(()=>{
    
  },1000)
  header.classList.remove("Header");
  header.classList.add("searchHeader")
  let searchHeaderContent = `
  <img src="/ZMusic Player/images/icons8-arrow-30.png" onclick="backToHandel()">
  <input type="text" id="searchInput" placeholder="Search">
  `; // change the inner html of header to search inner html .
  let searchHeader = document.querySelector(".searchHeader") //we reselect again to don't make mistakes.
  searchHeader.innerHTML = searchHeaderContent;
  searchHeader.children[1].focus() //to focus on search field .
  displayContainer.children[0].style.display = "none";
  displayContainer.children[1].style.display = "none";
}

// function to change from themes to songs or videos
function backToHandel() {
  let headerInnerHtml = `
  <h1>AHMED.music</h1>
    <div class="features">
     <div class="tools">
      <img id="searchButt" src="/ZMusic Player/images/icons8-search-30 .png" onclick="SearchHandel()"> <img id="bacButt" src="/ZMusic Player/images/icons8-palette-24.png" onclick="designBac()">
     </div>
     <div class="buttonsOfBar">
      <button id="songs" onclick="songsHandel()">Songs</button> <button id="playLists" onclick="playListsHandel()">Playlists</button>
     </div>
    </div>
  `;
  let searchHeader = document.querySelector(".searchHeader");
  searchHeader.innerHTML = headerInnerHtml
  searchHeader.classList.remove("searchHeader");
  searchHeader.classList.add("Header");

  displayContainer.children[0].style.display = "block";
  displayContainer.children[1].style.display = "block";
}

// function to transfer to songs section 
function songsHandel(){
  document.getElementById("songs").style.cssText = `
              color:deepskyblue;
              border-bottom:3px solid deepskyblue;
              `
  document.getElementById("songsPlayLists").style.cssText = `
            color: #CAC5C5;
            border-bottom: 3px solid transparent;
            `
  displayContainer.style.left = "0px";
  console.log("done")
}

// function to transfer to playlists section 
function songsPlayListsHandel(){
  document.getElementById("songsPlayLists").style.cssText = `
          color:deepskyblue;
          border-bottom: 3px solid deepskyblue;
          `
  document.getElementById("songs").style.cssText = `
          color: #CAC5C5;
          border-bottom: 3px solid transparent;
          `
  disContainer.style.left = "-410px";
}
// HEADER FUNCTION CONTAINER END


//             ##
//           ######
//             ## 


// MAIN FUNCTION CONTAINER START


// function to load the songs data in songs section NOTE :this function is temporary for api
function displaySongs(songsArray){
  //console.log(disSongs)
  
  function getSongName(song){
    let lastPosition = song.split("/").length -1;
    return song.split("/")[lastPosition];
  }
  
  songsArray.forEach((song)=>{
    //console.log(song);
    let songName = getSongName(song)
    let songInfoObject = {
      songName : songName,
      songImg : randomImages(generateImgName()),
      artName : "Unknowns",
    }
    let songInfoJson =JSON.stringify(songInfoObject);
    document.querySelector(".disSongs").innerHTML += `
    
        <div class="song" data='${songInfoJson}'>
          <div class="songButt">
            <img src="${songInfoObject.songImg}" class="songImg">
            <div class="infoSong">
              <h3 class="imgName">${songInfoObject.songName.length<25?song:songInfoObject.songName.slice(0,25)+". . ."}</h3>
                        
              <span class="info"> ${songInfoObject.artName}</span>
            </div>
            
          </div>
          
          <i class="fa-solid fa-ellipsis-vertical"></i>
          
        </div>
    `
  })
}
// temporary function
function randomImages(arrayPathsImages){
  let imgName = arrayPathsImages[Math.floor(Math.random()*arrayPathsImages.length)];
  let bacePath = "/ZMusic Player/images/songs images/";
  return bacePath + imgName;
}
// temporary function
function generateImgName() { //this function is temporary to wait for api
  let arr = [];
  for (let i = 1; i < 19; i++) {
    arr.push(`ps${i}.jpg`)
  }
  return arr;
}


/*
worning the three last functions
"displaySongs , randomImages , generateImgName"
want some edits  because there is not 
api the next funtion is soultion 
with api 
you must remove the three last
functions and instade of with the next function (displaySongs) who takes object .

take tow array or object
--nameInfo
--songPathdisplaySongs
--imgPath

function displaySongs(songsObject) {
  //console.log(disSongs)

  songObject.forEach((song) => {
    //console.log(song);
    let songName = getSongName(song)
    document.querySelector(".disSongs").innerHTML += `
        <div class="song">
          <img src="${randomImages(generateImgName())}" class="songImg" data-song="${song}">
          <div class="infoSong">
            <h3 class="imgName">${songName.length<22?song:songName.slice(0,22)+". . ."}</h3>
            <span class="info"> i don't no</span>
          </div>
          <img src="/ZMusic Player/images/icons8-menu-vertical-32.png" class="imgOpt">
        </div>
    `
  })
}

last worning I wouldn't test the function .
*/

// function to copy phon number
function copyPhonNum() {
  let copyButt = document.querySelector(".copyButt"); //select copy_button
  let inputText = document.querySelector("#inputText"); // select input element 

  inputText.select(); // select the text of input 
  document.execCommand("copy"); //copy the select 
  inputText.blur(); // dont focus
  inputText.style.color = "rgb(55,  202.5,  25,  .85)"; // change color to alert the copy done
  setInterval(() => { // to restore the the basic color after half minute
    inputText.style.color = "black"; // black color
  }, 500)

}

// function to display history
function displayHistoryList() {
  console.log("list");
  lightReferenceButts(event.target)// use this function to light thenes button when user click it.
  let mode = JSON.parse(localStorage.miusicApp).mode;//to get mode value to make condition on it 
  if (mode === "songs"){
    displayContainer.style.left = `${5*-410}px`// to change to songs section when clint click on history button .
    moreSec.style.cssText = `
        top: var(--mainHeight);
        ` // hide the more section
    
  }else if (mode === "videos"){
    displayContainer.style.left = `${6*-410}px`// to change to videos section when clint click on history button .
    moreSec.style.cssText = `
        top: var(--mainHeight);
        ` // hide the more section
  }
  
}

// function to light reference option buttons 
function lightReferenceButts(targetEle){
  let referenceButt = document.querySelectorAll(".reference .opt"); // select all refrence option buttons
  referenceButt.forEach((ele)=>{
    if(ele === targetEle){
      ele.style.cssText =`
      background:#1EE1B494;
      border-radius:5px;
      `// to change background and color font when user click specify reference button
      setInterval(()=>{
        ele.style.cssText = `
        background : transparent;
        border-radius:0
        `// get back it the basic background and color after 200 ms
      },20)
    }
  })
}

// function to change theme.
function changeThemeOfMreSec(){
  setInterval(()=>{
    designBac()// call designBac that coded befor ande used it in header in the same thing
  },20)// use set intervel to change to themes section after 100 ml
  lightReferenceButts(event.target)// use this function to light thenes button when user click it.
}

function designBac(){
  let mainApp = document.querySelector(".musicApp");
  mainApp.style.cssText = `
  transform: scale(.7,.75);
  border : 5px solid #fff;
  border-radius:15px;
  `
  document.body.style.cssText = `
  background: url("/ZMusic Player/images/mainBackground.jpg");
  background - size: cover;
  background - attachment: scroll;
  background - position: center center;
  `
}
// MAIN FUNCTION CONTAINER END


//             ##
//           ######
//             ## 



// FOTTOR FUNCTION VONTAINER START
function videoHandel() {
  console.log("videos")
  document.getElementById("videos").style.cssText = `
                    color:deepskyblue;
                    border-bottom:3px solid deepskyblue;
                    `
  document.getElementById("videoPlayLists").style.cssText = `
                  color: #CAC5C5;
                  border-bottom: 3px solid transparent;
                  `
  displayContainer.style.left = `${3*-410}px`;
}
function videoPlayListHandel() {
  document.getElementById("videoPlayLists").style.cssText = `
                color:deepskyblue;
                border-bottom: 3px solid deepskyblue;
                `
  document.getElementById("videos").style.cssText = `
                color: #CAC5C5;
                border-bottom: 3px solid transparent;
                `
  disContainer.style.left = `${4*-410}px`;
}

function songsModeFottorSec() {
  let buttonsOfBar = document.querySelector(".buttonsOfBar"); 
  let fottorButts = document.querySelectorAll(".option");// select all fottor buttons
  buttonsOfBar.innerHTML = `
      <button id="songs" onclick="songsHandel()">
        Songs
      </button>
      <button id="songsPlayLists" onclick="songsPlayListsHandel()">
        Playlists
      </button>
      `// restore songs buttons of the header
  fottorButts.forEach((butt) => {// loop in footor buttons to change to songs sections and change colors of button
  
    if (butt.classList[1] === "songsOpt") {// condition if the user click currect button
      butt.style.color = "deepskyblue";//change color
    } else {// else buttons  that change to diffrint color
      butt.style.color = "#fff";// change color
    }
  });
  
  disContainer.style.left = `0px`;// move the main container of sections to lift with 0 px
  moreSec.style.cssText = `
  top: var(--mainHeight);
  `// hide the more section
  dataLS = JSON.parse(localStorage.miusicApp)//get data object from localstorage
  dataLS.mode = "songs";//chande mode value in data object to songs
  
  localStorage.miusicApp = JSON.stringify(dataLS);// reset new data object to localstrage
}
// I AM HERE 
function vediosModeFottorSec(ev) {
  let buttonsOfBar = document.querySelector(".buttonsOfBar");// select buttons container of bar.
  buttonsOfBar.innerHTML = `
      <button id="videos" onclick="videoHandel()">
        Video
      </button>
            <button id="videoPlayLists" onclick="videoPlayListHandel()">
          Playlists
      </button>
      `
  let fottorButts = document.querySelectorAll(".option");
  fottorButts.forEach((butt)=>{
    
    if(butt.classList[1] === "videoOpt"){
      butt.style.color = "deepskyblue";
    }else{
      butt.style.color = "#fff";
    }
  });
  
  disContainer.style.left = `${3*-410}px`;
  moreSec.style.cssText = `
    top: var(--mainHeight);
    ` // hide the more section
  dataLS = JSON.parse(localStorage.miusicApp) //get data object from localstorage
  dataLS.mode = "videos"; //chande mode value in data object to videos
  
  localStorage.miusicApp = JSON.stringify(dataLS); // reset new data object to localstrage
}

function moreFottorSec() {
  let moreButt = document.querySelector(".moreOpt")
  let aboutSec = document.querySelector(".more");
  
  aboutSec.style.cssText = `
  top:0px;
  `
  console.log("done")
  
}

//function to dedicat the mode sonds or videos on localStorage
function mode(){
  let mode = JSON.parse(localStorage.miusicApp).mode;//to get current mode
  
  if(mode === "songs"){// condition if the mode is songs use songsMode
    songsModeFottorSec();
  }else if(mode === "videos"){// condition if the mode is videos use videosMode
    vediosModeFottorSec();
  }
}

// function to move name song
function moveText(songName) {
  let movmentName = document.querySelector("#movmentName");
  let movmentText = movmentName.parentElement;// parent element
  
  movmentName.innerHTML = `${songName} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  ${songName}`
  
  let movTextWidth = getComputedStyle(movmentText).getPropertyValue("width"); // to get the parent element or movment text width
  let movNameWidth = getComputedStyle(movmentName).getPropertyValue("width"); // to get child element or mivment name width
  
  setInterval(()=>{// loop on the movment 
    
    let left = getComputedStyle(movmentName).getPropertyValue("left");// get the left movment name element value
    
    if(left === "0px"){
      
      movmentName.style.left = `-${parseInt(movNameWidth) - parseInt(movTextWidth) }px`;// make the movment move to left firaction withe movNameWidth  - movTextWidth value 
      
    }else if(left === `-${parseInt(movNameWidth) - parseInt(movTextWidth)}px`){
      
      movmentName.style.left = `0px`;// when left value of movName become target width value set new left value
    }
  },2000)
}

// functiin to play songs
function playSong(param) {
  console.log("ahme");
}

// FOTTOR FUNCTION CONTAINER END

displaySongs(["/ZMusic Player/songs/يا ليته يعلم، فايا يونان Ya Laytahou Yaalam [Official Video] Faia(MP3_160K).mp3","/ZMusic Player/songs/أجمل أغاني لينا شماميان  Best Songs Lena Chamamyan(MP3_320K).mp3","/ZMusic Player/songs/Indila - Ainsi Bas La Vida (Lyrics_Letra)(MP3_160K).mp3","/ZMusic Player/songs/Lofi Fruits Music -Gangsta_s Paradise -  [Extended × Lofi  × Slowed × Reverb](MP3_160K).mp3","/ZMusic Player/songs/يا ليته يعلم، فايا يونان Ya Laytahou Yaalam [Official Video] Faia(MP3_160K).mp3","/ZMusic Player,,,,,/songs/أجمل أغاني لينا شماميان  Best Songs Lena Chamamyan(MP3_320K).mp3","/ZMusic Player/songs/Indila - Ainsi Bas La Vida (Lyrics_Letra)(MP3_160K).mp3","/ZMusic Player/songs/Lofi Fruits Music -Gangsta_s Paradise -  [Extended × Lofi  × Slowed × Reverb](MP3_160K).mp3","/ZMusic Player/songs/يا ليته يعلم، فايا يونان Ya Laytahou Yaalam [Official Video] Faia(MP3_160K).mp3","/ZMusic Player/songs/أجمل أغاني لينا شماميان  Best Songs Lena Chamamyan(MP3_320K).mp3","/ZMusic Player/songs/Indila - Ainsi Bas La Vida (Lyrics_Letra)(MP3_160K).mp3","/ZMusic Player/songs/Lofi Fruits Music -Gangsta_s Paradise -  [Extended × Lofi  × Slowed × Reverb](MP3_160K).mp3"]);




// last apdate Web,Feb,14