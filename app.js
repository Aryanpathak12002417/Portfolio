const progress=document.getElementsByClassName('progress-bar')
const skillRating=[85,78,80,65,71,45]


window.addEventListener('scroll',()=>{
    if(window.scrollY>=1015){
          Array.from(progress).forEach((element) => {
            element.style.width='85%'
            element.classList.add('progress-bar-animation')
        });
        setTimeout(()=>{
            let i=0;
            Array.from(progress).forEach(element => {
                element.classList.remove('progress-bar-animation')
                element.style.width=skillRating[i++];
            });
        },7000)
        
    }
})

const getJoke=async ()=>{
    try{
        const joke= await fetch('https://icanhazdadjoke.com/',{
            headers:{
                Accept:'appliction/json'
            }
        })
        console.log(joke)
    }
    catch(error){
        console.log(error)
    }
   
}


getJoke()