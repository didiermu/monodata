<?php get_header(); ?>
<title>Monodata</title>
<script src="<?php echo get_template_directory_uri(); ?>/js/scroll-smooth.min.js" defer></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/animations-home.min.js" defer> </script>
<link href="https://vjs.zencdn.net/7.20.3/video-js.css" rel="stylesheet">
<script src="https://vjs.zencdn.net/7.20.3/video.min.js"></script>

<main class="home">
    <script>
        const apiClima = () => {
            // Datos:latitude, longitude, resolvedAddres,humidity, windspeed, uvindex, solarradiation description, pressure, conditions.

            fetch(
                    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/ciudad%20de%20mexico/today?unitGroup=metric&include=hours&key=WYJ95FQXYZ7RLMEZBQVSG4BLX&contentType=json"
                )
                .then((response) => response.json())
                .then((data) => {
                    // console.log(data.days);

                    animTxt("#one", "Latitude:" + data.latitude);
                    animTxt("#two", "Longitude:" + data.longitude);
                    animTxt("#tre", data.resolvedAddress);
                    data.days.map((item) => {
                        animTxt("#fou", "Humidity:" + item.humidity);
                        animTxt("#fiv", "Windspeed:" + item.windspeed);
                        animTxt("#six", "Solar radiation:" + item.solarradiation);
                        animTxt("#sev", "Description:" + item.description);
                        animTxt("#eig", "Pressure:" + item.pressure);
                        animTxt("#nin", "Conditions:" + item.conditions);
                    });
                });
        };

        apiClima();
    </script>

    <?php include "api_info.php" ?>

    <section class="hero">
        <div class="container-fluid">
            <div class="hero--contain">
                <h1 class="splt">Arte. Tecnología. </h1>
                <h2 class="splt">Experiencias.</h2>
                <h2 class="splt">Para cualquier audencia.</h2>
            </div>
        </div>
        <div class="hero--video">
            <div class="cursor pause">PAUSE VIDEO</div>
            <div class="cursor play">PLAY VIDEO</div>
            <video class="video-js" id="video-desktop" muted playsinline preload loop poster="<?php echo get_template_directory_uri(); ?>/img/Reel_placeholder.jpg">
                <source src="<?php echo get_template_directory_uri(); ?>/video/TEASER_KIA-MOTION.mp4" type="video/mp4">
            </video>
        </div>
    </section>
    <section class="projects">
        <div class="container-fluid">
            <h2 class="splt">Monodata Interactive Works es un estudio de diseño y arte digital con sede en la Ciudad de México. Creamos contenido y experiencias en espacios públicos desde un enfoque orientado al futuro integrando arte, diseño, desarrollo de software, nuevas tecnologías y sistemas interactivos.</h2><a href="<?php echo get_site_url(); ?>/projects">
                <h3 class="icon-arrow-after">Ver proyectos</h3>
            </a>
        </div>
    </section>
    <section class="servicios">
        <picture class="servicios--pic">
            <source srcset="<?php echo get_template_directory_uri(); ?>/img/DSC_4541_2.webp" type="image/webp"><img class="img-fluid w-100" src="<?php echo get_template_directory_uri(); ?>/img/DSC_4541_2.jpg" alt="">
        </picture>
        <div class="container-fluid" id="services-d">
            <div class="row">
                <div class="servicios__item active">
                    <picture>
                        <source srcset="<?php echo get_template_directory_uri(); ?>/img/Copia_de_coral_surface3_1.webp" type="image/webp"><img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/img/Copia_de_coral_surface3_1.png" alt="">
                    </picture>
                    <div class="servicios__item__contain">
                        <h2 class="txt-big">01</h2>
                        <h3 class="title-item-vert txt-h6">Investigación y desarrollo </h3>
                        <div class="servicios__item__contain__wrap">
                            <h3 class="title-item txt-3xl">Investigación y desarrollo </h3>
                            <p>Nuestra experiencia con distintas tecnologías nos permite detectar tendencias del mañana para crear contenidos novedosos y, de esta forma, posicionar a nuestros clientes en nuevas dimensiones de proyección y visibilidad. Diseñamos a partir de fusionar ideas y tecnologías para desarrollar experiencias de usuario relevantes. </p><a href="<?php echo get_site_url(); ?>/projects">
                                <h3 class="icon-arrow-after txt-xl">Ver servicio</h3>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="servicios__item">
                    <picture>
                        <source srcset="<?php echo get_template_directory_uri(); ?>/img/Copia_de_coral_surface3_12.webp" type="image/webp"><img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/img/Copia_de_coral_surface3_12.png" alt="">
                    </picture>
                    <div class="servicios__item__contain">
                        <h2 class="txt-big">02</h2>
                        <h3 class="title-item-vert txt-h6">Creación de contenido</h3>
                        <div class="servicios__item__contain__wrap">
                            <h3 class="title-item txt-3xl">Creación de contenido</h3>
                            <p>Nuestra curiosidad y conocimiento interdisciplinario favorecen la creación de contenido dirigido a diferentes tipos de personas.</p><a href="<?php echo get_site_url(); ?>/projects">
                                <h3 class="icon-arrow-after txt-xl">Ver servicio</h3>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="servicios__item">
                    <picture>
                        <source srcset="<?php echo get_template_directory_uri(); ?>/img/Copia_de_coral_surface3_13.webp" type="image/webp"><img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/img/Copia_de_coral_surface3_13.png" alt="">
                    </picture>
                    <div class="servicios__item__contain">
                        <h2 class="txt-big">03</h2>
                        <h3 class="title-item-vert txt-h6">Producción </h3>
                        <div class="servicios__item__contain__wrap">
                            <h3 class="title-item txt-3xl">Producción </h3>
                            <p>La operación e integración de todos los elementos del proceso de creación hacen posible que tanto nuestras ideas como las de nuestros clientes puedan ser plasmadas de forma tangible para las personas. </p><a href="<?php echo get_site_url(); ?>/projects">
                                <h3 class="icon-arrow-after txt-xl">Ver servicio</h3>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="servicios__item">
                    <picture>
                        <source srcset="<?php echo get_template_directory_uri(); ?>/img/Copia_de_coral_surface3_14.webp" type="image/webp"><img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/img/Copia_de_coral_surface3_14.png" alt="">
                    </picture>
                    <div class="servicios__item__contain">
                        <h2 class="txt-big">04</h2>
                        <h3 class="title-item-vert txt-h6">Orientación y asesoría</h3>
                        <div class="servicios__item__contain__wrap">
                            <h3 class="title-item txt-3xl">Orientación y asesoría</h3>
                            <p>La diversidad de talentos en el equipo posibilita que nuestras propuestas sean creativas y técnicamente viables. </p><a href="<?php echo get_site_url(); ?>/projects">
                                <h3 class="icon-arrow-after txt-xl">Ver servicio</h3>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid" id="services-m">
            <div class="swiper swiper-mobile">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="servicios__item active">
                            <picture>
                                <source srcset="<?php echo get_template_directory_uri(); ?>/img/Copia_de_coral_surface3_1.webp" type="image/webp"><img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/img/Copia_de_coral_surface3_1.png" alt="">
                            </picture>
                            <div class="servicios__item__contain">
                                <div class="servicios__item__contain__num">
                                    <h2 class="txt-big">01</h2>
                                </div>
                                <div class="servicios__item__contain__info">
                                    <div class="swiper-pagination"></div>
                                    <h3 class="title-item">Investigación y desarrollo </h3>
                                    <p>Nuestra experiencia con distintas tecnologías nos permite detectar tendencias del mañana para crear contenidos novedosos y, de esta forma, posicionar a nuestros clientes en nuevas dimensiones de proyección y visibilidad. Diseñamos a partir de fusionar ideas y tecnologías para desarrollar experiencias de usuario relevantes. </p><a href="#!">
                                        <h3 class="icon-arrow-after">Ver servicio</h3>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="servicios__item">
                            <picture>
                                <source srcset="<?php echo get_template_directory_uri(); ?>/img/Copia_de_coral_surface3_12.webp" type="image/webp"><img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/img/Copia_de_coral_surface3_12.png" alt="">
                            </picture>
                            <div class="servicios__item__contain">
                                <div class="servicios__item__contain__num">
                                    <h2 class="txt-big">02</h2>
                                </div>
                                <div class="servicios__item__contain__info">
                                    <div class="swiper-pagination"></div>
                                    <h3 class="title-item">Creación de contenido</h3>
                                    <p>Nuestra curiosidad y conocimiento interdisciplinario favorecen la creación de contenido dirigido a diferentes tipos de personas.</p><a href="#!">
                                        <h3 class="icon-arrow-after">Ver servicio</h3>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="servicios__item">
                            <picture>
                                <source srcset="<?php echo get_template_directory_uri(); ?>/img/Copia_de_coral_surface3_13.webp" type="image/webp"><img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/img/Copia_de_coral_surface3_13.png" alt="">
                            </picture>
                            <div class="servicios__item__contain">
                                <div class="servicios__item__contain__num">
                                    <h2 class="txt-big">03</h2>
                                </div>
                                <div class="servicios__item__contain__info">
                                    <div class="swiper-pagination"></div>
                                    <h3 class="title-item">Producción </h3>
                                    <p>La operación e integración de todos los elementos del proceso de creación hacen posible que tanto nuestras ideas como las de nuestros clientes puedan ser plasmadas de forma tangible para las personas. </p><a href="#!">
                                        <h3 class="icon-arrow-after">Ver servicio</h3>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="servicios__item">
                            <picture>
                                <source srcset="<?php echo get_template_directory_uri(); ?>/img/Copia_de_coral_surface3_14.webp" type="image/webp"><img class="img-fluid" src="<?php echo get_template_directory_uri(); ?>/img/Copia_de_coral_surface3_14.png" alt="">
                            </picture>
                            <div class="servicios__item__contain">
                                <div class="servicios__item__contain__num">
                                    <h2 class="txt-big">04</h2>
                                </div>
                                <div class="servicios__item__contain__info">
                                    <div class="swiper-pagination"></div>
                                    <h3 class="title-item">Orientación y asesoría</h3>
                                    <p>La diversidad de talentos en el equipo posibilita que nuestras propuestas sean creativas y técnicamente viables. </p><a href="#!">
                                        <h3 class="icon-arrow-after">Ver servicio</h3>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <?php get_footer(); ?>
