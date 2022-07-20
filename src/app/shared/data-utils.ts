import NepaliDate from 'nepali-date-converter'
import * as adbs from "ad-bs-converter";

export const convertDateToBS = (engDate: any): any => {
  return new NepaliDate(engDate).getBS()
}

export const convertDateToNepali = (engDate: any): string => {
  return formatDate(new NepaliDate(engDate).getBS(), '/');
}

export const convertDateToEng = (nepalidate: any): string => {
  const nd = new NepaliDate(nepalidate.year, nepalidate.month, nepalidate.day)
  console.log(nd.getAD());
  return formatDate(nd.getAD(), '-');

}

export const formatDate = (miti: any, separator: string): string => {
  const y = miti.year.toString();
  const m = miti.month + 1 >= 10 ? (miti.month + 1).toString() : '0' + (miti.month + 1);
  const d = miti.date >= 10 ? miti.date.toString() : '0' + miti.date;
  return y + separator + m + separator + d;

}
export const formattedEnglishDate = (date: Date): string => {
  const datePart = date.getDate();
  const monthPart = date.getMonth() + 1;
  const yearPart = date.getFullYear();

  return (yearPart) + '/' + (monthPart < 10 ? '0' + monthPart : monthPart) + '/' + (datePart < 10 ? '0' + datePart : datePart);

}

export const ad2bs = (date: any) => {
  const nep = adbs.ad2bs(date);
  return nep.en;
}
export const bs2ad = (date: any) => {
  let edate = date.year + '/' + ((date.month) <= 9 ? '0' + (Number(date.month) + 1) : (Number(date.month) + 1)) + '/' + (date.day <= 9 ? '0' + date.day : date.day);
  var eng = adbs.bs2ad(edate);

  return eng;
}
export const monthsArray = [
  { id: 1, nvalue: 'बैशाख', evalue: 'Apr/May' },
  { id: 2, nvalue: 'जेठ', evalue: 'May/Jun' },
  { id: 3, nvalue: 'असार', evalue: 'Jun/July' },
  { id: 4, nvalue: 'साउन', evalue: 'July/Aug' },
  { id: 5, nvalue: 'भदौ', evalue: 'Aug/Sept' },
  { id: 6, nvalue: 'असोज', evalue: 'Sept/Oct' },
  { id: 7, nvalue: 'कार्तिक', evalue: 'Oct/Nov' },
  { id: 8, nvalue: 'मंसिर', evalue: 'Nov/Dec' },
  { id: 9, nvalue: 'पौष ', evalue: 'Dec/Jan' },
  { id: 10, nvalue: 'माघ', evalue: 'Jan/Feb' },
  { id: 11, nvalue: 'फागुन', evalue: 'Feb/Mar' },
  { id: 12, nvalue: 'चैत', evalue: 'Mar/Apr' },
];



export const खर्चशिर्षक = [
  { id: 1, nname: 'खर्चको विवरण (खर्च शिर्षक)', ename: 'खर्चको विवरण (खर्च शिर्षक)', code: '2007-2009' },
  { id: 2, nname: 'खर्चको विवरण (खर्च शिर्षक) चालु पुजी वित्तीय', ename: 'खर्चको विवरण (खर्च शिर्षक) चालु पुजी वित्तीय', code: '2010-2012' },
  { id: 3, nname: 'खर्चको विवरण (खर्च शिर्षक) श्रोतगत', ename: 'खर्चको विवरण (खर्च शिर्षक) श्रोतगत', code: '2013-2015' },
  { id: 4, nname: ' खर्चको विवरण (खर्च शिर्षक/दातृनिकाय/श्रोत)', ename: ' खर्चको विवरण (खर्च शिर्षक/दातृनिकाय/श्रोत)', code: '2016-2018' },
]

export const ReportType = [
  { id: -1, value: 'All', nname: 'All' },
  { id: 2, value: 'Ministry', nname: 'मन्त्रालय' },
  { id: 1, value: 'District', nname: 'जिल्ला' },
  // { id: 3, 'value': "Department", 'nname': 'विभाग' },
]

export const श्रोत = [
  { id: 1, nname: 'खर्चको विवरण (श्रोत)', ename: 'खर्चको विवरण (श्रोत)', code: '2019-2021' },
  { id: 2, nname: 'खर्चको विवरण (श्रोत) चालु पुजी वित्तिय ', ename: 'खर्चको विवरण (श्रोत) चालु पुजी वित्तिय', code: '2022-2024' },
  { id: 3, nname: 'खर्चको विवरण (श्रोत) विष्तृत', ename: 'खर्चको विवरण (श्रोत) विष्तृत', code: '2025' },

]

export const दातृनिकाय = [
  { id: 1, nname: 'खर्चको विवरण (दातृनिकाय/श्रोत) ', ename: 'खर्चको विवरण (दातृनिकाय/श्रोत) ', code: '2026-2028' },
  { id: 2, nname: 'खर्चको विवरण (दातृनिकाय) श्रोतगत', ename: 'खर्चको विवरण (दातृनिकाय) श्रोतगत', code: '2029-2031' },
  { id: 3, nname: 'खर्चको विवरण (दातृनिकाय/श्रोत) चालु पुजी वित्तिय', ename: 'खर्चको विवरण (दातृनिकाय/श्रोत) चालु पुजी वित्तिय', code: '2032-2034' },
]

export const बजेटउपशिर्षक = [
  { id: 1, nname: 'खर्चको विवरण (बजेट उप शिर्षक)', ename: 'खर्चको विवरण (बजेट उप शिर्षक) ', code: '2035-2037' },
  { id: 2, nname: 'खर्चको विवरण (बजेट उप शिर्षक) चालु पुजी वित्तिय', ename: 'खर्चको विवरण (बजेट उप शिर्षक) चालु पुजी वित्तिय', code: '2038-2040' },
  { id: 3, nname: ' खर्चको विवरण (बजेट उप शिर्षक) श्रोतगत', ename: ' खर्चको विवरण (बजेट उप शिर्षक) श्रोतगत', code: '2041-2043' },
  { id: 4, nname: ' खर्चको विवरण (बजेट उप शिर्षक/दातृनिकाय/श्रोत)', ename: ' खर्चको विवरण (बजेट उप शिर्षक/दातृनिकाय/श्रोत)', code: '2044-2046' },
  { id: 5, nname: ' खर्चको विवरण (बजेट उप शिर्षक/दातृनिकाय/श्रोत) चालु पुजी वित्तिय', ename: ' खर्चको विवरण (बजेट उप शिर्षक/दातृनिकाय/श्रोत) चालु पुजी वित्तिय', code: '2047-2049' },
  { id: 6, nname: 'खर्चको विवरण (बजेट उप शिर्षक/कार्यालय)', ename: 'खर्चको विवरण (बजेट उप शिर्षक/कार्यालय)', code: '2050-2052' },
  { id: 7, nname: ' खर्चको विवरण (बजेट उप शिर्षक/कार्यालय) चालु पुजी वित्तिय', ename: '  खर्चको विवरण (बजेट उप शिर्षक/कार्यालय) चालु पुजी वित्तिय', code: '2053-2055' },
  { id: 8, nname: '  खर्चको विवरण (बजेट उप शिर्षक/कार्यालय/दातृनिकाय/श्रोत)', ename: '  खर्चको विवरण (बजेट उप शिर्षक/कार्यालय/दातृनिकाय/श्रोत)', code: '2056-2058' },
  { id: 9, nname: 'खर्चको विवरण (बजेट उप शिर्षक/खर्च शिर्षक/दातृनिकाय/श्रोत)', ename: 'खर्चको विवरण (बजेट उप शिर्षक/खर्च शिर्षक/दातृनिकाय/श्रोत)', code: '2059-2061' },

]

