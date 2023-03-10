function calculator() {

    const amount = parseFloat(document.getElementsByClassName("amount")[0].value);
    const taxTypeArr = document.getElementsByName("tax-type");
    const taxRateArr = document.getElementsByName("tax-rate");
    let taxRate;

    /* Determine which tax rate is supposed to be used for calculation */
    for (let i = 0; i < taxRateArr.length; i++) {
        if (taxRateArr[i].checked) {
            if (taxRateArr[i].value == "high-rate") {
                taxRate = 0.19;
            } else {
                taxRate = 0.07;
            }
        }
    }

    if (!isNaN(amount)) {
        /* Determine if gross tax or net tax is supposed to be calculated */
        for (let i = 0; i < taxTypeArr.length; i++) {
            if (taxTypeArr[i].checked) {
                /* Calculation of gross tax */
                if (taxTypeArr[i].value == "gross") {
                    let taxAmount = amount * taxRate;
                    document.getElementsByClassName("tax-amount")[0].innerHTML = taxAmount.toFixed(2) + " €";
                    let grossAmount = taxAmount + amount;
                    document.getElementsByClassName("end-amount")[0].innerHTML = grossAmount.toFixed(2) + " €";
                    return;
                    /* Calculation of net tax */
                } else {
                    let netAmount = amount / (taxRate + 1);
                    document.getElementsByClassName("tax-amount")[0].innerHTML = netAmount.toFixed(2) + " €";
                    let taxAmount = amount - netAmount;
                    document.getElementsByClassName("end-amount")[0].innerHTML = taxAmount.toFixed(2) + " €";
                    return;
                }
            }
        }
    }
}

