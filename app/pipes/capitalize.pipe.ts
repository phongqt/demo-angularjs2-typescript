import {Pipe,PipeTransform} from 'angular2/core';

@Pipe({
  name: 'capitalize'  
})

export class CapitalizePipe implements PipeTransform {
    transform(value: string, args: string[]) {
        return value ? (value.charAt(0).toUpperCase() + value.substring(1)) : value; 
    }
}