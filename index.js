// DOM Elements
const professionalContainer = document.getElementById('professional-container');
const prfessionalLogoContainer = document.getElementById('professional-logo-container');
const professionalButton = document.getElementById('professional-button');
const professionalPlaceholder = document.getElementById('professional-placeholder');
const professionalDescription = document.getElementById('professional-description');

const otherContainer = document.getElementById('other-container');
const otherLogoContainer = document.getElementById('other-logo-container');
const otherButton = document.getElementById('other-button');
const otherPlaceholder = document.getElementById('other-placeholder');
const otherDescrition = document.getElementById('other-description');

professionalContainer.addEventListener('mouseover', () => {
    prfessionalLogoContainer.style.display = "flex";
    professionalButton.style.display = "inline-block";
    professionalPlaceholder.style.display = "none";
    professionalDescription.style.display = "block"
});

professionalContainer.addEventListener('mouseout', () => {
    prfessionalLogoContainer.style.display = "none";
    professionalButton.style.display = "none";
    professionalPlaceholder.style.display = "block"
    professionalDescription.style.display = "none";
});

otherContainer.addEventListener('mouseover', () => {
    otherLogoContainer.style.display = "flex";
    otherButton.style.display = "inline-block";
    otherPlaceholder.style.display = "none";
    otherDescrition.style.display = "block"
});

otherContainer.addEventListener('mouseout', () => {
    otherLogoContainer.style.display = "none";
    otherButton.style.display = "none";
    otherPlaceholder.style.display = "block"
    otherDescrition.style.display = "none";
});
