<?php



/* -----------------------------------------------------------------------------
 * Force wordpress read this style sheet at Wp-admin login
 * ----------------------------------------------------------------------------- */
 
function WpdevLogin() {
    if ( isset( $GLOBALS['pagenow'] ) && $GLOBALS['pagenow'] === 'wp-login.php' ) {
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






function LoadModal() {

	require get_theme_file_path( '/templates/modal.php' );

}

add_action( 'wp_head' , 'LoadModal' );



/*
	enqueue Scripts
*/

function EnqueueScripts() {

	// css 
	 wp_enqueue_style( 'contact-form' , get_stylesheet_directory_uri() . '/assets/css/contact-form.css' );


	// js
	 wp_enqueue_script( 'modal-contact' ,  get_stylesheet_directory_uri() . '/assets/js/modal-contact.js', array() , false , true );
	 
}

add_action( 'wp_enqueue_scripts', 'EnqueueScripts' );






