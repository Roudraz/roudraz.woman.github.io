// header

window.onscroll = function showHeader() {
    let header = document.querySelector('.header');

    if (window.pageYOffset > 100) {
        header.classList.add('header-fixed');
    } else {
        header.classList.remove('header-fixed');
    }
}




// tabs
const tabsBtn = document.querySelectorAll(".tabs__button");
const tabsItem = document.querySelectorAll(".tabs__item");

tabsBtn.forEach(function (item) {
    item.addEventListener("click", function () {
        let currentItem = item;
        let tabID = currentItem.getAttribute("data-tab");
        let currentTab = document.querySelector(tabID);

        tabsBtn.forEach(function (item) {
            item.classList.remove('active');
        });

        tabsItem.forEach(function (item) {
            item.classList.remove('active');
        });

        currentItem.classList.add('active');
        currentTab.classList.add('active');
    });
});


// Бургер меню

const burger = document.querySelector('.burger');
const burgerItem = document.querySelector('.burger__item');
const headerList = document.querySelector('.header__nav');

burger.addEventListener("click", function (e) {
    headerList.classList.toggle('open');
    burgerItem.classList.toggle('open');
    document.body.classList.toggle('lock');
});