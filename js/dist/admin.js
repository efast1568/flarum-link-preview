(()=>{var t={n:e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return t.d(a,{a}),a},d:(e,a)=>{for(var n in a)t.o(a,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:a[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};(()=>{"use strict";const e=flarum.core.compat["admin/app"];var a=t.n(e),n="datlechin-link-preview";a().initializers.add("datlechin/flarum-link-preview",(function(){a().extensionData.for(n).registerSetting({setting:n+".enable_batch_requests",label:a().translator.trans(n+".admin.settings.enable_batch_requests_label"),help:a().translator.trans(n+".admin.settings.enable_batch_requests_help"),type:"checkbox"}).registerSetting({setting:n+".convert_media_urls",label:a().translator.trans(n+".admin.settings.convert_media_urls_label"),help:a().translator.trans(n+".admin.settings.convert_media_urls_help"),type:"checkbox"}).registerSetting({setting:n+".use_google_favicons",label:a().translator.trans(n+".admin.settings.use_google_favicons_label"),help:a().translator.trans(n+".admin.settings.use_google_favicons_help"),type:"checkbox"}).registerSetting({setting:n+".blacklist",label:a().translator.trans(n+".admin.settings.blacklist_label"),help:a().translator.trans(n+".admin.settings.blacklist_help"),placeholder:a().translator.trans(n+".admin.settings.blacklist_placeholder"),type:"textarea"}).registerSetting({setting:n+".whitelist",label:a().translator.trans(n+".admin.settings.whitelist_label"),help:a().translator.trans(n+".admin.settings.whitelist_help"),placeholder:a().translator.trans(n+".admin.settings.whitelist_placeholder"),type:"textarea"}).registerSetting({setting:n+".cache_time",label:a().translator.trans(n+".admin.settings.cache_time_label"),help:a().translator.trans(n+".admin.settings.cache_time_help"),type:"number",min:0}).registerSetting({setting:n+".open_links_in_new_tab",label:a().translator.trans(n+".admin.settings.open_links_in_new_tab_label"),help:a().translator.trans(n+".admin.settings.open_links_in_new_tab_help"),type:"checkbox"})}))})(),module.exports={}})();
//# sourceMappingURL=admin.js.map