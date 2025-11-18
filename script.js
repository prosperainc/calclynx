// Global script file for CalcLynx
console.log("CalcLynx script loaded successfully");

// Example function (we will replace with full calculators soon)
function calculateLoan() {
    const amount = document.getElementById("loan-amount").value;
    const rate = document.getElementById("loan-rate").value;
    const years = document.getElementById("loan-years").value;

    if (!amount || !rate || !years) {
        document.getElementById("loan-result").innerText = "Please fill all fields.";
        return;
    }

    const monthlyRate = rate / 100 / 12;
    const totalMonths = years * 12;

    const monthlyPayment =
        (amount * monthlyRate) /
        (1 - Math.pow(1 + monthlyRate, -totalMonths));

    document.getElementById("loan-result").innerText =
        "Monthly Payment: $" + monthlyPayment.toFixed(2);
}
