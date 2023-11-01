function e(e){return e&&e.__esModule?e.default:e}var t=globalThis,o={},n={},a=t.parcelRequire8f04;null==a&&((a=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var a={id:e,exports:{}};return o[e]=a,t.call(a.exports,a,a.exports),a.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},t.parcelRequire8f04=a);var l=a.register;l("ifJdc",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>o,set:e=>o=e,enumerable:!0,configurable:!0});var o,n=new Map;o=function(e,t){for(var o=0;o<t.length-1;o+=2)n.set(t[o],{baseUrl:e,path:t[o+1]})}}),l("D20OV",function(e,t){e.exports=new URL("apple.eccc0cef.svg",import.meta.url).toString()}),l("3dS40",function(e,t){e.exports=new URL("amazon.3527c8ee.svg",import.meta.url).toString()}),a("ifJdc").register(new URL("",import.meta.url).toString(),JSON.parse('["eFRlh","index.a10d1dd7.js","5h1Oy","apple.eccc0cef.svg","d6HPj","amazon.3527c8ee.svg","dadY1","barnesandnoble_logo.5e32b091.svg","hZXVu","booksamillion_logo.fcbc7356.svg","5tQdo","bookshop.f310b8df.png","d5QCj","indiebound_logo.207267c0.svg","bSbOs","shoppingList.fbe14b66.css","6IVcl","shoppingList.b8dd50e6.js","cDgZQ","shoppingList.runtime.4068ecb2.js"]')),a("7Abz9"),a("eEAQo"),a("3XIIJ"),a("lUzRb"),a("865h4");var i=a("D20OV"),r=a("3dS40"),s={};s=new URL("barnesandnoble_logo.5e32b091.svg",import.meta.url).toString();var c={};c=new URL("booksamillion_logo.fcbc7356.svg",import.meta.url).toString();var d={};d=new URL("bookshop.f310b8df.png",import.meta.url).toString();var p={};function u(t){let o=document.createElement("div");o.classList.add("book-card"),o.innerHTML=`
    <div class="popup-card-container">
        <div class="popup">
            <button class="popup-close-button">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" class="popup-iconx">
                <path d="M21 7L7 21M7 7L21 21" stroke="#111111" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg></button>
            <div class="popup-image-desc">
            <div>
                <img class="popup-img" src="${t.book_image}" alt="${t.title}" />
            </div>
            <div class="popup-authorandtitle">
                <h2 class="popup-title">${t.title}</h2>
                <p class="popup-author">Author: ${t.author}</p>
                <p class="popup-desc"> ${t.description}</p>
                <ul class="popup-list">
                  <li>
                    <a href=${t.amazon_product_url} target="_blank" rel="noopener noreferrer nofollow">
                    <img alt ="amazon icon" class="icon-shopping amazon-icon" width="32" height:"11" src=${/*@__PURE__*/e(r)} />
                    </a></li>
                  <li>
                    <a href=${t.buy_links[1].url} target="_blank">
                    <img class="icon-shopping aple-icon" src=${/*@__PURE__*/e(i)} width="16" height="16" alt="aple icon"  rel="noopener noreferrer nofollow"/>
                    </a>
                  </li>
                  <li>
                    <a href=${t.buy_links[2].url} target="_blank">
                    <img class="icon-shopping aple-icon" src=${/*@__PURE__*/e(s)} width="16" height="16" alt="Barnes And Noble icon"  rel="noopener noreferrer nofollow"/>
                    </a>
                  </li>
                  <li>
                    <a href=${t.buy_links[3].url} target="_blank">
                    <img class="icon-shopping aple-icon" src=${/*@__PURE__*/e(c)} width="16" height="16" alt="Books a Million icon"  rel="noopener noreferrer nofollow"/>
                    </a>
                  </li>
                  <li>
                  <a href=${t.buy_links[4].url} target="_blank">
                  <img class="icon-shopping aple-icon" src=${/*@__PURE__*/e(d)} width="16" height="16" alt="Bookshop icon"  rel="noopener noreferrer nofollow"/>
                  </a>
                </li>
                <li>
                  <a href=${t.buy_links[5].url} target="_blank">
                  <img class="icon-shopping aple-icon" src=${/*@__PURE__*/e(p)} width="25" height="25" alt="IndieBound icon"  rel="noopener noreferrer nofollow"/>
                  </a>
                </li>
                </ul>
            </div>
            </div>
          <div class="popup-button-position">
                  <button class="add-to-cart-button" data-book-id="${t._id}">add to shopping list</button>
                  <p class="add-to-cart-message"></p>
          </div>
        </div>
      </div>
  `;let n=o.querySelector(".popup-close-button");n.addEventListener("click",()=>{let e=document.getElementById("bookCardContainer");e.innerHTML=""});let a=o.querySelector(".add-to-cart-button"),l=o.querySelector(".add-to-cart-message"),u=JSON.parse(localStorage.getItem("shoppingList"))||[],g=t._id;u.includes(g)&&(a.textContent="remove from list"),a.addEventListener("click",()=>{if(u.includes(g)){let e=u.indexOf(g);u.splice(e,1),a.textContent="add to shopping list",l.textContent="The book has been removed from the shopping list."}else u.push(g),a.textContent="remove from list",l.textContent='Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list."';localStorage.setItem("shoppingList",JSON.stringify(u)),console.log("Lista zakup\xf3w w localStorage:",u)});let h=document.getElementById("bookCardContainer");return h.innerHTML="",h.appendChild(o),document.addEventListener("keydown",function(e){if("Escape"===e.key){let e=document.getElementById("bookCardContainer");e.innerHTML=""}}),document.addEventListener("click",function(e){if(e.target.classList.contains("popup-card-container")){let e=document.getElementById("bookCardContainer");e.innerHTML=""}}),o}p=new URL("indiebound_logo.207267c0.svg",import.meta.url).toString();var g=a("7Abz9");//////////////////////////////////////////////////
