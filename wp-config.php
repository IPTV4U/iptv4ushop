<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'iptv4ushop' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'hz5[c,mM9=,;-v43^}s`TF]=zv-%T{&*Y8r{e(/@)Zmb}`58?2ow;|z!zh3Bq:? ' );
define( 'SECURE_AUTH_KEY',  '{.c8AiPk{:5]ini9{ajAPvND&L,k._zz>|7:c} ~nP,uN)[^$~nm6C{S.,*/~7Aq' );
define( 'LOGGED_IN_KEY',    'AeTn*BojU-<}-=D*OU6 RGN>Ty.4Px@I4$Vh>!=K~C~D4.$5hBlTD4~+`Gg?0+ W' );
define( 'NONCE_KEY',        ',0Ozd;V=GVx/9!$K$d3,+55>(oy@cP}leFYX?S$:uIcOLfsKiEno?87DbN<-m+EE' );
define( 'AUTH_SALT',        'PLf?|^O{C=pv(tY!6cpnQR2H_?U{7o}`8lQwHg#P9hRARL.bT3rY.{d@0wO[U8jt' );
define( 'SECURE_AUTH_SALT', 'PY)?:<]fP{H7cCFYkuM $`]7.jemXZqHl&5u?Z5W,]<Dton9e<)u67V9wjSi:{1p' );
define( 'LOGGED_IN_SALT',   'wdK;~D@UJ{acpia+#hKp=jA5h]{EBuD.f$Z[7PuUKCMR*4[Zl+6m@I)ZU_:Z)s,K' );
define( 'NONCE_SALT',       'IPu])7vzSD4YtGIV(d-_JtbZ1F8F0#QHpAsr#rwZCB,:cp>i.)pZ}KM8Ma<u>Qyd' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
