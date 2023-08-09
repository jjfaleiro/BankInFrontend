import { Container } from './styles'

//loading = false => significa que como o loading é booleano caso ele não seja passado para o button o defina para o botão sendo ele  falso - pois o loading sendo passado como propriedade por padrão ele é true - fazer com que aqueles que não receberam seja falso é uma boa pratica - Pois é uma propriedade opcional
export function Button({title, loading = false, ...rest }) {

  return (
  <Container
  type='button' 
  disabled={loading}
  {...rest}>
    {loading ? 'Carregando...' : title}
  </Container>
  );
}

//...rest (rest operator) : significa qualquer outra propriedade que tenha sido definida ao utilizar o botão desestruture para cá - quando se tem muitas propriedades é desta forma que fazer 