export const खर्चकोविवरण = [
  { id: 1, nname: 'खर्चको विवरण', ename: 'खर्चको विवरण', code: '2001-2002' },
  { id: 2, nname: 'खर्चको विवरण श्रोतगत', ename: 'खर्चको विवरण श्रोतगत', code: '2003-2004' },
  { id: 3, nname: 'खर्चको विवरण चालु पुजी वित्तीय', ename: 'खर्चको विवरण चालु पुजी वित्तीय', code: '2005-2006' },
]

export const Rmis = [
  { id: 1, nname: 'शिर्षकगत राजस्वको दैनिक/मासिक विवरण', ename: 'शिर्षकगत राजस्वको दैनिक/मासिक विवरण', code: '' },
  { id: 2, nname: 'कार्यालयगत राजस्वको कारोवार अनुसारको दैनिक/मासिक विवरण', ename: 'कार्यालयगत राजस्वको कारोवार अनुसारको दैनिक/मासिक विवरण', code: '' },
  { id: 2, nname: 'बैंक/कार्यालयको तुलानत्म्क राजस्व विवरण', ename: 'बैंक/कार्यालयको तुलानत्म्क राजस्व विवरण', code: '' },
]

export const खर्चको_मासिक_बाँडफाँड_तथा_नगद_योजना = [
  { id: 1, nname: 'खर्चको मासिक बाँडफाँट तथा नगद योजना (वजेट उप शिर्षक)', ename: 'खर्चको मासिक बाँडफाँट तथा नगद योजना (वजेट उप शिर्षक)', code: '239' },
  { id: 2, nname: 'खर्चको मासिक बाँडफाँट तथा नगद योजना (कार्यालय)', ename: 'खर्चको मासिक बाँडफाँट तथा नगद योजना (कार्यालय)', code: '240' },
  { id: 2, nname: 'खर्चको मासिक बाँडफाँट तथा नगद योजना (वजेट उप शिर्षक/खर्च शिर्षक)', ename: 'खर्चको मासिक बाँडफाँट तथा नगद योजना (वजेट उप शिर्षक/खर्च शिर्षक)', code: '241' },
]

export const धरौटीको_फाँटवारी =[
  { id: 1, nname: 'धरौटीको वित्तीय  बिवरण ', ename: 'धरौटीको वित्तीय  बिवरण ', code: '517' },
  { id: 2, nname: 'धरौटीको वार्षिक विवरण ', ename: 'धरौटीको वार्षिक विवरण ', code: '518' },
  { id: 3, nname: 'व्यक्तिगत धरौटी बाँकी मौज्दाताको विवरण ', ename: 'व्यक्तिगत धरौटी बाँकी मौज्दाताको विवरण ', code: '519' },
]
export const राजस्वकोफाँटवारी = [
  { id: 1, nname: 'शिर्षकगत राजस्व आम्दानीको विवरण (बैंक अनुसार)', ename: 'शिर्षकगत राजस्व आम्दानीको विवरण (बैंक अनुसार)', code: '514' },
  { id: 2, nname: 'राजस्व सम्बन्धी मासिक प्रतिवेदन', ename: 'राजस्व सम्बन्धी मासिक प्रतिवेदन' ,code:'515'},
  { id: 3, nname: 'राजस्व-आम्दानीको आर्थिक विवरण  ', ename: 'राजस्व-आम्दानीको आर्थिक विवरण  ', code: '516' },
]
export const कार्यसञ्चालनकोष = [
  { id: 1, nname: 'कार्यसञ्चालनकोष (विविध)को मासिक विवरण ', ename: 'कार्यसञ्चालनकोष (विविध)को मासिक विवरण ', code: '520' },
  { id: 2, nname: 'कार्यसञ्चालनकोष (विविध)को वार्षिक विवरण ', ename: 'कार्यसञ्चालनकोष (विविध)को वार्षिक विवरण ', code: '521' },
  { id: 3, nname: 'फर्छ्यौट गर्न बांकी पेश्कीको मास्केबारी  ', ename: 'फर्छ्यौट गर्न बांकी पेश्कीको मास्केबारी  ', code: '525' },
  
]
export const mfmisखर्चकोविवरण_दातृनिकायश्रोत = [
  { id: 1, nname: 'खर्चको विवरण(श्रोत)', ename: 'खर्चको विवरण(श्रोत)', code: '215-216' },
  { id: 2, nname: 'खर्चको विवरण (दातृनिकाय/श्रोत)', ename: 'खर्चको विवरण (दातृनिकाय/श्रोत)', code: '217-218' },
  { id: 3, nname: 'खर्चको विवरण (खर्च शिर्षक/श्रोत)', ename: 'खर्चको विवरण (खर्च शिर्षक/श्रोत)', code: '219-220' },
  { id: 4, nname: 'खर्चको विवरण (खर्च शिर्षक/दातृनिकाय/श्रोत)', ename: 'खर्चको विवरण (खर्च शिर्षक/दातृनिकाय/श्रोत)', code: '221-222' },
  { id: 5, nname: 'खर्चको विवरण (बजेट उप शिर्षक/दातृनिकाय/श्रोत)', ename: 'खर्चको विवरण (बजेट उप शिर्षक/दातृनिकाय/श्रोत)', code: '223-224' },
  { id: 6, nname: 'खर्चको विवरण (बजेट उप शिर्षक/कार्यालय/दातृनिकाय/श्रोत)', ename: 'खर्चको विवरण (बजेट उप शिर्षक/कार्यालय/दातृनिकाय/श्रोत)', code: '225-226' },
  { id: 7, nname: 'खर्चको विवरण (बजेट उप शिर्षक/खर्च शिर्षक/दातृनिकाय/श्रोत)', ename: 'खर्चको विवरण (बजेट उप शिर्षक/खर्च शिर्षक/दातृनिकाय/श्रोत)', code: '227-228' },
  { id: 8, nname: 'खर्चको विवरण (सेवा तथा कार्यक्रम/श्रोत)', ename: 'खर्चको विवरण (सेवा तथा कार्यक्रम/श्रोत)', code: '229-230' },
  { id: 9, nname: 'खर्चको विवरण (सेवा तथा कार्यक्रम/खर्च शिर्षक/दातृनिकाय/श्रोत)', ename: 'खर्चको विवरण (सेवा तथा कार्यक्रम/खर्च शिर्षक/दातृनिकाय/श्रोत)', code: '231-232' },
]

