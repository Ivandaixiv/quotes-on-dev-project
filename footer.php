<?php
/**
 * The template for displaying the footer.
 *
 * @package QOD_Starter_Theme
 */

?>

			</div><!-- #content -->
			<nav id="site-navigation" class="main-navigation toggled" role="navigation">
				<?php wp_nav_menu( array( 'theme_location' => 'primary', 'menu_id' => 'primary-menu' ) ); ?>
			</nav><!-- #site-navigation -->
			<footer id="colophon" class="site-footer" role="contentinfo">
				<div class="site-info">
					<p class="footer-text">Brought to you by <a class="footer-link" href="https://github.com/Ivandaixiv">Ivan D.</a></p>
				</div><!-- .site-info -->
			</footer><!-- #colophon -->
		</div><!-- #page -->

		<?php wp_footer(); ?>

	</body>
</html>
