import { Injectable } from '@angular/core';

export interface PrismicConfiguration {
  apiEndpoint: string;
  accessToken?: string;
  linkResolver: Function;
}

export const CONFIG: PrismicConfiguration = {
  apiEndpoint: 'https://landr-demo.prismic.io/api/v2',
  linkResolver(doc) {
    if (doc.type === 'landing_page') {
      console.log('landing paaaaa')
      return `${doc.lang.substring(0, 2)}/${doc.uid}`;
    }
    return '/';
  }
};
