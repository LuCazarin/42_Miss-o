document.getElementById("changeColorButton").addEventListener("click", function() {
    // Gerar cores aleatórias
    var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    
    // Mudar o background color da página
    document.body.style.backgroundColor = randomColor;
});
