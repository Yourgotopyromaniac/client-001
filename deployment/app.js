var nickName = document.getElementById("header-skills");
nickName.addEventListener('animationiteration', ()=>{

    if(nickName.innerHTML==="UI/UX Designer")
    {
      setTimeout(()=> {nickName.innerHTML = "UX Researcher"}, 300) 
    }
  
    else if( nickName.innerHTML==="UX Researcher")
    {
      setTimeout(()=> {nickName.innerHTML= "Product Designer"}, 300)
      
    }
  
    else
    {
      setTimeout(()=>{nickName.innerHTML="UI/UX Designer"}, 300)
      
    }
});


var btnBg = document.getElementById("switch-canvas");
var horizon = document.getElementById("horizon");
var sunIcon = document.getElementById("sun");
var moonIcon = document.getElementById("moon");
var bodyBg = document.getElementById("bodyID");
var cover = document.getElementById("cover");

function bgChange()
{

  btnBg.classList.toggle('darkBg');
  horizon.classList.toggle("horizon-night");
  sun.classList.toggle("fa-sun-invisible")
  moon.classList.toggle("fa-moon-visible")
  bodyBg.classList.toggle("body-dark");
  cover.classList.toggle("cover-dark");

  if(document.body.classList.contains("body-dark"))
  {
    /*If true, set "darkTheme" and "enabled" as a key-value pair in the localStorage object*/
    localStorage.setItem("darkTheme", "enabled");
  }

  else
  {
    /*If false, means darkmode has not been enabled, set "darkTheme" and "disabled" as a key-value pair in the localStorage object*/
    localStorage.setItem("darkTheme", "disabled");
  }

};

/*Set the theme switch to it's corresponding position by checking if dark mode has been enabled using the added key-value pairs */
  if(localStorage.getItem("darkTheme") == "enabled")
  {
    bgChange();
  }






