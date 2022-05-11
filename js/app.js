

const mainImg = document.querySelector(".main-img");
const mainImgModal = document.querySelector("#img-active-id");

const allImg = document.querySelectorAll(".allimg");
const next = document.querySelectorAll(".next");
const previous = document.querySelectorAll(".previous");

//Modal
const imagenActive = document.querySelector(".img-active");
const cerrarModal = document.querySelector(".cruz-container");
const modal = document.querySelector("#modal");
const miniImgModal = document.querySelectorAll(".jj");
const prevId = document.querySelector("#prev");

//Cantidad de Productos
const numeroCantidad = document.querySelector(".number");
const cartContainer = document.querySelector(".cantidad-productos");
const modalCart = document.querySelector(".modal-cart");
const emptyCartText = document.querySelector(".empty");
const cartDetails = document.querySelector(".cart-details"); 
const btnCheck = document.querySelector(".btn-check");
const txtCartContainer = document.querySelector(".text-container");

//Btn Hamburguesa
const btnHamburguer = document.querySelector(".icon-hamburguer-mobile");

//Menu container
const menuContainer = document.querySelector(".menu");
const cruzMenu = document.querySelector(".close-menu");
const overlay =  document.querySelector(".overlay-menu-mobile");

//Imagenes pequeñas producto
const imagenesPeque = document.querySelectorAll(".img");
const seccionLightBox = document.querySelector(".lightbox-container");

var counter=1;
var increment = 0; 
var totalCompra = 0;

const cartWithElements = () =>{
    cartContainer.classList.remove("display-none");
    cartContainer.innerHTML = `${increment}`;
    emptyCartText.classList.add("display-none");
    cartDetails.classList.remove("display-none");
    btnCheck.classList.remove("display-none");
    totalCompra = increment * 125;
    txtCartContainer.innerHTML = `<span>$125.00 x ${increment} <strong>$${totalCompra}.00</strong></span>
                                  <p>Fall Limited Edition Sneakers</p>`;
}

const cartWithOutElements = () =>{
    emptyCartText.classList.remove("display-none");
    cartDetails.classList.add("display-none");
    btnCheck.classList.add("display-none");
    increment = 0; 
    totalCompra = 0;
    numeroCantidad.innerHTML = `${increment}`;

}

const incrementDecrementSubmit = () =>{
    numeroCantidad.innerHTML = `${increment}`;
    document.addEventListener("click", e =>{
       
        if(e.target.matches(".increment")){
             increment++;
             numeroCantidad.innerHTML = `${increment}`;
             
             
        }
        if(e.target.matches(".decrement")){
            if(increment>0){
                increment--;
                numeroCantidad.innerHTML = `${increment}`;
            }
        }
        
        if(e.target.matches([".add-to-cart",".cart",".add-to-cart"]) && increment>0){
            cartWithElements();
            
        }else if(increment ===0 || e.target.matches(".delete-icon")){
            cartWithOutElements();
            
        }
        
        if(e.target.matches([".svg-cart",".cantidad-productos"])){
            modalCart.classList.toggle("display-none");
        }
        if(increment===0){
            cartContainer.classList.add("display-none");
        }
        
    });
    
}


const modalOpen = () =>{
    document.addEventListener("click", e =>{
       if(e.target.matches(".main-img")){
          modal.showModal();
       }
       if(e.target.matches([".cr",".cruz","path"])){
           
           modal.close();
       }

       if(e.target.matches(".main-img") && screen.width < 800){
          modal.close();
       }
    });
}

//Passive img and Active img product
for (let i = 0; i < allImg.length; i++) {
       let id = allImg[i].id;
       allImg[i].addEventListener("click", e =>{
            
            mainImg.src = allImg[i].src = `/images/image-product-${id}.jpg`;
            mainImgModal.src = allImg[i].src = `/images/image-product-${id}.jpg`;
            counter = id;
           
            for (let j = 0; j < allImg.length; j++) {
               allImg[j].classList.remove("active-img");     
            }
            allImg[i].classList.add("active-img");
      });

    
}

//Caroulsel next button
next.forEach(AllNext =>{
    AllNext.addEventListener("click", () =>{
        if(counter < 4){
              miniImgModal[counter].classList.add("active-img");
              miniImgModal[counter-1].classList.remove("active-img");
              counter++;
        }
        mainImg.src = `/images/image-product-${counter}.jpg`;
        mainImgModal.src = `/images/image-product-${counter}.jpg`;  
    }); 
})


//Caroulsel prev button
previous.forEach(AllPrev =>{
    AllPrev.addEventListener("click",function(){
        counter--;
        if(counter >= 1 ){
        miniImgModal[counter-1].classList.add("active-img"); 
        miniImgModal[counter].classList.remove("active-img");
        
        }else if(counter===0){
            counter++; 
        }
        mainImg.src = `/images/image-product-${counter}.jpg`;
        mainImgModal.src = `/images/image-product-${counter}.jpg`; 
    });
})
 

btnHamburguer.addEventListener("click", e  =>{
   menuContainer.classList.toggle("menu-off");
   overlay.classList.toggle("menu-off");
});
cruzMenu.addEventListener("click", e =>{
    menuContainer.classList.toggle("menu-off");
    overlay.classList.toggle("menu-off");
});







incrementDecrementSubmit();
modalOpen();