// funkcja oblsugi button 'See more'
function h(e){let t;if("string"==typeof e)t=e;else{let o=e.target.closest(".category-button");if(o){let e=o.closest(".category-container");e&&e.querySelector("h2")&&(t=e.querySelector("h2").textContent)}}t&&(0,g.fetchBooksData)(t).then(e=>{document.querySelectorAll(".category-container").forEach(e=>{e.classList.remove("selected-category")});let o=document.querySelectorAll(".category-container");o.forEach(e=>{e.textContent.includes(t)&&e.classList.add("selected-category")}),f.textContent=t,b(e,t)}).catch(e=>{console.error("Error fetching books data:",e)})}// funkjca tworzenia karty
// ksiaki w best selerss, po kliknieciu w best selerss
function m(e){let t=document.getElementById("booksList");t.innerHTML="",e.forEach(e=>{let o=document.createElement("div");o.classList.add("category-section"),t.appendChild(o);let n=document.createElement("h2");n.textContent=e.list_name,n.classList.add("category-title"),o.appendChild(n);let a=document.createElement("ul");a.classList.add("category-list"),o.appendChild(a),e.books.forEach(e=>{let t=document.createElement("li");t.classList.add("book-item"),t.innerHTML=`
        <div class="image-container">                    
         <img src="${e.book_image}" width="180px" height="256px" alt="${e.title}" />
         </div>
         <h3 class="book-title">${e.title}</h3>
         <p class="book-author">Author: ${e.author}</p>
         `,a.appendChild(t),// /////////
//Modal, ten sam kod dodany w 4 miejscach
t.addEventListener("click",async()=>{let t=document.getElementById("bookCardContainer");t.innerHTML="";try{let o=await (0,g.fetchBookDetails)(e._id),n=u(o);t.appendChild(n)}catch(e){console.error(e)}});// /////////
});// Przycisk "See more" dodany raz dla całej kategorii, na końcu zestawu książek
let l=document.createElement("button");l.textContent="See more",l.classList.add("category-button"),o.appendChild(l),l.addEventListener("click",()=>h(e.list_name))})}////////////////////////////
function b(e,t){let o=document.getElementById("booksList");if(o.innerHTML="",e&&e.length>0)e.forEach(e=>{let t=document.createElement("li");t.className="list-container",t.innerHTML=`
        <div class="category-container">
          <div class="image-container">         
            <img src="${e.book_image}" alt="${e.title}" />
          </div>
          <h3 class="book-title">${e.title}</h3>
          <p class="book-author">Author: ${e.author}</p>
        </div>
      `,t.addEventListener("click",async()=>{let t=document.getElementById("bookCardContainer");t.innerHTML="";try{let o=await (0,g.fetchBookDetails)(e._id),n=u(o);t.appendChild(n)}catch(e){console.error(e)}}),o.appendChild(t)});else{let e=document.createElement("p");e.textContent="No books found in this category.",o.appendChild(e)}"All categories"===t?o.classList.replace("books_category-list","books-list"):o.classList.replace("books-list","books_category-list")}// Wywołanie funkcji i obsługa Promise
