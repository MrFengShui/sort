import moment from 'moment';

const chineseNumberMap: { [key: number]: string } = {
    0: '', 1: '一', 2: '二', 3: '三', 4: '四', 5: '五', 6: '六', 7: '七', 8: '八', 9: '九', 10: '十', 20: '二十', 30: '三十'
};

export const updateLocaleToEnglish = (): moment.Locale =>
    moment.updateLocale('en-US', {
        months: 'January_February_March_April_May_June_July_Augest_September_October_November_December'.split('_'),
        monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sept_Oct_Nov_Dec'.split('_'),
        monthsParseExact: true,
        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin: 'S_M_T_W_T_F_S'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'MM/DD/YYYY hh:mm a',
            LL: 'YYYY-MM-DD HH:mm',
            LLL: 'ddd, MMM Do, YYYY  hh:mm:ss a',
            LLLL: 'dddd, MMMM Do, YYYY HH:mm:ss'
        },
        calendar: {
            sameDay: '[Today]',
            nextDay: '[Tomorrow]',
            nextWeek: '[Next] dddd',
            lastDay: '[Yesterday]',
            lastWeek: '[Last] dddd',
            sameElse: 'MM/DD/YYYY'
        },
        relativeTime: {
            future: '%s later',
            past: '%s ago',
            s: 'just moment',
            m: 'one minute',
            mm: '%d minutes',
            h: 'one hour',
            hh: '%d hours',
            d: 'one day',
            dd: '%d days',
            M: 'one month',
            MM: '%d months',
            y: 'one year',
            yy: '%d years'
        },
        // dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
        ordinal: (value: number) => value + (value === 1 ? 'st' : (value === 2 ? 'nd' : (value === 3 ? 'rd' : 'th'))),
        // isPM: (input: string) => {
        //     return input.charAt(0) === 'M';
        // },
        meridiemParse: /AM|PM/,
        meridiem: (hours: number, minutes: number, isLower: boolean) => hours < 12 ? 'AM' : 'PM',
        week: {
            dow: 0,
            doy: 6
        }
    });

export const updateLocaleToChinese = (): moment.Locale =>
    moment.updateLocale('zh-CN', {
        months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
        monthsShort: '一_二_三_四_五_六_七_八_九_十_十一_十二'.split('_'),
        monthsParseExact: true,
        weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
        weekdaysShort: '周日_周一_周二_周三_周四_周五_周六'.split('_'),
        weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'YYYY/MM/DD hh:mm【a】',
            LL: 'YYYY/MM/DD HH:mm',
            LLL: 'YYYY年MM月DD日 ddd hh時mm分ss秒【a】',
            LLLL: 'YYYY年MMM月Do號 dddd HH時mm分ss秒'
        },
        calendar: {
            sameDay: '[今天]',
            nextDay: '[明天]',
            nextWeek: '[這個]dddd',
            lastDay: '[昨天]',
            lastWeek: '[上個]dddd',
            sameElse: 'YYYY年MMM月DD日'
        },
        relativeTime: {
            future: '%s后',
            past: '%s前',
            s: '幾秒',
            m: '一分鐘',
            mm: '%d分鐘',
            h: '一小時',
            hh: '%d小時',
            d: '一天',
            dd: '%d天',
            M: '一個月',
            MM: '%d個月',
            y: '一年',
            yy: '%d年'
        },
        // dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
        ordinal: (value: number) => {
            const prefix: string = chineseNumberMap[Math.floor(value / 10) * 10];
            const suffix: string = chineseNumberMap[value % 10];
            return prefix + suffix;
        },
        // isPM: (input: string) => {
        //     return input.charAt(0) === 'M';
        // },
        meridiemParse: /凌晨|黎明|清晨|早晨|上午|中午|下午|傍晚|晚上|午夜/,
        meridiem: (hours: number, minutes: number, isLower: boolean) => {
            if (hours >= 0 && hours < 4) return '凌晨';

            if (hours >= 4 && hours < 6) return '黎明';

            if (hours >= 6 && hours < 7) return '清晨';

            if (hours >= 7 && hours < 8) return '早晨';

            if (hours >= 8 && hours < 11) return '上午';

            if (hours >= 11 && hours < 13) return '中午';

            if (hours >= 13 && hours < 17) return '下午';

            if (hours >= 17 && hours < 19) return '傍晚';

            if (hours >= 19 && hours < 23) return '晚上';

            return '午夜';
        },
        week: {
            dow: 1,
            doy: 7
        }
    });

