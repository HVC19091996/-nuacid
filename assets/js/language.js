
function setLang(lang){
  document.querySelectorAll('.lang').forEach(el=>{
    if(el.dataset.lang===lang) el.classList.add('active'); else el.classList.remove('active');
  });
  // store choice
  try{ localStorage.setItem('site_lang', lang); }catch(e){}
}
document.addEventListener('DOMContentLoaded',()=>{
  var saved = null;
  try{ saved = localStorage.getItem('site_lang'); }catch(e){}
  setLang(saved || 'vn');
  document.querySelectorAll('.lang-switch').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      setLang(btn.dataset.lang);
    });
  });
});
