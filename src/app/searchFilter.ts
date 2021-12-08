import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'searchFilter'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!args){
      return value;
    }
    return value.filter((val)=>{
      let rVal=(val.user.toLocaleLowerCase().includes(args)) || (val._id.toLocaleLowerCase().includes(args)) || (val.ip.toLocaleLowerCase().includes(args));
      return rVal;
    })
    
  }

}