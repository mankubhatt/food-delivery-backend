import { Pricing } from '../models/index.js';

async function getPrice(zone, organizationId, totalDistance, itemType) {
  try {
    const pricing = await Pricing.findOne({
      where: { organization_id: organizationId, zone: zone },
    });

    if (!pricing) {
      return { error: 'Pricing not found for the specified organization and zone' };
    }

    const basePrice = pricing.fix_price;
    const baseDistance = pricing.base_distance_in_km;
    const perKmPrice = itemType === 'perishable' ? pricing.km_price_perishable : pricing.km_price_non_perishable;

    let totalPrice = basePrice * 100; // Convert to cents to avoid decimal issues

    if (totalDistance > baseDistance) {
      const additionalDistance = totalDistance - baseDistance;
      totalPrice += additionalDistance * perKmPrice * 100;
    }

    return { total_price: totalPrice / 100 }; // Convert back to euros
  } catch (error) {
    return { error: error.message }; // Return the exact error message
  }
}

export { getPrice };
