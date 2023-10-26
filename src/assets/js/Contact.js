class Contact {
    static count = 0;
    _id;
    _lastname;
    _firstname;
    _age;
    _email;
    _phoneNumber;
    constructor(lastname, firstname, age, email, phoneNumber) {
        this._id = ++Contact.count;
        this._lastname = lastname;
        this._firstname = firstname;
        this._age = age;
        this._email = email;
        this._phoneNumber = phoneNumber;
    }
    get id() {
        return this.id;
    }
    get age() {
        return this.age;
    }
    get lastname() {
        return this.lastname;
    }
    get firstname() {
        return this.firstname;
    }
    set age(a) {
        if (a > 0) {
            this._age = a;
        }
    }
    set lastname(l) {
        this._lastname = l;
    }
    set firstname(f) {
        this._firstname = f;
    }
    set email(e) {
        this._email = e;
    }
    set phoneNumber(p) {
        this._phoneNumber = p;
    }
}
export default Contact;
