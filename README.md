## nextjs-mongodb-crud

**Descripción del proyecto:**

nextjs-mongodb-crud es una aplicación CRUD (Create, Read, Update, Delete) simple construida con el framework Next.js y la base de datos MongoDB.

**Tecnologías utilizadas:**

* Next.js
* MongoDB

**Pasos para ejecutar el proyecto:**

1. **Clonar el repositorio:**

```bash
git clone https://github.com/your-github-username/nextjs-mongodb-crud.git
```

2. **Instalar dependencias:**

```bash
npm install
```

3. **Configurar la conexión con MongoDB:**

* **Establecer la variable de entorno `MONGODB_URI`:**

   La variable de entorno `MONGODB_URI` debe contener la cadena de conexión a tu base de datos MongoDB. Puedes encontrar más información sobre cómo obtener la cadena de conexión en la documentación de MongoDB: [https://www.mongodb.com/docs/manual/reference/connection-string/index.html](https://www.mongodb.com/docs/manual/reference/connection-string/index.html)

* **Crear un archivo `.env`:**

   Crea un archivo `.env` en la raíz del proyecto e incluye la siguiente línea:

   ```
   MONGODB_URI=tu_cadena_de_conexion_a_mongodb
   ```

* **Alternativamente, puedes configurar la conexión con MongoDB directamente en el código:**

   Si no deseas utilizar variables de entorno, puedes configurar la conexión con MongoDB directamente en el código. Consulta la documentación de Next.js para obtener más información sobre cómo hacerlo: [https://nextjs.org/docs/pages/building-your-application/routing/api-routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes)

4. **Iniciar el servidor de desarrollo:**

```bash
npm run dev
```

**Acceso a la aplicación:**

La aplicación estará disponible en http://localhost:3000

**Características principales:**

* **Creación, lectura, actualización y eliminación de datos**
* **Uso de Next.js para enrutamiento y renderizado de páginas**
* **Uso de MongoDB para almacenar y recuperar datos**
* **Diseño simple y fácil de usar**

**Dependencias:**

* Node.js 16+
* npm
* yarn

**Comandos:**

* `npm install`: Instala las dependencias del proyecto.
* `npm run dev`: Inicia el servidor de desarrollo.

**Recursos adicionales:**

* [Repositorio de GitHub del proyecto](https://github.com/dawri22/nextjs-mongodb-crud.git)
* [Documentación de Next.js](https://nextjs.org/docs)
* [Documentación de MongoDB](https://www.mongodb.com/docs/)

