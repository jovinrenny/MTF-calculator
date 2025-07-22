function calculateSellPrice() {
    const avgPrice = parseFloat(document.getElementById("avgBuyPrice").value)
    const quantity = parseFloat(document.getElementById("quantity").value)
    const daysHeld = parseFloat(document.getElementById("daysHeld").value)
    const brokerageRate = parseFloat(document.getElementById("brokerageRate").value)
    const targetProfit = parseFloat(document.getElementById("targetProfit").value)

    if(isNaN(avgPrice) || isNaN(quantity) || isNaN(daysHeld) || isNaN(brokerageRate) || isNaN(targetProfit)) {
        alert("Please fill all fields correctly.")
        return
    }

    const interestRate = daysHeld <= 15 ? 6.99 : 18

    const buyValue = avgPrice * quantity
    const interest = (interestRate / 100) * buyValue * (daysHeld / 365)
    const sellingValue = buyValue + interest + targetProfit
    const brokerage = sellingValue * (brokerageRate / 100)
    const totalCost = sellingValue + brokerage
    
    const requiredSellPrice = totalCost / quantity

    document.getElementById("result").innerHTML = `
    <div class="output">
    <p><strong>Interest Rate Applied:</strong> ${interestRate}%</p>
    <p><strong>Interest Charged:</strong> ₹${interest.toFixed(2)}</p>
    <p><strong>Brokerage (${brokerageRate}%):</strong> ₹${brokerage.toFixed(2)}</p>
    <p><strong>Total Buy Value:</strong> ₹${buyValue.toFixed(2)}</p>
    <p><strong>Sell Price:</strong> ₹${requiredSellPrice.toFixed(2)}</p>
    </div>`
}