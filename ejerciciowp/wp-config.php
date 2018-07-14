<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'snoopy');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'jV!#PKdY{yz[r_8QvBB7jKHZEY@~x-:NEeeNZU>oi-Js&H`vo/C{>rrO,NN} c7)');
define('SECURE_AUTH_KEY',  'Zg]YrjAi/=H5`*<uIWH*aO>$iWzoALS(]k8}M4:U^fBk4N62;e,Fh_DU]NJTl<]u');
define('LOGGED_IN_KEY',    ')UMlK0Ux7kyG*s3FkQjh0 6fu{SSB&x*wke(k nUa`vn,YE;HUB#]o ]DOmf~Qf,');
define('NONCE_KEY',        'PE#G[nAB)jQ+V}R3g[aJ`io{V1Y+V%5~{Z?G&pHKVoWdsq/XOWv&rx$nMHE#U-M%');
define('AUTH_SALT',        'WWVNr6|Z=g:mzM]2{bnT}^qO{/-`sn+Od|T?H _},XN>n-nW[v3zEh_xHb.4Up`5');
define('SECURE_AUTH_SALT', 'Cn7^D_unA3fOS0;=KxJ^H<NpAvu$djxJ.+xaQ~78v^&G{(rhE4Rl<MD]qrQM9q@*');
define('LOGGED_IN_SALT',   'O54-;N2vNSZr@<nSR:$tc@HH55xcZf*u8hW8I;8lV-z]1 +>)^MUT`>}?6!8y9E>');
define('NONCE_SALT',       'BuIknq}w,NC`a<U<yf~z5eDVX9V7n]u|&ww@gw</fr4Mn(sf(P)n>~,SJBxbr:|f');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
