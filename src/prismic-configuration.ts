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
      return `page/${doc.uid}`;
    }
    return '/';
  }
};
