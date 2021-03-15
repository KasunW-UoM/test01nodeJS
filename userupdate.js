/*const user1={
    ID:1,
    name:"kasun",
    password:"Pass#20210315",

    login:function(){
        console.log(this.name);
    },
    logout:()=>{
        console.log("Logout");
    }
}

//console.log(user1);
user1.login();
user1.logout();
*/
class user{
    constructor(id="0",name="None",password="None"){
        this.id=id
        this.name=name;
        this.password=password;
    }
    login(){
        console.log(this.name);
    }
}

const user2=new user(2,"jhh","gbllydrgjbk5665");

console.log(user2);

/*
const user1 =new user();
user1.name="kasun";
user1.id=2;
user1.password="Pass#20210315";

console.log(user1);

const user2 =new user();
//user2.name="janani";

//melesada demiya heka...
user2["name"]="janani";
user2.id=3;
user2.password="Pass#20210314";

console.log(user2);

for(const x in user1){
    console.log(x);
}

user1.login();

*/