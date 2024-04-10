import type { Schema, Attribute } from '@strapi/strapi';

export interface LayoutContent extends Schema.Component {
  collectionName: 'components_layout_contents';
  info: {
    displayName: 'Content';
    icon: 'archive';
    description: '';
  };
  attributes: {
    richText: Attribute.RichText;
    media: Attribute.Media;
    media2Right: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'layout.content': LayoutContent;
    }
  }
}
