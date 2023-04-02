const hardSkills = document.querySelector(".hardskills")

let intervalo = null;

const start = () => {
    intervalo = setInterval(function(){
        hardSkills.scrollLeft = hardSkills.scrollLeft + 1; 
    },10)
}

const stop = () => {

}

start();