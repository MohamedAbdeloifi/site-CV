var idKnowledges = document.getElementById('knowledges');
var idExperiences = document.getElementById('experiences');
var idHobbies = document.getElementById('hobbies');
var idContact = document.getElementById('contact');

var ck = document.getElementById("container-k");
var ce = document.getElementById("container-e");
var ch = document.getElementById("container-h");
var cc = document.getElementById("container-c");
var ci = document.getElementById("container-i");


var knowledges = document.getElementById('k');
var experiences = document.getElementById('e');
var hobbies = document.getElementById('h');
var contact = document.getElementById('c');


idKnowledges.addEventListener('click',()=>{
    knowledges.style.display="block";
    experiences.style.display="none";
    hobbies.style.display="none";
    contact.style.display="none";
    ck.style.display="block";
    ce.style.display="none";
    ch.style.display="none";
    cc.style.display="none";
    ci.style.display="none";
})

idExperiences.addEventListener('click',()=>{
    knowledges.style.display="none";
    experiences.style.display="block";
    hobbies.style.display="none";
    contact.style.display="none";
    ce.style.display="block";
    ck.style.display="none";
    ch.style.display="none";
    cc.style.display="none";
    ci.style.display="none";
})

idHobbies.addEventListener('click',()=>{
    knowledges.style.display="none";
    experiences.style.display="none";
    hobbies.style.display="block";
    contact.style.display="none";
    ch.style.display="block";
    ck.style.display="none";
    ce.style.display="none";
    cc.style.display="none";
    ci.style.display="none";
})

idContact.addEventListener('click',()=>{
    knowledges.style.display="none";
    experiences.style.display="none";
    hobbies.style.display="none";
    contact.style.display="block";
    cc.style.display="block";
    ck.style.display="none";
    ce.style.display="none";
    ch.style.display="none";
    ci.style.display="none";
})