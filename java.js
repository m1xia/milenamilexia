const subHeaders = [
    "༺☆༻Soy artista de nuevos medios, combino naturaleza y tecnologia⋆˙⟡",
    "꒰ა ☆ ໒꒱ ‧₊˚Investigo la liminalidad entre lo virtual y lo real₊˚.⋆☾⋆⁺₊✧"
];

const items = document.querySelectorAll('#item-1, #item-2');
const placeholder = document.querySelector('.placeholder');
const subheader= document.querySelector('#subheader');


function changeColors(){
    gsap.to('.banner', {backgroundColor: '#000', duration:0.5});
    gsap.to('#subheader', {backgroundColor: '#00000000', duration:0.5});
    gsap.to('.placeholder, p', {color:'#ff38e8', duration:0.5});
    gsap.to('nav, footer', {color:'#ff38e8', duration:0.5});
}

function revertColors(){
    gsap.to('.banner', {backgroundColor: '#00000000', duration:0.5});
    gsap.to('p', {color:'#fff', duration:0.5});
    gsap.to('#subheader', {backgroundColor: '#00000000', duration:0.5});
    gsap.to('.placeholder, nav, footer', {color:'#fff', duration:0.5});
}

items.forEach((item) => {
    item.addEventListener('mouseover', changeColors);
    item.addEventListener('mouseout', revertColors);
})

function updatePlaceholderText (event) {
    
    const itemIndex = Array.from(items).indexOf(event.target);
    const newSubHeaderText = subHeaders [itemIndex].toUpperCase();

    subheader.textContent = newSubHeaderText;
   
}

function resetPlaceholderText(){
    
    const defaultSubHeaderText ='✩₊˚.⋆☾⋆⁺₊✧Artista✩₊˚.⋆☾⋆⁺₊✧';
    subheader.textContent = defaultSubHeaderText;
}

items.forEach((item) => {
    item.addEventListener('mouseover', updatePlaceholderText);
    item.addEventListener('mouseout', resetPlaceholderText); 
});




