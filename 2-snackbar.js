import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{i}from"./assets/vendor-BbbuE1sJ.js";document.querySelector(".form").addEventListener("submit",t=>{t.preventDefault();const s=t.target,o=parseInt(s.elements.delay.value,10),r=s.elements.state.value;n(o,r).then(e=>{i.success({title:"Success",message:`✅ Fulfilled promise in ${e}ms`,position:"topRight"})}).catch(e=>{i.error({title:"Error",message:`❌ Rejected promise in ${e}ms`,position:"topRight"})});function n(e,m){return new Promise((l,a)=>{setTimeout(()=>{m==="fulfilled"?l(e):a(e)},e)})}});
//# sourceMappingURL=2-snackbar.js.map