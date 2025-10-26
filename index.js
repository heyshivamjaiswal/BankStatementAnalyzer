const fs = require('fs');

const data = fs.readFileSync('fe02_bank.csv' , 'utf-8');

const lines = data.trim().split('\n');

const headers = lines[0].split(',');

const records = [];

for(let i=1; i<lines.length; i++){
    const values = lines[i].split(',');
    const obj = {};

  headers.forEach((key , index)=>{
        obj[key.trim()] = values[index] ? values[index].trim() : '';
    });
    records.push(obj);
};

records.sort((a,b)=> new Date(a.Date) - new Date(b.Date));

const summary = {};

for (const record of records) {
  const name = record.AccountHolder;
  if (!summary[name]) {
    summary[name] = {
      AccountHolder: name,
      TotalCredit: 0,
      TotalDebit: 0,
      LargestTransaction: 0,
      SalaryTransactions: []
    };
  }

  
  if (record.Type === 'Credit') {
    summary[name].TotalCredit += record.Amount;
    if (record.Remarks.toLowerCase().includes('salary')) {
      summary[name].SalaryTransactions.push(record.TransactionID);
    }
  } else if (record.Type === 'Debit') {
    summary[name].TotalDebit += record.Amount;
  }


  if (record.Amount > summary[name].LargestTransaction) {
    summary[name].LargestTransaction = record.Amount;
  }
}

const result = Object.values(summary);

console.log(result);
