function playPause(tag){
				var au=document.getElementById("musicPlayer");
				var musicImg=document.getElementsByClassName("musicBtn")
				if(au.paused){
					au.play();
					musicImg[1].style.display="none";
					musicImg[0].style.display="block";
				}
				else{
					au.pause();
					musicImg[0].style.display="none";
					musicImg[1].style.display="block";
				}
			}