

let p = new Promise((resolve,reject)=>{
  setTimeout(() => {
    resolve("Hello World!")
  }, 1000);
})
p.then((data)=>{
  document.getElementById("output").innerText=data;
});
