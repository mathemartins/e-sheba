import styled from "styled-components";
import { Link as ReachRouterLink } from 'react-router-dom';

// Background of the header
export const HeaderBackground = styled.div`
    background-color: #E1EEFF;  // Match the color from your design
    padding: 20px 40px;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);

    @media (max-width: 600px) {
        padding: 10px 20px;
    }
`;

// Container for header elements
export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 600px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

// Navigation Link
export const Link = styled.p.attrs(props => ({}))`  // Use .attrs() to bind props
    margin-right: 30px;
    cursor: pointer;
    text-transform: capitalize;
    font-size: 13px;
    color: ${props => (props.$isActive ? "#0360D9" : "#0D2B46")};  // Notice the $ before isActive
    text-decoration: ${props => (props.$isActive ? "underline" : "none")};

    &:last-of-type {
        margin-right: 0;
    }

    @media (max-width: 600px) {
        margin: 5px 0;
    }
`;





// Button Link
export const ButtonLink = styled(ReachRouterLink)`
    background-color: ${props => props.background || "#ff385c"};
    color: ${props => props.color || "#fff"};
    padding: 12px 16px; 
    border-radius: 50px;
    text-transform: capitalize;
    text-decoration: none;
    transition: background-color 0.3s ease;
    border: 1px solid #0360D9; 
    display: inline-flex;  // Use flex to center content
    align-items: center;  // Vertically center the text
    justify-content: center;  // Horizontally center the text

    &:hover {
        background-color: ${props => props.hoverColor || "#ff1a4a"}; 
    }

    @media (max-width: 600px) {
        margin-top: 10px;
    }
`;


// Text (For search input placeholder or any other text)
export const Text = styled.p`
    font-size: 16px;
    color: #fff; 
    margin-right: 20px; // Add some spacing
`;


// Search Input
export const SearchInput = styled.input`
    padding: 10px 20px;
    border: none;
    border-radius: 30px; // Rounded corners

    ::placeholder {
        color: #888;
    }
`;

// Logo
export const Logo = styled.img`
    width: 100px;
    height: auto;

    @media (max-width: 600px) {
        width: 60px;
    }
`;

