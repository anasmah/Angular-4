import { Injectable } from '@angular/core';

@Injectable()

export class AboutService {

	info = {
	nom : "MAHDAOUI",
	email : "mahdaoui.anas@gmail.com",
	tel: 66813
        }

 comments = [

{date: new Date(), message:"A"},

{date: new Date(), message:"B"},

{date: new Date(), message:"C"},

];

addComments(c){
    c.date = new Date();
	this.comments.push(c);
}

getAllComments(){
	return this.comments;
}

getInfo(){
	return this.info;
}

}
