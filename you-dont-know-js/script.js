'use strict';

let books = document.querySelectorAll('.books'),
    book = document.querySelectorAll('.book'),
    bodyBackground = document.querySelector('body'),
    adWrapperDiv = document.querySelectorAll('.adv')[0],
    book2Contents = document.querySelectorAll("body > aside > div:nth-child(1) > ul"),
    book2Chapters = document.querySelectorAll("body > aside > div:nth-child(1) > ul > li"),
    book5Contents = document.querySelectorAll("body > aside > div:nth-child(6) > ul"),
    book5Chapters = document.querySelectorAll("body > aside > div:nth-child(6) > ul > li"),
    book3Header = document.querySelectorAll("body > aside > div:nth-child(5) > h2 > a")[0],
    book6Contents = document.querySelectorAll("body > aside > div:nth-child(3) > ul"),
    book6Chapters= document.querySelectorAll("body > aside > div:nth-child(3) > ul > li");

// Заменить картинку заднего фона на другую из папки image:
bodyBackground.style.backgroundImage = 'url(image/you-dont-know-js.jpg';

// Удалить рекламу со страницы:
adWrapperDiv.style.display = 'none';

// Восстановить порядок глав во второй книге:
book2Contents[0].removeChild(book2Chapters[2]);
book2Contents[0].insertBefore(book2Chapters[6], book2Chapters[4]);
book2Contents[0].appendChild(book2Chapters[2]);
book2Contents[0].insertBefore(book2Chapters[2], book2Chapters[10]);
book2Contents[0].insertBefore(book2Chapters[8], book2Chapters[4]);

// Восстановить порядок глав в пятой книге:
book5Contents[0].insertBefore(book5Chapters[9], book5Chapters[2]);
book5Contents[0].insertBefore(book5Chapters[2], book5Chapters[6]);
book5Contents[0].insertBefore(book5Chapters[5], book5Chapters[8]);

// Исправить заголовок в книге 3 ( Получится - "Книга 3. this и Прототипы Объектов")
book3Header.innerHTML = 'Книга 3. this и Прототипы Объектов';

// В шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место:
let newLi = document.createElement('li');
newLi.textContent = 'Глава 8: За пределами ES6';
book6Contents[0].insertBefore(newLi, book6Chapters[9]);

// Восстановить порядок книг:
books[0].insertBefore(book[1], book[0]);
books[0].appendChild(book[2]);
books[0].insertBefore(book[4], book[3]);


