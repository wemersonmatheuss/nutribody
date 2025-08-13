import {} from "./global.css"

import { Nav } from "./components/Nav"
import { Main } from "./components/Main"
import { Differential } from "./components/Differential"
import { CardDestak } from "./components/CardDestak"

import fire from "./assets/svg/fire.svg"
import ray from "./assets/svg/ray.svg"
import noFood from "./assets/svg/noFood.svg"

import logo from "./assets/nutribodyImage.jpg"

export function App() {
  return (
    <div>
      <Nav/>
      <Main/>
      <Differential
      title="Por que usar o D'Castillá-Vie NutriBody"
      
      img1={fire}
      name1="Acelera o metabolismo"
      description1="Coloca seu corpo em modo turbo para queimar gordura dia e noite, mesmo enquanto descansa."

      img2={ray}
      name2="Mais energia"
      description2="Faz seu corpo sentir mais disposição para treinar, trabalhar e viver sem aquele cansaço que atrapalha seu dia."

      img3={noFood}
      name3="Controla o apetite"
      description3="Acaba com as tentações e mantém sua dieta no caminho certo, sem sofrer com a fome fora de hora."

      titleButton="Quero todos os benefícios"
      />
      <CardDestak 
      title="O que é o D’Castilla-Vie NutriBody?"
      
      description="D’Castilla-Vie NutriBody é um suplemento desenvolvido com tecnologia e ciência para oferecer resultados reais a quem busca mais energia, foco, controle de apetite e suporte estético em um só produto."
      
      titleButton="Quero emagrecer com saúde"

      img={logo}
      />
    </div>
  )
}