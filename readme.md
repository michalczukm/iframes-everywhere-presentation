# Gdy iframe iframem iframe'a pogania

czyli o UI, kt贸re staje si臋 platform膮.

## Co tu jest?

Nasza prezentacja @michalczukm & @cytrowski o tym po co nam iframe'y i dlaczego ich u偶ywamy w Atlassianie 馃槉

* [prezentacja w .pdf](./presentation.pdf)
* [przyk艂ady kt贸rych u偶ywamy podczas prezentacji](./examples/)
* [馃帴 video, z Dev.js Summit 2022](https://www.youtube.com/watch?v=QMLcaorI8Mc)

## Abstrakt

Znacznik iframe przez wielu okre艣lany mianem reliktu przesz艂o艣ci ci膮gle, przez brak lepszych alternatyw, znajduje zastosowanie. 

Spokojnie, to nie b臋dzie kolejny talk o Microfrontends. 

Wyklarujemy ograniczenia jakie niesie ze sob膮 komunikacja cross-origin i poka偶emy jak efektywnie budowa膰 API, kt贸re pozwala zamieni膰 UI produktu w platform臋 na kt贸rej mog膮 budowa膰 inni. 

Opowiemy jak zrobili艣my to w Forge (About Forge), co ma to wsp贸lnego z iframe鈥檃mi i jak zewn臋trzne aplikacje rozszerzaj膮 UI produkt贸w Atlassiana (Jira Cloud).

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
  * Jak 鈥渮abezpieczy鈥? IFrame
    * Sandbox (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#attr-sandbox )
    * Allow (https://developer.mozilla.org/en-US/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy )
    * CSP (https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP )
  * Model izolacji iframe w V8 - https://v8.dev/docs/embed
  * https://content-security-policy.com/