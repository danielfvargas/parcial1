# Parcial 1 - Programación con Tecnologías Web

**Entregado por:** Daniel Felipe Vargas - 202216034

## Paso a paso para la ejecución del parcial

### 1. Clonar el repositorio
git clone https://github.com/danielfvargas/parcial1

cd parcial1

### 2. Instalar dependencias
npm install

### Ejecutar la aplicación
npm start

Esto abrirá el proyecto en el navegador en http://localhost:3000/

## Reporte de decisiones y proceso de desarrollo

__1. Estructura del proyecto__

* Se dividió en diferentes componentes funcionales (LoginPage.js, Home.js, Menu.js, Store.js).
* Se utilizó react-router-dom para manejar la navegación entre las páginas.

__2. Internacionalización:__

* Se implementó react-i18next para permitir cambiar el idioma dinámicamente.
* Se organizaron archivos JSON en public/locales/ con traducciones en inglés, español y portugués.

__3. Diseño y UX:__

* Se ubicaron los botones de cambio de idioma en diferentes páginas siguiendo la lógica de cada vista.
* Se aseguraron diseños adaptables y estilos en CSS (LoginPage.css, Home.css, Menu.css, Store.css).

__4. Funcionalidades Interactivas:__
* __Login:__ Validación de contraseña con longitud de 5 a 8 caracteres.
* __Menú y Tiendas:__ Carruseles de imágenes con botones de navegación (Los carruseles no funcionan porque no tuve tiempo de agregarle las imágenes).
* __Selección de idioma:__ Persistencia del idioma seleccionado en todas las páginas.

## Componentes y elementos pertenecientes al desarrollo de React

### Tecnologías clave
* __React__
* __React Router:__ Para la navegación entre páginas.
* __React Hooks:__ Para manejo de esto e internacionalización.
* __React-i18next:__ Para internacionalización en tres idiomas.
* __CSS personalizado:__ Para los estilos específicos que fueron requeridos para cada una de las vistas.

### Componentes del proyecto:
* __LoginPage.js:__ Página de inicio de sesión con validaciones.
* __Home.js:__ Página principal con opciones de navegación.
* __Menu.js:__ Página del menú con carrusel de imágenes.
* __Store.js:__ Página de tiendas con carrusel interactivo.
* __i18n.js:__ Configuración de internacionalización con i18next.
* __index.js:__ Punto de entrada de la aplicación.
