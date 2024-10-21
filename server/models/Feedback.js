import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';
import User from './User.js';

const Feedback = sequelize.define('Feedback', {
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  comment: {
    type: DataTypes.TEXT,
    allowNull: true
  }
});

Feedback.belongsTo(User);

export default Feedback;