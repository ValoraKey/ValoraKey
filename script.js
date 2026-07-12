/*====================================================
            VALORAKEY - SCRIPT.JS
====================================================*/

/*=========================
        ELEMENTOS
=========================*/

const modal = document.getElementById("modal");

const modalImg = document.getElementById("modalImg");

const modalTitulo = document.getElementById("modalTitulo");

const modalPrecio = document.getElementById("modalPrecio");

const modalColores = document.getElementById("modalColores");

const modalMaterial = document.getElementById("modalMaterial");

const whatsappBtn = document.getElementById("whatsappBtn");

const cerrar = document.querySelector(".cerrar");

const botones = document.querySelectorAll(".verMas");

/*=========================
      ABRIR MODAL
=========================*/

botones.forEach(boton=>{

    boton.addEventListener("click",()=>{

        const nombre=boton.dataset.nombre;

        const precio=boton.dataset.precio;

        const imagen=boton.dataset.imagen;

        const colores=boton.dataset.colores;

        const material=boton.dataset.material;

        modalImg.src=imagen;

        modalTitulo.textContent=nombre;

        modalPrecio.textContent=precio;

        modalColores.textContent=colores;

        modalMaterial.textContent=material;

        const numero="51999999999"; // ← CAMBIA ESTE NÚMERO

        const mensaje=`Hola 😊. Me interesa el ${nombre} que vi en el catálogo de ValoraKey. ¿Podrían brindarme más información?`;

        whatsappBtn.href=`https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

        modal.style.display="flex";

        document.body.style.overflow="hidden";

    });

});

/*=========================
      CERRAR MODAL
=========================*/

cerrar.addEventListener("click",()=>{

    modal.style.display="none";

    document.body.style.overflow="auto";

});

window.addEventListener("click",(e)=>{

    if(e.target===modal){

        modal.style.display="none";

        document.body.style.overflow="auto";

    }

});

/*=========================
      HEADER ACTIVO
=========================*/

window.addEventListener("scroll",()=>{

    const header=document.querySelector("header");

    if(window.scrollY>60){

        header.style.boxShadow="0 8px 20px rgba(0,0,0,.08)";

    }else{

        header.style.boxShadow="0 5px 20px rgba(0,0,0,.05)";

    }

});

/*=========================
     ANIMACIÓN SUAVE
=========================*/

const elementos=document.querySelectorAll(".card,.producto,.pregunta,.contactCards div");

const observar=new IntersectionObserver((entradas)=>{

    entradas.forEach(entrada=>{

        if(entrada.isIntersecting){

            entrada.target.style.opacity="1";

            entrada.target.style.transform="translateY(0)";

        }

    });

},{
    threshold:0.15
});

elementos.forEach(el=>{

    el.style.opacity="0";

    el.style.transform="translateY(35px)";

    el.style.transition=".7s";

    observar.observe(el);

});

/*=========================
      BOTÓN VOLVER ARRIBA
=========================*/

const subir=document.createElement("button");

subir.innerHTML="↑";

subir.id="subir";

document.body.appendChild(subir);

subir.style.position="fixed";
subir.style.bottom="30px";
subir.style.right="30px";
subir.style.width="55px";
subir.style.height="55px";
subir.style.border="none";
subir.style.borderRadius="50%";
subir.style.background="#B88BC9";
subir.style.color="white";
subir.style.fontSize="24px";
subir.style.cursor="pointer";
subir.style.display="none";
subir.style.boxShadow="0 10px 20px rgba(0,0,0,.2)";
subir.style.zIndex="999";

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        subir.style.display="block";

    }else{

        subir.style.display="none";

    }

});

subir.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}); 