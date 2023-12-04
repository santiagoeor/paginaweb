(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const e of a)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function o(a){const e={};return a.integrity&&(e.integrity=a.integrity),a.referrerpolicy&&(e.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?e.credentials="include":a.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(a){if(a.ep)return;a.ep=!0;const e=o(a);fetch(a.href,e)}})();const t=`<!-- Modal de Almacen Virtual -->\r
<div class="modal fade" id="almacenVirtual" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"\r
    aria-labelledby="staticBackdropLabel" aria-hidden="true">\r
    <div class="modal-dialog modal-dialog-scrollable">\r
        <div class="modal-content">\r
            <div class="modal-header">\r
                <h5 class="modal-title" id="staticBackdropLabel">Almacen Virtual</h5>\r
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\r
            </div>\r
            <div class="modal-body">\r
                <p>\r
                    Mi debut en el desarrollo web fue con un grupo de amigos, colaborando en la creación de un almacén\r
                    virtual. Inicialmente construido con HTML, CSS y JavaScript, el proyecto evolucionó al cambiar la\r
                    extensión de los archivos a PHP para superar desafíos de navegación entre páginas. Esta experiencia\r
                    no\r
                    solo representó mis primeros pasos en el desarrollo web, sino también una lección valiosa sobre\r
                    adaptabilidad y resolución de problemas en el mundo digital.\r
                </p>\r
            </div>\r
            <div class="modal-footer">\r
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>\r
                <a class="btn btn-primary" href="https://github.com/equipode/Almacen_Virtual" target="_blank">GitHub</a>\r
            </div>\r
        </div>\r
    </div>\r
</div>\r
\r
<!-- Modal de Asesores web -->\r
<div class="modal fade" id="asesoresWeb" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"\r
    aria-labelledby="staticBackdropLabel" aria-hidden="true">\r
    <div class="modal-dialog modal-dialog-scrollable">\r
        <div class="modal-content">\r
            <div class="modal-header">\r
                <h5 class="modal-title" id="staticBackdropLabel">Asesores web</h5>\r
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\r
            </div>\r
            <div class="modal-body">\r
                <p>\r
                    En colaboración con una amiga, llevé a cabo un proyecto enfocado en el desarrollo de un sitio web\r
                    dedicado a ofrecer asesoramiento a aquellos interesados en crear su propio sitio web, ya sea para\r
                    negocios o uso personal. La implementación se realizó utilizando PHP, Bootstrap, CSS y JavaScript,\r
                    brindando una solución integral para guiar a los usuarios en el proceso de establecer su presencia\r
                    digital de manera efectiva.\r
                </p>\r
            </div>\r
            <div class="modal-footer">\r
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>\r
                <a class="btn btn-primary" href="https://github.com/equipode/asesores_web" target="_blank">GitHub</a>\r
            </div>\r
        </div>\r
    </div>\r
</div>\r
\r
<!-- Modal de Asesorias web -->\r
<div class="modal fade" id="asesoriasWeb" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"\r
    aria-labelledby="staticBackdropLabel" aria-hidden="true">\r
    <div class="modal-dialog modal-dialog-scrollable">\r
        <div class="modal-content">\r
            <div class="modal-header">\r
                <h5 class="modal-title" id="staticBackdropLabel">Asesorias web</h5>\r
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\r
            </div>\r
            <div class="modal-body">\r
                <p>\r
                    Participé en un proyecto colaborativo junto a amigos y compañeros de estudio, dedicado a brindar\r
                    asesoramiento y crear sitios web personalizados. Durante esta experiencia, adquirí habilidades\r
                    fundamentales, como la gestión de proyectos con Git y GitHub para trabajar de manera eficiente en\r
                    equipo. Exploramos conceptos de wireframing y perfeccionamos la capacidad de diseñar interfaces\r
                    responsivas mediante el uso de Bootstrap. Esta iniciativa no solo fortaleció mis habilidades\r
                    técnicas,\r
                    sino que también destacó la importancia de la colaboración y la planificación en el desarrollo web.\r
                </p>\r
            </div>\r
            <div class="modal-footer">\r
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>\r
                <a class="btn btn-primary" href="https://github.com/equipode/asesorias_web" target="_blank">GitHub</a>\r
            </div>\r
        </div>\r
    </div>\r
</div>\r
\r
<!-- Modal de Tu casa ciclista -->\r
<div class="modal fade" id="tuCasaCiclista" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"\r
    aria-labelledby="staticBackdropLabel" aria-hidden="true">\r
    <div class="modal-dialog modal-dialog-scrollable">\r
        <div class="modal-content">\r
            <div class="modal-header">\r
                <h5 class="modal-title" id="staticBackdropLabel">Tu casa ciclista</h5>\r
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\r
            </div>\r
            <div class="modal-body">\r
                <p>\r
                    Junto a mis compañeros de clase, desarrollé el proyecto "Tu Casa Ciclista", una tienda en línea\r
                    especializada en la venta de bicicletas. La plataforma exhibe detalladamente cada bicicleta y, al\r
                    iniciar sesión, los usuarios pueden explorar y gestionar productos, permitiéndoles crear, editar y\r
                    eliminar artículos según sus preferencias. Este proyecto busca ofrecer una experiencia de compra\r
                    completa y personalizada para los entusiastas de las bicicletas.\r
                </p>\r
            </div>\r
            <div class="modal-footer">\r
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>\r
                <a class="btn btn-primary" href="https://github.com/equipode/Tu_casa_ciclista"\r
                    target="_blank">GitHub</a>\r
            </div>\r
        </div>\r
    </div>\r
</div>\r
\r
<!-- Modal de Subastas en linea -->\r
<div class="modal fade" id="subastasEnLinea" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"\r
    aria-labelledby="staticBackdropLabel" aria-hidden="true">\r
    <div class="modal-dialog modal-dialog-scrollable">\r
        <div class="modal-content">\r
            <div class="modal-header">\r
                <h5 class="modal-title" id="staticBackdropLabel">Subastas en linea</h5>\r
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\r
            </div>\r
            <div class="modal-body">\r
                <p>\r
                    Este proyecto se centra en la exhibición de subastas directamente en la página principal, brindando\r
                    a\r
                    los usuarios la posibilidad de explorar en detalle cada oferta. Al iniciar sesión, los usuarios\r
                    pueden\r
                    participar activamente registrando, editando y eliminando subastas. La tecnología utilizada incluye\r
                    Php,\r
                    AdminLTE, HTML, CSS, JavaScript, JQuery, MySQL y GitLab, asegurando una plataforma robusta y\r
                    completa\r
                    para la gestión y participación en subastas en línea.\r
                </p>\r
            </div>\r
            <div class="modal-footer">\r
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>\r
                <a class="btn btn-primary" href="https://gitlab.com/santiagoeor/subastasenlinea"\r
                    target="_blank">GitLab</a>\r
            </div>\r
        </div>\r
    </div>\r
</div>\r
\r
<!-- Modal de Asistencia con scaner -->\r
<div class="modal fade" id="asistenciaScaner" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"\r
    aria-labelledby="staticBackdropLabel" aria-hidden="true">\r
    <div class="modal-dialog modal-dialog-scrollable">\r
        <div class="modal-content">\r
            <div class="modal-header">\r
                <h5 class="modal-title" id="staticBackdropLabel">Asistencia con scaner</h5>\r
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\r
            </div>\r
            <div class="modal-body">\r
                <p>\r
                    Desarrollé un proyecto de asistencia que registra la presencia de personas y envía la información\r
                    directamente a una base de datos. La aplicación cuenta con una funcionalidad de inicio de sesión\r
                    para\r
                    garantizar la seguridad de los datos. Este proyecto, construido con PHP, MySQL, HTML, CSS,\r
                    JavaScript y\r
                    AdminLTE, ofrece una solución integral para el seguimiento y almacenamiento eficiente de las\r
                    asistencias.\r
                </p>\r
            </div>\r
            <div class="modal-footer">\r
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>\r
                <a class="btn btn-primary" href="https://github.com/santiagoeor/asistencia_scaner"\r
                    target="_blank">GitHub</a>\r
            </div>\r
        </div>\r
    </div>\r
</div>\r
\r
<!-- Modal de sistema-ventas -->\r
<div class="modal fade" id="sistemaVentas" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"\r
    aria-labelledby="staticBackdropLabel" aria-hidden="true">\r
    <div class="modal-dialog modal-dialog-scrollable">\r
        <div class="modal-content">\r
            <div class="modal-header">\r
                <h5 class="modal-title" id="staticBackdropLabel">Ventas</h5>\r
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\r
            </div>\r
            <div class="modal-body">\r
                <p>\r
                    Este sistema permite a vendedores y administradores registrar productos, clientes y llevar un eficaz\r
                    control de stock. Con un sistema de roles de usuarios, ofrece una gestión diferenciada. Además,\r
                    incluye\r
                    funciones avanzadas como la generación de informes en Excel y PDF para analizar las ventas\r
                    realizadas.\r
                    Desarrollado con PHP, AdminLTE, jQuery y MySQL, proporciona una solución completa para la\r
                    administración\r
                    eficiente de la información.\r
                </p>\r
            </div>\r
            <div class="modal-footer">\r
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>\r
                <a class="btn btn-primary" href="https://gitlab.com/santiagoeor/ventas" target="_blank">GitLab</a>\r
            </div>\r
        </div>\r
    </div>\r
</div>\r
\r
<!-- Modal de crud de productos en Laravel -->\r
<div class="modal fade" id="crudProducLaravel" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"\r
    aria-labelledby="staticBackdropLabel" aria-hidden="true">\r
    <div class="modal-dialog modal-dialog-scrollable">\r
        <div class="modal-content">\r
            <div class="modal-header">\r
                <h5 class="modal-title" id="staticBackdropLabel">Crud de productos en Laravel</h5>\r
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\r
            </div>\r
            <div class="modal-body">\r
                <p>\r
                    Desarrollé un proyecto sencillo con el objetivo de comprender las bases de Laravel. Durante este\r
                    proceso, adquirí habilidades en el uso de controllers, migraciones de base de datos, archivos de\r
                    rutas\r
                    web y la manipulación de vistas para interactuar con las operaciones CRUD. Además, integré Bootstrap\r
                    con\r
                    la ayuda de Vite para mejorar la interfaz de usuario. Esta experiencia proporcionó una sólida\r
                    comprensión de los fundamentos de Laravel y su aplicación práctica en la construcción de\r
                    aplicaciones\r
                    web con funcionalidades CRUD.\r
                </p>\r
            </div>\r
            <div class="modal-footer">\r
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>\r
                <a class="btn btn-primary" href="https://github.com/santiagoeor/crud_laravel" target="_blank">GitHub</a>\r
            </div>\r
        </div>\r
    </div>\r
</div>\r
\r
<!-- Modal de Sitio web con Django -->\r
<div class="modal fade" id="sitioWebDjango" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"\r
    aria-labelledby="staticBackdropLabel" aria-hidden="true">\r
    <div class="modal-dialog modal-dialog-scrollable">\r
        <div class="modal-content">\r
            <div class="modal-header">\r
                <h5 class="modal-title" id="staticBackdropLabel">Sitio web con Django</h5>\r
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\r
            </div>\r
            <div class="modal-body">\r
                <p>\r
                    Este proyecto, desarrollado después de completar mi máster en Python, destaca por la implementación\r
                    avanzada en Django. Integré un sistema de inicio de sesión, validación de formularios para el\r
                    registro\r
                    de productos, y un potente buscador. Además, para la interfaz de usuario, incorporé AdminLTE,\r
                    proporcionando una experiencia más robusta. La base de datos utilizada fue MySQL, aprovechando las\r
                    capacidades de Django para una gestión eficiente de datos. Este proyecto refleja la aplicación\r
                    práctica\r
                    de los conocimientos adquiridos durante el máster en un entorno Django.\r
                </p>\r
            </div>\r
            <div class="modal-footer">\r
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>\r
                <a class="btn btn-primary" href="https://github.com/santiagoeor/AdminLTE_Django"\r
                    target="_blank">GitHub</a>\r
            </div>\r
        </div>\r
    </div>\r
</div>\r
\r
<!-- Modal de Crud en go -->\r
<div class="modal fade" id="crudEnGo" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"\r
    aria-labelledby="staticBackdropLabel" aria-hidden="true">\r
    <div class="modal-dialog modal-dialog-scrollable">\r
        <div class="modal-content">\r
            <div class="modal-header">\r
                <h5 class="modal-title" id="staticBackdropLabel">Crud en go</h5>\r
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\r
            </div>\r
            <div class="modal-body">\r
                <p>\r
                    Realicé un proyecto pequeño para familiarizarme con Go y su aplicación en el desarrollo web.\r
                    Implementé\r
                    un sistema CRUD utilizando MySQL como base de datos, explorando las capacidades de Go en este\r
                    contexto.\r
                    Esta experiencia me brindó una visión práctica de cómo Go se integra en el desarrollo de\r
                    aplicaciones\r
                    web y cómo se puede utilizar eficientemente en proyectos de gestión de datos.\r
                </p>\r
            </div>\r
            <div class="modal-footer">\r
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>\r
                <a class="btn btn-primary" href="https://github.com/santiagoeor/crud_en_Go" target="_blank">GitHub</a>\r
            </div>\r
        </div>\r
    </div>\r
</div>\r
\r
<!-- Modal de Api Rest con go y docker -->\r
<div class="modal fade" id="ApiConGoDocker" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"\r
    aria-labelledby="staticBackdropLabel" aria-hidden="true">\r
    <div class="modal-dialog modal-dialog-scrollable">\r
        <div class="modal-content">\r
            <div class="modal-header">\r
                <h5 class="modal-title" id="staticBackdropLabel">Api Rest con go y docker</h5>\r
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\r
            </div>\r
            <div class="modal-body">\r
                <p>\r
                    En este proyecto, diseñé una API donde adquirí habilidades clave en el manejo de solicitudes GET y\r
                    POST\r
                    para gestionar información de manera efectiva. Para garantizar un entorno consistente y eficiente,\r
                    implementé Docker, que facilitó la gestión de la base de datos PostgreSQL. Este proyecto no solo\r
                    demostró la aplicación práctica de operaciones API esenciales, sino también la capacidad de integrar\r
                    tecnologías como Docker para mejorar la eficiencia y la portabilidad del entorno de desarrollo.\r
                </p>\r
            </div>\r
            <div class="modal-footer">\r
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>\r
                <a class="btn btn-primary" href="https://github.com/santiagoeor/Api-enGo" target="_blank">GitHub</a>\r
            </div>\r
        </div>\r
    </div>\r
</div>\r
\r
<!-- Modal de Api pendientes en Laravel -->\r
<div class="modal fade" id="ApiPendienteLaravel" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"\r
    aria-labelledby="staticBackdropLabel" aria-hidden="true">\r
    <div class="modal-dialog modal-dialog-scrollable">\r
        <div class="modal-content">\r
            <div class="modal-header">\r
                <h5 class="modal-title" id="staticBackdropLabel">Api Rest Laravel De Pendientes</h5>\r
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\r
            </div>\r
            <div class="modal-body">\r
                <p>\r
                    Durante este proyecto, exploré a fondo la creación de una API en Laravel, abordando aspectos clave\r
                    como\r
                    migraciones para definir esquemas de bases de datos y establecer relaciones entre tablas. Utilicé\r
                    MySQL\r
                    como base de datos y aprendí a implementar un sistema de autenticación basado en JWT para la\r
                    seguridad\r
                    de inicio de sesión.\r
                </p>\r
\r
                <p>\r
                    Creé modelos y controladores que permiten realizar operaciones CRUD (Crear, Leer, Actualizar,\r
                    Eliminar)\r
                    para usuarios, categorías y pendientes. Además, diseñé endpoints con métodos HTTP (GET, POST, PUT,\r
                    DELETE) para gestionar eficientemente la información a través de la API.\r
                </p>\r
\r
                <p>\r
                    Este proyecto destacó la aplicación práctica de conceptos avanzados en Laravel y la construcción de\r
                    una\r
                    API robusta y funcional.\r
                </p>\r
            </div>\r
            <div class="modal-footer">\r
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>\r
                <a class="btn btn-primary" href="https://github.com/santiagoeor/Api_pendientes.git"\r
                    target="_blank">GitHub</a>\r
            </div>\r
        </div>\r
    </div>\r
</div>\r
<!-- Modal de Cliente de pendiente en Angular -->\r
<div class="modal fade" id="ClientPendientAngular" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"\r
    aria-labelledby="staticBackdropLabel" aria-hidden="true">\r
    <div class="modal-dialog modal-dialog-scrollable">\r
        <div class="modal-content">\r
            <div class="modal-header">\r
                <h5 class="modal-title" id="staticBackdropLabel">Cliente De Pendientes En Angular</h5>\r
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\r
            </div>\r
            <div class="modal-body">\r
                <p>\r
                    En este proyecto, construí el frontend para interactuar con mi API de pendientes en Laravel mediante\r
                    Angular. Aplicando los conocimientos adquiridos en un curso de Angular, implementé un interceptor\r
                    para\r
                    enviar el token obtenido durante el inicio de sesión al backend. Además, establecí un guardian para\r
                    proteger las rutas y, por defecto, convertí la aplicación en una PWA (Progressive Web App).\r
                </p>\r
\r
                <p>\r
                    Optimicé el rendimiento utilizando Lazy-loading para cargar módulos de usuarios, categorías y\r
                    pendientes\r
                    de manera eficiente. Implementé indicadores de carga (loading) para mejorar la experiencia del\r
                    usuario\r
                    al cargar, crear, editar y eliminar usuarios, categorías y pendientes.\r
                </p>\r
\r
                <p>\r
                    Este proyecto demostró mi capacidad para aplicar prácticas avanzadas en Angular, asegurando un\r
                    consumo\r
                    eficiente de la API desarrollada en Laravel y proporcionando una experiencia de usuario fluida y\r
                    moderna.\r
                </p>\r
            </div>\r
            <div class="modal-footer">\r
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>\r
                <a class="btn btn-primary" href="https://github.com/santiagoeor/clientPendientes.git"\r
                    target="_blank">GitHub</a>\r
            </div>\r
        </div>\r
    </div>\r
</div>`,d=s=>{(()=>{const n=document.createElement("div");n.innerHTML=t,document.querySelector(s).append(n)})()};d("#app-modal");
