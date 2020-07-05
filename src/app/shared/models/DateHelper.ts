export class DateHelper {
    months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    getDateString(date: Date) {
        return `${date.getDate().toString().padStart(2, '0')}` +
            `-${(this.months[date.getMonth()]).toString().padStart(2, '0')}` +
            `-${date.getFullYear().toString()}`;
    }
}