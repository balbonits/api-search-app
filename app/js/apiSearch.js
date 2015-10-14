//apiSearch.js
(function(context,factory,service){
//apiSearch.js (namespacing)
    var globalName = "ApiSearch",
        factoryName = globalName+"Factory",
        serviceName = globalName+"Service";
    
    if(typeof context[globalName] === "undefined"){
        var globalObj = {};
        globalObj[factoryName] = factory;
        globalObj[serviceName] = service;
        context[globalName] = globalObj;
    }    
}(window || this,function(){
//apiSearch.js (factory)    

    
},function(){
//apiSearch.js (service)    

    
}));