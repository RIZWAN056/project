class valueSetter {
    constructor() {
        this.view = {
            model: {},
            setModel(obj, title) {
               let sObj = JSON.stringify(obj);
               Object.assign(this.model,sObj);
                this.sessionStorage.setItem(title, sObj);
            }
        };
    }
}