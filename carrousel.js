var imagenes = [
    "recursos_imgs/imagenes_carrousel/foto_gatito_durmiendoCrrsel.jpg",
    "recursos_imgs/imagenes_carrousel/foto_gatito_gris.jpg",
    "recursos_imgs/imagenes_carrousel/foto_gato_grisCrrsel.jpg",
    "recursos_imgs/imagenes_carrousel/foto_gato_marron.jpg",
    "recursos_imgs/imagenes_carrousel/foto_gato_pelo_largo_blanco.jpg"
]

document.getElementById("imagenes_img").src = imagenes[0]

const botonIzquierda = document.getElementById("flecha_izquierda")
const botonDerecha = document.getElementById("flecha_derecha")



let cont = 0

function moverDerecha(){
    cont++
    if(cont>imagenes.length - 1){
        cont = 0
    }
    document.getElementById("imagenes_img").src = imagenes[cont]
}

function moverIzquierda(){
    cont--
    if(cont<0){
        cont = imagenes.length - 1
    }
    document.getElementById("imagenes_img").src = imagenes[cont]
}

botonIzquierda.addEventListener("click", moverIzquierda)
botonDerecha.addEventListener("click", moverDerecha)