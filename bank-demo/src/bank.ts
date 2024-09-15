export interface Account {
    id: string;
   name: string;
   age: number;
    balance: number;
}
const accounts: Account[] = [];
export class Bank{
    /**
     * 
     * @param {string} name - The name of the account holder
     * @param {number} age - The age of the account holder
     * @returns {Account | string} - Returns the account object if account is created successfully, else returns account already exists message
     */
    createAccount(name: string, age: number): Account | string{
        const existingAccount = accounts.find(acc => acc.name === name && acc.age === age);
        if(existingAccount){
            return `Account already exists. Failed to create ${existingAccount.name} account`;
        }
        const newAccount: Account = {
            id: (accounts.length + 1).toString(),
            name,
            age,
            balance: 0
    };
    accounts.push(newAccount);
    return newAccount;
}
    // User Story 2: Deposit money into account
    /**
     * 
     * @param {string} accountId - The id of the account
     * @param {number} amount - The amount to be deposited
     * @returns {string} - Returns success message if deposit is successful, else returns account not found message
     */
   deposit(accountId: string, amount: number): string {
    const account = accounts.find(acc => acc.id === accountId);
    if(!account){
        return 'Account not found';
    }
    account.balance += amount;
    return `Deposited ${amount} into ${account.name} account. New balance is ${account.balance}`;
   }

    // User Story 3: Withdraw money from account
    /**
     * 
     * @param {string} accountId - The id of the account
     * @param {number} amount - The amount to be withdrawn
     * @returns {string} - Returns success message if withdrawal is successful, else returns account not found or insufficient balance message
     * 
     */
    withdraw(accountId: string, amount: number): string{
        const account = accounts.find(acc => acc.id === accountId);
        if(!account){
            return 'Account not found';
        }
        if(account.balance < amount){
            return 'Insufficient balance';
        }
        account.balance -= amount;
        return `Withdrawn ${amount} from ${account.name} account. New balance is ${account.balance}`;
    }


    // User Story 4: Check balance of account
    /**
     * 
     * @param {string} accountId - The id of the account
     * @returns {string} - Returns the balance of the account if account is found, else returns account not found message
     */
    checkBalance(accountId: string): string{
        const account = accounts.find(acc => acc.id === accountId);
        if(!account){
            return 'Account not found';
        }
        return `Balance in ${account.name} account is ${account.balance}`;
    }
}

