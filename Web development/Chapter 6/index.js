function calculateTotal() {
    // Input fields
    const pricePerLitre = parseFloat(document.getElementById("costPerLiter").value);
    const litresPurchased = parseFloat(document.getElementById("liters").value);

    // Calculate total cost
    const totalCost = pricePerLitre * litresPurchased;

    // Result with 2 decimal places
    document.getElementById("totalCost").innerText = 'Total Cost: $${totalCost.toFixed(2)}';
}


