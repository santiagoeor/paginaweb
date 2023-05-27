(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const e of a)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function d(a){const e={};return a.integrity&&(e.integrity=a.integrity),a.referrerpolicy&&(e.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?e.credentials="include":a.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(a){if(a.ep)return;a.ep=!0;const e=d(a);fetch(a.href,e)}})();const o=`<!-- Modal de Almacen Virtual -->\r
<div class="modal fade" id="almacenVirtual" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"\r
    aria-labelledby="staticBackdropLabel" aria-hidden="true">\r
    <div class="modal-dialog modal-dialog-scrollable">\r
        <div class="modal-content">\r
            <div class="modal-header">\r
                <h5 class="modal-title" id="staticBackdropLabel">Almacen Virtual</h5>\r
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\r
            </div>\r
            <div class="modal-body">\r
                Fue mi primer proyecto con un grupo de amigos, en el cual \r
                desarrollamos un almacen virtual, para vender productos y se realizado\r
                con html, css js, pero luego se cambio la extención html por la de php,\r
                para solucionar unos problemas a la hora de cambiar de una paagina a otra.\r
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
                Este proyecto lo realize en compañia de una amiga, se trata de un sitio web \r
                para asesorar a personas que quieran tener su sitio web para empresa o personal.\r
                se utilizo php, bosstrarp, css y JavaScript\r
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
                Proyecto para asesorar a personas o crearles su sitio web, este proyecto lo\r
                realiza con unos amigos y compañeros de estudio, donde aprendi a manejar git y\r
                github, para poder trabajar varias personas en un mismo proyecto, se aprendio,\r
                conceptos de wiframings, como hacer responsive disabe con ayuda de boostrarp.\r
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
                Este proyecto lo realize con unos compañeros de clase, el cuál se trata de una tienda para vender\r
                bicicletas, se muestran las bicicletas el detalle, y si inicia sesión, va a poder ver regsitro de\r
                ventas, va a poder crear, editar, actualizar y eliminar productos.\r
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
                Es un proyecto para mostrar subastas en la pagina principal, y ver el detalle de cada una de ellas, si\r
                inicia sesión podrá registrar las subastas, editar y eliminar, pa este proyecto se utilizo Php,\r
                AdminLTE, Html, CSS, JavaScript, JQuery, y MySQL. y GitLab.\r
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
                este proyecto registra las asistencias de personas y la envía a una base de datos, y incluye un Login,\r
                este proyecto fue hecho en PHP, MySQL, Html, Css y JavaScript, y AdminLTE\r
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
                Este sistema le permite al usuario registrar productos, los vendedores y administradores, clientes, va a\r
                poder llevar el stock de los productos, tiene un sistema de roles de usuarios, reportes en Excel y pdf,\r
                de las ventas que se han realizado. se esta desarrollando en PHP, AdminLTE, JQuery y Mysql.\r
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
                Un proyecto sencillo, para entender las bases, donde aprendi a utilizar los controllers,\r
                las migraciones a la base de datos, el archivo de rutas web, y el manejo de vistas para\r
                interatuar con el crud, tambien integre boostrarp con ayuda de vite.\r
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
                Este proyecto aplique los conocimientos que aquiri el master de Python, donde\r
                utilizando Django le integre un inicio de sesion, validar el formulario de\r
                registrar productos, le integre un buscador, y tambienAdmidLTE para la parte \r
                del usuario, la base de datos que utilize fue la de mysql.\r
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
                Este fue un proyecto pequeño para ver como funcionaba go y la web,\r
                utilize como base de datos mysql.\r
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
                Aqui desarrolle una Api donde se aprendio sobre get, post, para el manejo de la\r
                información, y utilize docker, para manejar la base de datos que es PosgretSql.\r
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
                Aqui desarrolle una Api donde aprendi a utilizar las migraciones en laravel relaciones de tablas,\r
                utilize base de datos Mysql, aprendi ha hacer un login y que devuelve un token JWT, cree los modelos y controladores,\r
                para crear, editar, actualizar y eliminar usuarios, lo mismo hice pa las categorias y pendientes, aprendi a crear los \r
                <b>Endpoints</b> con los metodos http, get, post, put, delete.\r
            </div>\r
            <div class="modal-footer">\r
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>\r
                <a class="btn btn-primary" href="https://github.com/santiagoeor/Api_pendientes.git" target="_blank">GitHub</a>\r
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
                Aqui desarrolle el fontend para consumir mi Api de pendientes en laravel utilizando angular,\r
                donde pude poner en practica los conocimientos aquiridos en el curso de Angular, utilize \r
                un interceptor para enviar el token que me da el backend al hacer el login, cree un guardian para \r
                proteger las rutas, y tambien agregue por defecto que fuera una <b>PWA</b>, utilizo Lazy-loading para \r
                cargar los modulos de users, categorias y pendientes. también utilize loading a la hora de cargar listado,\r
                crearlos, editarlos y eliminarlos los usuarios, categorias y pendientes.\r
            </div>\r
            <div class="modal-footer">\r
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>\r
                <a class="btn btn-primary" href="https://github.com/santiagoeor/clientPendientes.git" target="_blank">GitHub</a>\r
            </div>\r
        </div>\r
    </div>\r
</div>`,l=t=>{(()=>{const s=document.createElement("div");s.innerHTML=o,document.querySelector(t).append(s)})()};l("#app-modal");
