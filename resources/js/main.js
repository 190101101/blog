"use strict";

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
    var wordCount = Math.floor(Math.random() * 50) + 1; // Choose random word count between 1 and 50
    for (var i = 0; i < wordCount; i++) {
        var wordLength = Math.floor(Math.random() * 10) + 1; // Choose random word length between 1 and 10
        var word = generateRandomWord(wordLength);
        sentence += word + ' ';
    }
    return sentence.trim(); // Remove trailing space to return a sentence that doesn't end with a space
}


const content = document.querySelector('.content');
const ul = document.querySelector('ul');

for(let i = 0; i < 100; i++){
    ul.innerHTML += `<li><a data-target="${i}">${i} link</a></li>`;
    content.innerHTML += `<div data-tab="${i}" class="data-tab"></div>`;
}

// 
const dataTabs = document.querySelectorAll('[data-tab]');
const aTags = ul.querySelectorAll('a');

dataTabs[0].classList.add('active');
aTags[0].classList.add('active');

// create tab content
dataTabs.forEach((tab, index) => {
    tab.innerHTML = `<h1 class="centered">Tab ${index}</h1>`;
    for(let i = 0; i < 30; i++){
        tab.innerHTML += `<p>paragraph:${i} ${generateRandomSentence()}</p>`;
    }
})

//show data tabs
ul.addEventListener('click', (e) => {
    if(e.target.tagName.toLowerCase() != 'a') return;
    dataTabs.forEach((tab) => tab.classList.remove('active'));
    dataTabs[e.target.getAttribute('data-target')].classList.add('active');

    aTags.forEach((tag) => tag.classList.remove('active'));
    aTags[e.target.getAttribute('data-target')].classList.add('active');

})
