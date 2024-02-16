"use strict";

const loading = document.querySelector('.loading');

window.addEventListener('load', () => {
    let currentWidth = 0;
    let currentLeft = 0;

    const timer = setInterval(() => {
        currentWidth+=1;
        loading.style.width = `${currentWidth}%`;

        if(currentWidth >= 100){
            currentLeft+=1;
            loading.style.left = `${currentLeft}%`;

            if(currentLeft >= 100){
                clearTimeout(timer);
            }
        }
    }, 10);
});

// Function generates a random word of a certain length
function generateRandomWord(length) {
    var letters = 'abcdefghijklmnopqrstuvwxyz';
    var word = '';
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * letters.length);
        word += letters[randomIndex];
    }
    return word;
}

// Function generates a random sentence of a specified length
function generateRandomSentence() {
    var sentence = '';
    var wordCount = Math.floor(Math.random() * 100) + 30; // Choose random word count between 1 and 50
    for (var i = 0; i < wordCount; i++) {
        var wordLength = Math.floor(Math.random() * 10) + 1; // Choose random word length between 1 and 10
        var word = generateRandomWord(wordLength);
        sentence += word + ' ';
    }
    return sentence.trim(); // Remove trailing space to return a sentence that doesn't end with a space
}

const content = document.querySelector('.content');
content.innerHTML = `<ul id="content-menu" class="content-menu"></ul>`;

const sidebarMenu = document.querySelector('.sidebar-menu');

for(let i = 0; i < 10; i++){
    sidebarMenu.innerHTML += `<li><a data-target="${i}">${i} link</a></li>`;
    content.innerHTML += `<div data-tab="${i}" class="data-tab"></div>`;
}

// 
const dataTabs = document.querySelectorAll('.data-tab');
const aTags = sidebarMenu.querySelectorAll('a');

dataTabs.forEach((tab, index) => {
    tab.innerHTML += `<h1 class="centered">Tab ${index}</h1>`;
    tab.innerHTML += `<ul class="content-menu"></ul>`;
    const contentMenu = tab.querySelector('.content-menu');
    for(let i = 0; i < 10; i++){
        contentMenu.innerHTML += `<li><a href="#tab-${index}blog${i}" class="link">${i} link</a></li>`;
    }

    for(let i = 0; i < 10; i++){
        tab.innerHTML += `<div id="tab-${index}blog${i}" class="blog"><h1>blog ${i}</h1></div>`;
    }
});

dataTabs[0].classList.add('active');
aTags[0].classList.add('active');

// create tab content
const blogs = document.querySelectorAll('.blog');
blogs.forEach((blog, index) => {
    for(let i = 0; i < 10; i++){
        blog.innerHTML += `<p>paragraph:${i} ${generateRandomSentence()}</p>`;
    }
});


//show data tabs
sidebarMenu.addEventListener('click', (e) => {
    if(e.target.tagName.toLowerCase() != 'a') return;
    dataTabs.forEach((tab) => tab.classList.remove('active'));
    dataTabs[e.target.getAttribute('data-target')].classList.add('active');

    aTags.forEach((tag) => tag.classList.remove('active'));
    aTags[e.target.getAttribute('data-target')].classList.add('active');

})


//sidebar show and hide
const sidebartrigger = document.querySelector('.sidebar-trigger');
const sidebar = document.querySelector('.sidebar');

sidebartrigger.addEventListener('click', (e) => {
    const currentTransform = sidebar.classList.contains('active');
    if (currentTransform === true) {
        sidebar.classList.remove('active');
    } else {
        sidebar.classList.add('active');
    }
})


const modetrigger = document.querySelector('.mode-trigger');

modetrigger.addEventListener('click', (e) => {
    const currentMode = content.classList.contains('mode');
    if (currentMode === true) {
        content.classList.remove('mode');
    } else {
        content.classList.add('mode');
    }
})

