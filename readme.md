# Gdy iframe iframem iframe'a pogania

czyli o UI, które staje się platformą.

## Co tu jest?

Nasza prezentacja @michalczukm & @cytrowski o tym po co nam iframe'y i dlaczego ich używamy w Atlassianie 😊

* [prezentacja w .pdf](./presentation.pdf)
* [przykłady których używamy podczas prezentacji](./examples/)
* video ... soon 🤞

## Abstrakt

Znacznik iframe przez wielu określany mianem reliktu przeszłości ciągle, przez brak lepszych alternatyw, znajduje zastosowanie. 

Spokojnie, to nie będzie kolejny talk o Microfrontends. 

Wyklarujemy ograniczenia jakie niesie ze sobą komunikacja cross-origin i pokażemy jak efektywnie budować API, które pozwala zamienić UI produktu w platformę na której mogą budować inni. 

Opowiemy jak zrobiliśmy to w Forge (About Forge), co ma to wspólnego z iframe’ami i jak zewnętrzne aplikacje rozszerzają UI produktów Atlassiana (Jira Cloud).

## Przydatne linki

* Forge
  * https://developer.atlassian.com/platform/forge/
  * Custom UI (https://developer.atlassian.com/platform/forge/custom-ui/ )
* FaaS
  * https://www.youtube.com/watch?v=xTSFxLiLIVo
* iframe
  * https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy#definition_of_an_origin
  * https://dev.to/pete_gleeson/what-is-an-iframe-3bi2
  * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe
  * IFrame security concerns - https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies#security_concerns
  * https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-iframe-element
  * https://stackoverflow.com/a/67279278/2029818
  * Jak “zabezpieczy” IFrame
    * Sandbox (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#attr-sandbox )
    * Allow (https://developer.mozilla.org/en-US/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy )
    * CSP (https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP )
  * Model izolacji iframe w V8 - https://v8.dev/docs/embed
  * https://content-security-policy.com/