// -------------------- navbar content --------------------

function createNavContent(content){
    var navUl = document.getElementById('navbarSupportedContent').children[0];
    var liCollection = navUl.children;
    var arr = [];
    
    for(var i = 0; i<liCollection.length; i++){
        if(liCollection[i].children.length == 1){
            arr.push(liCollection[i].children[0]);
        }
    }    

    for(var i = 0; i<arr.length; i++){
        arr[i].innerText = content.nav[i];
    }
    
}

// -------------------- hero content --------------------

function createHeroContent(content){
    var carouselCaption = document.getElementsByClassName('carousel-caption');
    for(var i = 0; i<carouselCaption.length; i++){
        carouselCaption[i].children[0].innerText = content.carousel.head;
        carouselCaption[i].children[1].innerText = content.carousel.para;
        carouselCaption[i].children[2].innerText = content.carousel.btn;
    }

    var modalHeader = document.querySelectorAll('header .modal-title')[0];
    var modalBody = document.querySelectorAll('header .modal-body')[0].children[0];
    var modalFooter = document.querySelectorAll('header .modal-footer')[0].children[0];
    
    modalHeader.innerText = content.carousel.modalHead;
    modalBody.innerText = content.carousel.modalBody;
    modalFooter.innerText = content.carousel.modalFooter;
}

// -------------------- about content --------------------

function createAboutContent(content){
    var upperContentWrapper = document.getElementById('about').children[0].children[1];
    upperContentWrapper.children[0].innerText = content.about.subTitle;
    upperContentWrapper.children[1].innerText = content.about.title;
    upperContentWrapper.children[2].innerText = content.about.para;

    var lowerContentWrapper = document.querySelectorAll('#about .media-body')[0];
    lowerContentWrapper.children[0].innerText = content.about.adminName;
    lowerContentWrapper.children[1].innerText = content.about.companyName;
}

// -------------------- services content --------------------

function createServicesContent(content){
    var servicesList = document.getElementsByClassName('services-list');
    for(var i = 0; i<servicesList.length; i++){
        servicesList[i].children[1].innerText = content.services[i].title;
        servicesList[i].children[2].innerText = content.services[i].para;
    }
}

// -------------------- blog content --------------------

function createBlogContent(content){
    var sectionHead = document.getElementById('blog-head');    
    for(var i = 0; i< sectionHead.children.length; i++){
        sectionHead.children[i].innerText = content.blog.secHead[i];
    }

    var articleTitle = document.querySelectorAll('#blog article h3');
    var articleDate = document.querySelectorAll('#blog article time');
    var articleBody = document.querySelectorAll('#blog article p');
    for(var i = 0; i< articleTitle.length; i++){
        articleTitle[i].innerText = content.blog.secContent[i].articleTitle;
        articleDate[i].innerText = content.blog.secContent[i].articleDate;
        articleBody[i].innerText = content.blog.secContent[i].aticlePara;
    }
    
}

// -------------------- why choose us content --------------------

function createChooseContent(content){
    var secTitle = document.querySelector('#choose h2');
    for(var i = 0; i< secTitle.children.length; i++){
        secTitle.children[i].innerText = content.choose.secHead[i];
    }

    var secCart = document.querySelectorAll('#choose figcaption');
    for(var i = 0; i< secCart.length; i++){
        secCart[i].children[0].innerText = content.choose.secContent[i].title;
        secCart[i].children[1].innerText = content.choose.secContent[i].subTitle;
        secCart[i].children[2].innerText = content.choose.secContent[i].para;
    }
}

// -------------------- counter content --------------------

function createCounterContent(content){
    var secQuote = document.querySelector('#counter p.quote');
    secQuote.innerText = content.counter.secHead;

    var countList = document.getElementsByClassName('counter-list');
    for(var i = 0; i< countList.length; i++){
        countList[i].children[0].innerText = content.counter.secContent[i].count;
        countList[i].children[1].innerText = content.counter.secContent[i].state;
    }
}

// -------------------- team content --------------------

function createTeamContent(content){
    var secTitle = document.querySelector('#team h2');
    for(var i = 0; i< secTitle.children.length; i++){
        secTitle.children[i].innerText = content.team.secHead[i];
    }

    var teamMembers = document.querySelectorAll('#team figcaption h3');
    for(var i = 0; i< teamMembers.length; i++){
        teamMembers[i].innerText = content.team.teamMembers[i];
    }
}

// -------------------- quote content --------------------

function createQuoteContent(content){
    var qoute = document.querySelector('#qoute blockquote p span');
    qoute.innerText = content.qoute.qoute;

    var owner = document.querySelector('#qoute h3');
    owner.innerText = content.qoute.owner;
}

// -------------------- plants content --------------------

function createPlantsContent(content){
    var secTitle = document.querySelector('#plants h2');
    for(var i = 0; i< secTitle.children.length; i++){
        secTitle.children[i].innerText = content.outPlantsTitle[i];
    }
}

// -------------------- partners content --------------------

function createPartnersContent(content){
    var secTitle = document.querySelector('#partners h2');
    for(var i = 0; i< secTitle.children.length; i++){
        secTitle.children[i].innerText = content.outPartnersTitle[i];
    }
}