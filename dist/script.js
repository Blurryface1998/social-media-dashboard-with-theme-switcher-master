"use strict";var radioBG=document.getElementById("radioBG"),radioBtn=document.querySelectorAll("input[type=radio]"),darkBtn=document.getElementById("darkM"),lightkBtn=document.getElementById("lightM"),toggleBtn=document.getElementById("toggleBtn"),toggle=document.getElementById("toggle"),body=document.getElementById("body"),header=document.getElementById("headerId"),sectionH2=document.getElementById("overviewId");toggle.addEventListener("mouseover",(function(){radioBG.classList.add("hover")})),toggle.addEventListener("mouseleave",(function(){radioBG.classList.remove("hover")}));for(var i=0;i<radioBtn.length;i++)radioBtn[i].addEventListener("click",(function(){darkBtn.checked?(body.classList.add("dark"),radioBG.classList.add("darkRadioBG"),toggleBtn.classList.add("darkToogleBtn"),transitionE()):darkBtn.checked||(body.classList.remove("dark"),radioBG.classList.remove("darkRadioBG"),toggleBtn.classList.remove("darkToogleBtn"),transitionE())}));function transitionE(){var e=document.querySelector("h1"),t=document.querySelectorAll("h2"),o=document.querySelectorAll("h3"),n=document.querySelectorAll(".card"),d=getComputedStyle(document.documentElement).getPropertyValue("--transition");body.style.transition=d,header.style.transition=d,e.style.transition=d;for(var r=0;r<t.length;r++)t[r].style.transition=d;for(var a=0;a<o.length;a++)o[a].style.transition=d;for(var i=0;i<n.length;i++)n[i].style.transition=d}
//# sourceMappingURL=script.js.map