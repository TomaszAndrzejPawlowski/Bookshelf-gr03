const e=document.getElementById("themeSwitch"),o="true"===localStorage.getItem("darkMode"),l=document.querySelector(".light_mode"),t=document.querySelector(".dark_mode"),r=document.querySelector(".header_wrapper"),d=document.querySelector(".btn_log-in"),c=document.querySelector(".modal_singup_close"),s=document.querySelector(".logo_light"),n=document.querySelector(".logo_dark"),y=document.querySelector(".modal_signup-form"),a=document.querySelector(".modal_signup"),u=document.querySelector(".modal_signup-field-name"),i=document.querySelector(".modal_signup-field-pass"),m=document.querySelector(".modal_signup-field-email"),b=document.querySelector(".modal_input-name"),g=document.querySelector(".modal_input-mail"),k=document.querySelector(".modal_input-pass"),p=document.querySelector(".modal_btn"),f=document.querySelector(".hamburger_open"),S=document.querySelector(".hamburger_close"),_=document.querySelector(".modal_mobile"),q=document.querySelector(".modal_signup-mobile"),C=document.querySelector(".btn_log-out-mobile"),h=document.querySelector(".modal_singup_close-mobile"),L=document.querySelector(".modal_input-icon-mail"),w=document.querySelector(".modal_input-icon-pass"),x=document.querySelector(".modal_input-icon-mail-white"),E=document.querySelector(".modal_input-icon-pass-white");document.querySelector(".modal_input-icon-mobile-white"),document.querySelector(".modal_input-icon-mobile--white"),document.body.classList.toggle("dark-mode",o),e.addEventListener("change",()=>{let o=e.checked;document.body.classList.toggle("dark-mode",o),localStorage.setItem("darkMode",o.toString()),l.style.display="block",t.style.display="none",d.style.backgroundColor="#f6f6f6",s.style.display="block",n.style.display="none",r.style.backgroundColor="#f6f6f6",a.style.backgroundColor="#f6f6f6",a.style.border="2px solid black",y.style.backgroudColor="#f6f6f6",u.style.backgroundColor="#f6f6f6",u.style.border="2px solid black",m.style.border="2px solid black",i.style.border="2px solid black",m.style.backgroundColor="#f6f6f6",i.style.backgroundColor="#f6f6f6",b.style.backgroundColor="#f6f6f6",g.style.backgroundColor="#f6f6f6",k.style.backgroundColor="#f6f6f6",c.style.backgroundColor="#f6f6f6",p.style.backgroundColor="black",p.style.color="#f6f6f6",f.style.backgroundColor="#f6f6f6",S.style.backgroundColor="#f6f6f6",L.style.display="block",w.style.display="block",x.style.display="none",E.style.display="none",!0===o&&(l.style.display="none",t.style.display="block",r.style.backgroundColor="#333",d.style.backgroundColor="#333",n.style.display="block",s.style.display="none",a.style.backgroundColor="#333",a.style.border="2px solid #f6f6f6",y.style.backgroudColor="#333",u.style.backgroundColor="#333",u.style.border="2px solid white",m.style.backgroundColor="#333",m.style.border="2px solid white",i.style.backgroundColor="#333",i.style.border="2px solid white",b.style.backgroundColor="#333",g.style.backgroundColor="#333",k.style.backgroundColor="#333",c.style.backgroundColor="#333",p.style.backgroundColor="#f6f6f6",p.style.color="black",S.style.backgroundColor="#333",f.style.backgroundColor="#333",L.style.display="none",w.style.display="none",x.style.display="block",E.style.display="block")}),d.addEventListener("click",()=>{a.classList.toggle("is_hidden")}),c.addEventListener("click",()=>{a.classList.toggle("is_hidden")}),f.addEventListener("click",()=>{_.style.opacity=1,f.style.opacity=0,S.style.display="block"}),S.addEventListener("click",()=>{_.style.opacity=0,f.style.opacity=1,S.style.display="none"}),C.addEventListener("click",()=>{q.style.display="block",_.style.opacity=0}),h.addEventListener("click",()=>{q.style.display="none"});//# sourceMappingURL=index.ae389f4e.js.map

//# sourceMappingURL=index.ae389f4e.js.map
