let myDropBoxBtn = document.getElementById('contact');

myDropBoxBtn.onclick = function(){
    document.getElementsByClassName('dropdown-box')[0].classList.toggle('hide-dropbox');
    if(document.getElementsByClassName('dropdown-box')[0].classList.contains('hide-dropbox')){
        document.querySelector('#contact img').style.transform='rotate(360deg)';
    }else{
        document.querySelector('#contact img').style.transform='rotate(180deg)';
    }
    
}

let myresponsiveBtn = document.querySelector('.first-section nav div img'),

    myresponsiveContainer = document.querySelector('.responsive-nav');

myresponsiveBtn.onclick = function(){  
    myresponsiveContainer.classList.toggle('hide-responsive-nav');
    if(myresponsiveContainer.classList.contains('hide-responsive-nav')){
        this.setAttribute('src','img/new imgs/icon-hamburger.svg');
    }else{
        this.setAttribute('src','img/new imgs/icon-close.svg');
    }
}


let myResponsiveDropBox = document.querySelector('.responsive-nav ul #contact');

myResponsiveDropBox.onclick = () =>{
    document.querySelector('.responsive-nav .inside-dropdown-box').classList.toggle('hide-dropbox');
    if(document.querySelector('.responsive-nav .inside-dropdown-box').classList.contains('hide-dropbox')){
        document.querySelector('.responsive-nav ul #contact img').style.transform='rotate(360deg)';
    }else{
        document.querySelector('.responsive-nav ul #contact img').style.transform='rotate(180deg)';
    }
}