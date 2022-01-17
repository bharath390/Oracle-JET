define([
  "../accUtils",
  "ojs/ojcore",
  "knockout",
  'ojs/ojknockout-model',
  "jquery",
  "../services/EasyHTTP",
  "../factories/PeopleFactory",
  'ojs/ojcollectiondataprovider',
  'ojs/ojmodel', 
  'ojs/ojtable',
  "ojs/ojlistview", 
  "ojs/ojswitch", 
  "ojs/ojlabel", 
  "ojs/ojavatar", 
  "ojs/ojlistitemlayout"
], function (accUtils, oj, ko, koUtils, $, easyHttp, PeopleFactory, CollectionDataProvider) {
  class PeopleViewModel {
    constructor() {
      var self = this;
      //  console.log(this.getPeople());

     
      this.peopleCollection = PeopleFactory.createPeopleCollection();
      this.dataSource = ko.observable();

     

      
      
      //var members =  oj.PagingTableDataSource(  oj.CollectionTableDataSource(this.peopleCollection ));



     /* self.dataArr = this.peopleCollection.fetch().then((valArr)  =>
      valArr.forEach((data) => {
           self.id(data.id);
           self.name(data.name);
           self.username(data.username);
           self.phone(data.phone);
           self.website(data.website);
           self.company(data.company);
         }) 
       ); */

       this.dataSource(new CollectionDataProvider(this.peopleCollection));

       

       //self.name.subscribe(data => console.log(data));

  
       /*
       {
        success: this.fetchSuccess,
       })*/

       

       //this.fetchSuccess();
       
       //.then(dataArr => {
        
      //   //dataArr.forEach(data => {
      //     let ko = koUtils.map(this.peopleCollection);
      //     this.dataSource(1);
      //     this.dataSource.subscribe(data => console.log(data));

      //     this.dataSource = ko[0].name;


      //     //console.log(this.dataSource.subscribe);

      //     //console.log(ko[0].name.subscribe);

      //     //console.log(dataArr);

      //     //self.dataSource(ko[0].name.subscribe((val) => val));

       
      //  // })
        
        
      // });//oj.CollectionTableDataSource(
      //this.peopleCollection.fetch().then(data => console.log(data));

     

  
      
    }

    getPeople() {
      new easyHttp()
        .getData("https://jsonplaceholder.typicode.com/users/1")
        .then((data) => console.log(data));
    }
  }

  return PeopleViewModel;
});
