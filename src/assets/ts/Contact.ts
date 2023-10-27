class Contact{
    private static count:number = 0

    private _id:number
    private  _lastname:string
    private  _firstname:string
    private _age:number
    private  _email:string
    private  _phoneNumber:string

    constructor(lastname:string, firstname:string, age:number, email:string, phoneNumber:string) {
        this._id = ++Contact.count
        this._lastname = lastname
        this._firstname = firstname
        this._age = age
        this._email = email
        this._phoneNumber = phoneNumber
    }

    public  get id():number{
        return this._id
}


    public get age(): number{
        return this._age
    }
    public get lastname(): string{
        return this._lastname
    }

    public get firstname():string{
        return  this._firstname
    }

    public set age(a:number){
        if (a > 0){
            this._age = a
        }
    }

    public set lastname(l:string){
        this._lastname = l
    }

    public  set firstname(f:string){
        this._firstname = f
    }


    public set email(e:string){
        this._email = e
    }

    public set phoneNumber(p:string){
        this._phoneNumber = p
    }

}

export default  Contact


