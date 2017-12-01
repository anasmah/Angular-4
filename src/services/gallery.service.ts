import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
@Injectable()

export class GalleryService{
constructor(private http:Http){

}
  Search(motCle:string,size:number,page:number){

   return  this.http.get("https://pixabay.com/api/?key=7204834-e37028c3a45ed1566da5bb569&q="+motCle+"&per_page="+size+"&page="+page)

      .map(resp=>resp.json() )


  }

}
