const skill1=document.querySelector('.skill1');
const skill2=document.querySelector('.skill2');
const skill3=document.querySelector('.skill3');
const skill4=document.querySelector('.skill4');
const skill5=document.querySelector('.skill5');
const skill6=document.querySelector('.skill6');

const progress=document.querySelector('.progress-bar')

if(window.innerHeight<=1006){
    
    var parent=document.querySelector('.intro-container');

    var alert=document.createElement('div')
   
    alert.innerHTML=`
        <div class="alert alert-success alert-danger1 alert-dismissible fade show" role="alert">
        <strong>Please try to Switch to a Bigger Screen</strong> to get better Experience. We are working for small screen device. Sorry for inconvince.
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        </div>
    `
    parent.append(alert);


}

window.addEventListener('scroll',()=>{
    if(window.scrollY>=1015){

        progress.classList.add('progress-bar-animation-skill1');

        skill1.classList.add('progress-bar-animation-skill1');
        skill2.classList.add('progress-bar-animation-skill2');
        skill3.classList.add('progress-bar-animation-skill3');
        skill4.classList.add('progress-bar-animation-skill4');
        skill5.classList.add('progress-bar-animation-skill5');
        skill6.classList.add('progress-bar-animation-skill6');

        
    }
    console.log(typeof window.innerWidth)
})


async function  getJoke(){
   const jokeData= await fetch('https://icanhazdadjoke.com/',{
    headers:{
        'Accept':'application/json'
    }
   })
   const jokeObject= await jokeData.json();
   return jokeObject.joke;
}

const jokeButton=document.querySelector('.get-joke');

jokeButton.addEventListener('click', async ()=>{
    var check=document.querySelector('.alert-danger1');
    var parent=document.querySelector('.intro-container');
    if(check!=undefined || check!=null){
        check.remove()
    }
    let joke= await getJoke();
    var alert=document.createElement('div')
   
    alert.innerHTML=`
        <div class="alert alert-success alert-danger1 alert-dismissible fade show" role="alert">
        ${joke}.
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        </div>
    `
    parent.append(alert);
});