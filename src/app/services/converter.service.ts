
import {Injectable} from "@angular/core";
// import {config} from "@app/core/smartadmin.config";

@Injectable({
    providedIn: 'root'
})
export class ConverterService {
    private currentLanguage : any;

    constructor() { }

    numberToWords(theNumber:number) {
      return this.convertNumberToWordsNepali(theNumber);
    }
    numbertoenglishWords(theNumber:number){
        return this.convertNumberToWordsEnglish(theNumber);
    }

    convertToNepaliDigitText(engText: string): any {
        if(engText) {
            var engDigitCollection = "0123456789";
            var nepDigitCollection = "०१२३४५६७८९";
            var eng = engText.split("");
            var resultText = "";
            for (var ch of eng) {
                var index = engDigitCollection.indexOf(ch);
                if (index >= 0) {
                    resultText += nepDigitCollection.substring(index, index + 1);
                } else {
                    resultText += ch;
                }
            }
        }
        return resultText;
    }

    convertToEnglishDigitText(nepText: string): any {
        if(nepText) {
            var engDigitCollection = "0123456789";
            var nepDigitCollection = "०१२३४५६७८९";
            var eng = nepText.split("");
            var resultText = "";
            for (var ch of eng) {
                var index = nepDigitCollection.indexOf(ch);
                if (index >= 0) {
                    resultText += engDigitCollection.substring(index, index + 1);
                } else {
                    resultText += ch;
                }
            }
        }
        return resultText;
    }

