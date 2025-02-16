# Hands-on-PlaywrightJS
This repository contains automated tests using Playwright with two different approaches:
  1. Monolithic Test Scripts (Direct scripts without page object separation)
  2. Page Object Model (POM) (Modular and reusable test components) 
The project is designed for web application testing with Playwright, showcasing best practices and structure.

# File Structure
📁 playwright-automation  
├── 📁 pages                      # Page Object Model (POM) classes  
│   ├── CheckoutPage.js  
│   ├── ContactUsPage.js  
│   ├── LoginPage.js  
│   ├── ProductPage.js  
│   └── SignUpPage.js  
│  
├── 📁 tests                     # Test files (Monolithic & POM)  
│   ├── monolithicTest.spec.js        # Monolithic style tests  
│   ├── pomTest.spec.js    # POM-based test using ContactUsPage  
│   └── example.spec.js           # Additional POM-based tests  
│  
├── 📁 test-results              # Playwright test results and reports  
├── 📄 playwright.config.js      # Playwright configuration  
├── 📄 package.json              # Project dependencies  
└── 📄 README.md                 # Project documentation  

# Installation
1. Ensure you have Node.js installed on your system.
Clone the repository:
  git clone https://github.com/Zama-n-oob/Hands-on-PlaywrightJS.git
  cd Hands-on-PlaywrightJS  

2. Install dependencies:
   <pre> ```bash npm install``` </pre> 

4. Install Playwright browsers:
  ```bash
  npx playwright install  

# Running Tests
1. ## For Monolithic script :
The monolithicTest.spec.js file contains all actions and assertions in a single script without POM.
   ```bash
   npx playwright test tests/monolithic.spec.js  
 
2. ## For POM based scripts :
The pomTest.spec.js file demonstrates the Page Object Model (POM) approach.
   ```bash
   npx playwright test tests/automationTask.spec.js  

3. ## For running all the test :
To execute both monolithic and POM-based tests together:
   ```bash
   npx playwright test  

# Dependencies :
Playwright: 1.5
Node.js: 22.8.0

