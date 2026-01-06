let rollCircle = document.querySelector("#roll-circle")
let card = document.querySelectorAll(".cards")
let title = document.querySelector("#titulo")
let desc = document.querySelector("#desc")

let information = [
    {
        titulo:"Designer Gráfico",
        desc:"Aprenda design gráfico criando artes no CorelDRAW e Photoshop."
    },
    {
        titulo:"Sistemas Operacionais",
        desc:"Aprenda a usar Windows e Linux no dia a dia, do básico à prática"

    },
    {
        
        titulo:"Pacote Office",
        desc:"Aprenda a usar o Pacote Office para criar documentos, planilhas e apresentações."
    }
]
let degs = [90,180,320]
let i = 0

console.log(information[0])


document.addEventListener("click", (e) => {
   
     if(e.target.classList[0] === "add-btn"){
            location.href="https://go.hotmart.com/R102362902R"
        }

    if (e.target.id === "next") {
        title.classList.add("text-animado")
        desc.classList.add("text-animado")
        card[i].classList.remove("visu") 

        if (i >= degs.length - 1) return;
        i++;

        rollCircle.style.transform = `rotate(${degs[i]}deg)`;

        card[i].classList.add("visu")
        setTimeout(() => {
            title.classList.remove("text-animado")
            desc.classList.remove("text-animado")
        }, 1000);
    }

    if (e.target.id === "back") {
        title.classList.add("text-animado")
        desc.classList.add("text-animado")


        card[i].classList.remove("visu")
        if (i <= 0) return;

        i--;

        rollCircle.style.transform = `rotate(${degs[i]}deg)`;

        card[i].classList.add("visu")
         setTimeout(() => {
            title.classList.remove("text-animado")
            desc.classList.remove("text-animado")

        }, 500); 

       
    }

        escrever(information[i].titulo,information[i].desc);
});



function escrever(titulo,descri){
   
    
    title.innerText = titulo
    desc.innerText = descri
    
}

//fade

setTimeout(() => {
    document.querySelector(".white-fade").classList.add("fade")
    setTimeout(() => {
        document.querySelector(".fade").style.display="none"
    }, 2000);
}, 3000);
