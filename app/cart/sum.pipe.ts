import {Pipe, PipeTransform} from 'angular2/core';
/*
*
*/
@Pipe({name: 'sum'})
export class SumPipe implements PipeTransform {

  transform(value:number, args:string[]) : any {

        var quantity =  parseInt(args[0]);
        return quantity * value;

  }
}
