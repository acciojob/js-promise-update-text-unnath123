

let p = new Promise((resolve,reject)=>{
  setTimeout(() => {
    resolve("Hello world!")
  }, 1000);
})
p.then((data)=>{
  document.getElementById("output").innerText=data;
});
