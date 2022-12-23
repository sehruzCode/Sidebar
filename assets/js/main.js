let list = document.querySelectorAll(".list");
let listArray=[...list];
listArray.forEach(item=>{
    item.addEventListener('click',function(){
        listArray.forEach(activeItem=>{
            if (activeItem.classList.contains('active')) {
                activeItem.classList.remove('active');
            }
        });
       this.classList.add('active');
    })
});

// list.addEventListener("click", function () {
//     list.style.backgroundColor = "red";
//     alert("salam");
// });

let button = document.querySelector(".button");
let sidebarWidthActive=true;
button.onclick = function () {
    sidebarWidthActive=!sidebarWidthActive;
    let sidebar = document.querySelector(".sidebar");
    if(sidebarWidthActive){
        sidebar.style.width = "20%";
        button.innerHTML = "x"
    }else{
       sidebar.style.width = "0%"
       button.innerHTML = "="
    }
    // sidebarWidthActive ? sidebar.style.width = "20%" : sidebar.style.width = "0%";
    // sidebar.style.width = "20%"
    // if (sidebar.style.width = "0%") {
    //     sidebar.style.width = "20%";
        
    // }
    // else if (sidebar.style.width = "20%") {
    //     sidebar.style.width = "0%";
    // }
    


    
}


// for (let i = 0; i < list.length; i++) {

//     list[i].onclick = function(){

//         let j = 0;

//         while (j < list.length) {

//             list[j++].className = 'ul';
            
//         }

//         list[i].className = 'list active';
        
//     }
    
    
// }












