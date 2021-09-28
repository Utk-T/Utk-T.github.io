show = (contenttype) => {
  let x = document.querySelectorAll('.content');
  for (let i = 0; i < x.length; i++) { x[i].style.display = "none"; }
  document.getElementById(contenttype).style.display = "block";
}

setInterval(() => {
  let d = new Date().toString();
   let l = d.split(' ').splice(0, 5).join(' ')
  foo.innerHTML = "<br>" + l + " (Indian Standard Time)";
}, 950);