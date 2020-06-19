import { Pipe, PipeTransform } from '@angular/core'
@Pipe({
   name: 'substring'
})
export class SubstringPipe implements PipeTransform {
   transform(value : string, args? : any) : any {
      return value.substring(0, 1);
   }
}