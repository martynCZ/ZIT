const title = "Základy informačních technologií";
const titleElement = document.getElementById("nadpis");


const sourceList = [...document.querySelectorAll("#list-technologie li")];

const listTechnologie = document.getElementById("list-technologie");
listTechnologie.innerHTML = "";

let j = 0;
let isVisible = false;

const showTechnologie = () => {
    if (j < sourceList.length) {
        const item = sourceList[j].cloneNode(true);
        item.classList.add("tech-item");
        listTechnologie.appendChild(item);

        setTimeout(() => item.classList.add("show"), 20);

        j++;
        setTimeout(showTechnologie, 150);
    }
};

const hideTechnologie = () => {
    const items = document.querySelectorAll("#list-technologie .tech-item");
    let i = items.length - 1;

    const hideStep = () => {
        if (i >= 0) {
            items[i].classList.remove("show");

            setTimeout(() => {
                items[i].remove();
                i--;
                hideStep();
            }, 150);
        } else {
            j = 0;
        }
    };
    hideStep();
};
const toggleTechnologie = () => {
    if (isVisible) {
        hideTechnologie();
    } else {
        showTechnologie();
    }
    isVisible = !isVisible;
};


let i = 0;
const typing = () =>{
    if(i < title.length){
        titleElement.textContent += title[i];
        i++;
        setTimeout(typing, 200);
    }
    else{
        let visible = true;
        setInterval(() => {
        titleElement.textContent = visible
            ? title + " "
            : title + "|";
        visible = !visible;
    }, 500);
    }
}
typing();

const pokeName = document.getElementById("pokeName");
const pokeHP = document.getElementById("pokeHP");
const pokeImg = document.getElementById("pokeImg");
const pokeInfo = document.getElementById("pokeInfo");
const pokeNum = document.getElementById("pokeNum");
const pokeHT = document.getElementById("pokeHT");
const pokeWT = document.getElementById("pokeWT");
const pokeAbility = document.getElementById("pokeAbility");
const pokeAbilityDmg = document.getElementById("pokeAbilityDmg");
const pokeAbilityInfo = document.getElementById("pokeAbilityInfo");

const pokeApi = () =>{
    const id = Math.floor(Math.random() * 1010) + 1;
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(response => response.json())
        .then(data => {
            pokeName.innerText = data.name;
            pokeHP.innerText = data.stats[0].base_stat;
            pokeImg.src = data.sprites.other.home.front_default;
            pokeNum.innerText = id;
            pokeHT.innerText = data.height;
            pokeWT.innerText = data.weight;

            const randomMove = data.moves[Math.floor(Math.random() * data.moves.length)];
             fetch(randomMove.move.url)
                .then(res => res.json())
                .then(moveData => {
                    pokeAbility.innerText = moveData.name;
                    pokeAbilityDmg.innerText = moveData.power || "";
                    pokeAbilityInfo.innerText = moveData.flavor_text_entries[68].flavor_text || "";
            });
        })
}
pokeApi();

