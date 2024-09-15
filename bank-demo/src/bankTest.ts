import {Bank} from './bank';


//User Story 1: Create account
const bank = new Bank();

// Test case: create account
//This test case should create a new account with name Bhavani and age 40
console.log("**** User Story 1: Create account ****");
console.log(bank.createAccount("Bhavani",40));
//This test case should return 'Account already exists' as the account with name Bhavani and age 40 already exists
console.log(bank.createAccount("Bhavani",40));
console.log(bank.createAccount("Shiva",25));


//User Story 2: Deposit money into account
// Test case: deposit money into account
//This test case should deposit 1000 into Rory account
console.log("**** User Story 2: Deposit money into account ****");
const roryAccount=bank.createAccount("Rory",30) as {id:string};
console.log(bank.deposit(roryAccount.id,1000));
//This test case should return 'Account not found' as the account with id 10 does not exist
console.log(bank.deposit("10",1000));
