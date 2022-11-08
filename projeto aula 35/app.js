const container1 = document.querySelector("#container1")
const container2 = document.querySelector("#container2")
const btn_copiar = document.querySelector("#copiar")
const todosCursos = [...document.getElementsByClassName("curso")]

todosCursos.map((el=>{
    el.addEventListener("click",(evento)=>{
        evento.target.classList.toggle("selecionado") //toggle -> adiciona e remove elementos
    })
}))

btn_copiar.addEventListener("click",(evento)=>{
    const cursosSelecionados = [...document.querySelectorAll(".selecionado")]
    
    todosCursos.map((el)=>{
        
        if(el.classList.contains("selecionado")){
            container2.appendChild(el)
        }else{
            container1.appendChild(el)
        }
    })
})