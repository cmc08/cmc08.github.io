"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["app_assets_modules_github_command-palette_items_help-item_ts-app_assets_modules_github_comman-48ad9d"],{94831(a,b,c){c.d(b,{i:()=>g});var d=c(76006),e=c(16852),f=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let g=class ClientDefinedProviderElement extends e.b{static build(a,b){let c=new ClientDefinedProviderElement;return c.providerId=a,c.provider=b,c}connectedCallback(){this.setAttribute("data-targets","command-palette.clientDefinedProviderElements")}};f([d.Lj],g.prototype,"providerId",void 0),g=f([d.Ih],g)},7667(a,b,c){c.d(b,{Z:()=>s,o:()=>q});var d,e=c(76006),f=c(94831),g=c(25543),h=c(48084),i=c(50034),j=c(80425),k=c(3447),l=c(52418),m=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let n=()=>navigator.platform.match(/Mac/),o=n()?"metaKey":"ctrlKey",p=n()?"Meta":"Control",q=a=>a instanceof KeyboardEvent&&a[o],r=450,s=((d=class CommandPalette extends HTMLElement{setup(){this.modes=Array.from(this.querySelectorAll("command-palette-mode")),this.defaultMode=this.querySelector(".js-command-palette-default-mode"),this.commandPaletteInput=this.querySelector("command-palette-input"),this.groups=this.querySelectorAll("command-palette-item-group"),this.defaultOpen&&(this.manualToggle(!0),this.clearReturnToParams()),window.commandPalette=this,this.setupComplete=!0;let a=new Event("command-palette-ready",{bubbles:!0,cancelable:!0});this.dispatchEvent(a)}connectedCallback(){this.setupComplete||this.setup()}clear(a=!0){this.clearProviderCaches(),this.pageStack.reset(),a&&this.resetInput()}clearCommands(a=!0){return this.everActivated&&(this.clearCommandProviderCaches(),a&&this.resetInput()),Promise.resolve()}resetInput(){this.commandPaletteInput.inputValue=""}activate(){this.sessionId=this.generateSessionId(),this.commandPaletteInput.scopeElement.smallDisplay=this.offsetWidth<r,this.commandPaletteInput.focus(),this.setActiveModeElement(),this.setQuery(),this.toggleTips(),this.pageStack.commandPaletteActivated(),this.dispatchEvent(new CustomEvent("command-palette-activated",{detail:{previouslyActivated:this.everActivated}})),this.activated=!0,this.everActivated=!0,(0,l.j)("session_initiated")}deactivate(){this.activated=!1,this.pageStack.unbindListeners(),this.clear(),this.previouslyActiveElement&&this.previouslyActiveElement.focus(),(0,l.j)("session_terminated")}generateSessionId(){return(0,j.k)(`${Date.now()}_${this.userId}_${this.query.path}`).toString()}manualToggle(a){let b=this.closest("details");a?b.open=!0:b.removeAttribute("open")}dismiss(){this.manualToggle(!1),this.clear()}get secondaryActivationHotkey(){let a=this.activationHotkey.split(",");return a.length>1?a[a.length-1]:""}get platformActivationHotkey(){return this.platformHotkey(this.activationHotkey)}get platformSecondaryActivationHotkey(){return this.platformHotkey(this.secondaryActivationHotkey)}get platformCommandModeHotkey(){return this.platformHotkey(this.commandModeHotkey)}platformHotkey(a){if("none"===a)return"";let b=a;if(n())b=b.replace(/Mod\+Alt/g,"Alt+Mod");else if(b.includes("Shift")){let c=b.charAt(b.length-1);b+=`,${b.replace(`Shift+${c}`,c.toUpperCase())}`}return b.replace(/Mod/g,p)}onInput(){this.everActivated&&(this.commandPaletteInput.typeahead="",this.setActiveModeElement(),this.setQuery(),this.toggleTips(),this.updateOverlay())}updateOverlay(){let a=this.getMode();for(let b of(this.commandPaletteInput.overlay=a,this.groups))b.renderElement(a);if(a&&""===this.getTextWithoutMode()){let c=this.getModeElement().placeholder||"";this.commandPaletteInput.showModePlaceholder(c)}else this.commandPaletteInput.showModePlaceholder("")}itemsUpdated(a){if(!(a instanceof CustomEvent))return;let b=a.detail.items,c=b.filter(a=>a.group!==g.O.footerGroupId),d=c.filter(a=>!a.group||!g.O.helpGroupIds.includes(a.group)),e=c.length>d.length,f=0===d.length&&this.activated;d.length>0?this.toggleEmptyState(!1,e):f&&(this.toggleEmptyState(!0,e),this.toggleTips()),this.toggleErrorTips()}loadingStateChanged(a){a instanceof CustomEvent&&(this.commandPaletteInput.loading=a.detail.loading)}pageFetchError(a){a instanceof CustomEvent&&(this.error=!0,this.toggleErrorTips())}selectedItemChanged(a){if(!(a instanceof CustomEvent))return;let b=a.detail.item,c=a.detail.isDefaultSelection;this.updateTypeahead(b,c)}setActiveModeElement(){let a=this.commandPaletteInput.inputValue.substring(0,1),b=this.modes.filter(b=>b.active(this.query.scope,a)).find(b=>b.character()===a);this.activeMode=b||this.defaultMode,this.pageStack.currentMode=this.activeMode.character()}setQuery(){this.query=new i.A(this.getTextWithoutMode().trimStart(),this.getMode(),{scope:this.commandPaletteInput.scope,subjectId:this.pageStack.defaultScopeId,subjectType:this.pageStack.defaultScopeType,returnTo:this.returnTo}),this.pageStack.currentQueryText=this.getTextWithoutMode().trimStart()}getModeElement(){return this.activeMode}getMode(){return this.getModeElement()?.character()}getTextWithoutMode(){if(!this.commandPaletteInput)return"";let a=this.commandPaletteInput.inputValue,b=this.getMode();return b&&a.startsWith(b)?a.substring(1):a}get selectedItem(){return this.pageStack.currentPage.selectedItem}onSelect(a){this.selectedItem?this.selectedItem.item.select(this):a.preventDefault()}autocomplete(a){(0,l.j)("autocompleted",a);let b=this.commandPaletteInput;void 0!==a.typeahead?b.inputValue=b.overlay+a.typeahead:b.inputValue=b.overlay+a.title}setScope(a){(0,l.j)("scoped");let b=a||this.commandPaletteInput.scope;for(let c of b.tokens){let d=c===b.tokens[b.tokens.length-1],e=new h.j({title:c.value,scopeId:c.id,scopeType:c.type});this.pageStack.push(e,!d)}this.commandPaletteInput.inputValue=""}onDescope(){this.toggleEmptyState(!1,!1),this.pageStack.pop(),this.toggleTips()}onInputClear(){this.pageStack.clear()}onKeydown(a){"Enter"===a.key&&this.selectedItem?(this.selectedItem?.activate(this,a),a.preventDefault(),a.stopPropagation()):"ArrowDown"===a.key?(this.navigateToItem(1),a.preventDefault(),a.stopPropagation()):"ArrowUp"===a.key?(this.navigateToItem(-1),a.preventDefault(),a.stopPropagation()):this.isCopyEvent(a)&&this.selectedItem&&(this.selectedItem.copy(this),a.preventDefault(),a.stopPropagation())}close(a){if(a instanceof KeyboardEvent&&"Enter"!==a.key)return;let b=document.querySelector(".command-palette-details-dialog");b.toggle(!1),a.stopImmediatePropagation(),a.preventDefault()}navigateToItem(a){this.pageStack.navigate(a)}toggleTips(){let a=this.modeTips.filter(a=>a.available(this.query)),b=a[Math.floor(Math.random()*a.length)];for(let c of this.modeTips)c.hidden=b!==c;this.pageStack.hasVisibleTip=!!b,this.pageStack.currentPage.recomputeStyles()}toggleEmptyState(a,b){for(let c of this.emptyStateElements)c.toggle(this.query,a);if(!b&&a){let d=this.serverDefinedProviderElements.find(a=>"help"===a.type);d&&this.pageStack.currentPage.fetch([d.provider],{isEmpty:!0})}}toggleErrorTips(){for(let a of this.errorStateTips)a.toggle(this.query,!1,this.error)}inputReady(a){a instanceof CustomEvent&&(this.resizeObserver||(this.resizeObserver=new ResizeObserver(a=>{for(let b of a)this.commandPaletteInput.scopeElement.smallDisplay=b.contentRect.width<r}),this.resizeObserver.observe(this)))}updateInputScope(a){a instanceof CustomEvent&&(this.commandPaletteInput.scope=this.pageStack.scope,this.setQuery())}updateTypeahead(a,b=!1){""===this.getTextWithoutMode()&&(!a||b)?this.commandPaletteInput.typeahead="":a&&(this.commandPaletteInput.typeahead=(a.typeahead??a.title)??"")}isCopyEvent(a){return!this.commandPaletteInput.textSelected()&&(n()?a.metaKey&&"c"===a.key:a.ctrlKey&&"c"===a.key)}setQueryScope(){this.query.scope=this.commandPaletteInput.scope}get providerElements(){return[...this.serverDefinedProviderElements,...this.clientDefinedProviderElements]}get commandsProviderElements(){return this.providerElements.filter(a=>a.provider?.hasCommands)}clearProviderCaches(){for(let a of this.providerElements)a.provider?.clearCache()}clearCommandProviderCaches(){for(let a of this.commandsProviderElements)a.provider?.clearCache()}registerProvider(a,b){let c=this.querySelector(`client-defined-provider[data-provider-id="${a}"]`);c&&c.remove();let d=f.i.build(a,b);this.appendChild(d)}pushPage(a,b=!1){b&&this.pageStack.clear(!1),this.pageStack.push(a),this.resetInput()}get tipElements(){let a=this.querySelectorAll("command-palette-tip");return Array.from(a)}get modeTips(){return this.tipElements.filter(a=>!a.onEmpty&&!a.onError)}get emptyStateElements(){return this.tipElements.filter(a=>a.onEmpty)}get errorStateTips(){return this.tipElements.filter(a=>a.onError)}get placeholder(){return this.getAttribute("placeholder")||""}clearReturnToParams(){let a=new URLSearchParams(location.search);a.delete("command_palette_open"),a.delete("command_query"),a.delete("command_mode"),a.delete("clear_command_scope"),history.replaceState(null,"",`?${a}${location.hash}`)}displayFlash(a,b,c=5e3){let d=document.querySelector(".js-command-palette-toasts");if(!d)return;let e=d.querySelectorAll(".Toast");for(let f of e)f.hidden=!0;let g=d.querySelector(`.Toast.Toast--${a}`);if(!g)return;let h=g.querySelector(".Toast-content");h.textContent=b,g.hidden=!1,setTimeout(()=>{g.hidden=!0},c)}constructor(...a){super(...a),this.everActivated=!1,this.activated=!1,this.error=!1,this.query=new i.A("",""),this.setupComplete=!1,this.sessionId="",this.returnTo="",this.userId="",this.defaultOpen=!1,this.activationHotkey="Mod+k,Mod+Alt+k",this.commandModeHotkey="Mod+Shift+k,Control+K"}}).tagName="command-palette",d.attrPrefix="",d);m([e.Lj],s.prototype,"returnTo",void 0),m([e.Lj],s.prototype,"userId",void 0),m([e.Lj],s.prototype,"defaultOpen",void 0),m([e.Lj],s.prototype,"activationHotkey",void 0),m([e.Lj],s.prototype,"commandModeHotkey",void 0),m([e.fA],s.prototype,"pageStack",void 0),m([e.GO],s.prototype,"clientDefinedProviderElements",void 0),m([e.GO],s.prototype,"serverDefinedProviderElements",void 0),m([(0,k.D)(250)],s.prototype,"clearCommands",null),s=m([e.Ih],s)},25543(a,b,c){c.d(b,{O:()=>h});var d,e=c(76006),f=c(38772),g=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let h=((d=class CommandPaletteItemGroupElement extends HTMLElement{connectedCallback(){this.classList.add("py-2","border-top"),this.setAttribute("hidden","true"),this.skipTemplate||this.renderElement(""),this.skipTemplate=!0}prepareForNewItems(){this.list.innerHTML="",this.setAttribute("hidden","true"),this.classList.contains("border-top")||this.classList.add("border-top")}hasItem(a){return this.list.querySelectorAll(`[data-item-id="${a.id}"]`).length>0}renderElement(a){let b=()=>this.hasTitle?f.dy`
          <div class="d-flex flex-justify-between my-2 px-3">
            <span data-target="command-palette-item-group.header" class="color-fg-muted text-bold f6 text-normal">
              ${this.groupTitle}
            </span>
            <span data-target="command-palette-item-group.header" class="color-fg-muted f6 text-normal">
              ${a?"":this.groupHint}
            </span>
          </div>
          <div
            role="listbox"
            class="list-style-none"
            data-target="command-palette-item-group.list"
            aria-label="${this.groupTitle} results"
          ></div>
        `:f.dy`
          <div
            role="listbox"
            class="list-style-none"
            data-target="command-palette-item-group.list"
            aria-label="${this.groupTitle} results"
          ></div>
        `;(0,f.sY)(b(),this)}push(a){this.removeAttribute("hidden"),this.topGroup&&this.atLimit?a.itemId!==this.firstItem.itemId&&this.replaceTopGroupItem(a):this.list.append(a)}replaceTopGroupItem(a){this.list.replaceChild(a,this.firstItem)}groupLimitForScope(){let a=this.closest("command-palette");if(a){let b=a.query.scope.type;return JSON.parse(this.groupLimits)[b]}}get limit(){let a=this.groupLimitForScope();return this.topGroup?1:this.isModeActive()?50:a?a:(0,CommandPaletteItemGroupElement.defaultGroupLimit)}get atLimit(){return this.list.children.length>=this.limit}parsedGroupLimits(){return this.groupLimits?JSON.parse(this.groupLimits):{}}limitForScopeType(a){let b=this.parsedGroupLimits(),c=b[a];return this.topGroup?1:this.isModeActive()?CommandPaletteItemGroupElement.activeModeLimit:c||0===c?c:(0,CommandPaletteItemGroupElement.defaultGroupLimit)}atLimitForScopeType(a){return this.list.children.length>=this.limitForScopeType(a)}isModeActive(){let a=this.closest("command-palette");return!!a&&a.getMode()}get topGroup(){return this.groupId===CommandPaletteItemGroupElement.topGroupId}get hasTitle(){return this.groupId!==CommandPaletteItemGroupElement.footerGroupId&&this.groupId!==CommandPaletteItemGroupElement.defaultGroupId}get itemNodes(){return this.list.querySelectorAll("command-palette-item")}get firstItem(){return this.itemNodes[0]}get lastItem(){return this.itemNodes[this.itemNodes.length-1]}constructor(...a){super(...a),this.groupLimits="",this.defaultPriority=0,this.skipTemplate=!1}}).defaultGroupLimit=5,d.activeModeLimit=50,d.topGroupId="top",d.defaultGroupId="default",d.footerGroupId="footer",d.helpGroupIds=["modes_help","filters_help"],d.commandGroupIds=["commands"],d.topGroupScoreThreshold=9,d);g([e.Lj],h.prototype,"groupTitle",void 0),g([e.Lj],h.prototype,"groupHint",void 0),g([e.Lj],h.prototype,"groupId",void 0),g([e.Lj],h.prototype,"groupLimits",void 0),g([e.Lj],h.prototype,"defaultPriority",void 0),g([e.Lj],h.prototype,"skipTemplate",void 0),g([e.fA],h.prototype,"list",void 0),g([e.fA],h.prototype,"header",void 0),h=g([e.Ih],h)},64316(a,b,c){c.d(b,{v:()=>l});var d,e=c(76006),f=c(38772),g=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let h=14,i=20,j=20,k=55,l=((d=class CommandPaletteScopeElement extends HTMLElement{connectedCallback(){this.classList.add("d-inline-flex")}get lastToken(){return this.tokens[this.tokens.length-1]}get text(){return this.tokens.map(a=>a.text).join("/")}get id(){return this.lastToken?this.lastToken.id:CommandPaletteScopeElement.emptyScope.id}get type(){return this.lastToken?this.lastToken.type:CommandPaletteScopeElement.emptyScope.type}get scope(){return this.hasScope()?{text:this.text,type:this.type,id:this.id,tokens:this.tokens}:CommandPaletteScopeElement.emptyScope}set scope(a){this.renderTokens(a.tokens)}renderTokens(a){this.clearScope();let b=0,c=a.length,d=this.smallDisplay?h:j,e=this.smallDisplay?i:k;for(let g=a.length-1;g>=0&&!(b+Math.min(a[g].text.length,d)+5>e);g--)b+=Math.min(a[g].text.length,d)+5,c=g;let l=a=>f.dy`${a.map(m)}`,m=(a,b)=>{let e=a.text.length>d?`${a.text.substring(0,d-3)}...`:a.text;return f.dy`
        <command-palette-token
          data-text="${a.text}"
          data-id="${a.id}"
          data-type="${a.type}"
          data-value="${a.value}"
          data-targets="command-palette-scope.tokens"
          hidden="${b<c}"
          class="color-fg-default text-semibold"
          style="white-space:nowrap;line-height:20px;"
          >${e}<span class="color-fg-subtle text-normal">&nbsp;&nbsp;/&nbsp;&nbsp;</span>
        </command-palette-token>
      `};(0,f.sY)(l(a),this),this.hidden=!this.hasScope(),0!==c&&(this.placeholder.hidden=!1)}removeToken(){this.lastToken&&(this.lastRemovedToken=this.lastToken,this.lastToken.remove(),this.renderTokens(this.tokens))}hasScope(){return this.tokens.length>0&&this.type&&this.id&&this.text}clearScope(){for(let a of this.tokens)a.remove();this.placeholder.hidden=!0}attributeChangedCallback(a,b,c){this.isConnected&&"data-small-display"===a&&b!==c&&this.renderTokens(this.tokens)}constructor(...a){super(...a),this.smallDisplay=!1}}).emptyScope={type:"",text:"",id:"",tokens:[]},d.observedAttributes=["data-small-display"],d);g([e.Lj],l.prototype,"smallDisplay",void 0),g([e.fA],l.prototype,"placeholder",void 0),g([e.GO],l.prototype,"tokens",void 0),l=g([e.Ih],l)},98950(a,b,c){c.d(b,{z:()=>d});function d(a){if("clipboard"in navigator)return navigator.clipboard.writeText(a);let b=document.body;if(!b)return Promise.reject(Error());let c=function(a){let b=document.createElement("pre");return b.style.width="1px",b.style.height="1px",b.style.position="fixed",b.style.top="5px",b.textContent=a,b}(a);return b.appendChild(c),!function(a){if("clipboard"in navigator)return navigator.clipboard.writeText(a.textContent||"");let b=getSelection();if(null==b)return Promise.reject(Error());b.removeAllRanges();let c=document.createRange();return c.selectNodeContents(a),b.addRange(c),document.execCommand("copy"),b.removeAllRanges(),Promise.resolve()}(c),b.removeChild(c),Promise.resolve()}},24728(a,b,c){c.d(b,{i:()=>f});var d=c(7667),e=c(34106);let f=class AccessPolicyItem extends e.g{activate(a,b){b instanceof PointerEvent?super.activate(a,b):b instanceof KeyboardEvent&&this.activateLinkBehavior(a,b,(0,d.o)(b))}get key(){return this.title}};f=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g}([e.O],f)},776(a,b,c){c.d(b,{d:()=>f});var d=c(34106),e=c(67269);let f=class CommandItem extends d.g{get action(){return this._action}async activate(a){super.activate(a);let b=a.getAttribute("commands-path");if(!b)return;let c=a.query.params();c.set("command",this.action.id),a.commandPaletteInput.loading=!0;let d=await (0,e.Q)(b,{method:"POST",body:c});if(a.commandPaletteInput.loading=!1,d.ok){let f=await d.json();this.handleResponse(a,f.action,f.arguments)}else a.displayFlash("error","Failed to run command")}handleResponse(a,b,c){"displayFlash"===b&&(a.displayFlash(c.type,c.message),a.dismiss())}constructor(a){super(a),this.typeahead=a.title,this.group="commands"}};f=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g}([d.O],f)},4328(a,b,c){c.d(b,{Z:()=>f});var d=c(34106),e=c(98950);let f=class CopyableItem extends d.g{get action(){return this._action}async activate(a){super.activate(a);try{await (0,e.z)(this.action.text),a.displayFlash("success",this.action.message),a.dismiss()}catch{a.displayFlash("error","Copy failed")}}constructor(a){super(a),this.priority=11,this.score=1,this.typeahead=a.title,this.group="commands"}};f=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g}([d.O],f)},79922(a,b,c){c.d(b,{B:()=>e});var d=c(34106);let e=class HelpItem extends d.g{static from(a){return new HelpItem({title:a.title,typeahead:"",priority:-10-a.index,score:-10,group:a.group,action:{type:"help",description:"",prefix:a.prefix},persistentHint:a.persistentHint})}activate(a,b){a.commandPaletteInput.inputValue=this.action.prefix+a.getTextWithoutMode()}autocomplete(a){a.commandPaletteInput.inputValue=this.action.prefix+a.getTextWithoutMode()}calculateScore(a){return 0}get action(){return this._action}constructor(a){super(a),this.persistentHint=a.persistentHint}};e=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g}([d.O],e)},8407(a,b,c){c.d(b,{s:()=>f});var d=c(7667),e=c(34106);let f=class JumpToItem extends e.g{static from(a){return new JumpToItem({title:a.title,typeahead:a.title,priority:1,score:1,group:a.group,action:{type:"jump_to",description:"",path:a.path},icon:{type:"octicon",id:a.icon}})}activate(a,b){b instanceof PointerEvent?super.activate(a,b):b instanceof KeyboardEvent&&this.activateLinkBehavior(a,b,(0,d.o)(b))}copy(a){super.copy(a);let b=new URL(this.action.path,window.location.origin);return this.copyToClipboardAndAnnounce(b.toString()),b.toString()}get key(){return`${super.key}/${this.action.path}`}get action(){return this._action}};f=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g}([e.O],f)},73072(a,b,c){c.d(b,{V:()=>f});var d=c(8407),e=c(34106);let f=class JumpToOrgItem extends d.s{};f=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g}([e.O],f)},35446(a,b,c){c.d(b,{W:()=>f});var d=c(8407),e=c(34106);let f=class JumpToTeamItem extends d.s{};f=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g}([e.O],f)},63927(a,b,c){c.d(b,{U:()=>MainWindowCommandItem});var d=c(33241);class MainWindowCommandItem extends d.ck{get path(){}copy(a){}activate(a){this.command.run(a),this.command.dismissAfterRun&&a.dismiss()}isApplicable(a){return this.command.isApplicable(a)}select(a){this.command.select?this.command.select(a):a.autocomplete(this)}constructor(a,b){super({title:b.title??a.title,subtitle:b.subtitle??a.subtitle,typeahead:b.title??a.title,priority:b.priority??a.priority,group:b.group??a.group,icon:{type:b.iconType??a.iconType,id:b.icon??a.icon},hint:"Run command"}),this.command=a}}},95639(a,b,c){c.d(b,{K:()=>h});var d,e=c(34106),f=c(25543),g=c(8407);let h=((d=class SearchLinkItem extends g.s{static create(a){let b,c,d=[...a.scope.tokens];for(;d.length>0&&!this.searchableScopeTypes.includes(d[d.length-1].type);)d.pop();let e;if((e=d.length>0?d[d.length-1]:void 0)&&"repository"===e.type){let g=d.map(a=>a.text).join("/");b=`in ${g}`,c=`/${g}/search?q=${a.text}`}else if(e&&"owner"===e.type){let h=`org:${e.text} ${a.text}`;b=`in ${e.text}`,c=`/search?q=${h}`}else b="across all of GitHub",c=`/search?q=${a.text}`;return new SearchLinkItem({title:`Search ${a.text}${b}`,typeahead:"",priority:-10,score:-10,group:f.O.footerGroupId,action:{type:"jump_to",description:"",path:c},icon:{type:"octicon",id:"search-color-fg-muted"},titleScope:b})}autocomplete(a){}calculateScore(a){return 0}constructor(a){super(a),this.titleScope=a.titleScope}}).searchableScopeTypes=["owner","repository"],d);h=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g}([e.O],h)},34106(a,b,c){c.d(b,{O:()=>f,g:()=>ServerDefinedItem});var d=c(33241),e=c(25543);function f(a){ServerDefinedItem.register(a)}class ServerDefinedItem extends d.ck{static register(a){this.itemClasses[a.itemType]=a}static get itemType(){return this.buildItemType(this.name)}static buildItemType(a){return a.replace(/([A-Z]($|[a-z]))/g,"_$1").replace(/(^_|_Item$)/g,"").toLowerCase()}static build(a){let b=this.itemClasses[a.action.type];if(b)return new b(a);throw Error(`No item handler for ${a.action.type}`)}get action(){return this._action}get key(){return`${this.action.type}/${this.title}/${this.group}`}get path(){return this.action.path||""}get itemType(){return ServerDefinedItem.buildItemType(this.constructor.name)}select(a){this.scope?a.setScope(this.scope):a.autocomplete(this)}activate(a,b){}activateLinkBehavior(a,b,c){this.element?.activateLinkBehavior(a,b,c)}copy(a){}copyToClipboardAndAnnounce(a,b){this.element?.copyToClipboardAndAnnounce(a,b)}constructor(a){super(a),this.position="",this.score=a.score,this.scope=a.scope,this.matchFields=a.match_fields,this._action=a.action}}ServerDefinedItem.itemClasses={},ServerDefinedItem.defaultData={title:"",score:1,priority:1,action:{type:"",path:""},icon:{type:"octicon",id:"dash-color-fg-muted"},group:e.O.defaultGroupId}},48084(a,b,c){c.d(b,{j:()=>GlobalProvidersPage});class GlobalProvidersPage{get providers(){let a=[];for(let b of this._providerElements)b.provider&&a.push(b.provider);return a}get _providerElements(){return[...this.serverDefinedProviderElements,...this.clientDefinedProviderElements]}get serverDefinedProviderElements(){let a=document.querySelectorAll("server-defined-provider");return Array.from(a)}get clientDefinedProviderElements(){let a=document.querySelectorAll("client-defined-provider");return Array.from(a)}constructor(a){this.title=a.title,this.scopeId=a.scopeId,this.scopeType=a.scopeType}}},16852(a,b,c){c.d(b,{b:()=>ProviderElement});class ProviderElement extends HTMLElement{async fetchWithDebounce(a,b){return this.provider?(this._lastFetchQuery=a,await this.delay(this.provider.debounce),this._lastFetchQuery!==a)?{results:[]}:this.provider.fetch(a,b):{results:[]}}delay(a){return new Promise(b=>setTimeout(b,a))}}},97165(a,b,c){c.d(b,{B:()=>ProviderBase});var d=c(33241);class ProviderBase extends d.BX{fuzzyFilter(a,b,c=0){if(b.isBlank())return a;let d=[];for(let e of a){let f=e.calculateScore(b.text);f>c&&d.push(e)}return d}}},89803(a,b,c){c.d(b,{j:()=>ServerDefinedProvider});var d=c(97165);class ServerDefinedProvider extends d.B{get type(){return this.element.type}get modes(){return this.element.modes}get debounce(){return this.element.debounce}get scopeTypes(){return this.element.scopeTypes}get src(){return this.element.src}get hasWildCard(){return this.element.hasWildCard}get hasCommands(){return this.element.hasCommands}fetch(a,b){throw Error("Method not implemented.")}enabledFor(a){throw Error("Method not implemented.")}clearCache(){throw Error("Method not implemented.")}constructor(a){super(),this.element=a}}},50034(a,b,c){c.d(b,{A:()=>Query});var d=c(64316);class Query{get text(){return this.queryText}get mode(){return this.queryMode}get path(){return this.buildPath(this)}buildPath(a,b=a.text){return`scope:${a.scope.type}-${a.scope.id}/mode:${a.mode}/query:${b}`}clearScope(){this.scope=d.v.emptyScope}hasScope(){return this.scope.id!==d.v.emptyScope.id}isBlank(){return 0===this.text.trim().length}isPresent(){return!this.isBlank()}immutableCopy(){let a=this.text,b=this.mode,c={...this.scope};return new Query(a,b,{scope:c,subjectId:this.subjectId,subjectType:this.subjectType,returnTo:this.returnTo})}hasSameScope(a){return this.scope.id===a.scope.id}params(){let a=new URLSearchParams;return this.isPresent()&&a.set("q",this.text),this.hasScope()&&a.set("scope",this.scope.id),this.mode&&a.set("mode",this.mode),this.returnTo&&a.set("return_to",this.returnTo),this.subjectId&&a.set("subject",this.subjectId),a}constructor(a,b,{scope:c,subjectId:e,subjectType:f,returnTo:g}={}){this.queryText=a,this.queryMode=b,this.scope=c??d.v.emptyScope,this.subjectId=e,this.subjectType=f,this.returnTo=g}}},52418(a,b,c){c.d(b,{j:()=>k});var d=c(24728),e=c(776),f=c(4328),g=c(8407),h=c(63927),i=c(34106),j=c(78459);function k(a,b){let c=document.querySelector("command-palette"),d="";b&&("commands"===b.group||"global_commands"===b.group)&&(d=b.title);let e={command_palette_session_id:c.sessionId,command_palette_scope:c.query.scope.type,command_palette_mode:c.getMode(),command_palette_title:d,command_palette_position:b?.position,command_palette_score:b?.score,command_palette_group:b?.group,command_palette_item_type:b instanceof i.g?b?.itemType:b?.constructor.name},f;f="activate"===a?l(b):a,(0,j.q)(`command_palette_${f}`,e)}function l(a){return a instanceof d.i?"access_policy_executed":a instanceof e.d||a instanceof h.U||a instanceof f.Z?"command_executed":a instanceof g.s?a.element?.newTabOpened?"jump_to_new_tab":"jump_to":"activate"}},80721(a,b,c){c.d(b,{C:()=>f,x:()=>e});var d=c(94109);let e=d.n4?.readyState==="interactive"||d.n4?.readyState==="complete"?Promise.resolve():new Promise(a=>{d.n4?.addEventListener("DOMContentLoaded",()=>{a()})}),f=d.n4?.readyState==="complete"?Promise.resolve():new Promise(a=>{d.iG?.addEventListener("load",a)})},78459(a,b,c){c.d(b,{Y:()=>n,q:()=>o});var d=c(88149),e=c(86058),f=c(86702);let{getItem:g}=(0,f.Z)("localStorage"),h="dimension_",i,j=["utm_source","utm_medium","utm_campaign","utm_term","utm_content","scid"];try{let k=(0,d.n)("octolytics");delete k.baseContext,i=new e.R(k)}catch(l){}function m(a){let b=(0,d.n)("octolytics").baseContext||{};if(b)for(let c in delete b.app_id,delete b.event_url,delete b.host,b)c.startsWith(h)&&(b[c.replace(h,"")]=b[c],delete b[c]);let e=document.querySelector("meta[name=visitor-payload]");if(e){let f=JSON.parse(atob(e.content));Object.assign(b,f)}let g=new URLSearchParams(window.location.search);for(let[i,k]of g)j.includes(i.toLowerCase())&&(b[i]=k);return Object.assign(b,a)}function n(a){i?.sendPageView(m(a))}function o(a,b={}){let c=document.head?.querySelector('meta[name="current-catalog-service"]')?.content,d=c?{service:c}:{};for(let[e,f]of Object.entries(b))null!=f&&(d[e]=`${f}`);i&&(p(a||"unknown",m(d)),i.sendEvent(a||"unknown",m(d)))}function p(a,b){}},86702(a,b,c){c.d(b,{Z:()=>g,"_":()=>h});var d=c(94109),e=c(34855);let f=class NoOpStorage{getItem(){return null}setItem(){}removeItem(){}clear(){}key(){return null}get length(){return 0}};function g(a,b={throwQuotaErrorsOnSet:!1},c=d.iG,g=a=>a,h=a=>a){let i;try{if(!c)throw Error();i=c[a]||new f}catch{i=new f}let{throwQuotaErrorsOnSet:j}=b;function k(a){b.sendCacheStats&&(0,e.b)({incrementKey:a})}function l(a){try{if(i.removeItem(a),b.ttl){let c=`${a}:expiry`;i.removeItem(c)}}catch(d){}}return{getItem:function(a,b=new Date().getTime()){try{let c=i.getItem(a);if(!c)return null;let d=`${a}:expiry`,e=Number(i.getItem(d));if(e&&b>e)return l(a),l(d),k("SAFE_STORAGE_VALUE_EXPIRED"),null;return k("SAFE_STORAGE_VALUE_WITHIN_TTL"),g(c)}catch(f){return null}},setItem:function(a,c,d=new Date().getTime()){try{if(i.setItem(a,h(c)),b.ttl){let e=`${a}:expiry`,f=d+b.ttl;i.setItem(e,f.toString())}}catch(g){if(j&&g.message.toLowerCase().includes("quota"))throw g}},removeItem:l,clear:i.clear,key:i.key,get length(){return i.length}}}function h(a){return g(a,{throwQuotaErrorsOnSet:!1},window,JSON.parse,JSON.stringify)}},34855(a,b,c){c.d(b,{B:()=>l,b:()=>g});var d=c(94109),e=c(80721);let f=[];function g(a,b=!1){void 0===a.timestamp&&(a.timestamp=new Date().getTime()),a.loggedIn=k(),a.staff=l(),f.push(a),b?j():i()}let h=null;async function i(){await e.C,null==h&&(h=window.requestIdleCallback(j))}function j(){if(h=null,!f.length)return;let a=d.n4?.head?.querySelector('meta[name="browser-stats-url"]')?.content;if(!a)return;let b=JSON.stringify({stats:f});try{navigator.sendBeacon&&navigator.sendBeacon(a,b)}catch{}f=[]}function k(){return!!d.n4?.head?.querySelector('meta[name="user-login"]')?.content}function l(){return!!d.n4?.head?.querySelector('meta[name="user-staff"]')?.content}d.n4?.addEventListener("pagehide",j),d.n4?.addEventListener("visibilitychange",j)},94109(a,b,c){c.d(b,{iG:()=>e,jX:()=>f,n4:()=>d});let d="undefined"==typeof document?void 0:document,e="undefined"==typeof window?void 0:window,f="undefined"==typeof location?{pathname:""}:location},67269(a,b,c){function d(a,b={}){if(a.match(/^https?:/))throw Error("Can not make cross-origin requests from verifiedFetch");let c={...b.headers,"GitHub-Verified-Fetch":"true","X-Requested-With":"XMLHttpRequest"};return fetch(a,{...b,headers:c})}function e(a,b){let c=b?.headers??{},e=b?.body?JSON.stringify(b.body):void 0;return d(a,{...b,body:e,headers:{...c,Accept:"application/json","Content-Type":"application/json"}})}c.d(b,{Q:()=>d,v:()=>e})}}])
//# sourceMappingURL=app_assets_modules_github_command-palette_items_help-item_ts-app_assets_modules_github_comman-48ad9d-c6fb357964ed.js.map