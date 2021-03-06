'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const {
      INTEGER, STRING, DATE, ENUM, TEXT,
 		} = Sequelize;
    return queryInterface.createTable('comment', {
      id: {
        type: INTEGER(20),
        primaryKey: true,
        autoIncrement: true,

      },
      content: {
        type: TEXT,
        allowNull: false,
        defaultValue: '',
        comment: '评论内容',

      },
      live_id: {
        type: INTEGER,
        allowNull: false,
        defaultValue: 0,
        comment: '直播间id',
        references: {
          model: 'live',
          key: 'id',

        },
        onDelete: 'cascade',
        onUpdate: 'restrict', // 跟新时操作

      },
      user_id: {
        type: INTEGER,
        allowNull: false,
        defaultValue: 0,
        comment: '用户id',
        references: {
          model: 'user',
          key: 'id',

        },
        onDelete: 'cascade',
        onUpdate: 'restrict', // 跟新时操作
      },
      created_time: DATE,
      update_time: DATE,

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('comment');
  },
};
