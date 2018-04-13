import { Injectable } from '@angular/core';

export interface PrismicConfiguration {
  apiEndpoint: string;
  accessToken?: string;
  linkResolver: Function;
}

export const CONFIG: PrismicConfiguration = {
  apiEndpoint: 'https://landr-demo.prismic.io/api/v2',
  accessToken: 'MC5XdEVCQXlvQUFDb0F0VEpH.77-9Re-_ve-_vQrvv71m77-977-977-977-9HDrvv73vv73vv73vv73vv73vv73vv71p77-9Le-_ve-_vQYrZ--_vRIP77-9',
  linkResolver(doc) {
    return '/';
  }
};
