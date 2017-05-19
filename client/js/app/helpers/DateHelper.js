class DateHelper {
    constructor() {
        throw new Error("This class can't be instantiated");
    }

    static strToDate(strDate) {
        if(!/\d{4}-\d{2}-\d{2}/.test(strDate))
            throw new Error("Date string format must be yyyy-mm-dd.");

        return new Date(...strDate.split("-").map((item, index) => item - index % 2));
    }

    static dateToStr(date) {
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }
}