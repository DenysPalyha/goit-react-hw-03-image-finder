(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{21:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__2UJ9v"}},24:function(e,t,a){e.exports={Button:"Button_Button__3yMH4"}},25:function(e,t,a){e.exports={buttonApp:"ButtonApp_buttonApp__UknaN"}},26:function(e,t,a){e.exports={App:"PicturesRender_App__1MJ-i"}},27:function(e,t,a){e.exports=a(71)},7:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__2IKfk",SearchForm:"Searchbar_SearchForm__2F0IJ","SearchForm-button":"Searchbar_SearchForm-button__2lTVB","SearchForm-button-label":"Searchbar_SearchForm-button-label__3bGsg","SearchForm-input":"Searchbar_SearchForm-input__3JeGP"}},71:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(20),l=a.n(o),c=a(10),i=a(3),u=a(4),m=a(6),s=a(5),h=a(7),p=a.n(h),g=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={inputValue:""},e.handleOnChange=function(t){e.setState({inputValue:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.inputValue),e.setState({inputValue:""})},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("header",{className:p.a.Searchbar},r.a.createElement("form",{onSubmit:this.handleSubmit,className:p.a.SearchForm},r.a.createElement("button",{type:"submit",className:p.a["SearchForm-button"]},r.a.createElement("span",{className:p.a["SearchForm-button-label"]},"Search")),r.a.createElement("input",{className:p.a["SearchForm-input"],type:"text",value:this.state.inputValue,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleOnChange})))}}]),a}(n.Component),d=a(8),f=a.n(d),b=function(e){var t=e.images;return r.a.createElement(r.a.Fragment,null,t.map((function(e){var t=e.id,a=e.webformatURL,n=e.largeImageURL;return r.a.createElement("li",{key:t,className:f.a.ImageGalleryItem},r.a.createElement("img",{src:a,alt:n,className:f.a["ImageGalleryItem-image"]}))})))},y=a(21),v=a.n(y),S=a(9),_=a.n(S),I=function(e){var t=e.largeImageURL,a=e.onCloseModal;return r.a.createElement("div",{onClick:a,className:_.a.Overlay},r.a.createElement("div",{className:_.a.Modal},r.a.createElement("img",{src:t,alt:""})))},E=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={showModal:!1,largeImageURL:null},e.setLargeImages=function(t){if(t.currentTarget!==t.target){var a=t.target.alt;e.setState({showModal:!0,largeImageURL:a})}},e.closeModal=function(t){"Escape"!==t.code&&t.currentTarget!==t.target||e.setState({showModal:!1})},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.closeModal)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.closeModal)}},{key:"render",value:function(){var e=this.state,t=e.showModal,a=e.largeImageURL,n=this.props.images;return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:v.a.ImageGallery,onClick:this.setLargeImages},r.a.createElement(b,{images:n})),t&&r.a.createElement(I,{largeImageURL:a,onCloseModal:this.closeModal}))}}]),a}(n.Component),w=a(22),F=a.n(w),O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return F.a.get("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=18129096-e3f2e48d02076305a8e645261&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))},M=(a(49),a(23)),k=a.n(M),j=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(k.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3})}}]),a}(r.a.Component),A=a(24),N=a.n(A),C=function(e){var t=e.onFetchImages;return r.a.createElement("button",{type:"button",onClick:t,className:N.a.Button},"Load more")},G=a(25),L=a.n(G),B=function(e){var t=e.hendleButtonApp;return r.a.createElement("button",{type:"button",className:L.a.buttonApp,onClick:t})},U=a(26),x=a.n(U),R=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],loading:!1,error:null,searchQuery:"",page:1},e.fetchImages=function(){var t=e.state,a=t.searchQuery,n=t.page;e.setState({loading:!0}),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),O(a,n).then((function(t){return e.setState((function(e){return{images:[].concat(Object(c.a)(e.images),Object(c.a)(t)),page:e.page+1}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({loading:!1})}))},e.hendleSerchFormSubmite=function(t){e.setState({searchQuery:t,page:1,images:[]})},e.hendleButtonApp=function(){window.scrollTo({top:0,behavior:"smooth"})},e}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.fetchImages()}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.error,n=e.loading;return r.a.createElement("div",{className:x.a.App},r.a.createElement(g,{onSubmit:this.hendleSerchFormSubmite}),a&&r.a.createElement("p",null,"Whoops, something went wrong: ",a.message),t.length>1&&r.a.createElement(E,{images:t,imageShowModal:this.imagesModal}),n&&r.a.createElement(j,null),t.length>1&&!n&&r.a.createElement(C,{onFetchImages:this.fetchImages}),window.scrollY>2e3&&r.a.createElement(B,{hendleButtonApp:this.hendleButtonApp}))}}]),a}(n.Component),V=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(R,null))};l.a.render(r.a.createElement(V,null),document.getElementById("root"))},8:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3LTnv","ImageGalleryItem-image":"ImageGalleryItem_ImageGalleryItem-image__2-Ahp"}},9:function(e,t,a){e.exports={Overlay:"Modal_Overlay__3vXs8",Modal:"Modal_Modal__AOV3N"}}},[[27,1,2]]]);
//# sourceMappingURL=main.d9ecdb8a.chunk.js.map