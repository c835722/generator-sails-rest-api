/**
 * Connections API Configuration
 *
 * Connections are like "saved settings" for your adapters.
 * Each model must have a `connection` property (a string) which is references the name of one
 * of these connections.  If it doesn't, the default `connection` configured in `config/models.js`
 * will be applied.  Of course, a connection can (and usually is) shared by multiple models.
 *
 * NOTE: If you're using version control, you should put your passwords/api keys
 * in `config/local.js`, environment variables, or use another strategy.
 */

module.exports.connections = {
    /**
     * MySQL configuration
     * @type {Object}
     */
    mysql: {
        adapter: 'sails-mysql',
        host: "<%= answers['database:host'] %>",
        port: 3306,
        user: "<%= answers['database:user'] %>",
        password: "<%= answers['database:password'] %>",
        database: "<%= answers['database:name'] %>",
        charset: 'utf8',
        collation: 'utf8_swedish_ci'
    },

    /**
     * MongoDB configuration
     * @type {Object}
     */
    mongo: {
        adapter: 'sails-mongo',
        host: "<%= answers['database:host'] %>",
        port: 27017,
        user: "<%= answers['database:user'] %>",
        password: "<%= answers['database:password'] %>",
        database: "<%= answers['database:name'] %>"
        //replSet: {
        //    servers: [
        //        {
        //            host: 'secondary1.localhost',
        //            port: 27017
        //        }
        //    ],
        //    options: {} // http://mongodb.github.io/node-mongodb-native/api-generated/replset.html
        //}
    },

    /**
     * PostgreSQL configuration
     * @type {Object}
     */
    postgresql: {
        adapter: 'sails-postgresql',
        host: "<%= answers['database:host'] %>",
        port: 5432,
        user: "<%= answers['database:user'] %>",
        password: "<%= answers['database:password'] %>",
        database: "<%= answers['database:name'] %>",
        pool: false,
        ssl: false
    },

    /**
     * Redis configuration
     * @type {Object}
     */
    redis: {
        adapter: 'sails-redis',
        host: "<%= answers['database:host'] %>",
        port: 6379,
        password: "<%= answers['database:password'] %>",
        database: "<%= answers['database:name'] %>",
        options: {
            parser: 'hiredis',
            return_buffers: false,
            detect_buffers: false,
            socket_nodelay: true,
            no_ready_check: false,
            enable_offline_queue: true
        }
    }
};
