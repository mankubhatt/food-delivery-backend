import { getPrice } from '../services/pricingService.js';

async function calculatePrice(req, res) {
  try {
    const { zone, organization_id, total_distance, item_type } = req.body;
    const response = await getPrice(
      zone,
      organization_id,
      total_distance,
      item_type
    );

    if (response.error) {
      res.status(400).json({ error: response.error });
    } else {
      res.json(response);
    }
  } catch (error) {
    console.error('Error calculating price:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

export { calculatePrice };
