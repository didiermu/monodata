<?php

function monodata_setup()
{
    add_theme_support('post-thumbnails');
}

add_action('after_setup_theme', 'monodata_setup');

// REMOVE IMAGES
add_action('init', 'init_remove_support', 100);

function init_remove_support()
{
    $post_type = 'post';
    remove_post_type_support($post_type, 'editor');
}

// REMOVE IMAGES


add_action('init', 'cpt_projects');

function cpt_projects() {
    $labels = array(
        'name' => _x('Proyectos', 'post type general name'),
        'singular_name' => _x('Proyecto', 'post type singular name'),
        'add_new' => _x('Añadir Nuevo Proyecto', 'Proyecto'),
        'add_new_item' => __('Añadir Nuevo'),
        'edit_item' => __('Editar Proyecto'),
        'new_item' => __('Nueva Proyecto'),
        'view_item' => __('Ver Proyecto'),
        'search_items' => __('Buscar Proyecto'),
        'not_found' => __('No se han encontrado Proyectos'),
        'not_found_in_trash' => __('No se han encontrado Proyectos en la papelera')
    );
    $args = array(
        'labels' => $labels,
        'public' => true,
        'hierarchical' => false,
        'menu_position' => 2,
        'has_archive' => true,
        'query_var' => true,
        'supports' => array('title','editor','thumbnail'),
        'rewrite' => array('slug' => 'proyecto'),
    );

    register_post_type( 'proyecto', $args );
    }
