import Titulo from '../../components/Titulo'
import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import { ButtonTema, Descricao, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>P H Pedroso</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        phpedroso
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Dev Front-end
      </Descricao>
      <ButtonTema>Trocar Tema</ButtonTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
