import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'ngxAutocomplete'
})
export class NgxAutocompletePipe implements PipeTransform {

    transform(array: any[], property: string, filter: string): any[] {
        if (filter == null || filter.length === 0) {
            return array;
        }

        return array.filter(r => r[property].toUpperCase().indexOf(filter.toUpperCase()) >= 0);
    }
}
