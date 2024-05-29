// alert("Welcome to My Website")
const texts = ["Python Developer" , " Automation Developer", "Data Scientist"];
const delay = 80;

function typeText(index, textContainer, text, letterIndex){
    if (index <texts.length){
        if (letterIndex <= text.length){
            textContainer.textContent = text.substring(0,letterIndex);
            setTimeout(() => {
                typeText(index, textContainer, text, letterIndex + 1);
            },delay);
        }else{
            setTimeout(() => {
                typeText(index + 1, textContainer, texts[index+ 1],0);
            },delay *4);
        }
    }else{
        typeText(0,textContainer, texts[0], 0);
    }
}
window.onload = function(){
    const textContainer = document.getElementById("text");
    typeText(0,textContainer, texts[0], 0);
};

function tiltAndReset() {
    const card = document.getElementById('main-Container');
    let isTilted = false;

    function tiltCard() {
        card.style.transform = 'rotateX(18deg) rotateY(-4deg)';
        setTimeout(resetCard, 2000);
    }

    function resetCard() {
        card.style.transform = 'rotateX(0deg) rotateY(0deg)';
        setTimeout(tiltCard, 20000);
    }
    resetCard();
}
tiltAndReset();
