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
    "Проекты",
    "Контакты",
    "Change language",
    "Обо мне",
    `Добрый день, я фронтенд разработчик из Москвы. Интерес к технологиям, желание творить, и возникшая в прошлом потребность
    создать сайт, привели меня в мир веб-разработки. Мой путь к программированию стартовал в 2018 году, когда я решила
    начать обучение на курсах Mail.ru, `,
    `Вскоре, я начала самостоятельно работать над 
    несколькими проектами.`,
    `Я хорошо разбираюсь в адаптивной верстке, и пишу понятный JavaScript код, используя стандарт ES6.
    Также, касательно фреймворков, мне нравиться работать с React.`,
    `В ближайшем будущем я планирую изучить Node.js, для работы с
    бэкэндом, и продолжать изучение JavaScript и CSS.`,
    `В свободное время я, в основном, практикуюсь в
    написании кода (либо работая над каким-то из своих проектов, либо
    решая задачи на `,
    `), либо же я занимаюсь спортом или играю в видеоигры.`,
    "Стек технологий",
    "Проекты",
    `Полностью адаптивный лэндинг ресторана, созданный в образовательных целях. Основные технологии, использованные при создании проекта, включают HTML5, CSS3, Sass и vanilla js.`,
    `ToDo List, как и любое приложение подобного типа, позволяет
    пользователям создавать задачи, удалять их, и отмечать
    выполненные. Также, пользователи могут проверить свои
    выполненные задачи. Приложение создано на базе React.
    Авторизация и хранение данных осуществляются с помощью Firebase.
    Также, при создании использовалить Sass, и библиотека React
    Router.`,
    `GameSearch - это приложение, созданное для поиска и сохранения
    различных игр. Пользователи могут воспользоваться поиском, и
    фильтровать игры по жанрам, платформам, рейтингу или
    популярности. Или же просто искать по названию. Наверху главной
    страницы в рандомном порядке загружается какая-либо игра с
    высоким рейтингом и популярностью. Ниже расположен список игр с
    высокой популярностью (в будущем я планирую написать алгоритм,
    который отображал бы игры, подходящие к интересам пользователя).
    Пользователь может кликнуть на любую игру, и получить множество
    информации по ней. Когда же пользователь регистрируется на
    сайте, у него открывается доступ к новым функциям, таким как
    возможность проставить каждой игре рейтинг, от 1 до 5, и
    сохранить игру в папку. Папки также может создавать сам
    пользователь. На странице профиля имеется возможность изменить
    фото и логин.`,
    `Данное приложение создано с IGDB API. Также, в процессе я
    столкнулась с необходимостью подключить прокси на Heroku, для
    обхода cors-policy. С этим могут быть связаны долгое время
    загрузки приложения и ограниченное количество запросов. Прошу
    прощения за доставленные неудобства. Сейчас я работаю над этими
    проблемами.`,
    `При создании приложения использовались React, Redux, и
    Firebase.`,
    "Контакты",
    "Елизавета Кучерова",
  ],
  en: [
    "Elizaveta Kucherova",
    "About me",
    "Technologies",
    "Projects",
    "Contacts",
    "Изменить язык",
    "About me",
    `Hi, I'm a self-taught frontend developer from Moscow. Interest in
    technology, the desire to create and the need to make a website in
    the past, led me to the world of web development. My path into web
    began in 2018, when I decided to start studying at Mail.ru
    courses, `,
    `Soon after that, I started to work alone at some of my projects.`,
    `I have solid knowledge about responsive web design and client-side
    scripting, like vanilla js. Also, I like to work with React.`,
    `In the nearest future I plan to study Node.js, for building
    backend, and continue to learn new stuff at JavaScript and CSS.`,
    `In my free time you can find me practice at coding (I can work on
    some of my pet-projects or take challenge at`,
    `), or do sport, or play video games.`,
    "Technologies",
    "Projects",
    `It's a fully responsive web application made for educational
    purpouses. The primary technologies involved in this project include
    HTML5, CSS3, Sass and vanilla js.`,
    `ToDo List is a web application similar to any todo list. Users
    can create tasks, delete them, and mark completed. Also, users
    can check comlited tasks. The app was created using React.
    Authorisation and storage data was made with Firebase. In app
    was also used Sass and React Router library.`,
    `GameSearch is a web application, made for searching and saving
    different games. Users can filter games by genres, platforms,
    rating or popularity. Or just filter by title. On the top of
    main page randomly loading some game, with high rating and
    popularity. On the bottom - a list of games, with high
    popularity (In future I plan to write an algorithm, which would
    recommend users games, according to their taste). User can click
    on any game, and get a lot of information about it. When user
    signs up, new functions are opened for him, such as - rating
    games from 1 to 5, and adding them to folders. Folders can also
    be created independently. On the profile page, user can also
    change the photo and login.`,
    `This application made with IGDB API. Also, I was faced with the
    need to add proxy on Heroku, for cors-policy. This leads to long
    page loads and restriction on requests. So, I'm sorry for
    inconveniences. For now I still working on these problems.`,
    `To build this app I used React, Redux, and Firebase.`,
    "Contacts",
    "Elizaveta Kucherova",
  ],
};

toggleButton.addEventListener("click", () => {
  if (dropdownList.classList.contains("open")) {
    dropdownList.style.animation =
      "disappearance 0.2s cubic-bezier(0.2, 0.48, 0.76, 0.29)";
    setTimeout(() => {
      navBar.style.animation = "dropup 0.2s ease-out";
      dropdownList.removeAttribute("style", "display:flex");
      dropdownList.classList.remove("open");
    }, 100);
  } else {
    navBar.style.animation = "dropdown 0.2s ease-out";
    setTimeout(() => {
      dropdownList.setAttribute("style", "display:flex");
      dropdownList.style.animation =
        "appearance 0.2s cubic-bezier(0.2, 0.48, 0.76, 0.29)";
      dropdownList.classList.add("open");
    }, 100);
  }
});

changeLanguage.addEventListener("click", () => {
  if (changeLanguage.classList.contains("EN")) {
    for (let i = 0; i < translationElements.length; i++) {
      translationElements[i].textContent = translation.en[i];
    }
    changeLanguage.classList.remove("EN");
  } else {
    for (let i = 0; i < translationElements.length; i++) {
      translationElements[i].textContent = translation.ru[i];
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

const scrolling = (e) => {
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
