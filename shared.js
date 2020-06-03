let dropdownList = document.querySelector(".nav-bar__items");
let toggleButton = document.querySelector(".toggle-button");
let navBar = document.querySelector(".nav-bar");
let header = document.querySelector(".header");
let about = document.getElementById("about");
let changeLanguage = document.getElementById("change-language");
let translationElements = document.getElementsByClassName("translation");

const translation = {
  ru: [
    "Елизавета Кучерова",
    "Обо мне",
    "Стек технологий",
    "Сертификаты",
    "Проекты",
    "Контакты",
    "Change language",
    "Обо мне",
    `Добрый день, я фронтенд разработчик из Москвы. Интерес к технологиям, желание творить и возникшая в прошлом потребность
    создать сайт, привели меня в мир веб-разработки. Мой путь к программированию стартовал в 2018 году, с началом обучения в 
    университете Mail.ru, `,
    `Вскоре после этого началась самостоятельная работа над 
    проектами.`,
    `Я создаю сайты с применением техник адаптивной верстки и понятным JavaScript кодом, написанным с использованием
    стандарта ES6. Среди фреймворков неплохо разбираюсь в React.`,
    `В ближайшем будущем я планирую глубже изучить Node.js для работы с
    бэкэндом.`,
    `В свободное время, в основном, практикуюсь в
    написании кода (работая над каким-то из своих проектов или решая задачи на `,
    `), либо же занимаюсь спортом или играю в видеоигры.`,
    `Скачать резюме`,
    "Стек технологий",
    "Сертификаты",
    `Сертификат о прохождении курса FreeCodeCamp. Адаптивная верстка.`,
    `Сертификат о прохождении курса FreeCodeCamp. Алгоритмы и структуры данных JavaScript.`,
    `Сертификат о прохождении курса GeekBrains. HTML&CSS.`,
    `Сертификат о прохождении курса GeekBrains. Алгоритмы и структуры данных на PHP.`,
    `Сертификат о прохождении курса GeekBrains. Базовый курс JavaScript.`,
    `Сертификат о прохождении курса GeekBrains. Введение в Git.`,
    `Сертификат о прохождении курса GeekBrains. Командая разработка.`,
    `Сертификат о прохождении курса GeekBrains. Компьютерые сети.`,
    `Сертификат о прохождении курса GeekBrains. Профессиональная верстка.`,
    `Сертификат о прохождении тестирования GeekBrains. HTML&CSS. Сложный уровень.`,
    `Сертификат о прохождении тестирования GeekBrains. JavaScript. Начальный уровень.`,
    "Проекты",
    `Полностью адаптивный лэндинг ресторана, созданный в образовательных целях. 
    Основные технологии, использованные при создании проекта, включают HTML5, CSS3, Sass и vanilla js.`,
    `ToDo List, как и любое приложение подобного типа, позволяет
    пользователям создавать задачи, удалять их, отмечать
    выполненные. Последние сохраняются при отметке и далее их можно проверить в соответствующей вкладке. 
    Приложение создано на базе React, авторизация и хранение данных осуществляются с помощью Firebase.
    Также, при создании использовались Sass и библиотека React
    Router.`,
    `Проект в работе.`,
    `GameSearch - это приложение, созданное для поиска игр. 
    Пользователи могут перейти на соответствующую вкладку, и
    фильтровать игры по жанрам, платформам, рейтингу или
    популярности, или же просто искать по названию. Наверху главной
    страницы из 50 наиболее популярных игр загружается информация по одной, случайно выбранной. 
    Ниже расположен список игр с
    высоким рейтингом (в будущем я планирую написать алгоритм,
    который отображал бы игры, подходящие по интересам пользователя).
    При клике на игру осуществляется переход на страницу, содержащую подробную информацию о ней.
    При регистрации на сайте, пользователю открывается доступ к новым функциям, таким как
    возможность проставить каждой игре рейтинг и
    сохранить игру в папку, которые также может создавать сам
    пользователь. А на странице профиля имеется возможность изменить
    фото и логин.`,
    `Данное приложение создано с помощью IGDB API. В процессе я
    столкнулась с необходимостью подключить cors-прокси на Heroku для
    обхода cors-policy. С этим может быть связано долгое время
    загрузки приложения, прошу прощения за доставленные неудобства.`,
    `При создании использовались React, Redux, и Firebase.`,
    "Контакты",
    `Скачать резюме`,
    "Елизавета Кучерова",
  ],
  en: [
    "Elizaveta Kucherova",
    "About me",
    "Technologies",
    "Certificates",
    "Projects",
    "Contacts",
    "Изменить язык",
    "About me",
    `Hi, I'm a self-taught frontend developer from Moscow. Interest in technology, the desire 
    to create and the need to make a website in the past led me to the world of web programming. 
    The path into the web began in 2018 when I decided to start studying at Mail.ru university, `,
    `Soon after that, I began to work at some of my projects.`,
    `I create websites using adaptive web-design techniques and clean JavaScript code, written with ES6 standard. 
    Also, I like to work with React.`,
    `In the nearest future, I plan to study deeper Node.js, for building backend.`,
    `In my free time, you can find me practice at coding (I can work on some of my pet-projects or take the challenge at `,
    `), or do sport, or play video games.`,
    `Download resume`,
    "Technologies",
    "Certificates",
    "FreeCodeCamp сourse сertificate. Responsive web design.",
    `FreeCodeCamp сourse сertificate. JavaScript algorithms and data
    structures.`,
    `GeekBrains сourse сertificate. HTML&CSS.`,
    `GeekBrains сourse сertificate. PHP algorithms and data
    structures.`,
    `GeekBrains сourse сertificate. Basic JavaScript.`,
    `GeekBrains сourse сertificate. Introduction to Git.`,
    `GeekBrains сourse сertificate. Team development.`,
    `GeekBrains сourse сertificate. Computer networks.`,
    `GeekBrains сourse сertificate. Professional layout.`,
    `GeekBrains test сertificate. HTML&CSS. Hard level.`,
    `GeekBrains test сertificate. JavaScript basic.`,
    "Projects",
    `It's a fully responsive web application made for educational purposes. 
    The primary technologies involved in this project include HTML5, CSS3, Sass, and vanilla js.`,
    `ToDo List is a web application similar to any todo list. Users can create tasks, delete them, and mark completed. 
    Also, users can check the completed tasks. The app was created using React.
    Authorization and storage data was made with Firebase. For making the application was also used Sass and React Router library.`,
    `Project still in work.`,
    `GameSearch is a web application, made for searching for different games. Users can filter games by genres, 
    platforms, rating, or popularity, or just filter by title. On top of the main
    page, of the 50 most popular games are loaded with information on one randomly selected. 
    On the bottom - a list of games, with high rating (In future I plan to write 
    an algorithm, which would recommend users games, according to their taste). 
    When users click on a game, they go to a page containing detailed information about it. When users signs up, 
    new functions are opening for him, such as - 
    rating games and adding them to folders, which can also be created independently. On the profile page, the 
    user can also change the photo and name.`,
    `This application made with IGDB API. Also, I was faced with the need to add cors-proxy on Heroku, for cors-policy. 
    This leads to long page loads, I'm sorry for the inconveniences.`,
    `React, Redux, and Firebase used for building this app.`,
    "Contacts",
    `Download resume`,
    "Elizaveta Kucherova",
  ],
};

