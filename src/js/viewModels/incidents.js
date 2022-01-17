/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your incidents ViewModel code goes here
 */
define(['../accUtils','knockout','text!data/data.json', 'ojs/ojarraydataprovider','ojs/ojchart','ojs/ojselectsingle'],
 function(accUtils,ko,file,ArrayDataProvider) {
    function IncidentsViewModel() {

      let data = JSON.parse(file);

      this.datasource = ko.observableArray(data);

  

      this.selectVal = ko.observable("pie");
  
     this.chartTypes = [
      { value: "pie", label: "Pie Chart" },
      { value: "bar", label: "Bar Chart" }
    ];
  
    this.chartsDisplay = new ArrayDataProvider(this.chartTypes, {
      keyAttributes: "value",
    });
       

      
      // let text = el.options === null ? el.options[el.selectedIndex].innerHTML : null;

      //this.selectedLabel = ko.observable(text);

   

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
      this.connected = () => {
        accUtils.announce('Incidents page loaded.', 'assertive');
        document.title = "Incidents";
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

    //   this.selLabel =  ko.observable("PIE Chart");

    this.selectVal.subscribe((data) => {

        

         let selLabel = this.chartTypes.filter( x => x.value === data);

         document.getElementById('selectText').textContent = selLabel[0].label;
      


        
      });

      /*
    this.selectedLabel.subscribe((data) => {
        console.log(data);
      });
      */
    }
    /*
     * Returns an instance of the ViewModel providing one instance of the ViewModel. If needed,
     * return a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.
     */


    return IncidentsViewModel;
  }
);
