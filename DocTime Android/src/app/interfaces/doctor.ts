export interface Doctor {
    name:string;
    email:string;
    description:string;
    experience:number;
    speciality?:string[];
    area:string;
    education?:string[],
    memberships?:string[],
    phones?:string[]
}