import { HeaderBackground, Container, Link, ButtonLink, Text, Logo } from "./styles/header";
import { Link as ReachRouterLink } from 'react-router-dom';

export default function Header({ children, ...restProps }) {
    return (
        <HeaderBackground {...restProps}>
            {children}
        </HeaderBackground>
    )
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
    return (
        <ReachRouterLink to={to}>
            <Logo {...restProps} />
        </ReachRouterLink>
    );
};
  
Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>;
}
  
Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
    return <ButtonLink {...restProps}>{children}</ButtonLink>;
};