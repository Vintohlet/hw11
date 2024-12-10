const newUl = document.createElement("ul");
const newLi = document.createElement("li");
const newLi1 = document.createElement("li");
const newLi2 = document.createElement("li");
newLi.textContent = "Введение в DOM";
newLi1.textContent ="Создание элементов";
newLi2.textContent = "Изменение атрибутов";
newUl.append(newLi);
newUl.append(newLi1);
newUl.append(newLi2);
const info = document.getElementById("info");
info.append(newUl);

const newA = document.createElement("a");
newA.textContent ="Мой профиль в Linkedin/Instagram/другая любая соц.сеть";
newA.href ="ссылка на ваш профиль";
newA.target = "_blank";
const header = document.getElementById("header");
header.append(newA);

const newSection = document.createElement("section");
newSection.className = "dynamic";
const newH2 = document.createElement("h2");
newH2.textContent = "Обучение JavaScript";
const newP = document.createElement("p");
newP.textContent ="Динамическое создание элементов позволяет улучшить интерфейс пользователя";
newSection.append(newH2);
newSection.append(newP);
const main = document.getElementById("main");
main.prepend(newSection);

const h2 = info.querySelector("h2");
info.removeChild(h2);

const footer = document.querySelector("footer");
footer.innerHTML ="";