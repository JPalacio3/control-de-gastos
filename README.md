# Control de Gastos - Tu App Personal de Finanzas

[Visita la aplicación en vivo](https://controlde-gastos.netlify.app/)

Control de Gastos es una aplicación web moderna y atractiva diseñada para ayudarte a gestionar tus finanzas personales de manera eficiente y sencilla. Construida con React, TypeScript y Vite, esta app ofrece una experiencia de usuario fluida y un rendimiento optimizado.

## Características Principales

- **Registro de Gastos:** Añade tus gastos diarios con detalles como la cantidad, categoría y fecha.
- **Categorización Inteligente:** Organiza tus gastos en categorías predefinidas para un análisis más claro.
- **Visualización Clara:** Observa tus gastos a través de gráficos intuitivos y resúmenes fáciles de entender.
- **Presupuesto Personalizado:** Define un presupuesto mensual y realiza un seguimiento de tus gastos para mantenerte dentro de tus límites.
- **Interfaz Intuitiva:** Disfruta de una interfaz de usuario limpia y fácil de usar, diseñada para una experiencia óptima en todos los dispositivos.
- **Acceso desde cualquier lugar:** Disponible en cualquier dispositivo con conexión a internet.

## Tecnologías Utilizadas

- **React:** Biblioteca de JavaScript para construir interfaces de usuario interactivas.
- **TypeScript:** Superscript de JavaScript que añade tipado estático para mejorar la mantenibilidad y reducir errores.
- **Vite:** Herramienta de construcción extremadamente rápida que optimiza el desarrollo y la producción.
- **Tailwind CSS:** Framework de CSS para un diseño rápido y flexible con un enfoque en la utilidad.
- **Context API:** Para la gestión del estado global de la aplicación.
- **react-swipeable-list:** Para realizar acciones de eliminar y actualizar deslizando el dedo.

## Estructura del Proyecto

La estructura del proyecto está organizada para facilitar el desarrollo y la escalabilidad:

### Explicación de las carpetas clave:

- **`components/`**: Contiene todos los componentes de React reutilizables que conforman la interfaz de usuario.
- **`context/`**: Define el contexto de la aplicación, permitiendo la gestión global del estado (en este caso, el presupuesto).
- **`data/`**: Almacena datos estáticos, como las categorías de gastos predefinidas.
- **`hooks/`**: Incluye hooks personalizados para encapsular lógica reutilizable, como el acceso y la modificación del estado del presupuesto.
- **`types/`**: Define los tipos de datos utilizados en la aplicación, proporcionando una mayor seguridad y claridad en el código.

## Funcionalidades Detalladas

1.  **Añadir un Gasto:**

    - El usuario puede ingresar la descripción, cantidad y categoría del gasto.
    - La fecha se registra automáticamente.
    - El gasto se añade a la lista y se actualiza el presupuesto.

2.  **Listar Gastos:**

    - Los gastos se muestran en una lista ordenada por fecha.
    - Cada gasto muestra la descripción, cantidad, categoría y fecha.

3.  **Editar un Gasto:**

    - El usuario puede seleccionar un gasto de la lista para editarlo.
    - Se abre un formulario con los datos del gasto seleccionado.
    - El usuario puede modificar los datos y guardar los cambios.

4.  **Eliminar un Gasto:**

    - El usuario puede deslizar el dedo sobre un gasto para revelar la opción de eliminar.
    - Al confirmar la eliminación, el gasto se elimina de la lista y se actualiza el presupuesto.

5.  **Filtrar Gastos:**

    - El usuario puede filtrar los gastos por categoría o fecha.
    - Los resultados se muestran en la lista de gastos.

6.  **Visualizar Resumen del Presupuesto:**

    - Se muestra el presupuesto total, los gastos totales y el saldo restante.
    - Se puede visualizar un gráfico con la distribución de los gastos por categoría.

## Instalación y Ejecución

Sigue estos pasos para ejecutar el proyecto localmente:

1.  **Clona el repositorio:**

    ```bash
    git clone [URL del repositorio]
    cd control-gastos-context-api
    ```

2.  **Instala las dependencias:**

    ```bash
    npm install
    ```

3.  **Ejecuta el servidor de desarrollo:**

    ```bash
    npm run dev
    ```

4.  **Abre la aplicación en tu navegador:**

    Visita `http://localhost:5173/` en tu navegador.

## Contribución

¡Las contribuciones son bienvenidas! Si encuentras errores o tienes ideas para mejorar la aplicación, no dudes en abrir un "issue" o enviar un "pull request".

## Licencia

Este proyecto está bajo la Licencia [Nombre de la Licencia].

---

¡Gracias por usar Control de Gastos! Esperamos que te sea de gran utilidad para gestionar tus finanzas personales.
