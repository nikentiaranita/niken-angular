(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{B9Yq:function(t,e){t.exports=function(){throw new Error("define cannot be used indirect")}},JEAp:function(t,e,a){var n,i=i||function(t){"use strict";if(!(void 0===t||"undefined"!=typeof navigator&&/MSIE [1-9]\./.test(navigator.userAgent))){var e=function(){return t.URL||t.webkitURL||t},a=t.document.createElementNS("http://www.w3.org/1999/xhtml","a"),n="download"in a,i=/constructor/i.test(t.HTMLElement)||t.safari,o=/CriOS\/[\d]+/.test(navigator.userAgent),c=function(e){(t.setImmediate||t.setTimeout)(function(){throw e},0)},l=function(t){setTimeout(function(){"string"==typeof t?e().revokeObjectURL(t):t.remove()},4e4)},r=function(t){return/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob([String.fromCharCode(65279),t],{type:t.type}):t},b=function(b,s,d){d||(b=r(b));var u,p=this,h="application/octet-stream"===b.type,g=function(){!function(t,e,a){for(var n=(e=[].concat(e)).length;n--;){var i=t["on"+e[n]];if("function"==typeof i)try{i.call(t,t)}catch(o){c(o)}}}(p,"writestart progress write writeend".split(" "))};if(p.readyState=p.INIT,n)return u=e().createObjectURL(b),void setTimeout(function(){var t,e;a.href=u,a.download=s,t=a,e=new MouseEvent("click"),t.dispatchEvent(e),g(),l(u),p.readyState=p.DONE});!function(){if((o||h&&i)&&t.FileReader){var a=new FileReader;return a.onloadend=function(){var e=o?a.result:a.result.replace(/^data:[^;]*;/,"data:attachment/file;");t.open(e,"_blank")||(t.location.href=e),e=void 0,p.readyState=p.DONE,g()},a.readAsDataURL(b),void(p.readyState=p.INIT)}u||(u=e().createObjectURL(b)),h?t.location.href=u:t.open(u,"_blank")||(t.location.href=u),p.readyState=p.DONE,g(),l(u)}()},s=b.prototype;return"undefined"!=typeof navigator&&navigator.msSaveOrOpenBlob?function(t,e,a){return e=e||t.name||"download",a||(t=r(t)),navigator.msSaveOrOpenBlob(t,e)}:(s.abort=function(){},s.readyState=s.INIT=0,s.WRITING=1,s.DONE=2,s.error=s.onwritestart=s.onprogress=s.onwrite=s.onabort=s.onerror=s.onwriteend=null,function(t,e,a){return new b(t,e||t.name||"download",a)})}}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||this.content);t.exports?t.exports.saveAs=i:null!==a("B9Yq")&&null!==a("PDX0")&&(void 0===(n=(function(){return i}).call(e,a,e,t))||(t.exports=n))},PDX0:function(t,e){(function(e){t.exports=e}).call(this,{})},jkDv:function(t,e,a){"use strict";a.r(e),a.d(e,"AdminModule",function(){return T});var n=a("0IaG"),i=a("fXoL"),o=a("H+bZ"),c=a("kmnG"),l=a("qFsG"),r=a("3Pt+"),b=a("bTqV");let s=(()=>{class t{constructor(t,e,a){this.dialogRef=t,this.data=e,this.api=a}ngOnInit(){}saveData(){this.loading=!0,console.log(this.data),null==this.data.id?this.api.post("bookswithauth/",this.data).subscribe(t=>{this.dialogRef.close(this.data),this.loading=!1},t=>{this.loading=!1,alert("Tidak dapat menyimpan data")}):this.api.put("bookswithauth/"+this.data.id,this.data).subscribe(t=>{this.dialogRef.close(t),console.log(t),this.loading=!1},t=>{this.loading=!1,alert("Tidak dapat memperbarui data")})}}return t.\u0275fac=function(e){return new(e||t)(i.Qb(n.g),i.Qb(n.a),i.Qb(o.a))},t.\u0275cmp=i.Kb({type:t,selectors:[["app-product-detail"]],decls:32,vars:7,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["appearance","outline",2,"width","100%"],["matInput","",3,"ngModel","ngModelChange"],["matInput","","type","number",3,"ngModel","ngModelChange"],["mat-dialog-actions","","align","end"],["mat-button","","mat-dialog-close",""],["mat-flat-button","",3,"click"]],template:function(t,e){1&t&&(i.Wb(0,"h3",0),i.Hc(1," Detail Produk "),i.Vb(),i.Wb(2,"div",1),i.Wb(3,"mat-form-field",2),i.Wb(4,"mat-label"),i.Hc(5,"Judul"),i.Vb(),i.Wb(6,"input",3),i.gc("ngModelChange",function(t){return e.data.title=t}),i.Vb(),i.Vb(),i.Wb(7,"mat-form-field",2),i.Wb(8,"mat-label"),i.Hc(9,"Penulis"),i.Vb(),i.Wb(10,"input",3),i.gc("ngModelChange",function(t){return e.data.author=t}),i.Vb(),i.Vb(),i.Wb(11,"mat-form-field",2),i.Wb(12,"mat-label"),i.Hc(13,"Penerbit"),i.Vb(),i.Wb(14,"input",3),i.gc("ngModelChange",function(t){return e.data.publisher=t}),i.Vb(),i.Vb(),i.Wb(15,"mat-form-field",2),i.Wb(16,"mat-label"),i.Hc(17,"Tahun Terbit"),i.Vb(),i.Wb(18,"input",4),i.gc("ngModelChange",function(t){return e.data.year=t}),i.Vb(),i.Vb(),i.Wb(19,"mat-form-field",2),i.Wb(20,"mat-label"),i.Hc(21,"ISBN"),i.Vb(),i.Wb(22,"input",4),i.gc("ngModelChange",function(t){return e.data.isbn=t}),i.Vb(),i.Vb(),i.Wb(23,"mat-form-field",2),i.Wb(24,"mat-label"),i.Hc(25,"Harga"),i.Vb(),i.Wb(26,"input",4),i.gc("ngModelChange",function(t){return e.data.price=t}),i.Vb(),i.Vb(),i.Vb(),i.Wb(27,"div",5),i.Wb(28,"button",6),i.Hc(29,"Batal"),i.Vb(),i.Wb(30,"button",7),i.gc("click",function(){return e.saveData()}),i.Hc(31),i.Vb(),i.Vb()),2&t&&(i.Db(6),i.pc("ngModel",e.data.title),i.Db(4),i.pc("ngModel",e.data.author),i.Db(4),i.pc("ngModel",e.data.publisher),i.Db(4),i.pc("ngModel",e.data.year),i.Db(4),i.pc("ngModel",e.data.isbn),i.Db(4),i.pc("ngModel",e.data.price),i.Db(5),i.Jc(" ",e.loading?"Menyimpan..":"Simpan",""))},directives:[n.h,n.e,c.b,c.e,l.b,r.c,r.i,r.l,r.n,n.c,b.a,n.d],styles:[""]}),t})();var d=a("JEAp");let u=(()=>{class t{constructor(t,e,a){this.api=t,this.dialogRef=e,this.dialogData=a}ngOnInit(){console.log(this.dialogData)}onFileChange(t){t.target.files.length>0&&(this.selectedFile=t.target.files[0],console.log(this.selectedFile))}uploadFile(){let t=new FormData;t.append("file",this.selectedFile),this.loadingUpload=!0,this.api.upload(t).subscribe(t=>{this.updateProduct(t),console.log(t)},t=>{this.loadingUpload=!1,alert("Gagal mengunggah file")})}updateProduct(t){1==t.status?(this.updateBook(t),alert("File berhasil diunggah"),this.loadingUpload=!1,this.dialogRef.close()):alert(t.message)}updateBook(t){this.api.put("book/"+this.dialogData.id,{url:t.url}).subscribe(t=>{console.log(t)})}}return t.\u0275fac=function(e){return new(e||t)(i.Qb(o.a),i.Qb(n.g),i.Qb(n.a))},t.\u0275cmp=i.Kb({type:t,selectors:[["app-file-uploader"]],decls:13,vars:3,consts:[["mat-dialog-title",""],["mat-dialog-content",""],[1,"uk-flex","uk-flex-middle","uk-flex-center",2,"height","100px","outline","2px dashed #ccc","margin","10px",3,"click"],["type","file","id","file",2,"display","none",3,"change"],["fileInput",""],["mat-dialog-actions","","align","right"],["mat-button","","mat-dialog-close",""],["mat-flat-button","","color","primary",3,"disabled","click"]],template:function(t,e){if(1&t){const t=i.Xb();i.Wb(0,"h1",0),i.Hc(1,"Unggah File"),i.Vb(),i.Wb(2,"div",1),i.Wb(3,"div",2),i.gc("click",function(){return i.zc(t),i.xc(7).click()}),i.Wb(4,"span"),i.Hc(5),i.Vb(),i.Vb(),i.Wb(6,"input",3,4),i.gc("change",function(t){return e.onFileChange(t)}),i.Vb(),i.Vb(),i.Wb(8,"div",5),i.Wb(9,"button",6),i.Hc(10,"Cancel"),i.Vb(),i.Wb(11,"button",7),i.gc("click",function(){return e.uploadFile()}),i.Hc(12),i.Vb(),i.Vb()}2&t&&(i.Db(5),i.Ic(e.selectedFile?e.selectedFile.name:"Pilih File"),i.Db(6),i.pc("disabled",e.loadingUpload),i.Db(1),i.Ic(e.loadingUpload?"Uploading..":"Upload"))},styles:[""]}),t})();var p=a("tyNb"),h=a("ofXK"),g=a("Xa2L"),f=a("Wp6s"),m=a("NFeN");function k(t,e){1&t&&(i.Wb(0,"div",2),i.Rb(1,"mat-spinner"),i.Vb())}function V(t,e){1&t&&(i.Wb(0,"button",11),i.Wb(1,"mat-icon"),i.Hc(2,"download"),i.Vb(),i.Vb())}function W(t,e){if(1&t){const t=i.Xb();i.Wb(0,"tr"),i.Wb(1,"td"),i.Fc(2,V,3,0,"button",8),i.Vb(),i.Wb(3,"td"),i.Hc(4),i.Vb(),i.Wb(5,"td"),i.Hc(6),i.Vb(),i.Wb(7,"td"),i.Hc(8),i.Vb(),i.Wb(9,"td"),i.Hc(10),i.Vb(),i.Wb(11,"td"),i.Hc(12),i.Vb(),i.Wb(13,"td"),i.Hc(14),i.Vb(),i.Wb(15,"td"),i.Hc(16),i.Vb(),i.Wb(17,"td"),i.Wb(18,"button",9),i.gc("click",function(){i.zc(t);const a=e.$implicit,n=e.index;return i.kc(2).productDetail(a,n)}),i.Hc(19,"Edit"),i.Vb(),i.Wb(20,"button",10),i.gc("click",function(){i.zc(t);const a=e.$implicit,n=e.index;return i.kc(2).deleteProduct(a.id,n)}),i.Hc(21),i.Vb(),i.Vb(),i.Wb(22,"td"),i.Wb(23,"button",9),i.gc("click",function(){i.zc(t);const a=e.$implicit;return i.kc(2).uploadFile(a)}),i.Hc(24,"Upload"),i.Vb(),i.Vb(),i.Vb()}if(2&t){const t=e.$implicit,a=e.index,n=i.kc(2);i.Db(2),i.pc("ngIf",""!=t.url),i.Db(2),i.Ic(a+1),i.Db(2),i.Ic(t.title),i.Db(2),i.Ic(t.author),i.Db(2),i.Ic(t.publisher),i.Db(2),i.Ic(t.year),i.Db(2),i.Ic(t.isbn),i.Db(2),i.Ic(t.price),i.Db(4),i.pc("disabled",n.loadingDelete[a]),i.Db(1),i.Ic(n.loadingDelete[a]?"Menghapus..":"Delete")}}function v(t,e){if(1&t){const t=i.Xb();i.Wb(0,"mat-card"),i.Wb(1,"mat-card-header"),i.Wb(2,"mat-card-title"),i.Hc(3,"Products"),i.Vb(),i.Vb(),i.Wb(4,"mat-card-content"),i.Wb(5,"div",3),i.Rb(6,"span",4),i.Wb(7,"button",5),i.gc("click",function(){return i.zc(t),i.kc().productDetail({},-1)}),i.Hc(8,"Tambah Produk"),i.Vb(),i.Vb(),i.Wb(9,"table",6),i.Wb(10,"thead"),i.Rb(11,"th"),i.Wb(12,"th"),i.Hc(13,"No"),i.Vb(),i.Wb(14,"th"),i.Hc(15,"Judul"),i.Vb(),i.Wb(16,"th"),i.Hc(17,"Penulis"),i.Vb(),i.Wb(18,"th"),i.Hc(19,"Penerbit"),i.Vb(),i.Wb(20,"th"),i.Hc(21,"Tahun Terbit"),i.Vb(),i.Wb(22,"th"),i.Hc(23,"ISBN"),i.Vb(),i.Wb(24,"th"),i.Hc(25,"Harga"),i.Vb(),i.Vb(),i.Wb(26,"tbody"),i.Fc(27,W,25,10,"tr",7),i.Vb(),i.Vb(),i.Vb(),i.Vb()}if(2&t){const t=i.kc();i.Db(27),i.pc("ngForOf",t.books)}}let w=(()=>{class t{constructor(t,e,a){this.dialog=t,this.api=e,this.router=a,this.loadingDelete={},this.books=[]}ngOnInit(){this.checkLogin(),this.getBooks()}checkLogin(){this.api.get("bookswithauth/status").subscribe(t=>{},t=>{this.router.navigate(["/login"])})}getBooks(){this.loading=!0,this.api.get("bookswithauth").subscribe(t=>{this.books=t,this.loading=!1},t=>{this.loading=!1,alert("Silahkan reload halaman")})}productDetail(t,e){this.dialog.open(s,{width:"400px",data:t}).afterClosed().subscribe(a=>{a&&(-1==e?this.books.push(a):this.books[e]=t)})}deleteProduct(t,e){confirm("Yakin menghapus data "+t+" ?")&&(this.loadingDelete[e]=!0,this.api.delete("books/"+t).subscribe(t=>{this.books.splice(e,1),this.loadingDelete[e]=!1},t=>{this.loadingDelete[e]=!1,alert("Tidak dapat menghapus data")}))}uploadFile(t){this.dialog.open(u,{width:"400px",data:t}).afterClosed().subscribe(t=>{})}downloadFile(t){d.saveAs("http://api.sunhouse.co.id/bookstore/"+t.url)}}return t.\u0275fac=function(e){return new(e||t)(i.Qb(n.b),i.Qb(o.a),i.Qb(p.a))},t.\u0275cmp=i.Kb({type:t,selectors:[["app-products"]],decls:2,vars:2,consts:[["style","height: 300px","class","uk-flex uk-flex-center uk-flex-middle",4,"ngIf"],[4,"ngIf"],[1,"uk-flex","uk-flex-center","uk-flex-middle",2,"height","300px"],[1,"uk-flex"],[1,"uk-width-expand"],["mat-flat-button","","color","primary",3,"click"],[1,"uk-table","uk-table-middle","uk-table-divider"],[4,"ngFor","ngForOf"],["mat-icon-button","",4,"ngIf"],["mat-button","","color","primary",3,"click"],["mat-button","","color","warn",3,"disabled","click"],["mat-icon-button",""]],template:function(t,e){1&t&&(i.Fc(0,k,2,0,"div",0),i.Fc(1,v,28,1,"mat-card",1)),2&t&&(i.pc("ngIf",e.loading),i.Db(1),i.pc("ngIf",!e.loading))},directives:[h.l,g.b,f.a,f.c,f.e,f.b,b.a,h.k,m.a],styles:[""]}),t})();var x=a("/t3+"),D=a("XhcP"),y=a("MutI"),H=a("FKr1");let I=(()=>{class t{constructor(t,e){this.api=t,this.router=e,this.mode="side"}ngOnInit(){}checkLogin(){this.api.get("bookswithauth/status").subscribe(t=>{},t=>{this.router.navigate(["/login"])})}logOut(){confirm("Yakin ingin keluar ?")&&(localStorage.removeItem("authToken"),this.router.navigate(["/home"]))}}return t.\u0275fac=function(e){return new(e||t)(i.Qb(o.a),i.Qb(p.a))},t.\u0275cmp=i.Kb({type:t,selectors:[["app-home-admin"]],decls:28,vars:9,consts:[["color","primary",1,"example-header"],["mat-icon-button","",3,"click"],[1,"uk-width-expand"],["mat-button","",3,"click"],[1,"admin-container"],["mode","side",1,"sidenav-left",3,"position","opened","fixedInViewport","fixedTopGap","fixedBottomGap"],["sidenav",""],["routerLink","dashboard"],["matListIcon",""],["matLine",""],["routerLink","products"],["mode","side",1,"example-sidenav",3,"position","fixedInViewport","fixedTopGap","fixedBottomGap"],[2,"padding","20px","background-color","#ccc"]],template:function(t,e){if(1&t){const t=i.Xb();i.Ub(0),i.Wb(1,"mat-toolbar",0),i.Wb(2,"button",1),i.gc("click",function(){return i.zc(t),i.xc(12).toggle()}),i.Wb(3,"mat-icon"),i.Hc(4,"menu"),i.Vb(),i.Vb(),i.Wb(5,"span"),i.Hc(6,"Niken's Book Store"),i.Vb(),i.Rb(7,"div",2),i.Wb(8,"button",3),i.gc("click",function(){return e.logOut()}),i.Hc(9,"Logout"),i.Vb(),i.Vb(),i.Wb(10,"mat-sidenav-container",4),i.Wb(11,"mat-sidenav",5,6),i.Wb(13,"mat-nav-list"),i.Wb(14,"mat-list-item",7),i.Wb(15,"mat-icon",8),i.Hc(16,"dashboard"),i.Vb(),i.Wb(17,"h3",9),i.Hc(18,"Dashboard"),i.Vb(),i.Vb(),i.Wb(19,"mat-list-item",10),i.Wb(20,"mat-icon",8),i.Hc(21,"camera_enhance"),i.Vb(),i.Wb(22,"h3",9),i.Hc(23,"Product"),i.Vb(),i.Vb(),i.Vb(),i.Vb(),i.Rb(24,"mat-sidenav",11,6),i.Wb(26,"mat-sidenav-content",12),i.Rb(27,"router-outlet"),i.Vb(),i.Vb(),i.Tb()}2&t&&(i.Db(11),i.pc("position","start")("opened",!0)("fixedInViewport",!0)("fixedTopGap",70)("fixedBottomGap",0),i.Db(13),i.pc("position","end")("fixedInViewport",!0)("fixedTopGap",65)("fixedBottomGap",0))},directives:[x.a,b.a,m.a,D.b,D.a,y.d,y.b,p.b,y.a,H.j,D.c,p.e],styles:[".example-container[_ngcontent-%COMP%]{position:absolute;top:60px;bottom:0;left:0;right:0}.example-sidenav[_ngcontent-%COMP%]{width:350px}.example-sidenav[_ngcontent-%COMP%], .sidenav-left[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.sidenav-left[_ngcontent-%COMP%]{width:250px}"]}),t})(),M=(()=>{class t{constructor(t,e){this.api=t,this.router=e}ngOnInit(){this.checkLogin()}checkLogin(){this.api.get("bookswithauth/status").subscribe(t=>{},t=>{this.router.navigate(["/login"])})}}return t.\u0275fac=function(e){return new(e||t)(i.Qb(o.a),i.Qb(p.a))},t.\u0275cmp=i.Kb({type:t,selectors:[["app-dashboard"]],decls:2,vars:0,template:function(t,e){1&t&&(i.Wb(0,"p"),i.Hc(1,"dashboard works!"),i.Vb())},styles:[""]}),t})();var F=a("w55g");const O=[{path:"",component:I,children:[{path:"dashboard",component:M},{path:"products",component:w},{path:"",redirectTo:"/admin/dashboard",pathMatch:"full"}]}];let T=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.Ob({type:t}),t.\u0275inj=i.Nb({imports:[[h.c,p.d.forChild(O),F.a,r.e]]}),t})()}}]);