const request = require('supertest');
const app = require('../index'); 

describe('POST /api/calculate-price', () => {
  test('It should calculate the total price for delivery', async () => {
    const response = await request(app)
      .post('/api/calculate-price')
      .send({
        zone: "central",
        organization_id: "1",
        total_distance: 12,
        item_type: "perishable"
      })
      .expect('Content-Type', /json/)
      .expect(200); 

    expect(response.body).toHaveProperty('total_price');
    response.send('hello');
  });
});
