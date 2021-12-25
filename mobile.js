class Mobile {
    _battery;
    _draff;
    _sent;
    _inbox;
    _status;

    constructor(battery, draff, sent, inbox, status) {
        this._battery = battery;
        this._draff = draff;
        this._sent = sent;
        this._inbox = inbox;
        this._status = status;
    }

    get battery() {
        return this._battery;
    }

    set battery(value) {
        this._battery = value;
    }

    get draff() {
        return this._draff;
    }

    set draff(value) {
        this._draff = value;
    }

    get sent() {
        return this._sent;
    }

    set sent(value) {
        this._sent = value;
    }

    get inbox() {
        return this._inbox;
    }

    set inbox(value) {
        this._inbox = value;
    }

    get status() {
        return this._status;
    }

    set status(value) {
        this._status = value;
    }

    checkStatus() {
        return this._status;
    }

    switch() {
        //Bật tắt điện thoại
        //nếu như đt đang bật => status = true => khi gọi phương thức sẽ gán !true = false;
        //nếu như đt đang tắt => status = false => khi gọi phương thức sẽ gán !falese = true;
        this._status = !this._status;
    }

    chargeBattery() {
        this._battery++;
    }

    creatMessage(content) {   // soạn thảo tin nhắn.
        this._draff.push(content);
    }

    receiveMessage(content, mobile) {
        this._inbox.push(content);
        mobile.sent.push(content)
    }
    sentMessage(content, mobile){
        this._sent.push(content);
        mobile.inbox.push(content);
    }
}

