import { Pipe, PipeTransform } from '@angular/core'

@Pipe({name: 'nepaliNum'})
export class NepaliNumberPipe implements PipeTransform {

    transform(engText: string):any {
        if (!engText)
            return null;
        var lang = JSON.parse(sessionStorage.getItem('currentLanguage'));
        if (!lang || lang.key === 'np') {
            var engDigitCollection = "0123456789";
            var nepDigitCollection = "०१२३४५६७८९";
            var eng = engText.toString().split("");
            var resultText = "";
            for (var ch of eng) {
                var index = engDigitCollection.indexOf(ch);
                if (index >= 0) {
                    resultText += nepDigitCollection.substring(index, index + 1);
                } else {
                    resultText += ch;
                }
            }
            return resultText;
        }else
            return engText;
    }
}