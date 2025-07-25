
The Blockchain era offers critical opportunities for the supply chain
management control. The aim of our project is the employment of blockchain
generation in the field of deliver/supply chain management. Though BCT (Blockchain
chain technology) has been widely involved in the field of cryptocurrencies, non-
financial applications which include supply chain, electricity, and food industry are
also planning. Blockchain can offer an eternal, sharable, auditable document of
merchandise through their supply chain, which improves product traceability,
authenticity, and legality in a greater value-effective way. Blockchain is a distributed
ledger technology that captured the attention of all practitioners and educators last year.
A large number of conceptual studies and small number of empirical studies have been
published that focus on addressing contemporary issues and recommending future
research directions on Supply Chain governance.


#Steps to run this project
``` shell script
Installing packages on VScode :
  npm install --save-dev hardhat
  npm install --save-dev "hardhat@^2.12.4" "@nomicfoundation/hardhat-toolbox@^2.0.0"
  Make sure to have React.js Installed
```
  
```
Important note:

In the file named .env make sure to change the URL'S according to your Alchemy account and your respective Metamask Private Key
```
  
```  
Accounts used:
  Alchemy
  Metamask
  Goerli Etherscan
  Goerli test network
``` 

```
In the below block run steps 1 - 4 in Suppychain directory
Run Step 5 in Client Directory

```
```  
Deploying contracts on the goerli test network:
 1. npm install dotenv   (run this everytime you change your environment variables)
 2.npx hardhat run --network goerli scripts/finalDeploy.js
 3.once the above statement is executed a contract address is created, 
 4.copy the contract address and replace it with the "contract address" variable in "App.js" file
 5.change directory into Client(cd client) and execute "npm start"
``` 
```
Links:
  https://goerli.etherscan.io
  https://dashboard.alchemy.com/
  https://metamask.io/
```
