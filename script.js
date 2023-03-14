(async () => {
    let innerHTML = "";
    for (let i = 0; i < 100; i++) {
        innerHTML += `<div class="unit"></div>`;
    }
    document.body.innerHTML = innerHTML;
    Array.from(document.body.children).forEach(unit => {
        const unitCenterX = unit.offsetLeft + unit.clientWidth / 2;
        const unitCenterY = unit.offsetTop + unit.clientHeight / 2;
        window.addEventListener("mousemove", e => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            unit.style.transform = `rotate(${Math.atan2(mouseX - unitCenterX, mouseY - unitCenterY) * (180 / Math.PI) * -1 + 90}deg)`;
        });
    });
})();
