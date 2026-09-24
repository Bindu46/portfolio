let transactions = [];

let form = document.getElementById("expenseForm");

let description = document.getElementById("description");

let amount = document.getElementById("amount");

let type = document.getElementById("type");

let transactionList = document.getElementById("transactionList");

let balance = document.getElementById("balance");

let income = document.getElementById("income");

let expense = document.getElementById("expense");


// Add transaction

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let transaction = {

        id: Date.now(),

        description: description.value,

        amount: Number(amount.value),

        type: type.value

    };

    transactions.push(transaction);

    displayTransactions();

    updateSummary();

    form.reset();

});


// Display transactions

function displayTransactions() {

    transactionList.innerHTML = "";

    transactions.forEach(function(transaction) {

        let li = document.createElement("li");

        li.classList.add(
            "transaction",
            transaction.type
        );

        li.innerHTML = `

            <div class="transaction-info">

                <strong>${transaction.description}</strong>

                <span>
                    ${transaction.type === "income"
                        ? "Income"
                        : "Expense"}
                </span>

            </div>

            <strong>
                ${transaction.type === "income" ? "+" : "-"}
                ₹${transaction.amount}
            </strong>

            <button
                class="delete-btn"
                onclick="deleteTransaction(${transaction.id})"
            >
                Delete
            </button>

        `;

        transactionList.appendChild(li);

    });

}


// Update balance and summary

function updateSummary() {

    let totalIncome = 0;

    let totalExpense = 0;

    transactions.forEach(function(transaction) {

        if (transaction.type === "income") {

            totalIncome += transaction.amount;

        } else {

            totalExpense += transaction.amount;

        }

    });

    let totalBalance = totalIncome - totalExpense;

    income.textContent = "₹" + totalIncome;

    expense.textContent = "₹" + totalExpense;

    balance.textContent = "₹" + totalBalance;

}


// Delete transaction

function deleteTransaction(id) {

    transactions = transactions.filter(function(transaction) {

        return transaction.id !== id;

    });

    displayTransactions();

    updateSummary();

}