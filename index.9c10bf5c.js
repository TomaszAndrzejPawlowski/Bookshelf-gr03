const e=document.getElementById("themeSwitch"),l="true"===localStorage.getItem("darkMode"),o=document.querySelector(".light_mode"),t=document.querySelector(".dark_mode"),d=document.querySelector(".header_wrapper"),s=document.querySelector(".btn_log-in"),r=document.querySelector(".modal_singup_close"),n=document.querySelector(".logo_light"),c=document.querySelector(".logo_dark"),y=document.querySelector(".modal_signup-form"),a=document.querySelector(".modal_signup"),i=document.querySelector(".modal_signup-field-name"),u=document.querySelector(".modal_signup-field-pass"),m=document.querySelector(".modal_signup-field-email"),p=document.querySelector(".modal_input-name"),b=document.querySelector(".modal_input-mail"),k=document.querySelector(".modal_input-pass"),g=document.querySelector(".modal_btn"),f=document.querySelector(".hamburger_open"),S=document.querySelector(".hamburger_close"),_=document.querySelector(".modal_mobile"),q=document.querySelector(".modal_signup-mobile"),C=document.querySelector(".btn_log-out-mobile"),h=document.querySelector(".modal_singup_close-mobile"),v=document.querySelector(".modal_input-icon-mail"),w=document.querySelector(".modal_input-icon-pass"),E=document.querySelector(".modal_input-icon-mail-white"),L=document.querySelector(".modal_input-icon-pass-white");document.querySelector(".modal_input-icon-mobile-mail-white"),document.querySelector(".modal_input-icon-mobile-pass-white");const x=document.querySelector(".hamburger_close-img"),I=document.querySelector(".img_dark-close"),B=document.querySelector(".hamburger_open-svg"),D=document.querySelector(".hamburger_open-svg-white"),M=document.querySelector(".icon_light"),j=document.querySelector(".icon_dark"),z=document.querySelector(".lock-icon"),A=document.querySelector(".lock_icon-dark"),F=document.querySelector(".stefan_btn"),G=document.querySelector(".stefan_name");document.body.classList.toggle("dark-mode",l),e.addEventListener("change",()=>{let l=e.checked;document.body.classList.toggle("dark-mode",l),localStorage.setItem("darkMode",l.toString()),o.style.display="block",t.style.display="none",s.style.backgroundColor="#f6f6f6",n.style.display="block",c.style.display="none",d.style.backgroundColor="#f6f6f6",a.style.backgroundColor="#f6f6f6",a.style.border="2px solid black",y.style.backgroudColor="#f6f6f6",i.style.backgroundColor="#f6f6f6",i.style.border="2px solid black",m.style.border="2px solid black",u.style.border="2px solid black",m.style.backgroundColor="#f6f6f6",u.style.backgroundColor="#f6f6f6",p.style.backgroundColor="#f6f6f6",b.style.backgroundColor="#f6f6f6",k.style.backgroundColor="#f6f6f6",r.style.backgroundColor="#f6f6f6",g.style.backgroundColor="black",g.style.color="#f6f6f6",f.style.backgroundColor="#f6f6f6",S.style.backgroundColor="#f6f6f6",v.style.display="block",w.style.display="block",E.style.display="none",L.style.display="none",x.style.display="block",I.style.display="none",B.style.display="block",D.style.display="none",M.style.display="block",j.style.display="none",z.style.display="block",A.style.display="none",!0===l&&(o.style.display="none",t.style.display="block",d.style.backgroundColor="#333",s.style.backgroundColor="#333",c.style.display="block",n.style.display="none",a.style.backgroundColor="#333",a.style.border="2px solid #f6f6f6",y.style.backgroudColor="#333",i.style.backgroundColor="#333",i.style.border="2px solid white",m.style.backgroundColor="#333",m.style.border="2px solid white",u.style.backgroundColor="#333",u.style.border="2px solid white",p.style.backgroundColor="#333",b.style.backgroundColor="#333",k.style.backgroundColor="#333",r.style.backgroundColor="#333",g.style.backgroundColor="#f6f6f6",g.style.color="black",S.style.backgroundColor="#333",f.style.backgroundColor="#333",v.style.display="none",w.style.display="none",E.style.display="block",L.style.display="block",x.style.display="none",I.style.display="block",B.style.display="none",D.style.display="block",M.style.display="none",j.style.display="block",z.style.display="none",A.style.display="block")}),s.addEventListener("click",()=>{a.classList.toggle("is_hidden")}),r.addEventListener("click",()=>{a.classList.toggle("is_hidden")}),f.addEventListener("click",()=>{_.style.opacity=1,f.style.display="none",S.style.display="block"}),S.addEventListener("click",()=>{_.style.opacity=0,f.style.display="block",S.style.display="none"}),C.addEventListener("click",()=>{q.style.display="block",_.style.opacity=0}),h.addEventListener("click",()=>{q.style.display="none",S.style.display="none",f.style.display="block"}),g.addEventListener("click",e=>{e.preventDefault();let l=document.getElementById("username").value,o=document.getElementById("usermail").value,t=document.getElementById("password").value;l||o||t?(alert("log in!"),a.style.display=" none",s.style.display="none",F.style.visibility="visible",G.textContent=l):alert("false")}),F.addEventListener("click",e=>{e.preventDefault(),F.style.visibility="hidden",s.style.display="block",window.location.reload(!0)});//# sourceMappingURL=index.9c10bf5c.js.map

//# sourceMappingURL=index.9c10bf5c.js.map
