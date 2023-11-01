function e(e){return e&&e.__esModule?e.default:e}var t=globalThis,o={},i={},s=t.parcelRequire8f04;null==s&&((s=function(e){if(e in o)return o[e].exports;if(e in i){var t=i[e];delete i[e];var s={id:e,exports:{}};return o[e]=s,t.call(s.exports,s,s.exports),s.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},t.parcelRequire8f04=s);var a=s.register;a("ifJdc",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>o,set:e=>o=e,enumerable:!0,configurable:!0});var o,i=new Map;o=function(e,t){for(var o=0;o<t.length-1;o+=2)i.set(t[o],{baseUrl:e,path:t[o+1]})}}),a("D20OV",function(e,t){e.exports=new URL("apple.eccc0cef.svg",import.meta.url).toString()}),a("3dS40",function(e,t){e.exports=new URL("amazon.3527c8ee.svg",import.meta.url).toString()}),s("ifJdc").register(new URL("",import.meta.url).toString(),JSON.parse('["gNePF","shoppingList.7c11fdb5.js","5h1Oy","apple.eccc0cef.svg","d6HPj","amazon.3527c8ee.svg","1XyF0","trash.12ed25ac.svg","bSbOs","shoppingList.b087310e.css","6IVcl","shoppingList.1bc64588.js","cDgZQ","shoppingList.runtime.1a48ba7b.js"]')),s("7Abz9"),s("eEAQo"),s("3XIIJ"),s("lUzRb"),s("865h4");var r=s("7Abz9"),n=s("D20OV"),l=s("3dS40"),p={};p=new URL("trash.12ed25ac.svg",import.meta.url).toString();const c=document.getElementById("shoppBookList");function d(e){if(e.preventDefault(),e.target.dataset.book_id){let t=e.target.dataset.book_id,o=JSON.parse(localStorage.getItem("shoppingList")),i=o.indexOf(t);console.log(i),o.splice(i,1),localStorage.setItem("shoppingList",JSON.stringify(o));let s=JSON.parse(localStorage.getItem("shoppingList"));if(0===s.length){let e=document.querySelector(".empty-shopping-list");e.classList.add("visible")}let a=document.getElementById(t);a.remove()}}!async function(){let t=localStorage.getItem("shoppingList"),o=JSON.parse(t);if(null===o||0===o.length){let e=document.querySelector(".empty-shopping-list");e.classList.add("visible");return}o.forEach(async t=>{let o=await (0,r.fetchBookDetails)(t);!//tworzenie pojedynczej karty książki
function(t){let o=`<li class="shopList-item" id="${t._id}">
  <button class="remove-button" type="button" data-book_id="${t._id}">
  <img class="remove-button__icon" alt="trash icon" src=${/*@__PURE__*/e(p)} data-book_id="${t._id}"/>
</button>
<div class="shopList-item__wrapp">
<img class="shopList-item__photo" src=${t.book_image} alt="book photo" loading="lazy"/>
</div>
<div class="shopList-item__information">
<h1>${t.title}</h1>
<p class="shopList-item__category">${t.list_name}</p>
<div class="shopList-item__summary">
<p>${t.description}</p>
</div>
<div class="shopList-item__wrapper">
<p class="shopList-item__author">${t.author}</p>
<div class="shopList-item__icons">
<a href=${t.amazon_product_url} target="_blank" rel="noreferrer nofollow">
<img class="amazon-icon icon-shopping" alt="amazon-icon" src=${/*@__PURE__*/e(l)} />
</a>
<a href=${t.buy_links[1].url} target="_blank" rel="noopener noreferrer nofollow">
<img class="apple-icon icon-shopping" alt="apple-icon" src=${/*@__PURE__*/e(n)} />
</a>
</div>
</div>
</div>
</li>`;c.innerHTML+=o}(o)}),c.addEventListener("click",d)}();//# sourceMappingURL=shoppingList.7c11fdb5.js.map

//# sourceMappingURL=shoppingList.7c11fdb5.js.map
