import Projeto from '../../components/Projeto'
import Titulo from '../../components/Titulo'
import { ListaProjetos } from './styles'

const Projetos = () => (
  <section>
    <Titulo fontSize={16}>Projetos</Titulo>
    <ListaProjetos>
      <li>
        <Projeto />
      </li>
      <li>
        <Projeto />
      </li>
      <li>
        <Projeto />
      </li>
      <li>
        <Projeto />
      </li>
    </ListaProjetos>
  </section>
)

export default Projetos
