class AccountRegex {
    private ACCOUNT_REGEX: RegExp = /^[_a-z0-9]{6,}$/;

    public validate(regex: string): boolean {
        return this.ACCOUNT_REGEX.test(regex);
    }
}
let accountRegex = new AccountRegex();

let validAccount: string[] = ["123abc_", "_abc123", "______", "123456", "abcdefgh"];
let invalidAccount: string[] = [".@", "12345", "1234_", "abcde"];

for (let account of validAccount) {
    let isvalid: boolean = accountRegex.validate(account);
    console.log("Account is " + account + " is valid: " + isvalid);
}
for (let account of invalidAccount) {
    let isvalid: boolean = accountRegex.validate(account);
    console.log("Account is " + account + " is valid: " + isvalid);
}