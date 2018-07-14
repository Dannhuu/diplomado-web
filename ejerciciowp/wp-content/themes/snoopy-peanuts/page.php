<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package snoopy_peanuts
 */

get_header();
?>

	<main class="page-main">
    	<section class="section">
			<?php if ( have_posts() ) : ?>
				<?php while ( have_posts() ) : the_post(); ?>  
					<h2> <?php the_title(); ?> </h2>  
				<?php endwhile; ?>
			<?php endif; ?>
		</section>
	</main>

<?php

get_footer();
