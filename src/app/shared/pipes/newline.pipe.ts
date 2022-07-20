import { Pipe, PipeTransform } from '@angular/core';

/*
 * Returns the newline character "\n" as a string
 *
 */
@Pipe({ name: 'newlineAsString' })
export class NewlineAsStringPipe implements PipeTransform {
  
  constructor() {}

  transform(text: string) {
    return text.split('\r').join('</br>');
  }
}