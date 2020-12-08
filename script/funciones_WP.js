function travely_enqueue_script() {
    wp_enqueue_script( 'jquery', 'https://akidaniel.github.io/GAUCHO/script/jquery.min.js', false );
    wp_enqueue_script( 'uikit', 'https://akidaniel.github.io/GAUCHO/script/uikit.min.js', false );
	wp_enqueue_script( 'accordion', 'https://akidaniel.github.io/GAUCHO/script/accordion.min.js', false );
    wp_enqueue_script( 'autocomplete', 'https://akidaniel.github.io/GAUCHO/script/autocomplete.min.js', false );
    wp_enqueue_script( 'datepicker', 'https://akidaniel.github.io/GAUCHO/script/datepicker.min.js', false );
	wp_enqueue_script('grid', 'https://akidaniel.github.io/GAUCHO/script/grid.min.js', false);
    wp_enqueue_script( 'lightbox', 'https://akidaniel.github.io/GAUCHO/script/lightbox.min.js', false );
    wp_enqueue_script( 'parallax', 'https://akidaniel.github.io/GAUCHO/script/parallax.min.js', false );
    wp_enqueue_script( 'slider', 'https://akidaniel.github.io/GAUCHO/script/slider.min.js', false );
    wp_enqueue_script( 'slideset', 'https://akidaniel.github.io/GAUCHO/script/slideset.min.js', false );
    wp_enqueue_script( 'slideshow', 'https://akidaniel.github.io/GAUCHO/script/slideshow.min.js', false );
    wp_enqueue_script( 'sticky', 'https://akidaniel.github.io/GAUCHO/script/sticky.min.js', false );
    wp_enqueue_script( 'timepicker', 'https://akidaniel.github.io/GAUCHO/script/timepicker.min.js', false );
    wp_enqueue_script( 'tooltip', 'https://akidaniel.github.io/GAUCHO/script/tooltip.min.js', false );
    wp_enqueue_script( 'theme', 'https://akidaniel.github.io/GAUCHO/script/theme.js', false );
    wp_enqueue_script( 'plyr', 'https://akidaniel.github.io/GAUCHO/script/plyr.js', false );


    // here you can enqueue more js / css files 
}

add_action( 'wp_enqueue_scripts', 'travely_enqueue_script' );

