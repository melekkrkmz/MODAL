const madol = document.querySelector(".madol")
console.log(madol.target)
// X E TIKLANDINDA kapatma kısmı
document.querySelector(".close").addEventListener("click", function () {

    madol.style.display = "none" 

})
// MODALA TIKLANDIĞINDA KAPATMA
const body = document.querySelector("body")

body.onclick = function (event) {

    console.log(event.target)
    if(event.target.className=="madol"){   //burada event target kullanarak tıklanan kısmın clas ismini alarak 
      madol.style.display = "none"        //sadece modala tıklandığında kapanmasını sağladık
    }


}

const img = document.querySelectorAll("img")  //burası array döndürüyor

const modalİmge = document.querySelector(".modal-img")
img.forEach(function (imge) {

    imge.onclick = function () {
        madol.style.display = "flex"
        modalİmge.src = this.src;
    }

})


