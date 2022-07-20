import { Pipe, PipeTransform } from '@angular/core';
import { ConverterService } from 'app/services/converter.service';

@Pipe({
    name: 'e2nReport',
    pure: false
})
export class E2nReportPipe implements PipeTransform {

    constructor(public numberConverter: ConverterService){}

    transform(phrase: any, args?: any): any {
                if (phrase !== undefined) {
                    if (phrase) {
                        phrase = phrase.toString();
                    }
                    return this.numberConverter.convertToNepaliDigitText(phrase);
                }
        return phrase;

    }

}
