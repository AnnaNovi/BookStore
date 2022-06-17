"use strict";(self["webpackChunkbook_store"]=self["webpackChunkbook_store"]||[]).push([[112],{7701:function(e,t,i){i.r(t),i.d(t,{default:function(){return S}});var o=i(3396),s=i(7139),a=i(7795);const l=a+"#like",r=a+"#check",c=a+"#notAvailable",n=["src"],k=(0,o._)("svg",null,[(0,o._)("use",{href:l})],-1),_=[k],u=(0,o._)("use",{href:r},null,-1),v=[u],B=(0,o.Uk)(" В наличии "),w=(0,o._)("use",{href:c},null,-1),h=[w],y=(0,o.Uk)(" Нет в наличии "),d={key:0};function p(e,t,i,a,l,r){const c=(0,o.up)("TheLoader"),k=(0,o.up)("BooksSwiper");return(0,o.wg)(),(0,o.iD)("section",{class:(0,s.C_)({[e.$style.wrapper]:!e.loadContent})},[e.loadContent?((0,o.wg)(),(0,o.j4)(c,{key:0})):(0,o.kq)("",!0),e.loadContent?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)(o.HY,{key:1},[(0,o._)("div",{class:(0,s.C_)(e.$style.image)},[(0,o._)("img",{src:e.imageSrc,alt:"",class:(0,s.C_)(e.$style.image)},null,10,n),(0,o._)("button",{class:(0,s.C_)([e.$style.like,{[e.$style.active]:this.like}]),onClick:t[0]||(t[0]=t=>e.handleLikeButton(this.activeBook.key))},_,2),e.activeBook.discount?((0,o.wg)(),(0,o.iD)("div",{key:0,class:(0,s.C_)(e.$style.sale)},(0,s.zw)(e.activeBook.discount)+"% ",3)):(0,o.kq)("",!0)],2),(0,o._)("div",{class:(0,s.C_)(e.$style.description)},[(0,o._)("div",{class:(0,s.C_)(e.$style.author)},(0,s.zw)(e.activeBook.author),3),(0,o._)("div",{class:(0,s.C_)(e.$style.title)},(0,s.zw)(e.activeBook.title),3),e.activeBook.available?((0,o.wg)(),(0,o.iD)("div",{key:0,class:(0,s.C_)(e.$style.available)},[((0,o.wg)(),(0,o.iD)("svg",{class:(0,s.C_)(e.$style.icon)},v,2)),B],2)):((0,o.wg)(),(0,o.iD)("div",{key:1,class:(0,s.C_)(e.$style.available)},[((0,o.wg)(),(0,o.iD)("svg",{class:(0,s.C_)(e.$style.icon)},h,2)),y],2)),(0,o._)("hr",{class:(0,s.C_)(e.$style.line)},null,2),(0,o._)("div",{class:(0,s.C_)(e.$style.innerWrapper)},[(0,o._)("div",{class:(0,s.C_)(e.$style.price)},[(0,o._)("span",{class:(0,s.C_)({[e.$style.lastPrice]:!!e.discountPrice})},(0,s.zw)(e.activeBook.price),3),e.discountPrice?((0,o.wg)(),(0,o.iD)("span",d,(0,s.zw)(e.discountPrice),1)):(0,o.kq)("",!0)],2),(0,o._)("button",{class:(0,s.C_)(e.$style.button)},"В корзину",2)],2),(0,o._)("hr",{class:(0,s.C_)(e.$style.line)},null,2),(0,o._)("div",{class:(0,s.C_)(e.$style.featureList)},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.featureList,((t,i)=>((0,o.wg)(),(0,o.iD)("div",{class:(0,s.C_)(e.$style.featureItem),key:i},[(0,o._)("span",null,(0,s.zw)(t[0]),1),(0,o._)("span",{class:(0,s.C_)(e.$style.featureItemValue)},(0,s.zw)(t[1]),3)],2)))),128))],2),(0,o._)("hr",{class:(0,s.C_)(e.$style.line)},null,2),e.activeBook.firstSentence?((0,o.wg)(),(0,o.iD)("p",{key:2,class:(0,s.C_)(e.$style.firstSentence)},(0,s.zw)(e.activeBook.firstSentence[0])+".. ",3)):(0,o.kq)("",!0)],2),(0,o.Wm)(k,{title:"Похожие продукты",type:"similar",class:(0,s.C_)(e.$style.swiper)},null,8,["class"])],64))],2)}var g=i(65),C=i(7861),f=i(5285),$=(0,o.aZ)({name:"BlogSingleView",data(){return{loadContent:!0,like:!1}},components:{TheLoader:C.Z,BooksSwiper:f.Z},computed:{...(0,g.Se)(["activeBook","favoritesList"]),imageSrc(){return`https://covers.openlibrary.org/b/olid/${this.activeBook?.image}-L.jpg`},discountPrice(){return this.activeBook?.discount?Math.ceil(this.activeBook?.price*(100-this.activeBook?.discount)/100):null},featureList(){return[["Издательство","BomBora"],["Год публикации",this.activeBook.publisherYear],["Количество страниц",this.activeBook.quantityOfPage],["Размер","21×36"],["Вес",`${this.activeBook.weight} гр`],["Тип обложки","Твёрдый переплёт"],["ISBN",this.activeBook.isbn]]}},watch:{activeBook(){this.loadContent=!1,this.checkFavoritesBook(this.activeBook?.key).then((e=>{this.like=e})),this.getSimilarBooks(this.activeBook?.subject)}},methods:{...(0,g.nv)(["getBookById","toggleFavoritesBook","checkFavoritesBook","getSimilarBooks"]),handleLikeButton(e){this.toggleFavoritesBook(e),this.like=!this.like,localStorage.setItem("favoritesList",JSON.stringify([...this.favoritesList]))}},mounted(){const e=this.$router.currentRoute.value.params.id;this.getBookById(e)}}),m={wrapper:"BookView_wrapper_MsAmq",image:"BookView_image_rG2Ep",author:"BookView_author_qHscb",title:"BookView_title_T4GTn",available:"BookView_available_N1jun",line:"BookView_line_lGRvK",icon:"BookView_icon_rK0Pi",price:"BookView_price_kKOxk",lastPrice:"BookView_lastPrice_OLE4g",like:"BookView_like_o0P7P",active:"BookView_active_RCa2L",button:"BookView_button_btaON",firstSentence:"BookView_firstSentence_YjjFd",featureItem:"BookView_featureItem_iqq8b",featureItemValue:"BookView_featureItemValue_MyX3v",swiper:"BookView_swiper_r9_yN",innerWrapper:"BookView_innerWrapper_XTYrL",featureList:"BookView_featureList_hLa03",sale:"BookView_sale_vE7qv"},b=i(89);const V={};V["$style"]=m;const L=(0,b.Z)($,[["render",p],["__cssModules",V]]);var S=L}}]);
//# sourceMappingURL=book.04a6f80c.js.map