for (let i = 0; i < translationElements.length; i++) {
  translationElements[i].textContent = translation.ru[i];
}

toggleButton.addEventListener("click", (e) => {
  if (dropdownList.classList.contains("open")) {
    dropdownList.style.animation =
      "disappearance 0.2s cubic-bezier(0.2, 0.48, 0.76, 0.29)";
    navBar.style.animation = "dropup 0.2s ease-out";
    dropdownList.removeAttribute("style", "display:flex");
    dropdownList.classList.remove("open");
  } else {
    navBar.style.animation = "dropdown 0.2s ease-out";
    dropdownList.setAttribute("style", "display:flex");
    dropdownList.style.animation =
      "appearance 0.2s cubic-bezier(0.2, 0.48, 0.76, 0.29)";
    dropdownList.classList.add("open");
  }
});

changeLanguage.addEventListener("click", () => {
  if (changeLanguage.classList.contains("EN")) {
    for (let i = 0; i < translationElements.length; i++) {
      translationElements[i].textContent = translation.ru[i];
    }
    changeLanguage.classList.remove("EN");
  } else {
    for (let i = 0; i < translationElements.length; i++) {
      translationElements[i].textContent = translation.en[i];
    }
    changeLanguage.classList.add("EN");
  }
});

let isScrolling = false;

const throttleScroll = (e) => {
  if (isScrolling === false) {
    window.requestAnimationFrame(() => {
      scrolling(e);
      isScrolling = false;
    });
  }
  isScrolling = true;
};

const scrolling = () => {
  if (isElementAtTop(navBar) && dropdownList.classList.contains("open")) {
    about.setAttribute("style", "margin-top:12rem");
    navBar.setAttribute("style", "position:fixed; top:0; width:100%");
  } else if (
    isElementAtTop(navBar) &&
    dropdownList.classList.value === "nav-bar__items"
  ) {
    about.setAttribute("style", "margin-top:2.5rem");
    navBar.setAttribute("style", "position:fixed; top:0; width:100%");
  }

  if (isElementAtBottom(header) && dropdownList.classList.contains("open")) {
    about.removeAttribute("style", "margin-top:12rem");
    navBar.removeAttribute("style", "position:fixed; top:0; width:100%");
  } else if (
    isElementAtBottom(header) &&
    dropdownList.classList.value === "nav-bar__items"
  ) {
    about.removeAttribute("style", "margin-top:2.5rem");
    navBar.removeAttribute("style", "position:fixed; top:0; width:100%");
  }
};

const isElementAtTop = (el) => {
  let elBoundary = el.getBoundingClientRect();
  let top = elBoundary.top;
  return top <= 0;
};

const isElementAtBottom = (el) => {
  let elBoundary = el.getBoundingClientRect();
  let bottom = elBoundary.bottom;
  return bottom >= 0;
};

window.addEventListener("scroll", throttleScroll, false);
