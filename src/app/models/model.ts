export class PostGraduationPrograms {
    name? : string;
    typeOfProgram? : string;
    duration? : string;
}

export class User {
    id? : number;
    name? : string;
    email? : string;
    gender? : string;
    status? : string;
    constructor(jsObject?: any){
        console.log(jsObject);
        if(jsObject) {
            this.id = jsObject.id;
            this.name = jsObject.name;
            this.email = jsObject.email;
            this.gender = jsObject.gender;
            this.status = jsObject.status;
        }
    }
}

export class Response {
    meta: any = '';
    data: User[] = [];
    constructor(jsObject?: any){
        this.data = jsObject.data;
    }
}

export class RegistrationBean {
    constructor(
        //Personal Details
        public id: number,
        public firstName: string,
        public middleName: string,
        public lastName: string,
        public gender: string,
        public maritalStatus: string,
        public dateOfBirth: Date,
        public country: string,
        public state: string,
        public city: string,
        public address: string,
        public zipcode: number,
        public mobileNumber: number,
        public officeNumber: number,
        //Educational Details
        public degree: string,
        public specialization: string,
        public yearOfGraduation: number,
        public percentage: number,
        public college: string,
        public university: string,

    ){}
}

export interface Product {
    id?:string;
    code?:string;
    name?:string;
    description?:string;
    price?:number;
    quantity?:number;
    inventoryStatus?:string;
    category?:string;
    image?:string;
    rating?:number;
}

export interface PostGraduationPrograms {
    id?:string;
    programName?:string;
    typeOfProgram?:string;
    duration?:string;
    startDate?:Date;
    image?:string;

}

export interface MastersPrograms {
    id?:string;
    programName?:string;
    duration?:string;
    courses?:string;
    typeOfProgram?:string;
    tools?:string;
    certificate?:string;
}

