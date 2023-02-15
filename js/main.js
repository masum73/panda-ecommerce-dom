console.log('JS from separate file loaded');

const allH2 = document.getElementsByTagName('h2');

for (const h2 of allH2) {
    h2.style.color = 'lightblue';
  }

document.getElementById('backpack').style.backgroundColor = 'tomato';

const allCards = document.getElementsByClassName('card');

for( const card of allCards){
    card.style.borderRadius = '30px';
   // console.log(card);
}

function testFunction(){
    console.log('This will show when a button will click.');
}

//6 - option 1 - recommended

const allCard = document.getElementsByClassName('card');

for(const card of allCard){
    card.addEventListener('click',function(event){
        if(event.target.classList.contains('panda-btn-buy-now')=== true){
            card.remove();
        };
        
    })
}

//6 - option 2 - not recommended
/* const allCardss = document.getElementsByClassName('panda-btn-buy-now');

for(const card of allCardss){
    card.addEventListener('click',function(event){
        event.target.parentNode.parentNode.remove();
    })
} */


//7

document.getElementById('exampleInputEmail1').addEventListener('keyup', function(event){
    const text = event.target.value;
    const stayButton = document.getElementById('stay-btn');
    if(text==='email'){
        stayButton.removeAttribute('disabled');
    }else{
        stayButton.setAttribute('disabled',true);
    }
})