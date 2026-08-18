let ipt = document.querySelector(".ipt");
let btn = document.querySelector(".aBtn");
let container = document.querySelector(".container");

btn.addEventListener("click",()=>{

     let task = ipt.value;
     if(task.trim()===""){
          alert("write something");
          return;
     }
     container.innerHTML +=`
     <div class="list">
                    <h1>${task}</h1>
                    <button>delete</button>
               </div>
               `

     ipt.value="";
});