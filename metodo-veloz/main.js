/* /sabedoria-maxima/main.js */
// Efeito de contagem regressiva para urgência (Opcional)
console.log("Página LVL 2 Ativa");
document.querySelectorAll('.step').forEach((el, i) => {
    el.style.opacity = 0;
    setTimeout(() => {
        el.style.transition = "all 0.6s ease";
        el.style.opacity = 1;
        el.style.transform = "translateX(10px)";
    }, i * 200);
});