export const mfmisखर्चकोविवरणचालुपुजीवित्तिय = [
  { id: 1, nname: 'खर्चको विवरण (खर्च शिर्षक) चालु पुजी वित्तीय', ename: 'खर्चको विवरण (खर्च शिर्षक) चालु पुजी वित्तीय', code: '233-234' },
  { id: 2, nname: 'खर्चको विवरण (दातृनिकाय/श्रोत) चालु पुजी वित्तीय', ename: 'खर्चको विवरण (दातृनिकाय/श्रोत) चालु पुजी वित्तीय', code: '235-236' },
  { id: 3, nname: 'खर्चको विवरण (बजेट उप शिर्षक)चालु पुजी वित्तीय', ename: 'खर्चको विवरण (बजेट उप शिर्षक)चालु पुजी वित्तीय', code: '237-238' },
  { id: 4, nname: 'खर्चको विवरण (बजेट उपशिर्षक/कार्यालय) चालु पुजी वित्तीय', ename: 'खर्चको विवरण (बजेट उपशिर्षक/कार्यालय) चालु पुजी वित्तीय', code: '239-240' },
  { id: 5, nname: 'खर्चको विवरण (सेवा तथा कार्यक्रम)चालु पुजी वित्तीय', ename: 'खर्चको विवरण (सेवा तथा कार्यक्रम)चालु पुजी वित्तीय', code: '241-242' },
  { id: 6, nname: 'आर्थिक बर्गिकरण अनुसार खर्चको विवरण (खर्च शिर्षक) चालु पुजी वित्तीय', ename: 'आर्थिक बर्गिकरण अनुसार खर्चको विवरण (खर्च शिर्षक) चालु पुजी वित्तीय', code: '243-244' },


]

export const mfmisखर्चकोविवरण = [
  { id: 1, nname: 'खर्चको विवरण (खर्च शिर्षक)', ename: 'खर्चको विवरण (खर्च शिर्षक)', code: '201-202' },
  { id: 2, nname: 'खर्चको विवरण (बजेट उप शिर्षक)', ename: 'खर्चको विवरण (बजेट उप शिर्षक)', code: '203-204' },
  { id: 3, nname: 'खर्चको विवरण (कार्यालय) ', ename: 'खर्चको विवरण (कार्यालय) ', code: '205-206' },
  { id: 4, nname: 'खर्चको विवरण (बजेट उप शिर्षक/कार्यालय)', ename: 'खर्चको विवरण (बजेट उप शिर्षक/कार्यालय)', code: '207-208' },
  { id: 5, nname: 'खर्चको विवरण (सेवा)', ename: 'खर्चको विवरण (सेवा)', code: '209-210' },
  { id: 6, nname: 'खर्चको विवरण (सेवा तथा कार्यक्रम)', ename: 'खर्चको विवरण (सेवा तथा कार्यक्रम)', code: '211-212' },
  { id: 7, nname: 'आर्थिक बर्गिकरण अनुसार खर्चको विवरण (खर्च शिर्षक)', ename: 'आर्थिक बर्गिकरण अनुसार खर्चको विवरण (खर्च शिर्षक)', code: '213-214' },


]

export const mfmisखर्चकोविवरण_चालु_पुंजी_वित्तीय = [
  { id: 1, nname: 'खर्चको विवरण (चालु/पुंजी/वित्तीय) श्रोत', ename: 'खर्चको विवरण (चालु/पुंजी/वित्तीय) श्रोत ', code: '' },
  { id: 2, nname: 'खर्चको विवरण (चालु/पुंजी/वित्तीय) श्रोत व्यहोर्ने निकाय', ename: 'खर्चको विवरण (चालु/पुंजी/वित्तीय) श्रोत व्यहोर्ने निकाय', code: '' },
  { id: 3, nname: 'खर्चको विवरण (बजेट उप शिर्षक)', ename: 'खर्चको विवरण (बजेट उप शिर्षक)', code: '' },
  { id: 4, nname: 'खर्चको विवरण (चालु/पुंजी/वित्तीय) कार्यालय/बजेट उप शिर्षक', ename: 'खर्चको विवरण (चालु/पुंजी/वित्तीय) कार्यालय/बजेट उप शिर्षक', code: '' },
]

export const mfmisप्रतिवद्दतारकमकोविवरण = [
  { id: 1, nname: 'कार्यालयगत प्रतिवद्दता रकमको विवरण (अनुसुची ७)', ename: 'कार्यालयगत प्रतिवद्दता रकमको विवरण (अनुसुची ७) ', code: '425-426' },
  { id: 2, nname: 'प्रतिवद्दता रकमको एकिकृत विवरण (अनुसुची ८) ', ename: 'प्रतिवद्दता रकमको एकिकृत विवरण (अनुसुची ८)  ', code: '427-428' },
  // { id: 3, nname: 'प्रतिवद्दता रकमको एकिकृत विवरण (कार्यालय/वजेट उप शिर्षक/खर्च शिर्षक)', ename: 'प्रतिवद्दता रकमको एकिकृत विवरण (कार्यालय/वजेट उप शिर्षक/खर्च शिर्षक) ', code: '' },
  // { id: 4, nname: 'प्रतिवद्दता रकमको विवरण (कार्यालय/वजेट उप शिर्षक/खर्च शिर्षक)', ename: 'प्रतिवद्दता रकमको विवरण (कार्यालय/वजेट उप शिर्षक/खर्च शिर्षक) ', code: '' },

]

export const mfmisखर्चकोमासिकबाँडफाँडतथानगदयोजना = [
  { id: 1, nname: 'खर्चको मासिक बाँडफाँट तथा नगद योजना (वजेट उप शिर्षक)', ename: 'खर्चको मासिक बाँडफाँट तथा नगद योजना (वजेट उप शिर्षक) ', code: '429-430' },
  // { id: 2, nname: 'खर्चको मासिक बाँडफाँट तथा नगद योजना (वजेट उपशिर्षक/खर्च शिर्षक)', ename: 'खर्चको मासिक बाँडफाँट तथा नगद योजना (वजेट उपशिर्षक/खर्च शिर्षक) ', code: '431-432' },
  // { id: 3, nname: 'खर्चको मासिक बाँडफाँट तथा नगद योजना (कार्यालय/वजेट उप शिर्षक/खर्च शिर्षक)', ename: 'खर्चको मासिक बाँडफाँट तथा नगद योजना (कार्यालय/वजेट उप शिर्षक/खर्च शिर्षक) ', code: '433-434' },
  
]

