class User{
    private name: string;
    private email: string;
    private role: number;

    constructor(name: string, email: string, role: number) {
        this.name = name;
        this.email = email;
        this.role = role;
    }
    getInfo(user:object){
         return user;
    }
    isAdmin(){
        if(this.role === 1) return 'Admin';
        else return'Normal user';
    }

    getName(): string {
        return this.name;
    }

    setName(value: string) {
        this.name = value;
    }

    getEmail(): string {
        return this.email;
    }

    setEmail(value: string) {
        this.email = value;
    }

    getRole(): number {
        return this.role;
    }

    setRole(value: number) {
        this.role = value;
    }
}
let user1 = new User('a','b',1)
let user2 = new User('c','d',2)
console.log(user2.getInfo(user2))
console.log(user2.isAdmin())
console.log(user1.getInfo(user1))
console.log(user1.isAdmin())
