import styled from 'styled-components';

export const MessageSlotContainer = styled.div `
    width: 100%;
    height: 100%;
    position: -webkit-sticky;
    position: sticky;
    bottom: 0;
    background: ${ props => props.theme.components.messageSlot.background};
    text-align: center;
`;

export const SlotPiece = styled.div `
    width: 100%;
    color: ${ props => props.theme.components.messageSlot.color};
    margin: .65rem 0;
    text-transform: uppercase;

    & p {
        margin: 0;
        font-size: .9rem;

        & span {
            color: ${ props => props.theme.components.messageSlot.spanColor};
            font-weight: 600;
        }
    }

    @media (max-width: 6px) {
        margin: .4rem 0;
        & p {
            font-size: .65rem;
        }
    }
    
`;