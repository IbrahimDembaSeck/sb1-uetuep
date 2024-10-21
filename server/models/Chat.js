import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';
import User from './User.js';

const Chat = sequelize.define('Chat', {
  message: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  response: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});

Chat.belongsTo(User);

export default Chat;