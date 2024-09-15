import {Bank} from './bank';


//User Story 1: Create account
const bank = new Bank();

// Test case: create account
//This test case should create a new account with name Bhavani and age 40
console.log(bank.createAccount("Bhavani",40));
//This test case should return 'Account already exists' as the account with name Bhavani and age 40 already exists
console.log(bank.createAccount("Bhavani",40));
console.log(bank.createAccount("Shiva",25));
