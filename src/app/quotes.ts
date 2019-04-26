export class Quotes {
  public showInformation:boolean;
  constructor (public name:string,public information:string,
  public postDate:Date){
    this.showInformation = false
  }
}
