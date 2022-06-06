"use strict";(self["webpackChunkbook_store"]=self["webpackChunkbook_store"]||[]).push([[511,509],{1263:function(t,o,e){e.r(o),e.d(o,{default:function(){return E}});var a=e(3396),r=e(7139);const s={key:1},i=(0,a._)("p",{style:{"text-align":"center"}},"фото",-1),n=(0,a._)("p",null,"название",-1),l=(0,a._)("p",{style:{"text-align":"center"}},"количество",-1),c=(0,a._)("p",{style:{"text-align":"center"}},"цена",-1),u=(0,a._)("p",null,null,-1),_=[i,n,l,c,u],k=(0,a._)("span",null,"Итого: ",-1),C=(0,a.Uk)("Перейти к оформлению"),y=(0,a._)("p",null,"Ваша корзина пуста",-1),B=[y];function d(t,o,e,i,n,l){const c=(0,a.up)("TheLoader"),u=(0,a.up)("BookCartBar"),y=(0,a.up)("ButtonBrown");return(0,a.wg)(),(0,a.iD)("section",null,[(0,a._)("h1",{class:(0,r.C_)(t.$style.title)},"Корзина",2),t.loadContent&&!t.emptyCart?((0,a.wg)(),(0,a.j4)(c,{key:0})):(0,a.kq)("",!0),t.loadContent||t.emptyCart?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",s,[(0,a._)("div",{class:(0,r.C_)(t.$style.headRow)},_,2),(0,a._)("hr",{class:(0,r.C_)(t.$style.line)},null,2),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.cartBooksList,((o,e)=>((0,a.wg)(),(0,a.iD)(a.HY,{key:e},[(0,a.Wm)(u,{book:o},null,8,["book"]),(0,a._)("hr",{class:(0,r.C_)(t.$style.line)},null,2)],64)))),128)),(0,a._)("div",{class:(0,r.C_)(t.$style.totalPriceBlock)},[(0,a._)("p",null,[k,(0,a.Uk)((0,r.zw)(t.totalPrice),1)]),(0,a.Wm)(y,{paddingLR:70,onClick:o[0]||(o[0]=o=>t.$router.push("/order"))},{default:(0,a.w5)((()=>[C])),_:1})],2)])),t.emptyCart?((0,a.wg)(),(0,a.iD)("div",{key:2,class:(0,r.C_)(t.$style.emptyCart)},B,2)):(0,a.kq)("",!0)])}var h=e(65),p=e(7795);const g=p+"#close",w={style:{"text-align":"center"}},b=["src"],m={key:0},$=(0,a._)("use",{href:g},null,-1),v=[$];function q(t,o,e,s,i,n){return(0,a.wg)(),(0,a.iD)("div",{class:(0,r.C_)(t.$style.bookCartBar)},[(0,a._)("div",w,[(0,a._)("img",{src:t.imageSrc,alt:"",class:(0,r.C_)(t.$style.image)},null,10,b)]),(0,a._)("div",{class:(0,r.C_)(t.$style.titleBlock)},[(0,a._)("p",{class:(0,r.C_)(t.$style.author)},(0,r.zw)(this.book?.author),3),(0,a._)("div",{class:(0,r.C_)(t.$style.title),onClick:o[0]||(o[0]=o=>this.$router.push(`/books/${t.bookId}`))},(0,r.zw)(this.book?.title),3)],2),(0,a._)("div",{class:(0,r.C_)(t.$style.quantityBlock)},[(0,a._)("button",{class:(0,r.C_)(t.$style.quantityButton),onClick:o[1]||(o[1]=o=>t.handleQuantityButton(this.book?.key,"decrease"))},"-",2),(0,a._)("span",{class:(0,r.C_)(t.$style.quantity)},(0,r.zw)(this.book?.quantityInCart),3),(0,a._)("button",{class:(0,r.C_)(t.$style.quantityButton),onClick:o[2]||(o[2]=o=>t.handleQuantityButton(this.book?.key,"increase"))},"+",2)],2),(0,a._)("div",{class:(0,r.C_)(t.$style.price)},[(0,a._)("span",{class:(0,r.C_)({[t.$style.lastPrice]:!!t.discountPrice})},(0,r.zw)(t.countPrice.toLocaleString("de-DE")),3),t.discountPrice?((0,a.wg)(),(0,a.iD)("span",m,(0,r.zw)(t.discountPrice.toLocaleString("de-DE")),1)):(0,a.kq)("",!0)],2),(0,a._)("div",{class:(0,r.C_)(t.$style.closeBlock)},[((0,a.wg)(),(0,a.iD)("svg",{class:(0,r.C_)(t.$style.iconClose),onClick:o[3]||(o[3]=o=>t.removeCartBook(this.book.key))},v,2))],2)],2)}var L=(0,a.aZ)({name:"BookCartBar",props:{book:{type:Object},imageSize:{type:String,default:"M"}},computed:{...(0,h.Se)(["cartBooksList","cartList"]),imageSrc(){return`https://covers.openlibrary.org/b/olid/${this.book?.image}-${this.imageSize}.jpg`},discountPrice(){const t=this.book?.discount,o=this.book?.price,e=this.book?.quantityInCart;return t&&o&&e?e*Math.ceil(o*(100-t)/100):null},countPrice(){const t=this.book?.price,o=this.book?.quantityInCart;return t&&o?t*o:null},bookId(){const t=this.book?this.book.key.split("/"):[],o=t[t.length-1];return o}},watch:{cartBooksList(){localStorage.setItem("cartList",JSON.stringify([...this.cartList]))}},methods:{...(0,h.nv)(["removeCartBook","changeCartBookQuantity"]),handleQuantityButton(t,o){this.changeCartBookQuantity({bookKey:t,type:o}),localStorage.setItem("cartList",JSON.stringify([...this.cartList]))}}}),f={price:"BookCartBar_price_rEhAY",lastPrice:"BookCartBar_lastPrice_BUzLY",quantityButton:"BookCartBar_quantityButton_QeOiH",quantity:"BookCartBar_quantity_hARmy",title:"BookCartBar_title_CHI0L",author:"BookCartBar_author_oUFfH",image:"BookCartBar_image_EgCW3",iconClose:"BookCartBar_iconClose_zNVtB",bookCartBar:"BookCartBar_bookCartBar_N22cX",titleBlock:"BookCartBar_titleBlock_yQrbn",quantityBlock:"BookCartBar_quantityBlock_MaWnR",closeBlock:"BookCartBar_closeBlock_xncHC"},P=e(89);const S={};S["$style"]=f;const z=(0,P.Z)(L,[["render",q],["__cssModules",S]]);var D=z,I=e(7861),Z=e(9966),R=(0,a.aZ)({name:"FavoritesView",data(){return{loadContent:!0}},components:{TheLoader:I.Z,BookCartBar:D,ButtonBrown:Z.Z},computed:{...(0,h.Se)(["cartBooksList","cartSize"]),totalPrice(){let t=0;return this.cartBooksList.forEach((o=>{t+=o.discount?Math.ceil(o.price*o.quantityInCart*(100-o.discount)/100):o.price*o.quantityInCart})),t.toLocaleString("de-DE")},emptyCart(){return!this.cartSize}},watch:{cartBooksList(){this.loadContent=!1}},methods:{...(0,h.nv)(["getCartBooks"])},mounted(){this.cartSize?this.getCartBooks():this.loadContent=!1}}),V={title:"CartView_title_qGBRA",line:"CartView_line_voFhO",headRow:"CartView_headRow_DZg52",totalPriceBlock:"CartView_totalPriceBlock_O5RVi",emptyCart:"CartView_emptyCart_RWZBc"};const M={};M["$style"]=V;const Q=(0,P.Z)(R,[["render",d],["__cssModules",M]]);var E=Q},337:function(t,o,e){e.r(o),e.d(o,{default:function(){return _}});var a=e(3396),r=e(7139);function s(t,o,e,s,i,n){return(0,a.wg)(),(0,a.iD)("div",{class:(0,r.C_)(t.$style.wrapper)},[(0,a._)("h1",{class:(0,r.C_)(t.$style.title)},"Страница находится в разработке...",2)],2)}var i=(0,a.aZ)({name:"PageNotFound"}),n={wrapper:"PageInProgress_wrapper_W2VA6"},l=e(89);const c={};c["$style"]=n;const u=(0,l.Z)(i,[["render",s],["__cssModules",c]]);var _=u}}]);
//# sourceMappingURL=cart.459d51a8.js.map