/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your customer ViewModel code goes here
 */
define(['../accUtils',
"ojs/ojcore",
"knockout",
"../factories/PeopleFactory",
"ojs/ojinputtext", 
"ojs/ojcheckboxset",
 "ojs/ojformlayout", 
 "ojs/ojlabelvalue", 
 "ojs/ojbutton", 
 "ojs/ojradioset"],
 function(accUtils,oj,ko,PeopleFactory) {
    function CustomerViewModel() {
      // Below are a set of the ViewModel methods invoked by the oj-module component.
      // Please reference the oj-module jsDoc for additional information.

      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here.
       * This method might be called multiple times - after the View is created
       * and inserted into the DOM and after the View is reconnected
       * after being disconnected.
       */

      var self = this;

       this.id = ko.observable();
       this.name = ko.observable();
       this.username = ko.observable();
       this.email = ko.observable();
       this.address = ko.observable();
       this.phone = ko.observable();
       this.website = ko.observable();
       this.company = ko.observable();

       this.peopleCollection = PeopleFactory.createPeopleCollection();

       this.addCustomer = (formElement, event) => {

        var recordAttrs =  {
          name: document.getElementById("name").value,
          username : document.getElementById("username").value,
          email : document.getElementById("email").value,
          address: {
            street : document.getElementById("street").value,
            suite : document.getElementById("suite").value,
            city : document.getElementById("city").value,
            zipcode: document.getElementById("zipcode").value,
            geo: {
              lat: 24.6463,
              lng: -168.8889
            }
          },
          phone: document.getElementById("phone").value,
          website: document.getElementById("website").value,
          company: {
            name : document.getElementById("compName").value,
            catchPhrase: document.getElementById("catch").value,
            bs : document.getElementById("bs").value
          }
        }

        self.peopleCollection.create(recordAttrs, {
          wait: true,
          contentType: 'application/vnd.oracle.adf.resource+json',
          success: function (model, response) {
              console.log('Success in Create');
          },
          error: function(jqXHR, textStatus, errorThrown){
              console.log('Error in Create: ' + textStatus);
              }
                    
        });


       }

       
 

      this.connected = () => {
        accUtils.announce('Customers page loaded.', 'assertive');
        document.title = "Customers";
        // Implement further logic if needed
      };

      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
      this.disconnected = () => {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after transition to the new View is complete.
       * That includes any possible animation between the old and the new View.
       */
      this.transitionCompleted = () => {
        // Implement if needed
      };
    }

    /*
     * Returns an instance of the ViewModel providing one instance of the ViewModel. If needed,
     * return a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.
     */
    return CustomerViewModel;
  }
);
