const tableName = '_nango_sync_configs';

exports.up = function (knex, _) {
    return knex.schema.withSchema('nango').createTable(tableName, function (table) {
        table.increments('id').primary();
        table.integer('account_id').references('id').inTable('nango._nango_accounts').defaultTo(0).notNullable();
        table.string('integration_name');
        table.string('provider');
        table.text('snippet');
        table.timestamps(true, true);
    });
};

exports.down = function (knex, _) {
    return knex.schema.withSchema('nango').dropTable(tableName);
};