'use strict';

const { sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  /**
   * Retrieve a record.
   *
   * @return {Object}
   */
  async findOne(ctx) {
    const entity = await strapi.services.projects.findOne({project_id: ctx.params.id});
    return sanitizeEntity(entity, { model: strapi.models.projects });
  },
};
