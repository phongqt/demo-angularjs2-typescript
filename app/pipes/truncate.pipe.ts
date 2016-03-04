import {Pipe, PipeTransform} from 'angular2/core'

@Pipe({
  name: 'truncate'  
})

export class TruncatePipe implements PipeTransform{
    transform(value: string, args:string[]) {
        if (!args[0]) {
            return value;
        }
        var result:string = '';
        result = value.substring(0,+args[0]);
        if (args[1]) {
           result += args[1]; 
        } else {
            result += '...';
        }
        return result;
    }
}