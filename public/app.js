
document.getElementById('priceForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const zone = document.getElementById('zone').value;
    const organization_id = document.getElementById('organization_id').value;
    const total_distance = document.getElementById('total_distance').value;
    const item_type = document.getElementById('item_type').value;
    
    const response = await fetch('http://localhost:4000/api/calculate-price', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ zone, organization_id, total_distance, item_type }),
    });

    if (response.ok) {
        const data = await response.json();
        document.getElementById('result').textContent = `Total Price: ${data.total_price} Euros`;
    } else {
        const errorData = await response.json();
        document.getElementById('result').textContent = `Error: ${errorData.error}`;
    }
});
