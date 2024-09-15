export interface Account {
    id: string;
   name: string;
   age: number;
    balance: number;
}
const accounts: Account[] = [];
export class Bank{
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
   deposit(accountId: string, amount: number): string {
    const account = accounts.find(acc => acc.id === accountId);
    if(!account){
        return 'Account not found';
    }
    account.balance += amount;
    return `Deposited ${amount} into ${account.name} account. New balance is ${account.balance}`;
   }

    // User Story 3: Withdraw money from account
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
}

