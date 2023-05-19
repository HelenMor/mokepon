let ataqueJugador
let ataqueEnemigo
let vidasJugador=3
let vidasEnemigo=3
let resolucionCombate

function iniciarJuego()
{  
    let sectionseleccionarAtaque= document.getElementById("seleccionar-ataque");
    sectionseleccionarAtaque.style.display='none';

    let sectionmensaje= document.getElementById("mensajes");
    sectionmensaje.style.display='none';

    
    let sectionReiniciar= document.getElementById("reiniciar");
    sectionReiniciar.style.display='none';

    let botonMascotaJugador= document.getElementById("botonseleccion")
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)
    let botonFuego= document.getElementById('botonFuego')
    botonFuego.addEventListener('click', fuego )
    let botonAgua= document.getElementById('botonAgua')
    botonAgua.addEventListener('click', agua )
    let botonTierra= document.getElementById('botonTierra')
    botonTierra.addEventListener('click', tierra )  
    let botonReiniciar= document.getElementById('botonReiniciar');
    botonReiniciar.addEventListener('click',reiniciarJuego)
    

}


function seleccionarMascotaJugador()
{
    let sectionseleccionarAtaque= document.getElementById("seleccionar-ataque");
    sectionseleccionarAtaque.style.display='block';

    let sectionmensaje= document.getElementById("mensajes");
    sectionmensaje.style.display='block';

    let inputHipodoge= document.getElementById('hipodoge')
    let inputCapipego= document.getElementById('capipego')
    let inputratigueya= document.getElementById('ratigueya')
    let spanmascotajugador= document.getElementById('mascota-jugador')

    if (inputHipodoge.checked){
        spanmascotajugador.innerHTML= 'Hipodoge'
   
    }
    else if (inputCapipego.checked){
     
        spanmascotajugador.innerHTML= 'Capipego'
    }
    else if (inputratigueya.checked){
     
        spanmascotajugador.innerHTML= 'Ratigueya'
    }
    else
    {
        alert('No seleccionates una Mascota')
    }
    seleccionarMascotaEnemigo()
}   

function seleccionarMascotaEnemigo()
{
    let jugadaaleatoria= aleatorio(1,3)
    let spanmascotajenemigo= document.getElementById('mascota-enemigo')

    spanmascotajenemigo.innerHTML= jugadaaleatoria==1?'Hipodoge': jugadaaleatoria== 2? 'Capipego': 'Ratigueya'
  
}

function aleatorio(min, max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

function fuego()
{
    ataqueJugador='Fuego'
    ataqueAleatorioEnemigo()
}

function agua()
{
    ataqueJugador='Agua'
    ataqueAleatorioEnemigo()
}

function tierra()
{
    ataqueJugador='Tierra'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo()
{
   let ataqueAleatorio= aleatorio(1,3)
    ataqueEnemigo= ataqueAleatorio==1?'Fuego': ataqueAleatorio==2? 'Agua': 'Tierra'
    combate()
    mensaje() 
}

function combate()
{
    let spanVidasJugador= document.getElementById('vidasJugador')
    let spanVidasEnemigo= document.getElementById('vidasEnemigo')

    if (ataqueJugador== 'Fuego' && ataqueEnemigo== 'Tierra')
    {
        resolucionCombate='Ganaste!'
        vidasEnemigo--
        spanVidasEnemigo.innerHTML= vidasEnemigo

    }
    else if (ataqueJugador== 'Agua' && ataqueEnemigo== 'Fuego')
    {
        resolucionCombate='Ganaste!'
        vidasEnemigo--
        spanVidasEnemigo.innerHTML= vidasEnemigo
    }

    else if (ataqueJugador== 'Tierra' && ataqueEnemigo== 'Agua')
    {
        resolucionCombate='Ganaste!'
        vidasEnemigo--
        spanVidasEnemigo.innerHTML= vidasEnemigo
    }

    else if (ataqueJugador==  ataqueEnemigo)
    {
        resolucionCombate='Empate!'
    }
    else
    {
        resolucionCombate='Perdiste!'
        vidasJugador--
        spanVidasJugador.innerHTML= vidasJugador
    }    
    
} 

function mensaje()
{
    let sectionMensaje= document.getElementById('mensajes')
    
    let parrafo= document.createElement('p')    
    let parrafofinal= document.createElement('p')

    parrafo.innerHTML='Tu mascota atacó con ' + ataqueJugador+  ' , y la mascota del enemigo atacó con '+ ataqueEnemigo + '  ' + resolucionCombate
    sectionMensaje.appendChild(parrafo)

    if (vidasEnemigo==0 || vidasJugador==0)
    { 
        parrafofinal.innerHTML=vidasEnemigo==0 && vidasJugador>0? 'Felicidades!! el combate terminó has sido el Ganador!! 🥳': 
        vidasJugador==0 && vidasEnemigo>0 ? 'El combate terminó, el enemigo ha sido el ganador 🥹':"" ;
        sectionMensaje.appendChild(parrafofinal);

        let botonFuego= document.getElementById('botonFuego')
        botonFuego.disabled = true; 
        let botonAgua= document.getElementById('botonAgua')
        botonAgua.disabled = true; 
        let botonTierra= document.getElementById('botonTierra')
        botonTierra.disabled = true; 

       

       let sectionReiniciar= document.getElementById("reiniciar");
       sectionReiniciar.style.display='block';

    }
}

function reiniciarJuego()
{
   /* vidasEnemigo=3;
    vidasJugador=3;
    ataqueJugador='';
    ataqueEnemigo='';
    resolucionCombate='';

    let radioHopodogue= document.getElementById('hipodoge');
    radioHopodogue.checked=false
    let radioCapaipego= document.getElementById('capipego');
    radioCapaipego.checked=false;
    let radioRatigueya= document.getElementById('ratigueya');
    radioRatigueya.checked=false;

    let spanmascotajugador= document.getElementById('mascota-jugador');
    spanmascotajugador.innerHTML='';
    let spanmascotaEnemigo= document.getElementById('mascota-enemigo');
    spanmascotaEnemigo.innerHTML='';
    let spanVidasJugador= document.getElementById('vidasJugador');
    spanVidasJugador.innerHTML=3;
    let spanVidasEnemigo= document.getElementById('vidasEnemigo');   
    spanVidasEnemigo.innerHTML=3;

    let botonFuego= document.getElementById('botonFuego')
    botonFuego.disabled = false; 
    let botonAgua= document.getElementById('botonAgua')
    botonAgua.disabled = false; 
    let botonTierra= document.getElementById('botonTierra')
    botonTierra.disabled = false; 

    let sectionMensaje= document.getElementById('mensajes');
    sectionMensaje.innerHTML='';
    sectionMensaje.appendChild('');*/

    location.reload()

}

window.addEventListener('load', iniciarJuego);