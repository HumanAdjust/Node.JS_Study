// class hello{
//     test(){
//         console.log(this.a + " " + this.b + " " + this.c);
//         a = 11;
//     }

//     constructor(){
//         this.a = 10;
//         this.b = 11;
//         this.c = 12;
//     }
// }

// a = new hello();
// a.test();

// b = new hello();
// b.test();

// var a = 5;
// var a = 6;

// let b = 5;
// let b = 6;

// const c = 5;
// c = 6;

class Hello{
    node_study(a, b){
        result = Math.sqrt(a + b);

        return result;
    }

    constructor(){
        console.log("Hello World!");
    }
}

a = new Hello();
console.log();