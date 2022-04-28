import { html, render } from 'https://unpkg.com/lit-html?module';

export const logGlobalErrors = () => {
    const errorItem = error => html`<li><code>${error}</code></li>`;

    let topElementRendered = false;
    const errors = [];

    const removeErrors = {
        handleEvent: () => {
            errors.length = 0;
            renderErrors();
        }
    };

    const renderErrors = () => render(errors.map(errorItem), document.querySelector('#global-errors > ul'));

    ['error', 'unhandledrejection'].forEach(eventType => window.addEventListener(eventType, (event) => {
        const error = event.error || event.reason;
        if (!topElementRendered) {
            render(html`
                <div id="global-errors" style="color: darkred;">
                    <p><b>Errors</b> | <button @click=${removeErrors}>🗑</button></p>
                    <ul></ul>
                </div>
            `, document.body);
        }
        errors.push(error);

        renderErrors();
    }, { capture: true }));
}

logGlobalErrors();