# 🏦 Bank Transaction Analyzer (Node.js)

This script processes a **CSV file of bank transactions** without using any external libraries or parsers.  
It reads, sorts, and summarizes financial data purely using **Node.js core modules**.

---

## 🚀 Features
- Parses a `.csv` file manually using `fs` and string operations  
- Sorts all transactions by **date**  
- Groups data by **Account Holder**  
- Calculates:
  - Total Credit  
  - Total Debit  
  - Largest Transaction  
  - Salary-related Transaction IDs  

---

## 📂 CSV Format
The input CSV (`fe02_bank.csv`) should have the following columns:

