<?php
/**
 * The template for displaying archive pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package snoopy_peanuts
 */

get_header();
?>

	 <main class="page-main clearfix">

			<section class="section section-blog">
				<h2><?php the_archive_title(); ?></h2>
				<?php if ( have_posts() ) : ?>
					<?php while ( have_posts() ) : the_post(); ?>  

						<article class="article-blog">
								<header>
									<h3><a href="<?php the_permalink(); ?>"> <?php the_title(); ?>  </a></h3>
									<time datetime="<?php the_time("y-M-d") ?>"><?php the_time('d \d\e\ F, Y') ?></time>
									
									<a href="<?php the_permalink(); ?>">
									<?php  if ( has_post_thumbnail() ) : ?>
										<p><?php the_post_thumbnail(thumbnail); ?></p>
									<?php else: ?>
										<img src="<?php bloginfo('template_url'); ?>/images/img-5.jpg" alt="Snoopy">
									<?php endif; ?>
									</a>
								</header>
								<main>
									<?php the_excerpt (); ?>
								</main>
								<footer>
									<small>Autor: <?php the_author(); ?></small>
								</footer>
						 </article>

					<?php endwhile; ?>
					<?php the_posts_pagination(array(
					'prev_text' => 'Anterior', 
					'screen_reader_text' => ' ',
					)); ?>
					<?php else: ?>
						<p>No hay articulos para mostrar</p>
				<?php endif; ?>
			</section>

 <aside class="aside-blog">

		<?php get_sidebar(); ?>
</aside>

</main>

<?php

get_footer();