(0,g.fetchCategories)().then(e=>{//console.log('Categories Received:', categoriesData);
!// lista kategorii
function(e){let t=document.getElementById("categoriesList");e.forEach(e=>{let o=document.createElement("li");o.classList.add("category"),o.textContent=e.list_name,t.appendChild(o)})}(e)}).catch(e=>{// Obsługa błędów
console.error("Error in promise chain:",e)}),// Wywołanie funkcji, top 5 z kazdej kategorii. best sellers- ksiazki ładują sie od razu.
(0,g.fetchBooks)("some-category").then(e=>{let t=document.getElementById("booksList");e.forEach(e=>{// tworzy sekcję dla danej kategorii
let o=document.createElement("div");o.className="category-section";let n=document.createElement("h2");n.innerHTML=e.list_name,n.classList.add("category-title"),o.appendChild(n);let a=document.createElement("ul");// if (window.innerWidth <= 768) {
e.books.forEach(e=>{let t=document.createElement("li"),o=document.createElement("div");o.className="image-container";let n=document.createElement("img");n.src=e.book_image,n.alt=e.title;let l=document.createElement("h3");l.textContent=e.title,l.classList.add("book-title");let i=document.createElement("p");i.textContent=`Author: ${e.author}`,i.classList.add("book-author"),o.appendChild(n),t.appendChild(o),t.appendChild(l),t.appendChild(i),a.appendChild(t),// ////////////////
//Modal, ten sam kod dodany w 4 miejscach
t.addEventListener("click",async()=>{let t=document.getElementById("bookCardContainer");t.innerHTML="";try{let o=await (0,g.fetchBookDetails)(e._id),n=u(o);t.appendChild(n)}catch(e){console.error(e)}});// /////////
}),// Dodanie klasę "category-list" do elementu <ul>
a.classList.add("category-list"),o.appendChild(a);// Dodanie przycisku "See more" dla całego zestawu książek
let l=document.createElement("button");l.className="category-button",l.innerText="See more",o.appendChild(l),l.addEventListener("click",()=>h(e.list_name)),// Dodaj sekcję kategorii do kontenera
t.appendChild(o)})}).catch(e=>{// Obsługa błędów
console.error("Error in promise chain:",e)}),document.getElementById("bestSellers").addEventListener("click",async e=>{if("LI"===e.target.tagName){let t=e.target.textContent;if("All categories"===t)try{let e=await (0,g.fetchBooks)("best-sellers");document.getElementById("bestSellersHeader").innerHTML=`
          Best Sellers <span class="blue-text">Books</span>
        `,m(e,"booksList")}catch(e){console.error("Error fetching best sellers:",e),alert("Failed to fetch best sellers. Please try again.")}else{let e=await (0,g.fetchBooks)(t);document.getElementById("bestSellersHeader").textContent=t,m(e,"booksList")}}}),document.querySelectorAll(".category");const f=document.getElementById("bestSellersHeader");document.getElementById("categoriesList").addEventListener("click",async e=>{let t=e.target.closest(".category, .categoryTop");if(t){let e=t.textContent,o=await (0,g.fetchBooksData)(e),n=function(e){let t=e.split(" ");return t[t.length-1]}(e);// Usuwa klasę selected-category od wszystkich elementów o klasie 'category' lub 'categoryTop'
document.querySelectorAll(".category, .categoryTop").forEach(e=>e.classList.remove("selected-category")),// Ustawia treść nagłówka
f.innerHTML=`
  ${e.replace(RegExp(`${n}$`),`<span class="blue-text">${n}</span>`)}
`,b(o,e),// Dodaje klasę 'selected-category' tylko do klikniętej kategorii
t.classList.add("selected-category")}});///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ciemny motyw
/*const themeSwitch = document.getElementById('themeSwitch');
const isDarkMode = localStorage.getItem('darkMode') === 'true';

document.body.classList.toggle('dark-mode', isDarkMode);

themeSwitch.addEventListener('change', () => {
  const isDarkMode = themeSwitch.checked;
  document.body.classList.toggle('dark-mode', isDarkMode);
  localStorage.setItem('darkMode', isDarkMode.toString());
});*///# sourceMappingURL=index.a10d1dd7.js.map

//# sourceMappingURL=index.a10d1dd7.js.map
