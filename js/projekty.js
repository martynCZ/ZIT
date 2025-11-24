const title = "Projekty";
const titleElement = document.getElementById("nadpis");

let i = 0;
const typing = () =>{
    if(i < title.length){
        titleElement.textContent += title[i];
        i++;
        setTimeout(typing, 200);
    }
    else{
        let visible = true;
        
    };
    }
typing();

