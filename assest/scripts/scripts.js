window.addEventListener("load", function(){
    document.getElementById('loading').style.display = 'none';
    document.getElementById('bodyContainer').style.display = 'block';
});
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
lang.addEventListener('click', switchLang);

function switchLang(langParam){
    displayLoadScreen();
    var styleSheetsLinks = { // object hold style sheets links
        enBootstrap: './assest/style/bootstrap.min.css',
        arBootstrap: './assest/style/arabic/bootstrap.min.css',
        enFixStyle: './assest/style/fixStyleEn.css',
        arFixStyle: './assest/style/fixStyleAr.css'
    }
    if(lang.innerHTML == 'ع' || langParam == 'ar'){
        switchHtmlDirAndLang('rtl', 'ar');
        switchStyleSheets(styleSheetsLinks , styleSheetsLinks.arBootstrap, styleSheetsLinks.arFixStyle);
        changeAllContent('ar');
    }else if(lang.innerHTML == 'en' || langParam == 'en'){
        switchHtmlDirAndLang('ltr', 'en');
        switchStyleSheets(styleSheetsLinks, styleSheetsLinks.enBootstrap, styleSheetsLinks.enFixStyle);
        changeAllContent('en');
    }
};

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

// reusable function to set all content according to the current languge
function changeAllContent(lang){
    var contentObj = lang == 'ar' ? new Arabic() : new English();
    var content = contentObj.content;
    var allElementsWithVars = document.querySelectorAll('.variable');

    for(var i = 0; i<allElementsWithVars.length; i++){
        if(!allElementsWithVars[i].getAttribute('value')){
            allElementsWithVars[i].setAttribute('value', allElementsWithVars[i].innerHTML);
        }
        var varName = changeToVarFormat(allElementsWithVars[i].getAttribute('value'));
        allElementsWithVars[i].innerText = varName ? content[varName] : ''; 
    }
    changeFormPlaceHolders(content);
}

// change form placeholders according to the language

function changeFormPlaceHolders(content){
    document.getElementById('userName').setAttribute('placeholder', content.formNamePlaceHolder);
    document.getElementById('userEmail').setAttribute('placeholder', content.formEmailPlaceHolder);
    document.getElementById('userMessage').setAttribute('placeholder', content.formMsgPlaceHolder);
}

// reusable function to check if the inner string is a variable or not and remove {{}} from it

function changeToVarFormat(str){
    var exp = /^[{{]{2}\w{1,}[}}]{2}$/i;
    if(exp.test(str)){
        var arr = str.split('');
        arr.pop();
        arr.pop();
        arr.shift();
        arr.shift();
        return arr.join('');
    }
    return;
}

// display load screen

function displayLoadScreen(){
    var loadDiv = document.getElementById('loading');
    var bodyCont = document.getElementById('bodyContainer');
    loadDiv.style.display = 'block';
    bodyCont.style.display = 'none';
    setTimeout(() => {
        loadDiv.style.display = 'none';
        bodyCont.style.display = 'block';
    }, 300);
}

// display the website in the user's browser language

navigator.languages[0] == 'ar' ? switchLang('ar') : switchLang('en');

// ---------------------------------------------------
// form validation
// ---------------------------------------------------

var contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', handleSubmit);

// error messages appear during writting

contactForm.name.addEventListener('keyup' , function(){
    document.getElementById('nameErrorMsg').style.display = contactForm.name.value && !checkName(contactForm.name.value) ? 'inline' : 'none';    
});

contactForm.email.addEventListener('keyup' , function(){
    document.getElementById('emailErrorMsg').style.display = contactForm.email.value && !checkEmail(contactForm.email.value) ? 'inline' : 'none';    
});

contactForm.msg.addEventListener('keyup' , function(){
    document.getElementById('msgErrorMsg').style.display = contactForm.email.value && !checkMsg(contactForm.msg.value) ? 'inline' : 'none';    
});

// submit function

function handleSubmit(e){
    e.preventDefault();
    // check patterns
    nameValidation = checkName(contactForm.name.value);
    emailValidation = checkEmail(contactForm.email.value);
    msgValidation = checkMsg(contactForm.msg.value);

    // submit the form
    if(nameValidation && emailValidation && msgValidation){
        contactForm.name.value = '';
        contactForm.email.value = '';
        contactForm.msg.value = '';
        alert('Your message has been sent successfully');
    }else{
        alert('Please make sure that all fields match the requirments');
    }
}

// reusable functions to check patterns

function checkName(str){
    var enExp = /^[a-z]{3,}$/i;
    var arExp = /^[أ-ي]{3,}$/i;
    return enExp.test(str) ? enExp.test(str) : arExp.test(str);
}

function checkEmail(str){
    var exp = /^[a-z]{1}\w{0,}@{1}[a-z]{1,}\.{1}[a-z]{2,}\.{0,1}[a-z]{0,5}$/i;
    return exp.test(str);
}

function checkMsg(str){
    var enExp = /[a-z]{5,}/i;
    var arExp = /[أ-ي]{5,}/i;
    return enExp.test(str) ? enExp.test(str) : arExp.test(str);
}
