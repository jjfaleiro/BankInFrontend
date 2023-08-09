import { Container } from "./styles";


//Ou seja vou desestruturar o title e o children que é oque vier depois de titulo pois está parte irá serão distintas umas das outras
export function Section({title, children}) {
  return (
    <Container>
      <h2>{title}</h2>
      {children}
    </Container>
  )
}