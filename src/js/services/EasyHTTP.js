define([],
    function () {
class EasyHttp {

    constructor(){}

    async getData(url){
        let response = await fetch(url);
    
        let data = await response.json();
    
        return data;
    
    }

    async postData(url, data){
        response = await fetch(url, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          });
    
        data = await response.json();
    
        return data;
    
    }
    

}

return EasyHttp;
    });