(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("0mN4");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),s=r(a("VbXa")),l=r(a("8OQS")),o=r(a("pVnL")),c=r(a("q1tI")),d=r(a("17x9")),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},A=Object.create({}),m=function(e){var t=u(e),a=f(t);return A[a]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,p="undefined"!=typeof window,h=p&&window.IntersectionObserver,b=new WeakMap;function v(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},r&&c.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),c.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function E(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function w(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function y(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function S(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var j=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),b.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),b.set(e,t)),function(){a.unobserve(e),b.delete(e)}},N=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?S(e,!0):"")+S(e)})).join("")+"<img "+c+s+l+a+r+t+n+i+o+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},k=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=c.default.createElement(O,(0,o.default)({src:t},i));return a.length>1?c.default.createElement("picture",null,r(a),n):n},O=c.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,A=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return c.default.createElement("img",(0,o.default)({sizes:a,srcSet:r,src:i},A,{onLoad:s,onError:d,ref:t,loading:u,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));O.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var R=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=p&&m(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!g&&h&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||p&&(g||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=j(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),A[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,l=void 0===s?{}:s,d=e.placeholderStyle,f=void 0===d?{}:d,A=e.placeholderClassName,m=e.fluid,g=e.fixed,p=e.backgroundColor,h=e.durationFadeIn,b=e.Tag,E=e.itemProp,S=e.loading,j=e.draggable,R=!1===this.state.fadeIn||this.state.imgLoaded,B=!0===this.state.fadeIn&&!this.state.imgCached,L=(0,o.default)({opacity:R?1:0,transition:B?"opacity "+h+"ms":"none"},l),C="boolean"==typeof p?"lightgray":p,I={transitionDelay:h+"ms"},z=(0,o.default)({opacity:this.state.imgLoaded?0:1},B&&I,{},l,{},f),Q={title:t,alt:this.state.isVisible?"":a,style:z,className:A,itemProp:E};if(m){var V=m,P=V[0];return c.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(P.srcSet)},c.default.createElement(b,{style:{width:"100%",paddingBottom:100/P.aspectRatio+"%"}}),C&&c.default.createElement(b,{title:t,style:(0,o.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},B&&I)}),P.base64&&c.default.createElement(k,{src:P.base64,spreadProps:Q,imageVariants:V,generateSources:y}),P.tracedSVG&&c.default.createElement(k,{src:P.tracedSVG,spreadProps:Q,imageVariants:V,generateSources:w}),this.state.isVisible&&c.default.createElement("picture",null,v(V),c.default.createElement(O,{alt:a,title:t,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:S,draggable:j})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:N((0,o.default)({alt:a,title:t,loading:S},P,{imageVariants:V}))}}))}if(g){var T=g,x=T[0],Y=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:x.width,height:x.height},n);return"inherit"===n.display&&delete Y.display,c.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:Y,ref:this.handleRef,key:"fixed-"+JSON.stringify(x.srcSet)},C&&c.default.createElement(b,{title:t,style:(0,o.default)({backgroundColor:C,width:x.width,opacity:this.state.imgLoaded?0:1,height:x.height},B&&I)}),x.base64&&c.default.createElement(k,{src:x.base64,spreadProps:Q,imageVariants:T,generateSources:y}),x.tracedSVG&&c.default.createElement(k,{src:x.tracedSVG,spreadProps:Q,imageVariants:T,generateSources:w}),this.state.isVisible&&c.default.createElement("picture",null,v(T),c.default.createElement(O,{alt:a,title:t,width:x.width,height:x.height,sizes:x.sizes,src:x.src,crossOrigin:this.props.crossOrigin,srcSet:x.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:S,draggable:j})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:N((0,o.default)({alt:a,title:t,loading:S},x,{imageVariants:T}))}}))}return null},t}(c.default.Component);R.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var B=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),L=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});R.propTypes={resolutions:B,sizes:L,fixed:d.default.oneOfType([B,d.default.arrayOf(B)]),fluid:d.default.oneOfType([L,d.default.arrayOf(L)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var C=R;t.default=C},Dtc0:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),i=a.n(r),n=a("L6Je"),s=a("zVja"),l=a("nFEq"),o=a("9eSz"),c=a.n(o),d=(a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("91GP"),a("F5bI")),u=a.n(d);var f=function(e){var t=e.children,r=e.variant,n=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["children","variant"]),s=n.to?a("Wbzz").Link:"button";return i.a.createElement(s,Object.assign({className:u.a["button"+r.toUpperCase()]},n),t)};f.defaultProps={variant:""};var A=f,m=a("shRJ"),g=a.n(m),p=function(){var e=l.data;return i.a.createElement("div",{className:g.a.hero},i.a.createElement(c.a,{className:g.a.heroImage,fluid:e.imageSharp.fluid}),i.a.createElement("div",{className:g.a.content},i.a.createElement("h1",null,"Avila Tile makes sure every detail is perfect."),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit."),i.a.createElement(A,{to:"/page-2"},"View Projects")))},h=a("uxY1"),b=a.n(h),v=function(e){var t=e.children,a=e.color;return i.a.createElement("h2",{className:[b.a.fancyHeading,b.a["color"+a.toUpperCase()]].join(" ")},t)};v.defaultProps={color:"shiny"};var E=v,w=a("RTX6"),y=a.n(w),S=function(){return i.a.createElement("article",{className:y.a.businessInfo},i.a.createElement("div",{className:y.a.wrapper},i.a.createElement(E,null,"Next level craftsmanship"),i.a.createElement("p",null,"Family owned and operated, Avila Tile prides ourselves in delivering our best work to your business or residential improvement. Our clientele has built itself over the last 7 years based off of recommendation, professionalism and attention to detail."),i.a.createElement(A,null,"Learn More")))},j=a("FOna"),N=a.n(j),k=function(e){var t=e.options,a=(e.activeOption,e.setActiveOption);return i.a.createElement("select",{className:N.a.gallerySelect,onChange:function(e){var t=e.target;return a(t.value)}},t.map((function(e,t){return i.a.createElement("option",{value:e,key:e+t},e)})))},O=a("02lk"),R=a.n(O),B=function(e){var t=e.tabs,a=e.activeTab,r=e.setActiveTab,n=t.map((function(e,t){return i.a.createElement("button",{key:e+t,className:R.a["tab"+(e===a?"Active":"")],onClick:function(){return r(e)}},e)}));return i.a.createElement("section",{className:R.a.tabs},n)},L=function(e){var t=e.category;return i.a.createElement("div",null,t)};L.defaultProps={category:"All"};var C=L,I=function(){var e=Object(r.useState)("All"),t=e[0],a=e[1],n=["All","Kitchen","Bath","Floor","Fireplace","Specialty"];return i.a.createElement("section",null,i.a.createElement(k,{options:n,activeOption:t,setActiveOption:a}),i.a.createElement(B,{tabs:n,activeTab:t,setActiveTab:a}),i.a.createElement(C,{category:t}))},z=a("OU6V"),Q=a.n(z),V=function(){return i.a.createElement("article",{className:Q.a.projects},i.a.createElement(E,null,"Latest Projects"),i.a.createElement(I,null))},P=a("a+Y1"),T=a.n(P),x=function(e){var t,a,n,s,l=e.children,o=Object(r.useState)(0),c=o[0],d=o[1],u=Object(r.useState)(0),f=u[0],A=u[1],m=Object(r.useState)(!0),g=m[0],p=m[1],h=i.a.createRef(),b=(t=function(){h.current&&A(parseFloat(window.getComputedStyle(h.current).width))},a=250,function(){var e=this,r=arguments,i=function(){s=null,n||t.apply(e,r)},l=n&&!s;clearTimeout(s),s=setTimeout(i,a),l&&t.apply(e,r)});return Object(r.useEffect)((function(){return g&&(A(parseFloat(window.getComputedStyle(h.current).width)),p(!1)),window.addEventListener("resize",b),function(){return window.removeEventListener("resize",b)}})),i.a.createElement("div",{className:T.a.carousel},i.a.createElement("div",{ref:h,className:T.a.slidesWrapper,style:{transform:"translate("+f*c*-1+"px, 0)"}},l),i.a.createElement("div",{className:T.a.dots},l.map((function(e,t){return i.a.createElement("button",{className:t===c?T.a.dotActive:T.a.dot,key:t,onClick:function(){return d(t)},"aria-label":"Testimonial "+(t+1)})}))))},Y=a("fOeJ"),M=a.n(Y),F=function(e){var t=e.children;return i.a.createElement("div",{className:M.a.slide},t)},G=a("mAFW"),W=a.n(G),D=function(e){var t=e.testimonial,a=e.author;return i.a.createElement("div",{className:W.a.card},i.a.createElement("p",null,t),i.a.createElement("div",{className:W.a.author},"— ",a))},H=[{testimonial:"1 Avila Tile did an amazing job at my home. After being burned by a past floor company, Cristian came in and took over. His attention to detail and craftsmanship is of high quality and value. We also had an older home with awkward sizes, as well as cusom tile work we wanted to do. He is open to feedback while also giving professional advice and guidance on the job. Highly highly recommend and will hire again in the future!",author:"Shawn M."},{testimonial:"2 Avila Tile did an amazing job at my home. After being burned by a past floor company, Cristian came in and took over. His attention to detail and craftsmanship is of high quality and value. We also had an older home with awkward sizes, as well as cusom tile work we wanted to do. He is open to feedback while also giving professional advice and guidance on the job. Highly highly recommend and will hire again in the future!",author:"Shawn M."},{testimonial:"3 Avila Tile did an amazing job at my home. After being burned by a past floor company, Cristian came in and took over. His attention to detail and craftsmanship is of high quality and value. We also had an older home with awkward sizes, as well as cusom tile work we wanted to do. He is open to feedback while also giving professional advice and guidance on the job. Highly highly recommend and will hire again in the future!",author:"Shawn M."}],q=function(){var e=H.map((function(e,t){var a=e.testimonial,r=e.author;return i.a.createElement(F,{key:r+t},i.a.createElement(D,{testimonial:a,author:r}))}));return i.a.createElement(x,null,e)},J=a("n7Km"),U=a.n(J),Z=function(){return i.a.createElement("section",{className:U.a.testimonials},i.a.createElement("div",{className:U.a.wrapper},i.a.createElement(E,{color:"dark"},"What our clients say"),i.a.createElement(q,null)))},X=a("JN4Q"),_=a.n(X),K=function(){return i.a.createElement("section",{className:_.a.freeEstimateBanner},i.a.createElement("div",{className:_.a.wrapper},i.a.createElement("h2",{className:_.a.heading},"Get a FREE estimate!"),i.a.createElement(A,{variant:"ghost"},"Contact Us")))};t.default=function(){return i.a.createElement(n.a,null,i.a.createElement(s.a,{title:"Home"}),i.a.createElement(p,null),i.a.createElement(S,null),i.a.createElement(V,null),i.a.createElement(Z,null),i.a.createElement(K,null))}},nFEq:function(e){e.exports=JSON.parse('{"data":{"imageSharp":{"fluid":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAEDBP/EABYBAQEBAAAAAAAAAAAAAAAAAAEAAv/aAAwDAQACEAMQAAABdLvLmNY3/8QAGhAAAwADAQAAAAAAAAAAAAAAAAECERIiMf/aAAgBAQABBQJxIoRyao8MH//EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAEDAQE/Aar/xAAVEQEBAAAAAAAAAAAAAAAAAAAQEf/aAAgBAgEBPwGH/8QAGBAAAgMAAAAAAAAAAAAAAAAAADEQIUH/2gAIAQEABj8CQjCp/8QAGxAAAgIDAQAAAAAAAAAAAAAAAAERMSFRgZH/2gAIAQEAAT8hTcZM1PSJV7EjQlWt0Z2f/9oADAMBAAIAAwAAABCLz//EABYRAQEBAAAAAAAAAAAAAAAAAAARUf/aAAgBAwEBPxCla//EABYRAQEBAAAAAAAAAAAAAAAAAAARAf/aAAgBAgEBPxCEx//EABwQAQEBAQACAwAAAAAAAAAAAAERACExQVFhof/aAAgBAQABPxDu34BWaIAieMSRaPuMZz1223KgPSfbBFdX83//2Q==","aspectRatio":1.3333333333333333,"src":"/avila-tile-2/static/d47c349f75398d5cf5c5e2f7ee5b65bc/b04c0/hero-background.jpg","srcSet":"/avila-tile-2/static/d47c349f75398d5cf5c5e2f7ee5b65bc/a611f/hero-background.jpg 167w,\\n/avila-tile-2/static/d47c349f75398d5cf5c5e2f7ee5b65bc/af010/hero-background.jpg 333w,\\n/avila-tile-2/static/d47c349f75398d5cf5c5e2f7ee5b65bc/b04c0/hero-background.jpg 667w,\\n/avila-tile-2/static/d47c349f75398d5cf5c5e2f7ee5b65bc/db07b/hero-background.jpg 1000w,\\n/avila-tile-2/static/d47c349f75398d5cf5c5e2f7ee5b65bc/4c40a/hero-background.jpg 1333w,\\n/avila-tile-2/static/d47c349f75398d5cf5c5e2f7ee5b65bc/ebbea/hero-background.jpg 4032w","srcWebp":"/avila-tile-2/static/d47c349f75398d5cf5c5e2f7ee5b65bc/f780a/hero-background.webp","srcSetWebp":"/avila-tile-2/static/d47c349f75398d5cf5c5e2f7ee5b65bc/4962c/hero-background.webp 167w,\\n/avila-tile-2/static/d47c349f75398d5cf5c5e2f7ee5b65bc/f62ed/hero-background.webp 333w,\\n/avila-tile-2/static/d47c349f75398d5cf5c5e2f7ee5b65bc/f780a/hero-background.webp 667w,\\n/avila-tile-2/static/d47c349f75398d5cf5c5e2f7ee5b65bc/5bdec/hero-background.webp 1000w,\\n/avila-tile-2/static/d47c349f75398d5cf5c5e2f7ee5b65bc/78779/hero-background.webp 1333w,\\n/avila-tile-2/static/d47c349f75398d5cf5c5e2f7ee5b65bc/88bba/hero-background.webp 4032w","sizes":"(max-width: 667px) 100vw, 667px"}}}}')}}]);
//# sourceMappingURL=component---src-pages-index-jsx-ae86529655db4ebc8a27.js.map