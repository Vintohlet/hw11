document.title ="Ruslan Tuleuov";
const head = document.getElementById("header");
const header2 = head.querySelector("h1");
 header2.textContent = "Изучение JavaScript";

const menus = document.querySelectorAll(".menu-link");
for(menu of menus){
    console.log(menu.textContent);
}

const featureslist = document.querySelector(".features-list");
const features = featureslist.querySelectorAll("li");
features[1].innerHTML ="Поддержка <strong>API</strong>";