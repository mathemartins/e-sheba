import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../assets/images/E-sheba.svg'

export function HeaderContainer({ children }) {
  return (
      <Header>
          <Header.Frame>
              <Header.Logo to={ROUTES.HOME} src={logo} alt='E-sheba' />
              
              <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Header.TextLink to={ROUTES.HOME} $isActive={true}>Home</Header.TextLink>
                  <Header.TextLink to={ROUTES.ABOUT} $isActive={false}>About</Header.TextLink>
                  <Header.TextLink to={ROUTES.APPLICATION} $isActive={false}>Application</Header.TextLink>
                  <Header.TextLink to={ROUTES.HISTORY} $isActive={false}>History</Header.TextLink>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Header.ButtonLink 
                      to={ROUTES.SIGN_IN} 
                      background="#E1EEFF" 
                      color="#0360D9">Log in
                  </Header.ButtonLink>
                  <Header.ButtonLink 
                      to={ROUTES.SIGN_UP} 
                      background="#0360D9" 
                      color="#fff">Sign up
                  </Header.ButtonLink>
              </div>
          </Header.Frame>
          {children}
      </Header>
  );
}

