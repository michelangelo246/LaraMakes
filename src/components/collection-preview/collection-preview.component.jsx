import React from 'react';
import { CollectionPreviewContainer, PreviewContainer, TitleContainer } from './collection-preview.styles';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ title, items }) => (
   <CollectionPreviewContainer>
      <TitleContainer>{ title.toUpperCase() }</TitleContainer>
      <PreviewContainer>
         {
            items
            .filter((item, index)=>(
               index < 2
            ))
            .map((item)=>(
               <CollectionItem key={ item.id } item={ item }/>
            ))
         }
      </PreviewContainer>
   </CollectionPreviewContainer>
)

export default CollectionPreview;