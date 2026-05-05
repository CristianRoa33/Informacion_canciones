# 🎵 RadioRating

Aplicación web desarrollada por aprendices del **SENA** para conocer el rating de canciones y artistas más escuchados durante el semestre. Permite registrar los gustos musicales de 6 personas y realizar una rifa entre los encuestados.

---

## 📋 Descripción

Una emisora con presencia en diferentes ciudades necesita conocer cuáles son las canciones y cantantes más sonados del semestre. RadioRating es la solución que permite recolectar, visualizar y analizar esta información de forma sencilla.

---

## ✨ Funcionalidades

- **Agregar persona** — Registro de hasta 6 personas con sus datos personales y hasta 3 canciones favoritas
- **Ver todos** — Visualización de todos los encuestados en tarjetas
- **Buscar por posición** — Consulta de una persona específica por su número de registro
- **Ganador rifa** — Selección aleatoria del ganador entre los 6 encuestados

---

## 📁 Estructura del proyecto

```
radiorating/
│
├── index.html       # Estructura principal de la aplicación
├── styles.css       # Estilos y diseño visual
└── app.js           # Lógica de la aplicación
```

---

## 📝 Datos que se registran

**Datos personales:**
- Nombre completo
- Número de identificación (cédula)
- Fecha de nacimiento
- Correo electrónico
- Ciudad de residencia
- Ciudad de origen

**Canciones favoritas (hasta 3):**
- Artista
- Título de la canción
- Género musical

---

## 🚀 Cómo usar

1. Clona o descarga el repositorio
2. Abre `index.html` con **Live Server** en VSCode
3. Registra hasta 6 personas desde el menú **Agregar persona**
4. Consulta los registros en **Ver todos**
5. Busca una persona específica en **Buscar por posición**
6. Conoce el ganador de la rifa en **Ganador rifa**

---

## 🛠️ Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| HTML5 | Estructura de la aplicación |
| CSS3 | Estilos y diseño responsivo |
| JavaScript | Lógica y manipulación del DOM |

---

## 💡 Conceptos aplicados

- Arreglo de objetos para almacenamiento de datos
- Manipulación del DOM con `document.getElementById`
- Renderizado dinámico de tarjetas con `innerHTML`
- Navegación entre secciones sin recarga de página
- Selección aleatoria con `Math.random()`
- Validación de formularios
- CSS Grid para layout responsivo
- Variables CSS con `clamp()` para tipografía responsiva

---

## 👨‍💻 Autor

Proyecto desarrollado como solución a un caso práctico del **SENA**.

---

## 📌 Notas

> Los datos se almacenan en memoria del navegador. Al recargar la página los registros se pierden.