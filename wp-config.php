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
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'monodata');

/** Database username */
define('DB_USER', 'root');

/** Database password */
define('DB_PASSWORD', '');

/** Database hostname */
define('DB_HOST', 'localhost');

/** Database charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The database collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

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
define('AUTH_KEY',         'js{ bp9HaX$H3B}Z*D;J.9CPO%6]uhe>9C&EnHeEvB9;Y71oOLE<{^>sk_./L0Jc');
define('SECURE_AUTH_KEY',  'Vuo4=h+chSBGzeO*|uo1}QlNHp@mme/IWrTS,Ng[4Cp<afpv&phsg!_X}LNHe%+ ');
define('LOGGED_IN_KEY',    '&D* *Sv Txsk!Rh!I%|MT$-cuv1Zv`dGd fRF5s3w%RT;acdDtw-W2*7_s vd{xS');
define('NONCE_KEY',        'xV)lhfMX6G_< :?JeZ)lU^*YVNm~8br{Y5ub+vp!6oV8WX)oZJWB<[UE2-ZO&czx');
define('AUTH_SALT',        '^2s3iJkMD0ER+_#]?d:)mt1PR!vy4W[agGO>W;lQUBEx[Yf++g5ls5I;|[TRY1y^');
define('SECURE_AUTH_SALT', '/j#b#{}DGccjzz1,*|W!;;&.R}!nCZpjh+E2cqeW#ERRo|hSh~EQEvzM:|jS4=n{');
define('LOGGED_IN_SALT',   'V~8rxJxr:)r=*CYtq~_<>y|d2 63;X2smEWM[gXQ(u[0*fg`Vo85]p55Ij:8{GWP');
define('NONCE_SALT',       '-4;xZ%L7O}EpvZp-u?2#.l)@hBXkT]N0K{h~URqd,U(o8b7cXGf*yUFH2<+;GV+%');

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
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define('WP_DEBUG', false);

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if (!defined('ABSPATH')) {
	define('ABSPATH', __DIR__ . '/');
}

define('FS_METHOD', 'direct');


/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