    convertNumberToWordsEnglish(s)
    {
        if(s){
            var th = ['','Thousand','Million', 'Billion','Trillion'];
            var dg = ['Zero','One','Two','Three','Four', 'Five','Six','Seven','Eight','Nine'];
            var tn = ['Ten','Eleven','Twelve','Thirteen', 'Fourteen','Fifteen','Sixteen', 'Seventeen','Eighteen','Nineteen'];
            var tw = ['Twenty','Thirty','Forty','Fifty', 'Sixty','Seventy','Eighty','Ninety'];

            s = s.toString();
            s = s.replace(/[\, ]/g,'');
            if (s != parseFloat(s)) return 'not a number';
            var x = s.indexOf('.');
            if (x == -1) x = s.length;
            if (x > 15) return 'too big';
            var n = s.split('');
            var str = '';
            var sk = 0;
            for (var i=0; i < x; i++)
            {
                if ((x-i)%3==2)
                {
                    if (n[i] == '1')
                    {
                        str += tn[Number(n[i+1])] + ' ';
                        i++;
                        sk=1;
                    }
                    else if (n[i]!=0)
                    {
                        str += tw[n[i]-2] + ' ';
                        sk=1;
                    }
                }
                else if (n[i]!=0)
                {
                    str += dg[n[i]] +' ';
                    if ((x-i)%3==0) str += 'Hundred ';
                    sk=1;
                }


                if ((x-i)%3==1)
                {
                    if (sk) str += th[(x-i-1)/3] + ' ';
                    sk=0;
                }
            }
            if (x != s.length)
            {
                var y = s.length;
                str += '(decimal ';
                var i = 0;
               for (i=x+1; i<y; i++) str += dg[n[i]] +' ';
              
                str=str+')'
            }
            return str.replace(/\s+/g,' ');
        }
    }
    convertNumberToWordsNepali(t) {
        var number_parts: any;
        var decimal_tens: any;
        var decimal_words: any;
        var units = [
                "सुन्य",
                "एक",
                "दुई",
                "तीन",
                "चार",
                "पाँच",
                "छ",
                "सात",
                "आठ",
                "नौ",
                "दस"
            ],
            teens = [
                "सुन्य",
                "एक",
                "दुई",
                "तीन",
                "चार",
                "पाँच",
                "छ",
                "सात",
                "आठ",
                "नौ",
                "दस",
                "एघार",
                "बाह्र",
                "तेह्र",
                "चौध",
                "पन्ध्र",
                "सोह्र",
                "सत्र",
                "अठाह्र",
                "उन्नाइस",
                "बीस",
                "एकाइस",
                "बाइस",
                "तेइस",
                "चौबीस",
                "पचीस",
                "छब्बीस",
                "सत्ताइस",
                "अठ्ठाइस",
                "उनन्तीस",
                "तीस",
                "एकतीस",
                "बतीस",
                "तेतीस",
                "चौतीस",
                "पैतीस",
                "छतीस",
                "सरतीस",
                "अरतीस",
                "उननचालीस",
                "चालीस",
                "एकचालीस",
                "बयालिस",
                "तीरचालीस",
                "चौवालिस",
                "पैंतालिस",
                "छयालिस",
                "सरचालीस",
                "अरचालीस",
                "उननचास",
                "पचास",
                "एकाउन्न",
                "बाउन्न",
                "त्रिपन्न",
                "चौवन्न",
                "पच्पन्न",
                "छपन्न",
                "सन्ताउन्न",
                "अन्ठाउँन्न",
                "उनान्न्साठी ",
                "साठी",
                "एकसाठी",
                "बासाठी",
                "तीरसाठी",
                "चौंसाठी",
                "पैसाठी",
                "छैसठी",
                "सत्सठ्ठी",
                "अर्सठ्ठी",
                "उनन्सत्तरी",
                "सतरी",
                "एकहत्तर",
                "बहत्तर",
                "त्रिहत्तर",
                "चौहत्तर",
                "पचहत्तर",
                "छहत्तर",
                "सत्हत्तर",
                "अठ्हत्तर",
                "उनास्सी",
                "अस्सी",
                "एकासी",
                "बयासी",
                "त्रीयासी",
                "चौरासी",
                "पचासी",
                "छयासी",
                "सतासी",
                "अठासी",
                "उनान्नब्बे",
                "नब्बे",
                "एकान्नब्बे",
                "बयान्नब्बे",
                "त्रियान्नब्बे",
                "चौरान्नब्बे",
                "पंचान्नब्बे",
                "छयान्नब्बे",
                "सन्तान्‍नब्बे",
                "अन्ठान्नब्बे",
                "उनान्सय"
            ];
        var iLength: any; var aLength: any;var oLength: any; var gLength: any; var lLength:any;
        var tho: any; var lak: any; var kar: any; var arb:any; var kharab:any;

        if (isNaN(t) || "" == t) return "";
        var n = "",
            e = 0;
        if (
            (-1 != t.toString().indexOf(".") &&
            ((number_parts = t.toString().split(".")),
                (t = number_parts[0]),
                (e = number_parts[1]),
                (decimal_tens = e.toString().substring(0, 2)),
            1 == decimal_tens.length &&
            (decimal_tens = decimal_tens.toString() + "0"),
                (decimal_words = teens[parseInt(decimal_tens)].toString() + " पैसा")),
            t.length > 13)
        )
            return void alert("Number greater than kharab not supported");
        let r = Math.floor(Number(t) % 100);
        if (t.toString().length > 2) {
            var s = t.toString().substring(t.toString().length - 3, t.toString().length - 2);
        }
        if (t.toString().length > 3) {
            var i = Math.floor(t.toString() % 1e5);
            (iLength = i.toString().length), (tho = i.toString().substring(0, iLength - 3));
        }
        if (t.toString().length > 5){
            var a = Math.floor(t % 1e7);
            (aLength = a.toString().length), (lak = a.toString().substring(0, aLength - 5));
        }
        if(t.toString().length > 7){
            var o = Math.floor(t % 1e9);
            (oLength = o.toString().length), (kar = o.toString().substring(0, oLength - 7));
        }
        if(t.toString().length > 9){
            var g = Math.floor(t % 1e11);
            (gLength = g.toString().length), (arb = g.toString().substring(0, gLength - 9));
        }
        if(t.toString().length > 11){
            var l = Math.floor(t % 1e13);
            (lLength = l.toString().length),
                (kharab = l.toString().substring(0, lLength - 11))
        }

        return (
            l > 0 && (n += teens[kharab] + " खरब"),
            g > 0 && (n += " " + teens[arb] + " अरब"),
            o > 0 && (n += " " + teens[kar] + " करोड"),
            a > 0 && (n += " " + teens[lak] + " लाख"),
            i > 0 && (n += " " + teens[tho] + " हजार"),
            s > 0 && (n += " " + units[s] + " सय"),
            r > 0 && (n += " " + teens[r]),
                (n += " रुपैंया "),
            e > 0 && (n += ", " + decimal_words),
                (n +=" मात्र "),
                n
        );
    }
}
