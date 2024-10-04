function tocaSom(idElementoAudio){
    const Elemento = document.querySelector(idElementoAudio);

    if(Elemento ===null){
        console.log('Não encontrado')
    } 

    if(Elemento !=null && Elemento.localName === 'audio'){
        Elemento.play();
    }else{
        console.log('Não encontrado')
    }

    
}

const listaDeTeclas = document.querySelectorAll('.tecla')

/*estrutura enquanto (while)

let contador = 0;

while(contador < listaDeTeclas.length){
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    
    tecla.onclick = function(){
        tocaSom(idAudio);
    }

    contador++;
}
*/

//estrtura para...faca(for) que otimiza o código gerando menos linhas de repetição

for (let contador = 0; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    
    tecla.onclick = function(){
        tocaSom(idAudio);
    }
/*
    if(tecla.onkeydown){
        tecla.classList.add('ativa')
    }else{
        tecla.classList.remove('ativa')
    }*/

    tecla.onkeydown = function(evento){

        console.log(evento.code == 'Space');
    
        if(evento.code === 'Space'|| evento.code ===  'Enter'){
            tecla.classList.add('ativa');
        }
    }
        tecla.onkeyup = function(){
            tecla.classList.remove('ativa');
        }
}
