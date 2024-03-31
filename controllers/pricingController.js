const pool = require('../db');
const { calculateTotalPrice } = require('../services/pricingService');



async function calculatePrice(req, res) {
  try {
    const { zone, organization_id, total_distance, item_type } = req.body;
    const query = `
      SELECT * FROM pricing WHERE zone = $1 AND organization_id = $2 AND item_id = (
        SELECT id FROM items WHERE type = $3
      )
    `;
    const values = [zone, organization_id, item_type];
    const result = await pool.query(query, values);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Pricing information not found." });
    }

    const pricing = result.rows[0];
    const totalPrice = calculateTotalPrice(pricing.base_distance_in_km, pricing.km_price, pricing.fix_price, total_distance);

    res.json({ total_price: totalPrice });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = { calculatePrice };
