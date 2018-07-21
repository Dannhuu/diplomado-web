<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package snoopy_peanuts
 */

get_header();
?>

	  <main class="page-main clearfix">

				<section>
					<?php if ( have_posts() ) : ?>
						<?php while ( have_posts() ) : the_post(); ?>  

							<article class="article-blog">
								<header>
									<h3><?php the_title(); ?></h3>
									<time datetime="<?php the_time("y-M-d") ?>"><?php the_time('d \d\e\ F, Y') ?></time>
									<?php  if ( has_post_thumbnail() ) : ?>
										<p><?php the_post_thumbnail(); ?></p>
									<?php else: ?>
										<img src="<?php bloginfo('template_url'); ?>/images/img-5.jpg" alt="Snoopy">
									<?php endif; ?>
									</a>
								</header>
								<main>
									<?php the_content (); ?>
								</main>
								<footer>
									<small>Autor: <?php the_author(); ?></small>
								</footer>
							</article>

						<?php endwhile; ?>
					<?php endif; ?>
				</section>
			</main>

<?php

get_footer();
