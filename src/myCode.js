define('myCode',function () {

    return {
    
        endsWith : function (str, suffix) 
        {
                return str.indexOf(suffix, str.length - suffix.length) !== -1;
        },
        print : function (message)
        {           
            console.log(message);
        }
    }
});