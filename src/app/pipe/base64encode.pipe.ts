import { Pipe, PipeTransform } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Pipe({
  name: 'base64encode',
})

export class Base64encodePipe implements PipeTransform {

  transform(value: Blob): any {
  const reader = new window.FileReader();
  reader.readAsDataURL(value);
  reader.onloadend =  () => {
      const base64data = reader.result;
      console.log(base64data);
      return 'data:image/png;base64' + base64data;
  };


  }
}
