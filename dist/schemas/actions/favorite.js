/**
 * For more information, see <https://getpocket.com/developer/docs/v3/modify#action_favorite>.
 */

var Joi = require('joi');

var base = require('./_base');

module.exports = base.keys({
  // REQUIRED
  action: Joi.string().required().valid('favorite').description('Mark an item as a favorite.'),

  item_id: Joi.number().integer().required().description('The id of the item to perform the action on.')
});