const getIframesFor = ({ baseUrl, attributes = `` }) => Object.freeze({
    'static': {
        element:
            `
            <iframe ${attributes} src="${baseUrl}/static.html">
                Waiting for iframe...
            </iframe>
            `
    },
    'http-request': {
        description: 'With HTTP request',
        element:
            `
            <iframe ${attributes} src="${baseUrl}/external-request.html">
                Waiting for iframe...
            </iframe>
            `
    },
    'access-to-host-data': {
        description: 'With access to host data',
        element:
            `
            <iframe ${attributes} src="${baseUrl}/access-to-host.html">
                Waiting for iframe...
            </iframe>
            `
    },
    'modifying-host': {
        description: 'With modifying host',
        element:
            `
            <iframe ${attributes} src="${baseUrl}/modifying-host.html">
                Waiting for iframe...
            </iframe>
            `
    },
    'download': {
        description: 'Download file',
        element:
            `
            <iframe ${attributes} src="${baseUrl}/download.html">
                Waiting for iframe...
            </iframe>
            `
    },
    'eval': {
        description: 'With usage of `eval`',
        element:
            `
            <iframe ${attributes} src="${baseUrl}/eval.html">
                Waiting for iframe...
            </iframe>
            `
    },
    'requires-permissions': {
        description: 'With requires permissions (feature policy)',
        element:
            `
            <iframe ${attributes} src="${baseUrl}/with-permissions.html">
                Waiting for iframe...
            </iframe>
            `
    }
});

onInit();

function onInit() {
    setSecretsInLocalStorage();

    buildAndWireIframes(document.querySelector('input[name=iframe-origin]:checked').value);

    document.querySelectorAll('input[name=iframe-origin]')
        .forEach(element =>
            element.addEventListener('click',
                event => buildAndWireIframes(event.target.value)
            )
        );
}

function buildAndWireIframes(originType) {
    createIframesAndControl(
        getIframesFor({
            baseUrl: getBaseUrlForOriginType(originType)
        })
    )
}

function getBaseUrlForOriginType(originType) {
    switch (originType) {
        case 'same-origin':
            return './iframes';
        case 'cross-origin':
            return 'http://localhost:3000'
        default:
            throw new Error(`There isn't origin type as "${originType}"`);
    }
}

function setSecretsInLocalStorage() {
    window.localStorage.setItem('secret', 'michalczukm-secret-key-🤫')
    window.localStorage.setItem('sessionToken', 'better-not-to-share-this-one')
}

function createIframesAndControl(iframes) {
    const CURRENT_BUTTON_CLASS = 'current-button';
    const iframeSlotElement = document.querySelector('#iframe-slot');
    const iframeCodeElement = document.querySelector('#iframe-code');
    const iframeCaruselElements = document.querySelector('#iframes-carusel');

    iframeSlotElement.replaceChildren();
    iframeCaruselElements.replaceChildren();
    iframeCodeElement.replaceChildren();

    Object.entries(iframes).forEach(([key, { description, element }]) => {
        const button = document.createElement('button');
        button.textContent = description || key;

        button.addEventListener('click', async function () {
            iframeCaruselElements.querySelectorAll('button').forEach(element => element.classList.remove(CURRENT_BUTTON_CLASS));
            this.classList.add(CURRENT_BUTTON_CLASS);

            iframeSlotElement.replaceChildren(htmlToElement(element));
            iframeCodeElement.replaceChildren(htmlToElement(await codeToHighlightedHtml(element)))
        });

        iframeCaruselElements.appendChild(button);
    });
}

function htmlToElement(html) {
    const template = document.createElement('template');
    template.innerHTML = html.trim();

    return template.content.firstChild;
}

async function codeToHighlightedHtml(code) {
    const highlighter = await shiki.getHighlighter({
        theme: 'light-plus',
        langs: ['html']
    });

    return highlighter.codeToHtml(commonTags.html(code), { lang: 'html' });
}