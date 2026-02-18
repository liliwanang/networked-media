

window.onload = () => {

let sun = document.getElementsByClassName("sun")[0]; 
let flower = document.getElementsByClassName("flower")[0]; 

    let tide1 = document.getElementsByClassName("tide1")[0]; 
    let tide2 = document.getElementsByClassName("tide2")[0]; 
    let tide3 = document.getElementsByClassName("tide3")[0]; 

    let tidePositions = [0, 0, 0]; 
    let tideSpeeds = [8, 14, 20]; 

let music = document.getElementsByClassName("music")[0]; 
music.play(); 
// i dont know why the music is not playing

/////////////////////////////////////////////////////////////////////////////

// sun—rotate (center)  (css transform-origin)

// tide—parallaxing 

// flowers — image—month 

// rain drop — array, every second loop array


// eg
    // setInterval (()=>{
    //         let date =new Date ()
    //         oneSpan [0].innerHTML = date.toLocaleTimeString();
    //         // change this part it "toLocakTimeString"
    //         console.log("happens");
    // },1000)
    
/////////////////////////////////////////////////////////////////////////////
setInterval(() => {
        let date = new Date(); 
        let hours = date.getHours(); 
        let minutes = date.getMinutes(); 
        let month = date.getMonth(); 

// sun
  let totalMinutes = (hours - 6) * 60 + minutes;

    // (6:00-18:00)
    if (totalMinutes < 0) totalMinutes = 0;
    if (totalMinutes > 720) totalMinutes = 720;

    // Each minute = 0.25 degrees 
    // (180 degrees / 720 minutes)
    // (40-140 degree --- 100 degree , 100/720 == 0.14 degrees)
    let rotation = totalMinutes * 0.14;
    sun.style.transform = `rotate(${rotation}deg)`;
       
     console.log("Sun rotation:", rotation);

// bg color 
    if (hours >= 7 && hours < 16) document.body.style.background = "#cbecff"; 
         else if (hours >= 5 && hours < 7) document.body.style.background = "#f8f6bc"; 
        else if (hours >= 16 && hours < 17) document.body.style.background = "#f7f492"; 
                        else if (hours >= 17 && hours < 18) document.body.style.background = "#f7bf92"; 
                else if (hours >= 18 && hours < 19) document.body.style.background = "#144691"; 
        else document.body.style.background = "#1d3557"; 

// seasons 
        if (month >= 2 && month <= 4) flower.src = "pics/spring.PNG"; 
        else if (month >= 5 && month <= 7) flower.src = "pics/summer.PNG"; 
        else if (month >= 8 && month <= 10) flower.src = "pics/fall.PNG"; 
        else flower.src = "pics/winter.PNG"; 
// tide
        let tides = [tide1, tide2, tide3]; 
        tides.forEach((tide, i) => {
            tidePositions[i] -= tideSpeeds[i]; 
            if (tidePositions[i] <= -window.innerWidth / 25) tidePositions[i] = 0; 
            tide.style.transform = `translateX(${tidePositions[i]}px)`; 
        });


    }, 1000); 
};
