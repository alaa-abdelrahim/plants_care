// ---------------------------------------------------
// navbar active link
// ---------------------------------------------------

var navCollection = document.getElementById('navbarSupportedContent').children[0].children;
var navLinks = [];
for(var i = 0; i<navCollection.length; i++){
    if(navCollection[i].children.length == 1){
        navCollection[i].children[0].addEventListener('click', changeActiveLinkByClick);
        navLinks.push(navCollection[i].children[0]);
    }
}

function changeActiveLinkByClick(e){
   var navCollection = document.getElementById('navbarSupportedContent').children[0].children;
   var liCollection = [];
   for(var i = 0; i<navCollection.length; i++){
       if(navCollection[i].children.length == 1){
           liCollection.push(navCollection[i]); 
       }
   }
   if(e.target.innerText != 'EN' && e.target.innerText != 'ع'){
    var currentActiveClass = document.getElementsByClassName('active')[0];
    currentActiveClass.classList.remove('active');   
    e.target.parentElement.classList.add('active');
   }
}

// ---------------------------------------------------
// scroll up and down event handlares
// ---------------------------------------------------

// scroll down from slider section to about section
var buttonArrowDown = document.getElementsByClassName('button-arrow-down');
for(var i = 0; i<buttonArrowDown.length; i++){
    buttonArrowDown[i].addEventListener('click', function(){
        window.scrollTo({top: 500, left: 0, behavior: 'smooth'});
    });
}

// scroll up from any section to slider section
var buttonArrowUp = document.getElementById('button-arrow-up');
buttonArrowUp.addEventListener('click', function(){
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
});

// show or hide 'scroll up' button
window.onscroll = function () {
    if (document.body.scrollTop >= 400 || document.documentElement.scrollTop >= 400) {
        buttonArrowUp.style.display = 'block';
    }else {
        buttonArrowUp.style.display = 'none';
    }
};

// ---------------------------------------------------
// functions to switch the languages between arabic and english
// ---------------------------------------------------

var lang = document.getElementById('lang');
lang.addEventListener('click', function(){
    var styleSheetsLinks = { // object hold style sheets links
        enBootstrap: './assest/style/bootstrap.min.css',
        arBootstrap: './assest/style/arabic/bootstrap.min.css',
        enFixStyle: './assest/style/fixStyleEn.css',
        arFixStyle: './assest/style/fixStyleAr.css'
    }

    if(lang.innerText == 'ع'){
        changeAllContent(arCont);
        switchHtmlDirAndLang('rtl', 'ar');
        switchStyleSheets(styleSheetsLinks , styleSheetsLinks.arBootstrap, styleSheetsLinks.arFixStyle);
    }else{
        changeAllContent(enCont);
        switchHtmlDirAndLang('ltr', 'en');
        switchStyleSheets(styleSheetsLinks, styleSheetsLinks.enBootstrap, styleSheetsLinks.enFixStyle);
    }
});

// reusable function to change html language and direction
function switchHtmlDirAndLang(dir, lang){
    document.getElementsByTagName('html')[0].setAttribute('lang', lang);
    document.getElementsByTagName('html')[0].setAttribute('dir', dir);
}

// reusable function to switch bettwen style sheets during switching languages
function switchStyleSheets(styleSheetsLinks, newLangBootstrap, newLangFixStyle){
    var headLinks = document.getElementsByTagName('link');
    var hrefAttr;
    for(var i = 0; i<headLinks.length; i++){
        hrefAttr = headLinks[i].getAttribute('href');
        if(hrefAttr == styleSheetsLinks.enBootstrap || hrefAttr == styleSheetsLinks.arBootstrap){
            headLinks[i].setAttribute('href', newLangBootstrap);
        }else if(hrefAttr == styleSheetsLinks.enFixStyle || hrefAttr == styleSheetsLinks.arFixStyle){
            headLinks[i].setAttribute('href', newLangFixStyle);
        }
    }
}

// ---------------------------------------------------
// change content according to the language
// ---------------------------------------------------

// instance from arabic and engish content;
// var arCont = new Arabic();
// var enCont = new English();

var arr = null;
$.ajax({
    'async': false,
    'global': false,
    'url': "./assest/scripts/arabicContent.json",
    'dataType': "json",
    'success': function (data) {
        console.log(data);
        ;
    }
});

// function to change all page content according to the target languge content
function changeAllContent(content){
    createNavContent(content);
    createHeroContent(content);
    createAboutContent(content);
    createServicesContent(content);
    createBlogContent(content);
    createChooseContent(content);
    createCounterContent(content);
    createTeamContent(content);
    createQuoteContent(content);
    createPlantsContent(content);
    createPartnersContent(content);
}