export const mfmisअन्यविवरण = [
  { id: 1, nname: 'फर्छयौट गर्न बाँकी पेस्कीको विवरण', ename: 'फर्छयौट गर्न बाँकी पेस्कीको विवरण ', code: '245-247' },  
  { id: 2, nname: 'फर्छयौट गर्न बाँकी पेस्कीको विवरण (बजेट उप शिर्षक)', ename: 'फर्छयौट गर्न बाँकी पेस्कीको विवरण (बजेट उप शिर्षक) ', code: '248-250' },  
  // { id: 3, nname: 'बजेट रकमान्तरको विवरण', ename: 'बजेट रकमान्तरको विवरण ', code: '251-252' },  
  // { id: 4, nname: 'बजेट श्रोतान्तरको विवरण', ename: 'बजेट श्रोतान्तरको विवरण ', code: '253-254' },  
  // { id: 5, nname: 'बजेट थप/घटको विवरण', ename: 'बजेट थप/घटको विवरण ', code: '255-256' },  
  // { id: 6, nname: 'साट्न बाँकी चेकको विवरण (बजेट उप शिर्षक)', ename: 'साट्न बाँकी चेकको विवरण (बजेट उप शिर्षक) ', code: '257-258' },  
  // { id: 8, nname: 'साट्न बाँकी चेकको विवरण (कार्यालय/बजेट उप शिर्षक)', ename: 'साट्न बाँकी चेकको विवरण (कार्यालय/बजेट उप शिर्षक) ', code: '259-260' },  
]

export const mfmisराजस्वकोविवरण = [
  { id: 1, nname: 'राजस्वको विवरण', ename: 'राजस्वको विवरण ', code: '301-302' },  
  { id: 2, nname: 'राजस्वको विवरण (कार्यालय) ', ename: 'राजस्वको विवरण (कार्यालय)  ', code: '303-304' },  
  // { id: 3, nname: 'राजस्व प्राप्तीको अनुमानित विवरण', ename: 'राजस्व प्राप्तीको अनुमानित विवरण ', code: '305-306' },  
  { id: 3, nname: 'राजस्वको विवरण (राजस्व शिर्षक) ', ename: 'राजस्वको विवरण (राजस्व शिर्षक)  ', code: '305-306' },  
  { id: 4, nname: 'राजस्वको विवरण (राजस्व शिर्षक/कार्यालय)', ename: 'राजस्वको विवरण (राजस्व शिर्षक/कार्यालय) ', code: '307-308' },  
  { id: 5, nname: 'राजस्वको विवरण (कार्यालय/राजस्व शिर्षक) ', ename: 'राजस्वको विवरण (कार्यालय/राजस्व शिर्षक)  ', code: '309-310' },  
  { id: 6, nname: 'आर्थिक बर्गिकरण अनुसार राजस्वको विवरण ', ename: 'आर्थिक बर्गिकरण अनुसार राजस्वको विवरण  ', code: '311-312' }  
]

export const mfmisराजस्वकोविवरणबैकश्रेष्ता = [
  { id: 1, nname: 'राजस्वको विवरण (राजस्व शिर्षक) ', ename: 'राजस्वको विवरण (राजस्व शिर्षक)  ', code: '313-314' },  
  { id: 2, nname: 'राजस्वको विवरण (कार्यालय)', ename: 'राजस्वको विवरण (कार्यालय) ', code: '315-316' },  
  { id: 3, nname: 'राजस्वको विवरण (कार्यालय/राजस्व शिर्षक)', ename: 'राजस्वको विवरण (कार्यालय/राजस्व शिर्षक) ', code: '317-318' },  
  { id: 4, nname: 'राजस्व संकलनको बैंकगत विवरण', ename: 'राजस्व संकलनको बैंकगत विवरण ', code: '319-320' },  
  { id: 5, nname: 'राजस्व संकलनको बैंकगत विवरण (राजस्व शिर्षक)', ename: 'राजस्व संकलनको बैंकगत विवरण (राजस्व शिर्षक) ', code: '321-322' },  
  { id: 6, nname: 'राजस्व संकलनको बैंकगत विवरण (कार्यालय)', ename: 'राजस्व संकलनको बैंकगत विवरण (कार्यालय) ', code: '323-324' }
]
export const mfmisधरौटीविविधतथाअन्य = [
  { id: 1, nname: 'धरौटीको विवरण', ename: 'धरौटीको विवरण ', code: '401-402' },  
  { id: 2, nname: 'कार्यसञ्चालनकोष (विविध)को विवरण ', ename: 'कार्यसञ्चालनकोष (विविध)को विवरण  ', code: '403-404' },
  { id: 3, nname: 'कार्यालयगत आ.ले.प.बेरुजु', ename: 'कार्यालयगत आ.ले.प.बेरुजु', code: '405-407' },    
  { id: 4, nname: 'वजेट उपशिर्षकगत आ.ले.प.बेरुजु विवरण', ename: 'वजेट उपशिर्षकगत आ.ले.प.बेरुजु विवरण', code: '408-409' },  
  { id: 5, nname: 'सम्पतिको विवरण ', ename: 'सम्पतिको विवरण  ', code: '410-412' },  
  { id: 6, nname: 'सम्पतिको विवरण (कार्यालय)', ename: 'सम्पतिको विवरण (कार्यालय) ', code: '413-414' }
  // { id: 7, nname: 'भुक्तानी बाँकीको विवरण ', ename: 'भुक्तानी बाँकीको विवरण  ', code: '414-415' },  
  // { id: 8, nname: 'भुक्तानी बाँकीको विवरण (कार्यालय)', ename: 'भुक्तानी बाँकीको विवरण (कार्यालय) ', code: '416-417' }
]

export const mfmimsReporttype = [
  { id: 1, value: 'District', nname: 'जिल्ला' },
  { id: 2, value: 'Ministry', nname: 'मन्त्रालय' },
  { id: 3, value: 'Department', nname: 'बिभाग' } 
]


