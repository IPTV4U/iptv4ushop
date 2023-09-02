import{e as b,z as y,c as L,D as c}from"./links.b05f56db.js";import{l as f}from"./license.9a33db36.js";import{C as M}from"./index.0eabb636.js";import{r as o,o as a,b as l,w as n,a as C,t as d,f as u,c as _,d as p,D as S,g as D}from"./vue.runtime.esm-bundler.b39e1078.js";import{_ as h}from"./_plugin-vue_export-helper.b97bdf23.js";import{B as T}from"./DatePicker.fdb09133.js";import{C as B}from"./Blur.8cc39c73.js";import{C as A}from"./Index.3154537e.js";import O from"./ContentRankings.f649debf.js";import{C as J}from"./Index.f7bbb33f.js";import R from"./Dashboard.721a6008.js";import N from"./KeywordRankings.6fd801e8.js";import P from"./SeoStatistics.af9a9134.js";import"./default-i18n.3881921e.js";import"./isArrayLikeObject.22a096cb.js";import"./upperFirst.8df5cd57.js";import"./_stringToArray.4de3b1f3.js";import"./toString.0891eb3e.js";import"./Caret.164d8058.js";import"./get.ebf1fee6.js";import"./isUndefined.e8ec3d51.js";import"./_getAllKeys.4b428457.js";import"./_getTag.89be5fac.js";import"./debounce.dab81a7d.js";import"./toNumber.7bd2853f.js";import"./_baseTrim.8725856f.js";import"./isEqual.bdd0dbba.js";import"./_baseIsEqual.b767a7ae.js";import"./allowed.a612bc9b.js";/* empty css             */import"./params.f0608262.js";/* empty css                                            *//* empty css                                              */import"./constants.1758f66e.js";import"./Ellipse.d7f3195d.js";/* empty css                                              */import"./Header.21fcaf85.js";import"./addons.0c4e9c46.js";import"./LicenseKeyBar.d79b3571.js";import"./LogoGear.c42c709f.js";import"./AnimatedNumber.b765a5ab.js";import"./numbers.c7cb4085.js";import"./Logo.1077fe36.js";import"./Support.a273228a.js";import"./Tabs.d158aaab.js";import"./TruSeoScore.29220195.js";import"./Information.70c6532e.js";import"./Slide.cdf6c622.js";import"./Date.28399694.js";import"./Exclamation.2f8bed1f.js";import"./Url.cac1b1a0.js";import"./Gear.a85d4a2b.js";import"./Row.5242dafa.js";import"./PostsTable.5e397759.js";import"./WpTable.740eea27.js";import"./PostTypes.9ab32454.js";import"./Statistic.4c802d4b.js";import"./_arrayEach.56a9f647.js";import"./vue.runtime.esm-bundler.60c71097.js";import"./Tooltip.6979830f.js";import"./ScoreButton.a48abfb2.js";import"./Table.1ce53c08.js";import"./RequiredPlans.5dd93867.js";import"./Card.c4f6abf5.js";import"./Overview.2678936a.js";import"./DonutChartWithLegend.75733bae.js";import"./KeywordsGraph.e84cf518.js";import"./SeoStatisticsOverview.ba271959.js";import"./List.e308d058.js";import"./Statistics.c70089f2.js";const V={setup(){return{optionsStore:b(),searchStatisticsStore:y()}},components:{CoreAlert:M},data(){return{error:this.$t.__("Your connection with Google Search Console has expired or is invalid. Please check that your site is verified in Google Search Console and try to reconnect. If the problem persists, please contact our support team.",this.$td)}},computed:{invalidAuthentication(){var t,s;return this.searchStatisticsStore.unverifiedSite||typeof((s=(t=this.optionsStore.internalOptions.internal)==null?void 0:t.searchStatistics)==null?void 0:s.profile)!="object"}}};function G(t,s,i,g,r,e){const m=o("core-alert");return e.invalidAuthentication?(a(),l(m,{key:0,class:"aioseo-input-error aioseo-search-statistics-authentication-alert",type:"red"},{default:n(()=>[C("strong",null,d(r.error),1)]),_:1})):u("",!0)}const U=h(V,[["render",G]]),z={};function F(t,s){return a(),_("div")}const I=h(z,[["render",F]]),E={};function H(t,s){return a(),_("div")}const j=h(E,[["render",H]]);const q={setup(){return{licenseStore:L(),searchStatisticsStore:y()}},emits:["rolling"],components:{AuthenticationAlert:U,BaseDatePicker:T,CoreBlur:B,CoreMain:A,ContentRankings:O,Cta:J,Dashboard:R,KeywordRankings:N,PostDetail:I,Settings:j,SeoStatistics:P},data(){return{maxDate:null,minDate:null,loadingConnect:!1,strings:{pageName:this.$t.__("Search Statistics",this.$td),ctaHeaderText:this.$t.__("Connect your website to Google Search Console",this.$td),ctaDescription:this.$t.__("Connect to Google Search Console to receive valuable insights on how your content is being discovered. Identify areas for improvement in order to improve search engine rankings and drive more traffic to your website.",this.$td),ctaButtonText:this.$t.__("Connect to Google Search Console",this.$td),feature1:this.$t.__("Search traffic insights",this.$td),feature2:this.$t.__("Improved visibility",this.$td),feature3:this.$t.__("Track page and keyword rankings",this.$td),feature4:this.$t.__("Speed tests for individual pages/posts",this.$td)}}},computed:{defaultRange(){const t=new Date(`${this.searchStatisticsStore.range.start} 00:00:00`),s=new Date(`${this.searchStatisticsStore.range.end} 00:00:00`);return[t,s]},excludeTabs(){const t=["post-detail"];return(this.licenseStore.isUnlicensed||!f.hasCoreFeature("search-statistics"))&&t.push("settings"),t},isSettings(){return this.$route.name==="settings"},showConnectCta(){return(f.hasCoreFeature("search-statistics")&&!this.searchStatisticsStore.isConnected||this.searchStatisticsStore.unverifiedSite)&&!this.isSettings},showDatePicker(){return!["settings","content-rankings"].includes(this.$route.name)&&this.searchStatisticsStore.isConnected&&!this.searchStatisticsStore.unverifiedSite},containerClasses(){const t=[];return this.searchStatisticsStore.fetching&&t.push("aioseo-blur"),t},getOriginalMaxDate(){return this.searchStatisticsStore.latestAvailableDate?c.fromFormat(this.searchStatisticsStore.latestAvailableDate,"yyyy-MM-dd").setZone(c.zone)||c.local().plus({days:-2}):c.local().plus({days:-2})},datepickerShortcuts(){return[{text:this.$t.__("Last 7 Days",this.$td),value:()=>(window.aioseoBus.$emit("rolling","last7Days"),[this.getOriginalMaxDate.plus({days:-6}).toJSDate(),this.getOriginalMaxDate.toJSDate()])},{text:this.$t.__("Last 28 Days",this.$td),value:()=>(window.aioseoBus.$emit("rolling","last28Days"),[this.getOriginalMaxDate.plus({days:-27}).toJSDate(),this.getOriginalMaxDate.toJSDate()])},{text:this.$t.__("Last 3 Months",this.$td),value:()=>(window.aioseoBus.$emit("rolling","last3Months"),[this.getOriginalMaxDate.plus({days:-89}).toJSDate(),this.getOriginalMaxDate.toJSDate()])}]}},methods:{isDisabledDate(t){return this.minDate===null?!0:t.getTime()<this.minDate.getTime()||t.getTime()>this.maxDate.getTime()},onDateChange(t,s){this.searchStatisticsStore.setDateRange({dateRange:t,rolling:s})},connect(){this.loadingConnect=!0,this.searchStatisticsStore.getAuthUrl().then(t=>{window.location=t})},highlightShortcut(t){if(!t)return;document.querySelectorAll(".el-picker-panel__shortcut").forEach(i=>{switch(i.innerText){case this.$t.__("Last 7 Days",this.$td):t==="last7Days"?i.classList.add("active"):i.classList.remove("active");break;case this.$t.__("Last 28 Days",this.$td):t==="last28Days"?i.classList.add("active"):i.classList.remove("active");break;case this.$t.__("Last 3 Months",this.$td):t==="last3Months"?i.classList.add("active"):i.classList.remove("active");break;case this.$t.__("Last 6 Months",this.$td):t==="last6Months"?i.classList.add("active"):i.classList.remove("active");break;default:i.classList.remove("active")}})}},mounted(){this.minDate=c.now().plus({months:-16}).toJSDate(),this.maxDate=this.getOriginalMaxDate.toJSDate()}},K={key:0,class:"connect-cta"};function Y(t,s,i,g,r,e){const m=o("base-date-picker"),v=o("authentication-alert"),x=o("core-blur"),$=o("cta"),k=o("core-main");return a(),l(k,{"page-name":r.strings.pageName,"exclude-tabs":e.excludeTabs,showTabs:!e.excludeTabs.includes(t.$route.name),containerClasses:e.containerClasses},{extra:n(()=>[e.showDatePicker?(a(),l(m,{key:0,onChange:e.onDateChange,onUpdated:s[0]||(s[0]=w=>e.highlightShortcut(w)),defaultValue:e.defaultRange,defaultRolling:g.searchStatisticsStore.rolling,isDisabledDate:e.isDisabledDate,shortcuts:e.datepickerShortcuts,size:"small"},null,8,["onChange","defaultValue","defaultRolling","isDisabledDate","shortcuts"])):u("",!0)]),default:n(()=>[C("div",null,[p(v),e.showConnectCta?(a(),_("div",K,[p(x,null,{default:n(()=>[(a(),l(S(t.$route.name)))]),_:1}),p($,{"cta-button-action":"",onCtaButtonClick:e.connect,"cta-button-loading":r.loadingConnect,"show-link":!1,"button-text":r.strings.ctaButtonText,alignTop:!0,"feature-list":[r.strings.feature1,r.strings.feature2,r.strings.feature3,r.strings.feature4]},{"header-text":n(()=>[D(d(r.strings.ctaHeaderText),1)]),description:n(()=>[D(d(r.strings.ctaDescription),1)]),_:1},8,["onCtaButtonClick","cta-button-loading","button-text","feature-list"])])):u("",!0),e.showConnectCta?u("",!0):(a(),l(S(t.$route.name),{key:1}))])]),_:1},8,["page-name","exclude-tabs","showTabs","containerClasses"])}const me=h(q,[["render",Y]]);export{me as default};