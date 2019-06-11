import { Pipe, PipeTransform } from '@angular/core';

@Pipe( {
    name: 'filter'
})

export class FilterPipe implements PipeTransform {
    transform(items: any[], searchText: string): any[] {

      if(!items) { return []; }

      searchText = searchText.toLowerCase();

      if(!searchText) return items;
        return items.filter( it => {
            
        return it.nameSeries.toLowerCase().includes(searchText);
      });
     }
  }