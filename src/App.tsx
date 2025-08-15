import {} from "./global.css"

import { Nav } from "./components/Nav"
import { Main } from "./components/Main"
import { Differential } from "./components/Differential"
import { CardDestak } from "./components/CardDestak"
import { Testimonials } from "./components/Testimonials"
import Faq from "./components/Faq"
import { Cta } from "./components/Cta"
import { Footer } from "./components/Footer"

import fire from "./assets/svg/fire.svg"
import ray from "./assets/svg/ray.svg"
import noFood from "./assets/svg/noFood.svg"
import chemistry from "./assets/svg/chemistry.svg"
import shield from "./assets/svg/shield.svg"
import leaf from "./assets/svg/leaf.svg"
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

      <Differential 
      title="Diferenciais"
      
      img1={chemistry}
      name1="Fórmula premium"
      description1="Desenvolvido com tecnologia de ponta e ingredientes selecionados para máxima eficácia no controle de peso"

      img2={shield}
      name2="Aprovado pela ANVISA"
      description2="Segurança e qualidade garantidas, produzido em laboratórios totalmente regularizados"

      img3={leaf}
      name3="Ativos naturais"
      description3="Combinação poderosa de nutrientes essenciais e compostos naturais, sem substâncias proibidas"

      titleButton="Quero todos os diferenciais"
      />

      <CardDestak
      title="Diferente de outros, o D’Castillá-Vie NutriBody não provoca queda capilar"
      description="Enquanto muitos suplementos emagrecedores causam efeitos colaterais como queda de cabelo, o D’Castillá-Vie NutriBody foi desenvolvido com tecnologia de ponta para preservar sua saúde e autoestima durante o processo de emagrecimento."

      titleButton="Quero emagrecer com saúde"

      img={logo}
      />

      <Testimonials/>

      <CardDestak
      title="Afinal, quem é a D’Castillá-Vie?"
      
      description="A D’Castilla-Vie é uma marca criada para elevar sua beleza, confiança e sua história. Oferecemos experiências científicas e sensoriais que une o que há de mais avançado em tecnologia dermocosmética com o glamour e o luxo que você merece. Acreditamos que o verdadeiro luxo é sentir-se bem consigo mesmo(a). Por isso, nossa linha é desenvolvida com tecnologias inovadoras, ativos exclusivos e rigorosos padrões de qualidade, garantindo resultados visíveis, seguros e eficazes."

      titleButton="Quero emagrecer com saúde"

      img={logo}
      />

      <Faq/>

      <Cta/>

      <Footer/>

    </div>
  )
}