class DateHelper {
    constructor() {
        throw new Error("This class can't be instantiated");
    }

    static convert(date) {
        if (date instanceof Date) {
            return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        } else {
            if (!/\d{4}-\d{2}-\d{2}/.test(date))
                throw new Error("Date string format must be yyyy-mm-dd.");

            return new Date(...date.split("-").map((item, index) => item - index % 2));
        }
    }
}