export const Cgas = [
  { id: 1, nname: 'खर्चको फाँटवारी म.ले.प.फारम नं.२१० ', ename: 'खर्चको फाँटवारी म.ले.प.फारम नं.२१० ', code: '501-504' },
  { id: 2, nname: 'पेस्कीको मास्केबारी (म.ले.प.फारम नं.२११) ', ename: 'पेस्कीको मास्केबारी (म.ले.प.फारम नं.२११) ', code: '505' },
  { id: 3, nname: 'बजेट खर्चको वित्तीय बिवरण (म.ले.प.फा.नं.२१३) ', ename: 'बजेट खर्चको वित्तीय बिवरण (म.ले.प.फा.नं.२१३) ', code: '506-509' },
  { id: 4, nname: 'बजेट खर्चको आर्थिक बिवरण (म.ले.प.फा.नं.२१४)  ', ename: 'बजेट/खर्चको आर्थिक बिवरण म.ले.प.फारम नं.२१४ ', code: '510-513' },
]
export const कार्यालय = [
  { id: 1, nname: ' खर्चको विवरण (कार्यालय)', ename: ' खर्चको विवरण (कार्यालय) ', code: '2062-2063' },
  { id: 2, nname: 'खर्चको विवरण (कार्यालय) श्रोतगत', ename: 'खर्चको विवरण (कार्यालय) श्रोतगत', code: '2064-2065' },
  { id: 3, nname: 'खर्चको विवरण (कार्यालय) चालु पुजी वित्तिय ', ename: 'खर्चको विवरण (कार्यालय) चालु पुजी वित्तिय ', code: '2066-2067' },
]

export const आर्थिकबर्गिकरण = [
  { id: 1, nname: 'आर्थिक बर्गिकरण अनुसार खर्चको विवरण (खर्च शिर्षक)', ename: ' आर्थिक बर्गिकरण अनुसार खर्चको विवरण (खर्च शिर्षक) ', code: '2068-2070' },
  { id: 2, nname: 'आर्थिक बर्गिकरण अनुसार खर्चको विवरण (खर्च शिर्षक) श्रोतगत', ename: 'आर्थिक बर्गिकरण अनुसार खर्चको विवरण (खर्च शिर्षक) श्रोतगत', code: '2071-2073' },
  { id: 3, nname: 'आर्थिक बर्गिकरण अनुसार खर्चको विवरण (खर्च शिर्षक) चालु पुजी वित्तीय', ename: 'आर्थिक बर्गिकरण अनुसार खर्चको विवरण (खर्च शिर्षक) चालु पुजी वित्तीय', code: '2074-2076' },
]

export const सञ्चितकोष = [
  { id: 1, nname: 'खर्चको विवरण (सञ्चित कोष)', ename: '  खर्चको विवरण (सञ्चित कोष)', code: '2077-2078' },
  { id: 2, nname: 'खर्चको विवरण (सञ्चित कोष) श्रोतगत', ename: ' खर्चको विवरण (सञ्चित कोष) श्रोतगत', code: '2079-2080' },
  { id: 3, nname: 'खर्चको विवरण (सञ्चित कोष) चालु पुजी वित्तीय', ename: ' खर्चको विवरण (सञ्चित कोष) चालु पुजी वित्तीय', code: '2081-2082' },
]

export const सेवा = [
  { id: 1, nname: 'खर्चको विवरण (सेवा)', ename: '  खर्चको विवरण (सेवा)', code: '2083-2085' },
  { id: 2, nname: 'खर्चको विवरण (सेवा) श्रोतगत', ename: ' खर्चको विवरण (सेवा) श्रोतगत', code: '2086-2088' },
  { id: 3, nname: 'खर्चको विवरण (सेवा/ खर्च शिर्षक /दातृनिकाय/श्रोत)', ename: ' खर्चको विवरण (सेवा/ खर्च शिर्षक /दातृनिकाय/श्रोत)', code: '2089-2091' },
]

export const सेवातथाकार्यक्रम = [
  { id: 1, nname: 'खर्चको विवरण (सेवा तथा कार्यक्रम)', ename: '  खर्चको विवरण (सेवा तथा कार्यक्रम)', code: '2092-2094' },
  { id: 2, nname: 'खर्चको विवरण (सेवा तथा कार्यक्रम) श्रोतगत', ename: ' खर्चको विवरण (सेवा तथा कार्यक्रम) श्रोतगत', code: '2095-2097' },
  { id: 3, nname: 'खर्चको विवरण (सेवा तथा कार्यक्रम) चालु पुजी वित्तीय', ename: ' खर्चको विवरण (सेवा तथा कार्यक्रम) चालु पुजी वित्तीय', code: '2098-2100' },
  { id: 4, nname: 'खर्चको विवरण (सेवा तथा कार्यक्रम/खर्च शिर्षक/दातृनिकाय/श्रोत)', ename: 'खर्चको विवरण (सेवा तथा कार्यक्रम/खर्च शिर्षक/दातृनिकाय/श्रोत)', code: '2101-2103' },
]

export const राष्ट्रियगौरवकाआयोजनहरु = [
  { id: 1, nname: 'खर्चको विवरण (राष्ट्रिय गौरवका आयोजनहरु)', ename: '  खर्चको विवरण (राष्ट्रिय गौरवका आयोजनहरु)', code: '2104' },
]

export const खर्चप्रगतीविवरण = [
  { id: 1, nname: 'खर्च प्रगती विवरण ', ename: '  खर्च प्रगती विवरण ', code: '2105-2106' },
]

export const बार्षिकहिसावकोसारांसविवरण = [
  { id: 1, nname: 'बार्षिक हिसावको सारांस विवरण', ename: '  बार्षिक हिसावको सारांस विवरण', code: '2107-2109' },
]

export const राजस्वकोविवरणबैंकअनुसार = [
  { id: 1, nname: 'राजस्वको विवरण', ename: '  राजस्वको विवरण',code:'3001-3003' },
  { id: 2, nname: 'राजस्व प्राप्तीको अनुमानित विवरण ', ename: '  राजस्व प्राप्तीको अनुमानित विवरण ',code:'3004-3006' },
  { id: 3, nname: 'राजस्वको विवरण (शिर्षकगत) ', ename: '  राजस्वको विवरण (शिर्षकगत) ',code:'3007-3009' },
  { id: 4, nname: 'राजस्वको विवरण (राजस्व शिर्षक/कार्यालय) ', ename: '  राजस्वको विवरण (राजस्व शिर्षक/कार्यालय) ',code:'3010-3012' },
  { id: 5, nname: 'राजस्वको विवरण (कार्यालय)', ename: 'राजस्वको बार्षिक विवरण (शिर्षकगत) उपयोग',code:'3013-3014' },
  { id: 6, nname: 'राजस्वको विवरण (कार्यालय/राजस्व शिर्षक)', ename: 'राजस्वको विवरण (कार्यालय/राजस्व शिर्षक)',code:'3015-3016' },
  { id: 7, nname: 'आर्थिक बर्गिकरण अनुसार राजस्वको विवरण', ename: '  आर्थिक बर्गिकरण अनुसार राजस्वको विवरण',code:'3017-3019' },
  { id: 8, nname: 'आर्थिक बर्गिकरण अनुसार समुहगत राजस्वको विवरण ', ename: 'आर्थिक बर्गिकरण अनुसार समुहगत राजस्वको विवरण ',code:'3020-3022' },

]

