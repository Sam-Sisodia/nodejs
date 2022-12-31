

exports.area = function(){
    console.log("Hey i am Circle file ")
}

exports.circumfrance = function(n){
    console.log("This is circumstance" , Math.PI * n*n  )
}

//class exports


class EMP{
    constructor(id,name)
    {
        this.id = id
        this.name = name
    }
    
    hello(a=10){
        console.log("this is values : ", a, this.id, this.name);

    };
    fuc2(){
        console.log("This is fuc 2 ");
    }

}


module.exports = EMP;

// var obj = new EMP(101, "sajal Sisodia");
// obj.hello();
// obj.fuc2();