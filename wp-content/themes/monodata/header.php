<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="utf-8">
    <link rel="preload" href="<?php echo get_template_directory_uri(); ?>/css/styles.min.css" as="style">
    <link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/img/favicon.png" type="image/x-icon">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <meta name="description" content="...">
    <meta property="og:title" content="...">
    <meta property="og:description" content="...">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;700&amp;display=swap" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js" defer> </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/ScrollTrigger.min.js" defer> </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/ScrollMagic.min.js" defer> </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.7/plugins/animation.gsap.min.js" defer></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/TextPlugin.min.js"></script>
    <script src="https://www.unpkg.com/spltjs@1.1.0"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/js/anime.min.js" defer></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css">
    <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/js/nav.min.js" defer></script>
    <script src="<?php echo get_template_directory_uri(); ?>/js/forms.min.js" defer></script>
    <link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/css/styles.min.css">

<body>
    <div id="viewport">
        <header class="header">
            <div class="container-fluid">
                <div class="row align-items-center header--row">
                    <div class="col-lg-1 header--logo"><a href="<?php echo get_site_url(); ?>"> <img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/img/Monodata.svg" alt="monodata"></a></div>
                    <div class="btn-ham navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"></div>
                    <div class="col-lg-11 header--navegacion d-flex">
                        <nav class="navbar-expand-lg">
                            <div class="navbar-collapse collapse" id="navbarNav">
                                <ul class="header--one">
                                    <li id="li-proy"><a href="<?php echo get_site_url(); ?>/projects">Proyectos</a></li>
                                    <li id=" li-exp"><a href="<?php echo get_site_url(); ?>/experimentos">Experimentos</a></li>
                                    <li id="li-news"><a href="<?php echo get_site_url(); ?>/news">Noticias</a></li>
                                </ul>
                                <ul class="header--two">
                                    <li id="li-lang"><a>EN</a><a class="active">ES</a></li>
                                    <li id="li-beneficios" data-bs-toggle="modal" data-bs-target="#modal-contact"><a>Contacto</a></li>
                                    <li>
                                        <button class="icon-search"></button>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
