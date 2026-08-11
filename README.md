# 🐾 Pok-dex-definitivo

Aplicación web de una **Pokédex** desarrollada con React y conectada a la **PokeAPI**. El proyecto permite explorar Pokémon, buscarlos, consultar información detallada y guardar Pokémon favoritos.

## 🚀 Funcionalidades

* 📋 Catálogo de Pokémon.
* 🔎 Búsqueda por nombre.
* 📄 Paginación de 20 Pokémon por página.
* ⬅️ Botón para regresar a la página anterior.
* ➡️ Botón para avanzar a la siguiente página.
* ❤️ Sistema de favoritos.
* 📖 Página con información detallada de cada Pokémon.
* 🎨 Colores dinámicos según el tipo de Pokémon.
* 🧭 Navegación entre páginas con React Router.
* ⏳ Indicador de carga mientras se obtienen los datos de la API.

## 🛠️ Tecnologías utilizadas

* **React**
* **JavaScript**
* **Axios**
* **React Router**
* **React Bootstrap**
* **Context API**
* **PokeAPI**
* **Vite**

## 📂 Estructura principal

```text
src/
│
├── Componentes/
│   ├── CardPokemon.jsx
│   └── NavMenu.jsx
│
├── Peges/
│   ├── Home.jsx
│   ├── Personajes.jsx
│   ├── Favorito.jsx
│   └── PokemonContext.jsx
│
├── api.js
├── App.jsx
├── DetallePokemon.jsx
├── App.css
└── index.css
```

## 🧠 Conceptos de React utilizados

Este proyecto fue desarrollado para practicar diferentes conceptos importantes de React:

* `useState`
* `useEffect`
* `useContext`
* `Context API`
* Componentes reutilizables
* Props
* Renderizado de listas con `map()`
* Renderizado condicional
* Eventos como `onClick` y `onChange`
* React Router
* Peticiones HTTP con Axios
* Funciones asíncronas con `async/await`
* `Promise.all()`
* Paginación
* Filtrado de información

## 🌐 API

Los datos de los Pokémon se obtienen mediante **PokeAPI**:

[PokeAPI](https://pokeapi.co/?utm_source=chatgpt.com)

El proyecto utiliza principalmente los endpoints de Pokémon para obtener:

* Nombre
* ID
* Tipos
* Imagen
* Altura
* Peso
* Experiencia
* Habilidades
* Estadísticas

## ⚙️ Instalación

Clona el repositorio:

```bash
git clone URL_DE_TU_REPOSITORIO
```

Entra a la carpeta:

```bash
cd Pok-dex-definitivo
```

Instala las dependencias:

```bash
npm install
```

Inicia el proyecto:

```bash
npm run dev
```

Después abre la dirección que proporciona Vite en la terminal.

## 📸 Funcionalidades principales

### inicio


![alt text](<Captura desde 2026-08-11 10-29-39.png>)


### Catálogo

Permite visualizar los Pokémon organizados en tarjetas y navegar utilizando la paginación.
![alt text](<Captura desde 2026-08-11 10-29-13.png>)




### Detalles

Cada Pokémon tiene una página propia donde se muestran características como:

* Tipo
* Altura
* Peso
* HP
* Velocidad
* Experiencia
* Habilidad
* Estadísticas
![alt text](<Captura desde 2026-08-11 10-30-25.png>)
### Favoritos

El usuario puede marcar un Pokémon como favorito y posteriormente visualizarlo desde la sección **Favoritos**.
![alt text](<Captura desde 2026-08-11 10-29-53.png>)

## 🎯 Objetivo del proyecto

El objetivo principal de este proyecto es practicar el desarrollo de aplicaciones web utilizando React, especialmente el manejo de estados, Context API, consumo de APIs, navegación y creación de componentes reutilizables.

