let navMobil = document.getElementById("navMobil");
let o = 0;
navMobil.style.display = "none";
const openMenu = () => {
    if(o == 0){
        navMobil.style.display = "block";
        o = 1;
    }
    else{
        navMobil.style.display = "none";
        o = 0;
    }
}