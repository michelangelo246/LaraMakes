import styled from 'styled-components';

export const CartItemContainer = styled.div`
   width: 100%;
   display: flex;
   height: 64px;
   margin-bottom: 15px;
`;

export const CartItemImage = styled.img`
   width: 30%;
`;

export const ItemDetailsContainer = styled.div`
   width: 70%;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: center;
   padding: 10px 20px;
   height: 100%;
`;

const divImageUrl = props => (
   `background-image: url(${props.imageUrl})`
);

export const BackgroundImageContainer = styled.div`
   width: 30%;
   background-size: contain;
   background-repeat: no-repeat;
   background-position: center;
   height: 100%;
   ${divImageUrl};
`;

export const NameSpan = styled.span`
   font-size: 16px;
`