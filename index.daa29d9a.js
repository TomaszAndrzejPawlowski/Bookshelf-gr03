const e=document.getElementById("themeSwitch"),o="true"===localStorage.getItem("darkMode"),l=document.querySelector(".light_mode"),t=document.querySelector(".dark_mode"),d=document.querySelector(".header_wrapper"),r=document.querySelector(".btn_log-in"),s=document.querySelector(".modal_singup_close"),c=document.querySelector(".logo_light"),y=document.querySelector(".logo_dark"),n=document.querySelector(".modal_signup-form"),a=document.querySelector(".modal_signup"),i=document.querySelector(".modal_signup-field-name"),u=document.querySelector(".modal_signup-field-pass"),m=document.querySelector(".modal_signup-field-email"),b=document.querySelector(".modal_input-name"),p=document.querySelector(".modal_input-mail"),k=document.querySelector(".modal_input-pass"),g=document.querySelector(".modal_btn"),f=document.querySelector(".hamburger_open"),S=document.querySelector(".hamburger_close"),_=document.querySelector(".modal_mobile"),q=document.querySelector(".modal_signup-mobile"),C=document.querySelector(".btn_log-out-mobile"),h=document.querySelector(".modal_singup_close-mobile"),L=document.querySelector(".modal_input-icon-mail"),w=document.querySelector(".modal_input-icon-pass"),v=document.querySelector(".modal_input-icon-mail-white"),x=document.querySelector(".modal_input-icon-pass-white");document.querySelector(".modal_input-icon-mobile-mail-white"),document.querySelector(".modal_input-icon-mobile-pass-white");const E=document.querySelector(".hamburger_close-img"),I=document.querySelector(".img_dark-close"),M=document.querySelector(".hamburger_open-svg"),B=document.querySelector(".hamburger_open-svg-white"),j=document.querySelector(".icon_light"),z=document.querySelector(".icon_dark"),A=document.querySelector(".lock-icon"),D=document.querySelector(".lock_icon-dark");document.body.classList.toggle("dark-mode",o),e.addEventListener("change",()=>{let o=e.checked;document.body.classList.toggle("dark-mode",o),localStorage.setItem("darkMode",o.toString()),l.style.display="block",t.style.display="none",r.style.backgroundColor="#f6f6f6",c.style.display="block",y.style.display="none",d.style.backgroundColor="#f6f6f6",a.style.backgroundColor="#f6f6f6",a.style.border="2px solid black",n.style.backgroudColor="#f6f6f6",i.style.backgroundColor="#f6f6f6",i.style.border="2px solid black",m.style.border="2px solid black",u.style.border="2px solid black",m.style.backgroundColor="#f6f6f6",u.style.backgroundColor="#f6f6f6",b.style.backgroundColor="#f6f6f6",p.style.backgroundColor="#f6f6f6",k.style.backgroundColor="#f6f6f6",s.style.backgroundColor="#f6f6f6",g.style.backgroundColor="black",g.style.color="#f6f6f6",f.style.backgroundColor="#f6f6f6",S.style.backgroundColor="#f6f6f6",L.style.display="block",w.style.display="block",v.style.display="none",x.style.display="none",E.style.display="block",I.style.display="none",M.style.display="block",B.style.display="none",j.style.display="block",z.style.display="none",A.style.display="block",D.style.display="none",!0===o&&(l.style.display="none",t.style.display="block",d.style.backgroundColor="#333",r.style.backgroundColor="#333",y.style.display="block",c.style.display="none",a.style.backgroundColor="#333",a.style.border="2px solid #f6f6f6",n.style.backgroudColor="#333",i.style.backgroundColor="#333",i.style.border="2px solid white",m.style.backgroundColor="#333",m.style.border="2px solid white",u.style.backgroundColor="#333",u.style.border="2px solid white",b.style.backgroundColor="#333",p.style.backgroundColor="#333",k.style.backgroundColor="#333",s.style.backgroundColor="#333",g.style.backgroundColor="#f6f6f6",g.style.color="black",S.style.backgroundColor="#333",f.style.backgroundColor="#333",L.style.display="none",w.style.display="none",v.style.display="block",x.style.display="block",E.style.display="none",I.style.display="block",M.style.display="none",B.style.display="block",j.style.display="none",z.style.display="block",A.style.display="none",D.style.display="block")}),r.addEventListener("click",()=>{a.classList.toggle("is_hidden")}),s.addEventListener("click",()=>{a.classList.toggle("is_hidden")}),f.addEventListener("click",()=>{_.style.opacity=1,f.style.display="none",S.style.display="block"}),S.addEventListener("click",()=>{_.style.opacity=0,f.style.display="block",S.style.display="none"}),C.addEventListener("click",()=>{q.style.display="block",_.style.opacity=0}),h.addEventListener("click",()=>{q.style.display="none",S.style.display="none",f.style.display="block"});//# sourceMappingURL=index.daa29d9a.js.map

//# sourceMappingURL=index.daa29d9a.js.map