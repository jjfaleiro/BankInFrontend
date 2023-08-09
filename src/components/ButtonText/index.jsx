import { Container } from "./styles";
//Se o valor de isAction não for informado ele será falso 
export function ButtonText({title, isActive = false , ...rest}) {
  return(
    <Container 
      type="button"
      isActive={isActive}
      {...rest}
    >
      {title}
    </Container>
  );
}

/*$isactive={isActive.toString()}*/