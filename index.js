// DOM Elements
const professionalContainer = document.getElementById('professional-container');
const otherContainer = document.getElementById('other-container');

const supportsHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

if (supportsHover) {
   professionalContainer.addEventListener('mouseenter', () => {
       professionalContainer.classList.add('is-active');
   });

   professionalContainer.addEventListener('mouseleave', () => {
       professionalContainer.classList.remove('is-active');
   });

   otherContainer.addEventListener('mouseenter', () => {
       otherContainer.classList.add('is-active');
   });

   otherContainer.addEventListener('mouseleave', () => {
       otherContainer.classList.remove('is-active');
   });
}
