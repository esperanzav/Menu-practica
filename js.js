let listElements = document.querySelectorAll('.list_button--click');

listElements.forEach(listElement => { // los elemento listElement son los de la clase list_button--clisick
   listElement.addEventListener('click', ()=>{//cada vez que se le de click quiero q se ejecute
      
    listElement.classList.toggle('arrow');//lo que hace es q cuando se le de click al elemento se le agrega la clase arrow pero cunado lo vuelva a comprar se la quita
   
    let height = 0;
    let menu = listElement.nextElementSibling;//toma al hermano adyacente de list element
    //console.log(menu.scrollHeight)//el scrollheihg nos dice el alto minino de un elemento y no se despsborda
    if(menu.clientHeight == "0"){
      height = menu.scrollHeight;
    }
   
     menu.style.height = `${height}px`;


   })
});