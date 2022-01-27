function jojo(){
    var nome= prompt("qual nome do aluno")
    var nota1= prompt("primeira nota de "+ nome)
    var nota2= prompt("segunda nota de "+ nome)
    var cal= parseInt(nota1)+ parseInt(nota2)
    var res= (cal/ 2)
    var xo= document.getElementById('bt4')
xo.innerHTML= `<h4>calculando a media de ${nome}.</h4>`
xo.innerHTML+= `<h4>nota do aluno ${nome}: ${nota1} e ${nota2} .</h4>`
xo.innerHTML+= `<h4>media final ${res}.</h4>`
if(res <= 6){
    xo.innerHTML+= `<h4> aluno ${nome} <p>reprovado</p>.</h4>`
}
else{ xo.innerHTML+= `<h4> aluno ${nome} <p id="par">aprovado</p>.</h4>`}
}

