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


//User Story 3: Withdraw money from account
// Test case: withdraw money from account
//This test case should withdraw 500 from Rory account
console.log("**** User Story 3: Withdraw money from account ****");
console.log(bank.withdraw(roryAccount.id,500));
//This test case should return 'Account not found' as the account with id 10 does not exist
console.log(bank.withdraw("10",500));
//This test case should return 'Insufficient balance' as the balance in Rory account is 500
console.log(bank.withdraw(roryAccount.id,1000));


//User Story 4: Check balance of account
// Test case: check balance of account
console.log("**** User Story 4: Check balance of account ****");
//This test case should return the balance in Rory account which is 500
console.log(bank.checkBalance(roryAccount.id));
//This test case should return 'Account not found' as the account with id 10 does not exist
console.log(bank.checkBalance("10"));

