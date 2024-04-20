import { LinkButtonNav, NavContainer } from './styled';

interface props {
  activeButtonMenu: boolean;

}
function NavDesktop({ activeButtonMenu }:): JSX.Element {
  return (
    <NavContainer
      is_open={activeButtonMenu ? 'true' : 'false'}
      className={activeButtonMenu ? 'isActive__Button__menu--mobile' : ''}
    >
      <LinkButtonNav
        to="/"
        paddingbuttonlink="10px"
        onClick={() => activateButton('home')}
        activatingthebuttonbordercolor={
          activatingHome == true ? 'true' : 'false'
        }
      >
        HOME
      </LinkButtonNav>
      <LinkButtonNav
        to="/"
        paddingbuttonlink="10px"
        onClick={() => activateButton('fish')}
        activatingthebuttonbordercolor={
          activetingFish == true ? 'true' : 'false'
        }
      >
        PEIXES
      </LinkButtonNav>
      <LinkButtonNav
        to="/"
        paddingbuttonlink="10px"
        onClick={() => activateButton('vegetables')}
        activatingthebuttonbordercolor={
          activatingVegetables == true ? 'true' : 'false'
        }
      >
        VERDURAS
      </LinkButtonNav>
      <LinkButtonNav
        to="/"
        paddingbuttonlink="10px"
        onClick={() => activateButton('contact')}
        activatingthebuttonbordercolor={
          activetingContact == true ? 'true' : 'false'
        }
      >
        CONTATO
      </LinkButtonNav>
      <LinkButtonNav
        to="/"
        className="marginElemt"
        onMouseEnter={() => activateButtonHoverColor()}
        onMouseLeave={() => activateButtonHoverColor()}
        hovercolor={activeButtonHoverColorLogin == true ? 'true' : 'false'}
        onClick={() => activateButton('login')}
        activatingthebuttonbordercolor={
          activetingLogin == true ? 'true' : 'false'
        }
      >
        <CiUserIcon />
        <p>
          Faça Login ou
          <br />
          crie uma conta
        </p>
      </LinkButtonNav>
      {activeWorkSpace && (
        <LinkButtonNav
          to="/"
          className="marginElemt"
          onMouseEnter={() => activateButtonHoverColor('work')}
          onMouseLeave={() => activateButtonHoverColor('work')}
          hovercolor={activeButtonHoverColorWork == true ? 'true' : 'false'}
          onClick={() => activateButton('worker')}
          activatingthebuttonbordercolor={
            activetingWorker == true ? 'true' : 'false'
          }
        >
          <BsPersonWorkspaceIcon />
          <p>
            Area de
            <br />
            trabalho
          </p>
        </LinkButtonNav>
      )}
      <LinkButtonNav
        to="/"
        paddingbuttonlink="6px"
        onClick={() => activateButton('cart')}
        activatingthebuttonbordercolor={
          activetingCart == true ? 'true' : 'false'
        }
      >
        <FaCartShoppingIcon />
        {activeButtonMenu && (
          <p>
            Seu carrinho
            <br />
            de Compras
          </p>
        )}
      </LinkButtonNav>
    </NavContainer>
  );
}
