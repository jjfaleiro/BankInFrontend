import { Container } from "./styles";

//Não posso criar componente com a primeira letra sendo minúscula sendo assim faça da seguinte forma que funciona como uma conversão icon: Icon
export function Input({ icon: Icon, ...rest}){
  return(
    <Container>
      {Icon && <Icon size={20}/>}
      <input {...rest}/>

    </Container>
  );
}

//Aqui é o seguinte o Icon só ira aparecer se ele existir - pq alguns casos na nossa aplicação eles existem em outros não - Por isso o && - Além de definir para ele o tamanho de 20
//{Icon && <Icon size={20}/>}