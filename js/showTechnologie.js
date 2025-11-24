const sourceList = [...document.querySelectorAll("#list-technologie li")];
const listTechnologie = document.getElementById("list-technologie");
listTechnologie.innerHTML = "";
let j = 0;
let isVisible = false;

const showTechnologie = () => {
    console.log("test");
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

const zobrazeniNaStrance = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            toggleTechnologie();           
            zobrazeniNaStrance.disconnect();
        }
    });
}, {
    threshold: 0.2
})

zobrazeniNaStrance.observe(listTechnologie);