export const बेरुजु = [
  { id: 1, nname: 'आ.ले.प.बेरुजु', ename:'आ.ले.प.बेरुजु',code:'4401-4402' },
  { id: 2, nname: 'कार्यालयगत आ.ले.प.बेरुजु', ename: 'कार्यालयगत आ.ले.प.बेरुजु',code:'4403-4404' },
  { id: 3, nname: 'बजेट उप शिर्षकगत आ.ले.प.बेरुजु', ename: 'बजेट उप शिर्षकगत आ.ले.प.बेरुजु',code:'4405-4406' },
  { id: 4, nname: 'व्यहोरागत आ.ले.प.बेरुजु', ename: 'व्यहोरागत आ.ले.प.बेरुजु',code:'4407-4408' },
  { id: 5, nname: 'आ.ले.प.बेरुजु प्रतिशत', ename: 'आ.ले.प.बेरुजु प्रतिशत',code:'4409-4410' },
]

export const राजस्वकोविवरणश्रेष्ताअनुसार = [
  { id: 1, nname: 'राजस्वको विवरण (शिर्षकगत)  ', ename: 'राजस्वको विवरण (शिर्षकगत)  ',code:'3023-3025' },
  { id: 2, nname: 'राजस्वको विवरण (कार्यालय/राजस्व शिर्षक)  ', ename: 'राजस्वको विवरण (कार्यालय/राजस्व शिर्षक)  ',code:'3026-3027' },
]

export const राजस्वकोबैंकगतविवरणबैंकस्टेटमेन्ट = [
  { id: 1, nname: 'राजस्वको बैंकगत विवरण ', ename: 'राजस्वको बैंकगत विवरण ',code:'3028-3031' },
  { id: 2, nname: 'राजस्वको बैंकगत विवरण (शिर्षकगत)', ename: 'राजस्वको बैंकगत विवरण (शिर्षकगत)',code:'3032-3034' },
  { id: 3, nname: 'राजस्वको बैंकगत विवरण (कार्यालय)  ', ename: 'राजस्वको बैंकगत विवरण (कार्यालय)  ',code:'3035-3036' },

]

export const बैंकहिसावसमायोजनविवरण = [
  { id: 1, nname: 'राजस्व तथा बैंक हिसाव समायोजन विवरण (जिल्ला/शिर्षक) अनुसुची ३.१ ', ename: 'राजस्व तथा बैंक हिसाव समायोजन विवरण (जिल्ला/शिर्षक) अनुसुची ३.१ ' },
  { id: 2, nname: 'राजस्व तथा बैंक हिसाव समायोजन विवरण (जिल्ला/कार्यालय) अनुसुची ३.२', ename: 'राजस्व तथा बैंक हिसाव समायोजन विवरण (जिल्ला/कार्यालय) अनुसुची ३.२' },
  { id: 3, nname: 'राजस्व तथा बैंक हिसाव समायोजन विवरण (मन्त्रालय/शिर्षक) अनुसुची ३.३', ename: 'राजस्व तथा बैंक हिसाव समायोजन विवरण (मन्त्रालय/शिर्षक) अनुसुची ३.३' },
  { id: 4, nname: 'राजस्व तथा बैंक हिसाव समायोजन विवरण (मन्त्रालय/कार्यालय) अनुसुची ३.४', ename: 'राजस्व तथा बैंक हिसाव समायोजन विवरण (मन्त्रालय/कार्यालय) अनुसुची ३.४' },

]

export const विभाज्यकोषकोविवरण = [
  { id: 1, nname: 'सम्पतिको विवरण', ename: 'सम्पतिको विवरण',code:'4301-4303' },
  { id: 2, nname: 'विवरण सहित सम्पतिको विवरण', ename: 'विवरण सहित सम्पतिको विवरण',code:'4304-4305' },
  { id: 3, nname: 'विवरण सहित सम्पतिको विवरण (कार्यालय)', ename: 'विवरण सहित सम्पतिको विवरण (कार्यालय)',code:'4306-4307' }

]

export const धरौटीकोविवरण = [

  { id: 1, nname: 'धरौटीको विवरण', ename: 'धरौटीको विवरण',code:'4101-4102' },
  { id: 2, nname: 'धरौटीको विवरण (कार्यालय)', ename: 'धरौटीको विवरण (कार्यालय)',code:'4103-4104' },
  { id: 3, nname: 'धरौटीको साट्न बाँकी चेकको विवरण', ename: 'धरौटीको साट्न बाँकी चेकको विवरण' }

]

export const धाराविजुलीआदिकोधरौटी = [
  { id: 1, nname: 'धारा विजुली आदिको धरौटी  (जिल्लागत)', ename: 'धारा विजुली आदिको धरौटी  (जिल्लागत)' },
  { id: 2, nname: 'धारा विजुली आदिको धरौटी (मन्त्रालयगत)', ename: 'धारा विजुली आदिको धरौटी (मन्त्रालयगत)' },
  { id: 4, nname: 'धारा विजुली आदिको धरौटी (जिल्ला/कार्यालय)', ename: 'धारा विजुली आदिको धरौटी (जिल्ला/कार्यालय)' },
  { id: 3, nname: 'धारा विजुली आदिको धरौटी  (मन्त्रालय/जिल्ला/कार्यालय)', ename: 'धारा विजुली आदिको धरौटी  (मन्त्रालय/जिल्ला/कार्यालय)' },

]

export const कार्यसञ्चालनकोषविविधकोविवरण = [
  
  { id: 1, nname: 'कार्यसञ्चालन कोष (विविध)को विवरण', ename: 'कार्यसञ्चालन कोष (विविध)को विवरण',code:'4201-4202' },
  { id: 2, nname: 'कार्यसञ्चालन कोष (विविध)को विवरण (कार्यालय)', ename: 'कार्यसञ्चालन कोष (विविध)को विवरण (कार्यालय)',code:'4203-4204' },
  { id: 3, nname: 'कार्यसञ्चालन कोष (विविध) को साट्न बाँकी चेकको विवरण', ename: 'कार्यसञ्चालन कोष (विविध) को साट्न बाँकी चेकको विवरण' },
]

