<?php



/* -----------------------------------------------------------------------------
 * Force wordpress read  style sheet and JS at Wp-admin login
 * ----------------------------------------------------------------------------- */
 
function WpdevLogin() {
    if ( isset( $GLOBALS['pagenow'] ) && $GLOBALS['pagenow'] === 'wp-login.php' ) {
        
        //css
        wp_enqueue_style( 'custom-login', get_stylesheet_directory_uri() . '/assets/css/login.css' );
    	
    	// js
	 wp_enqueue_script( 'login-user' ,  get_stylesheet_directory_uri() . '/assets/js/login-user.js', array() , false , true );

    }

}add_action( 'login_enqueue_scripts', 'WpdevLogin' );



/* -----------------------------------------------------------------------------
 * Change WP URL in login page to webSite domain
 * ----------------------------------------------------------------------------- */

function UrlLogoLogin() {
    return get_bloginfo( 'url' );
}

add_filter( 'login_headerurl', 'UrlLogoLogin' );

