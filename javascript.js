//pour un défilement fluide du site//
const header = document.querySelector("header");

window.addEventListener("scroll",() =>{
    if (window.scrollY > window.innerHeight * 0.1){
     header.style.top="0";
} else {
    header.style.top ="-100px";
} 
});

//pour les boutons (intéractivité) dans la partie "Qui suis-je?"//
const buttons =document.querySelectorAll(".bio-nav button"); 
const items = document.querySelectorAll(".bio-item");

buttons.forEach(btn =>{
    btn.addEventListener("click",()=>{
        const target = btn.dataset.target;

        items.forEach(item => item.classList.remove("active"));
        document.getElementById(target).classList.add("active");

        buttons.forEach(b =>b.classList.remove("active"));
        btn.classList.add("active");
    });
});