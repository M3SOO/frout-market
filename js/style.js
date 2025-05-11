let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 4;
    let next = el.nextElementSibling
    for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
            next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

//*************************************************** */
if (document.getElementById("sidebareitems").className == "") {
    document.getElementById("sidebareitems").className = "navbar-nav d-md-block text-start  flex-column  flex-wrap  ms-lg-auto h6 border border-1  border-top-0";
}

document.querySelector(".btnmenue").onclick= function () 
{
    if (document.getElementById("sidebareitems").className == "navbar-nav d-md-block text-start  flex-column  flex-wrap  ms-lg-auto h6 border border-1  border-top-0") {
        document.getElementById("sidebareitems").className = "d-none";
    }
    else{
        document.getElementById("sidebareitems").className="navbar-nav d-md-block text-start  flex-column  flex-wrap  ms-lg-auto h6 border border-1  border-top-0";
    }
}

// if ( document.getElementById("sidebareitems").classList.contains("d-md-block")) {
//     document.getElementById("sidebareitems").classList.add("d-none"); 
//     document.getElementById("sidebareitems").classList.remove("d-md-block"); 
      
// }
// else{
//     document.getElementById("sidebareitems").classList.remove("d-none");
//     document.getElementById("sidebareitems").classList.add("d-md-block");
// }


let btn = document.getElementById('btn-go');
window.onscroll = function(){

if (scrollY>=400) {
    btn.style.display='block';

} else {
    btn.style.display='none';
}
};

btn.onclick=function(){
    scroll({top:0,left:0,behavior:"smooth"});4
};

