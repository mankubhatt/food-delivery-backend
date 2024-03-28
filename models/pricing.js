import { DataTypes } from 'sequelize';

export default function (sequelize) {
  return sequelize.define('Pricing', {
    organization_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    base_distance_in_km: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    km_price_perishable: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    km_price_non_perishable: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    fix_price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  });
}