export const बेमेलकोप्रकार  = [
  { id: 1, nname: 'अनुसुची - 1 (वेमेलको विवरण)', ename: 'अनुसुची - 1 (वेमेलको विवरण)', code:'5001' },
  { id: 2, nname: 'अनुसुची - 2 (कोष र कार्यालय बिच खर्चमा वेमेल)', ename: 'अनुसुची - 2 (कोष र कार्यालय बिच खर्चमा वेमेल)', code:'5002' },
  { id: 3, nname: 'अनुसुची - 3 (खर्चको हिसाव परीक्षण)', ename: 'अनुसुची - 3 (खर्चको हिसाव परीक्षण)', code:'5003' },
  { id: 4, nname: 'अनुसुची - 4 (राजस्वको हिसाव परीक्षण (शिर्षकगत)', ename: 'अनुसुची - 4 (राजस्वको हिसाव परीक्षण (शिर्षकगत)', code:'5004 - 5005' },
  { id: 5, nname: 'अनुसुची - 5 (राजस्वको हिसाव परीक्षण (कार्यालयगत)', ename: 'अनुसुची - 5 (राजस्वको हिसाव परीक्षण (कार्यालयगत)', code:'5006 - 5007' },
  { id: 6, nname: 'अनुसुची - 6 (धरौटीको हिसाव परीक्षण )', ename: 'अनुसुची - 6 (धरौटीको हिसाव परीक्षण )', code:'5008' },
  { id: 7, nname: 'अनुसुची - 7 (कार्यसञ्चालन कोष (विविध) को हिसाव परीक्षण )', ename: 'अनुसुची - 7 (कार्यसञ्चालन कोष (विविध) को हिसाव परीक्षण )', code:'5009' },

]

export const बेमेलकोप्रकारमन्त्रालय  = [
  { id: 1, nname: 'खर्चको हिसाव परीक्षण विवरण ', ename: 'खर्चको हिसाव परीक्षण विवरण ', code:'5101 - 5102' },
  { id: 2, nname: 'खर्चको हिसाव परीक्षण विवरण (बजेट उप शिर्षक/कार्यालय)', ename: 'खर्चको हिसाव परीक्षण विवरण (बजेट उप शिर्षक/कार्यालय)', code:'5103 - 5104' },
  { id: 3, nname: 'धरौटीको हिसाव परीक्षण विवरण (कार्यालय)', ename: 'धरौटीको हिसाव परीक्षण विवरण (कार्यालय)', code:'5105 - 5106' },
  { id: 4, nname: 'धरौटीको मौज्दात तुलनाको विवरण ', ename: 'धरौटीको मौज्दात तुलनाको विवरण ', code:'5107 - 5108' },
  { id: 5, nname: 'कार्यसञ्चालन कोष (विविध) को हिसाव परीक्षण (कार्यालय)', ename: 'कार्यसञ्चालन कोष (विविध) को हिसाव परीक्षण (कार्यालय)', code:'5109 - 5110' },
  { id: 6, nname: 'कार्यञ्चालन कोष (विविध)को मौज्दात तुलनाको विवरण', ename: 'कार्यञ्चालन कोष (विविध)को मौज्दात तुलनाको विवरण', code:'5111 - 5112' },
]







