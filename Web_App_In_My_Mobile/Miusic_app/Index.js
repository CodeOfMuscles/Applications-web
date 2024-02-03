let header = document.querySelector("header");
let displayContainer = document.querySelector("#disContainer");
let disSongs = document.querySelector(".disSongs");
let disPlayLists = document.querySelector(".disPlayLists");
let toolsButts = document.querySelectorAll(".tools img")




// HEADER FUNCTION CONTAINER Start 
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
          <img src="${songInfoObject.songImg}" class="songImg">
          <div class="infoSong">
            <h3 class="imgName">${songInfoObject.songName.length<25?song:songInfoObject.songName.slice(0,25)+". . ."}</h3>
            <span class="info"> ${songInfoObject.artName}</span>
          </div>
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
    `
  })
}

function randomImages(arrayPathsImages){
  let imgName = arrayPathsImages[Math.floor(Math.random()*arrayPathsImages.length)];
  let bacePath = "/ZMusic Player/images/songs images/";
  return bacePath + imgName;
}

function generateImgName() { //this function is temporary to wait for api
  let arr = [];
  for (let i = 1; i < 19; i++) {
    arr.push(`ps${i}.jpg`)
  }
  return arr;
}


/*
worning the three last functions
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

function songsFottorSec() {
  let buttonsOfBar = document.querySelector(".buttonsOfBar");
  buttonsOfBar.innerHTML = `
    <button id="songs" onclick="songsHandel()">
      Songs
    </button>
    <button id="songsPlayLists" onclick="songsPlayListsHandel()">
      Playlists
    </button>
    `
  //songsHandel();
  let fottorButts = document.querySelectorAll(".option");
  fottorButts.forEach((butt) => {
  
    if (butt.classList[1] === "songsOpt") {
      butt.style.color = "deepskyblue";
    } else {
      butt.style.color = "#fff";
    }
  });
  
  disContainer.style.left = `0px`;
}
// I AM HERE 
function vediosFottorSec(ev) {
  let buttonsOfBar = document.querySelector(".buttonsOfBar");
  
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
}

function moreFottorSec() {
  let moreButt = document.querySelector(".moreOpt")
  let aboutSec = document.querySelector(".more");
  
  aboutSec.style.cssText = `
  top:0px;
  `
  console.log("done")
  
}


// FOTTOR FUNCTION CONTAINER END

displaySongs(["/ZMusic Player/songs/يا ليته يعلم، فايا يونان Ya Laytahou Yaalam [Official Video] Faia(MP3_160K).mp3","/ZMusic Player/songs/أجمل أغاني لينا شماميان  Best Songs Lena Chamamyan(MP3_320K).mp3","/ZMusic Player/songs/Indila - Ainsi Bas La Vida (Lyrics_Letra)(MP3_160K).mp3","/ZMusic Player/songs/Lofi Fruits Music -Gangsta_s Paradise -  [Extended × Lofi  × Slowed × Reverb](MP3_160K).mp3","/ZMusic Player/songs/يا ليته يعلم، فايا يونان Ya Laytahou Yaalam [Official Video] Faia(MP3_160K).mp3","/ZMusic Player,,,,,/songs/أجمل أغاني لينا شماميان  Best Songs Lena Chamamyan(MP3_320K).mp3","/ZMusic Player/songs/Indila - Ainsi Bas La Vida (Lyrics_Letra)(MP3_160K).mp3","/ZMusic Player/songs/Lofi Fruits Music -Gangsta_s Paradise -  [Extended × Lofi  × Slowed × Reverb](MP3_160K).mp3","/ZMusic Player/songs/يا ليته يعلم، فايا يونان Ya Laytahou Yaalam [Official Video] Faia(MP3_160K).mp3","/ZMusic Player/songs/أجمل أغاني لينا شماميان  Best Songs Lena Chamamyan(MP3_320K).mp3","/ZMusic Player/songs/Indila - Ainsi Bas La Vida (Lyrics_Letra)(MP3_160K).mp3","/ZMusic Player/songs/Lofi Fruits Music -Gangsta_s Paradise -  [Extended × Lofi  × Slowed × Reverb](MP3_160K).mp3"]);




//co!nsole.log(so)
//console.log(JSON.parse(ob))

