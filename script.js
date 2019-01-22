let navHome = document.getElementById('home');
let navAbout = document.getElementById('about');
let navExperiences = document.getElementById('experiences');
let navCoursework = document.getElementById('coursework');
navHome.onmouseover = function(){
  navHome.style.textDecoration = 'underline';
  navHome.style.color = '#1fc2d3';
};
navHome.onmouseout = function() {
  navHome.style.textDecoration = '';
  navHome.style.color = '';
};
navAbout.onmouseover = function(){
  navAbout.style.textDecoration = 'underline';
  navAbout.style.color = '#1fc2d3';
};
navAbout.onmouseout = function() {
  navAbout.style.textDecoration = '';
  navAbout.style.color = '';
};
navExperiences.onmouseover = function(){
  navExperiences.style.textDecoration = 'underline';
  navExperiences.style.color = '#1fc2d3';
};
navExperiences.onmouseout = function() {
  navExperiences.style.textDecoration = '';
  navExperiences.style.color = '';
};
navCoursework.onmouseover = function(){
  navCoursework.style.textDecoration = 'underline';
  navCoursework.style.color = '#1fc2d3';
};
navCoursework.onmouseout = function() {
  navCoursework.style.textDecoration = '';
  navCoursework.style.color = '';
};


// navHome.addEventListener('mouseover', changeNav);
