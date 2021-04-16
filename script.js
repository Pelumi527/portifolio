window.addEventListener("load", function(){
    document.querySelector(".preloader").classList.add("opacity-0");

    setTimeout (function(){
      document.querySelector(".preloader").style.display="none";
    },1000)
})


const nav= document.querySelector('.navbar'),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection= document.querySelectorAll(".section"),
    totalSection=allSection.length; 

for (let i=0; i<totalNavList; i++){
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function(){
        //remove back section class
        removeBackSection();

        for(let i=0; i<totalSection; i++){
            allSection[i].classList.remove("back-section");
        }
        for(let j=0; j<totalNavList; j++){
            if(navList[j].querySelector("a").classList.contains('active')){
                //add back section class
                addBackSection(j);
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);

        if(window.innerWidth < 1200){
            asideSectionTogglerbtn()
        }
    })
}

function removeBackSection(){
    for(let i=0; i<totalSection; i++){
        allSection[i].classList.remove("back-section"); 
}}

function addBackSection(num){
    allSection[num].classList.add("back-section");
}

function showSection(element){
   for(let i=0; i<totalSection; i++){
       allSection[i].classList.remove("active");
   }
   const target = element.getAttribute("href").split("#")[1];
   document.querySelector("#"+target).classList.add("active")
}

function updateNav(element){
    console.log(element.getAttribute("href").split("#")[1])
}

document.querySelector(".hire-me").addEventListener("click", function(){
    const sectionIndex=this.getAttribute("data-section-index");
    showSection(this);
    updateNav(this);
    // removeBackSection();
    // addBackSection(sectionIndex);
})


const navTogglerbtn=document.querySelector(".nav-toggler"),
    aside= document.querySelector('.aside');

navTogglerbtn.addEventListener("click", asideSectionTogglerbtn)
function asideSectionTogglerbtn(){
    aside.classList.toggle("open");
    navTogglerbtn.classList.toggle("open");
    for(let i=0; i<totalSection; i++){
        allSection[i].classList.toggle("open");
    }
}