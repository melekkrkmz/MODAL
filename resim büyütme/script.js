const madol = document.querySelector(".madol")
console.log(madol.target)
// X E TIKLANDINDA kapatma kısmı
document.querySelector(".close").addEventListener("click", function () {

    madol.style.display = "none" 

})
// MODALA TIKLANDIĞINDA KAPATMA
madol.onclick = function () {
 
    madol.style.display = "none"    
}

const img = document.querySelectorAll("img")  //burası array döndürüyor

const modalİmge = document.querySelector(".modal-img")
img.forEach(function (imge) {

    imge.onclick = function () {
        madol.style.display = "flex"
        modalİmge.src = this.src;
    }

})


