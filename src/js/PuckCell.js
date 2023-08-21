export default class PuckCell {
    disabled = false;
    title;
    status;

    constructor(disabled, title, status){
        this.disabled = disabled;
        this.title = title;
        this.status = status;
    }
}