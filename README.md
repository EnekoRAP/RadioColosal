# Colosal 88.3 🎧📻🎶📡

This project is a desktop application developed in Node.js, using Swing for the graphical interface, and connected to an MongoDB database. The application allows you to perform CRUD (Create, Read, Update, Delete) operations in various collections of a Costa Rican radio station system, such as announcers, programming, advertising, news, events, listeners, comments, multimedia, clients, and rates.

## Requirements 📋🧰

- 🍃 MongoDB Compass (v8.0.6 current)
- 🐚 MongoDB Shell (v2.5.0 optional)
- 📜 MongoDB Script: `ColosalBD`
- 🟢 Node.js (v22.14.0 LTS or equivalent)

## Configuration ⚙️🛠️

### Step 1: Create a new database with the same name as the script in MongoDB Compass 🏗️🧱

### Step 2: Create all the collections that come within the script 📂📁

```bash
db.createCollection("Locutores");
db.createCollection("Programacion");
db.createCollection("Publicidad");
db.createCollection("Noticias");
db.createCollection("Eventos");
db.createCollection("Oyentes");
db.createCollection("Comentarios");
db.createCollection("Multimedios");
db.createCollection("Clientes");
db.createCollection("Tarifas");
  ```

### Step 3: Open VS Code and install all the application dependencies 💻📦

```bash
npm init -y
npm install apexcharts@^3.37.0 bootstrap@^5.3.0 ejs@^3.1.10 express@^4.21.1 jquery@^3.6.3 method-override@^3.0.0 mongoose@^8.8.3
npm install --save-dev nodemon@^3.1.7 sass@^1.54.8
  ```

### Step 4: Open VS Code and install all the application dependencies 🔁📦

```bash
npm init -y
npm install apexcharts@^3.37.0 bootstrap@^5.3.0 ejs@^3.1.10 express@^4.21.1 jquery@^3.6.3 method-override@^3.0.0 mongoose@^8.8.3
npm install --save-dev nodemon@^3.1.7 sass@^1.54.8
  ```
### Step 5: Run the application ▶️🚀

```bash
npm run dev
  ```

### Step 6: Access the application in the browser with the URL 🌐🔗

```bash
http://localhost:${PORT}
  ```

## Features ✨🧩

- 🎤 **Registered Speakers**
- 🗓️ **Programming List**
- 📺 **Advertising Programming**
- 📰 **News Programming**
- 🎉 **Event Programming**
- 👂 **Registered Listeners**
- 💬 **Comment Box**
- 🎞️ **Multimedia Programming**
- 🧾 **Registered Customers**
- 💰 **Available Rates**

## Technologies Used 🛠️💡

- 📊 **ApexCharts:** A modern charting library used to create interactive and customizable data visualizations in the browser.
- 🎨 **Bootstrap:** A responsive front-end framework used for designing and customizing modern web interfaces quickly and easily.
- 🧩 **EJS:** A templating engine that allows embedding JavaScript code into HTML pages for dynamic content rendering.
- 🚀 **Express:** A minimal and flexible Node.js web framework used to build web applications and RESTful APIs efficiently.
- 🧠 **JQuery:** A lightweight JavaScript library used to simplify DOM manipulation, event handling, and AJAX requests.
- 📝 **Method-Override:** A middleware that enables the use of HTTP verbs like PUT and DELETE in environments that only support GET and POST.
- 🗄️ **Mongoose:** An ODM (Object Data Modeling) library for MongoDB that simplifies data modeling and interaction with the database.
- 🔁 **Nodemon:** A development tool that automatically restarts the Node.js application when file changes are detected.
- 🎨 **SCSS:** A CSS preprocessor that adds features like variables, nesting, and mixins for writing cleaner and more maintainable stylesheets.

>[!NOTE]
>**Project Members** 🧑🏻‍💻👥
>- Roger Fernando Pereira Sánchez <br>
>- Cristopher Rodríguez Fernández <br>
>- Brenda Karina Rojas Cortés <br>
>- Melani Tamar Vargas Arrieta <br>
***
