/** @typedef {{buttonBackgroundColor: string, buttonTextContent}} VisualEffectOptions */

class VisualEffect {
    /** @param {VisualEffectOptions} options  */
    constructor(screen, options) {
        /** @type {HTMLDivElement} */
        this.screen = screen;
        /** @type {VisualEffectOptions} */
        this.options = options;
    }

    /**
     * Mounts the visual effect, initializing and setting up necessary components.
     *
     * @memberof VisualEffect
     * @instance
     * @method
     *
     * @returns {void}
     *
     * @example
     * const colorWaveEffect = new ColorWaveEffect();
     * colorWaveEffect.mount();
     */ mount() {
        throw new Error("Method not implemented in class: " + this?.constructor?.name);
    }
}

class RectangleEffect extends VisualEffect {
    mount() {
        let innerHTML = "";
        for (let i = 0; i < 100; i++) {
            innerHTML += `<div style="height: 10vh; width: 10vw; background-color: ${
                this.options.rectangleColor || "red"
            }; box-sizing: border-box; border: 1px solid red;"></div>`;
        }
        this.screen.innerHTML = innerHTML;

        Array.from(this.screen.children).forEach((unit) => {
            const unitCenterX = unit.offsetLeft + unit.clientWidth / 2;
            const unitCenterY = unit.offsetTop + unit.clientHeight / 2;
            window.addEventListener("mousemove", (e) => {
                const mouseX = e.clientX;
                const mouseY = e.clientY;
                unit.style.transform = `rotate(${Math.atan2(mouseX - unitCenterX, mouseY - unitCenterY) * (180 / Math.PI) * -1 + 90}deg)`;
            });
        });
    }
}

class ArrowEffect extends VisualEffect {
    mount() {
        let innerHTML = "";
        for (let i = 0; i < 100; i++) {
            innerHTML += `
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                style="height: 10vh; width: 10vw; box-sizing: border-box;" 
                fill="${this.options.arrowColor || "red"}" 
                class="bi bi-arrow-right" viewBox="0 0 16 16"
            >
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
            </svg>
            `;
        }
        this.screen.innerHTML = innerHTML;

        Array.from(this.screen.children).forEach((unit) => {
            const unitCenterX = unit.getBoundingClientRect().left + unit.clientWidth / 2;
            const unitCenterY = unit.getBoundingClientRect().top + unit.clientHeight / 2;

            window.addEventListener("mousemove", (e) => {
                const mouseX = e.clientX;
                const mouseY = e.clientY;

                unit.style.transform = `rotate(${Math.atan2(mouseX - unitCenterX, mouseY - unitCenterY) * (180 / Math.PI) * -1 + 90}deg)`;
            });
        });
    }
}

/** @param {VisualEffect[]} effects*/
function mountVisualEffectsIntoSlideBar(effects) {
    const slideBar = document.querySelector("#slideBar");

    for (const effect of effects) {
        const button = document.createElement("button");
        button.setAttribute(
            "style",
            `height: 100%; aspect-ratio: 1/1; background-color: ${effect.options.buttonBackgroundColor || "blue"}; border-radius: 1rem;`
        );
        button.textContent = effect.options.buttonTextContent || effect?.constructor?.name || "A";
        button.onclick = () => effect.mount();

        slideBar.appendChild(button);
    }
}
// to do: main function needs to be replaced with a VisualEffectManager class in the future
function main() {
    const screenElement = document.querySelector("#screen");

    const aquqRectangleVisualEffect = new RectangleEffect(screenElement, {
        rectangleColor: "aqua",
        buttonBackgroundColor: "aqua",
        buttonTextContent: "RECT",
    });

    const redArrowVisualEffect = new ArrowEffect(screenElement, {
        arrowColor: "red",
        buttonBackgroundColor: "red",
        buttonTextContent: "ARROW",
    });

    /** @type {VisualEffect[]} */
    const visualEffects = [aquqRectangleVisualEffect, redArrowVisualEffect];

    mountVisualEffectsIntoSlideBar(visualEffects);

    let activeVisualEffect = visualEffects[0];

    activeVisualEffect.mount();
}

export default main;
