define(['../accUtils',
    'ojs/ojcore',
    'knockout'
], function(accUtils,oj,ko) {

    var PeopleFactory = {
        resourceUrl : 'https://jsonplaceholder.typicode.com/users',

        createPeopleModel: function() {
            var peopleModel = oj.Model.extend({
                url : this.resourceUrl,
                idAttribute: "id"
                
            });
            return new peopleModel();
        },

        createPeopleCollection: function() {
            var peopleCollection = oj.Collection.extend({
                url : this.resourceUrl,
                model : this.createPeopleModel()
            })

            return new peopleCollection();
        }
    }

    return PeopleFactory;
    
});