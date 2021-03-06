<?php
/**
 * The header for our theme.
 *
 * @package QOD_Starter_Theme
 */
$page = "";
if(is_page('about')){
	$page = 'about';
} elseif(is_page('archives')){
	$page = 'archive';
} elseif (is_archive()){
	$page = 'archive-category';
} elseif(is_page('submit')) {
	$page = 'submit';
} elseif(is_404() || is_search()){
	$page = 'error-page search';
}
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
	<head>
		<meta charset="<?php bloginfo( 'charset' ); ?>">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="profile" href="http://gmpg.org/xfn/11">
		<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

	<?php wp_head(); ?>
	</head>

	<body <?php body_class(); ?>>
		<div id="page" class="hfeed site">
			<a class="skip-link screen-reader-text" href="#content"><?php echo esc_html( 'Skip to content' ); ?></a>

			<header id="masthead" class="site-header" role="banner">
				<div class="site-branding">
					<h1 class="site-title screen-reader-text"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
					<a href="<?php echo home_url();?>"><img src="<?php echo get_template_directory_uri();?>/assets/qod-logo.svg" alt="Quotes on Dev Logo" class="main-logo"></a>
				</div><!-- .site-branding -->
			</header><!-- #masthead -->

			<div id="content" class="site-content <?php echo $page?>">
				<p class="quote-left"><i class="fas fa-quote-left"></i></p>
