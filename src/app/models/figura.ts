export class Figura{
    constructor(
        public _id:string,
        public title:string,
        public content:string,
        public precio:string,
        public image:string,
        public date:any,
    ){}
}

/*
title: String,
content: String,
date: { type: Date, default: Date.now },
image: String
*/