export const menuIconList = [
  { id: 'assets/images/icons/dashboard/_content.png', formalName: 'assets/images/icons/dashboard/_content.png' },
  { id: 'assets/images/icons/dashboard/aa.png', formalName: 'assets/images/icons/dashboard/aa.png' },
  { id: 'assets/images/icons/dashboard/Absence Category_absencecategory.jpg', formalName: 'assets/images/icons/dashboard/Absence Category_absencecategory.jpg' },
  { id: 'assets/images/icons/dashboard/Absence Category_content.png', formalName: 'assets/images/icons/dashboard/Absence Category_content.png' },
  { id: 'assets/images/icons/dashboard/Absence Detail_Absencedetail.jpg', formalName: 'assets/images/icons/dashboard/Absence Detail_Absencedetail.jpg' },
  { id: 'assets/images/icons/dashboard/Absence Reason_absencereason.png', formalName: 'assets/images/icons/dashboard/Absence Reason_absencereason.png' },
  { id: 'assets/images/icons/dashboard/Absence Structure_absencestructure.png', formalName: 'assets/images/icons/dashboard/Absence Structure_absencestructure.png' },
  { id: 'assets/images/icons/dashboard/Absence Structure_entity.jpg', formalName: 'assets/images/icons/dashboard/Absence Structure_entity.jpg' },
  { id: 'assets/images/icons/dashboard/absencecategory.jpg', formalName: 'assets/images/icons/dashboard/absencecategory.jpg' },
  { id: 'assets/images/icons/dashboard/Absencedetail.jpg', formalName: 'assets/images/icons/dashboard/Absencedetail.jpg' },
  { id: 'assets/images/icons/dashboard/absencereason.png', formalName: 'assets/images/icons/dashboard/absencereason.png' },
  { id: 'assets/images/icons/dashboard/AbsenceReason_NAVLoc_aa.png', formalName: 'assets/images/icons/dashboard/AbsenceReason_NAVLoc_aa.png' },
  { id: 'assets/images/icons/dashboard/absencestructure.png', formalName: 'assets/images/icons/dashboard/absencestructure.png' },
  { id: 'assets/images/icons/dashboard/ad.jpg', formalName: 'assets/images/icons/dashboard/ad.jpg' },
  { id: 'assets/images/icons/dashboard/applied.png', formalName: 'assets/images/icons/dashboard/applied.png' },
  { id: 'assets/images/icons/dashboard/apply.png', formalName: 'assets/images/icons/dashboard/apply.png' },
  { id: 'assets/images/icons/dashboard/Attendance Logs_NAVMenu_ad.jpg', formalName: 'assets/images/icons/dashboard/Attendance Logs_NAVMenu_ad.jpg' },
  { id: 'assets/images/icons/dashboard/AttendanceApprove.png', formalName: 'assets/images/icons/dashboard/AttendanceApprove.png' },
  { id: 'assets/images/icons/dashboard/Bank_df.jpg', formalName: 'assets/images/icons/dashboard/Bank_df.jpg' },
  { id: 'assets/images/icons/dashboard/BankDetail_aa.png', formalName: 'assets/images/icons/dashboard/BankDetail_aa.png' },
  { id: 'assets/images/icons/dashboard/bn.png', formalName: 'assets/images/icons/dashboard/bn.png' },
  { id: 'assets/images/icons/dashboard/cc.jpg', formalName: 'assets/images/icons/dashboard/cc.jpg' },
  { id: 'assets/images/icons/dashboard/de.png', formalName: 'assets/images/icons/dashboard/de.png' },
  { id: 'assets/images/icons/dashboard/Device.png', formalName: 'assets/images/icons/dashboard/Device.png' },
  { id: 'assets/images/icons/dashboard/df.jpg', formalName: 'assets/images/icons/dashboard/df.jpg' },
  { id: 'assets/images/icons/dashboard/emploan.png', formalName: 'assets/images/icons/dashboard/emploan.png' },
  { id: 'assets/images/icons/dashboard/employins.png', formalName: 'assets/images/icons/dashboard/employins.png' },
  { id: 'assets/images/icons/dashboard/entity.jpg', formalName: 'assets/images/icons/dashboard/entity.jpg' },
  { id: 'assets/images/icons/dashboard/facility.png', formalName: 'assets/images/icons/dashboard/facility.png' },
  { id: 'assets/images/icons/dashboard/fisyear.png', formalName: 'assets/images/icons/dashboard/fisyear.png' },
  { id: 'assets/images/icons/dashboard/gh.png', formalName: 'assets/images/icons/dashboard/gh.png' },
  { id: 'assets/images/icons/dashboard/icon-extras.png', formalName: 'assets/images/icons/dashboard/icon-extras.png' },
  { id: 'assets/images/icons/dashboard/icon-favourites.png', formalName: 'assets/images/icons/dashboard/icon-favourites.png' },
  { id: 'assets/images/icons/dashboard/icon-folder.png', formalName: 'assets/images/icons/dashboard/icon-folder.png' },
  { id: 'assets/images/icons/dashboard/icon-home.png', formalName: 'assets/images/icons/dashboard/icon-home.png' },
  { id: 'assets/images/icons/dashboard/icon-logout.png.png', formalName: 'assets/images/icons/dashboard/icon-logout.png.png' },
  { id: 'assets/images/icons/dashboard/icon-price.png', formalName: 'assets/images/icons/dashboard/icon-price.png' },
  { id: 'assets/images/icons/dashboard/icon-products.png', formalName: 'assets/images/icons/dashboard/icon-products.png' },
  { id: 'assets/images/icons/dashboard/icon-settings.png', formalName: 'assets/images/icons/dashboard/icon-settings.png' },
  { id: 'assets/images/icons/dashboard/icon-users.png', formalName: 'assets/images/icons/dashboard/icon-users.png' },
  { id: 'assets/images/icons/dashboard/insurance.png', formalName: 'assets/images/icons/dashboard/insurance.png' },
  { id: 'assets/images/icons/dashboard/insurancecomp.png', formalName: 'assets/images/icons/dashboard/insurancecomp.png' },
  { id: 'assets/images/icons/dashboard/LeaveAdjustment.png', formalName: 'assets/images/icons/dashboard/LeaveAdjustment.png' },
  { id: 'assets/images/icons/dashboard/LeaveCancel.png', formalName: 'assets/images/icons/dashboard/LeaveCancel.png' },
  { id: 'assets/images/icons/dashboard/LeaveRequest.png', formalName: 'assets/images/icons/dashboard/LeaveRequest.png' },
  { id: 'assets/images/icons/dashboard/loan.png', formalName: 'assets/images/icons/dashboard/loan.png' },
  { id: 'assets/images/icons/dashboard/manage.png', formalName: 'assets/images/icons/dashboard/manage.png' },
  { id: 'assets/images/icons/dashboard/manualattendace.png', formalName: 'assets/images/icons/dashboard/manualattendace.png' },
  { id: 'assets/images/icons/dashboard/menu.png', formalName: 'assets/images/icons/dashboard/menu.png' },
  { id: 'assets/images/icons/dashboard/Menu_menu.png', formalName: 'assets/images/icons/dashboard/Menu_menu.png' },
  { id: 'assets/images/icons/dashboard/mn.png', formalName: 'assets/images/icons/dashboard/mn.png' },
  { id: 'assets/images/icons/dashboard/NAVLoc_aa.png', formalName: 'assets/images/icons/dashboard/NAVLoc_aa.png' },
  { id: 'assets/images/icons/dashboard/NAVMenu_ad.jpg', formalName: 'assets/images/icons/dashboard/NAVMenu_ad.jpg' },
  { id: 'assets/images/icons/dashboard/office.png', formalName: 'assets/images/icons/dashboard/office.png' },
  { id: 'assets/images/icons/dashboard/op.png', formalName: 'assets/images/icons/dashboard/op.png' },
  { id: 'assets/images/icons/dashboard/orgpaymnet.png', formalName: 'assets/images/icons/dashboard/orgpaymnet.png' },
  { id: 'assets/images/icons/dashboard/pa.png', formalName: 'assets/images/icons/dashboard/pa.png' },
  { id: 'assets/images/icons/dashboard/pb.png', formalName: 'assets/images/icons/dashboard/pb.png' },
  { id: 'assets/images/icons/dashboard/pe.jpg', formalName: 'assets/images/icons/dashboard/pe.jpg' },
  { id: 'assets/images/icons/dashboard/periodtype.png', formalName: 'assets/images/icons/dashboard/periodtype.png' },
  { id: 'assets/images/icons/dashboard/pp.png', formalName: 'assets/images/icons/dashboard/pp.png' },
  { id: 'assets/images/icons/dashboard/role.png', formalName: 'assets/images/icons/dashboard/role.png' },
  { id: 'assets/images/icons/dashboard/Role Entity_role entity.jpg', formalName: 'assets/images/icons/dashboard/Role Entity_role entity.jpg' },
  { id: 'assets/images/icons/dashboard/Role Menu_rolemenu.png', formalName: 'assets/images/icons/dashboard/Role Menu_rolemenu.png' },
  { id: 'assets/images/icons/dashboard/rolemenu.png', formalName: 'assets/images/icons/dashboard/rolemenu.png' },
  { id: 'assets/images/icons/dashboard/rr.jpg', formalName: 'assets/images/icons/dashboard/rr.jpg' },
  { id: 'assets/images/icons/dashboard/sa.png', formalName: 'assets/images/icons/dashboard/sa.png' },
  { id: 'assets/images/icons/dashboard/taxslab.png', formalName: 'assets/images/icons/dashboard/taxslab.png' },
  { id: 'assets/images/icons/dashboard/tt.png', formalName: 'assets/images/icons/dashboard/tt.png' },
  { id: 'assets/images/icons/dashboard/ty.png', formalName: 'assets/images/icons/dashboard/ty.png' },
  { id: 'assets/images/icons/dashboard/type.png', formalName: 'assets/images/icons/dashboard/type.png' },
  { id: 'assets/images/icons/dashboard/ui.png', formalName: 'assets/images/icons/dashboard/ui.png' },
  { id: 'assets/images/icons/dashboard/user.png', formalName: 'assets/images/icons/dashboard/user.png' },
  { id: 'assets/images/icons/dashboard/UserDevice.png', formalName: 'assets/images/icons/dashboard/UserDevice.png' },
  { id: 'assets/images/icons/dashboard/vn.jpg', formalName: 'assets/images/icons/dashboard/vn.jpg' },

];

export const activeInActiveList = [
  { id: "", name: 'All', class: 'label label-success' },
  { id: 1, name: 'Active', class: 'label label-primary' },
  { id: 0, name: 'InActive', class: 'label label-danger' },
];
