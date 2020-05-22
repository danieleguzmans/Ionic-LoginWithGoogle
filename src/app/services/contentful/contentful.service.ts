import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';

const contentful = {
  space: 'styp4ml6w2uq',
  accessToken: 'a94a612deca6a68ca66e5821ad6d7859dbcc346ec09abc6160d6d47622e61049',
  contentTypeIds : {
    restaurantes: 'restaurantes',
  }
}

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  private cdaClient = createClient({
    space: contentful.space,
    accessToken: contentful.accessToken
  });

  constructor() { }

  getRestaurantes(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: contentful.contentTypeIds.restaurantes
    }, query))
    .then(res => res.items);
  }
}