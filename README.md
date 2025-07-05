
# 📚 Library Management Client

This is the frontend for the **Library Management System** built with **React**, **Vite**, **TypeScript**, and **Tailwind CSS**. It allows users to browse, manage, and borrow books from a digital library.

### 🔗 Live Site

➡️ [https://library-management-client.netlify.app](https://library-management-client.netlify.app)

---

## 🚀 Features

- View all books in the library
- Add, edit, and delete books
- Borrow books with quantity and due date
- See borrowing summary and overdue status
- Responsive UI using Tailwind CSS
- API integration using **Redux Toolkit Query**
- Type safety with **TypeScript**
- Form validation using `react-hook-form`

---

## 🛠️ Tech Stack

| Technology       | Description            |
|------------------|------------------------|
| React + Vite     | Frontend Framework     |
| TypeScript       | Type-safe JavaScript   |
| Tailwind CSS     | Utility-first styling  |
| Redux Toolkit    | State & API handling   |
| React Router     | Page navigation        |
| React Hook Form  | Form handling/validation |

---

## 🧪 API Integration

All APIs are powered by the server hosted on:

🛠️ `https://assignment-3-library-management-chi.vercel.app`

### Endpoints Used

- `GET /api/books` – All books
- `GET /api/books/:id` – Single book
- `POST /api/books` – Add book
- `PUT /api/books/:id` – Update book
- `DELETE /api/books/:id` – Delete book
- `POST /api/borrow` – Borrow a book
- `GET /api/borrow` – Borrow summary

---

## 📦 Installation & Development

```bash
git clone [https://github.com/your-username/library-client.git](https://github.com/abusaiyedjoy/Library-Management-Client.git)
cd Library-Management-Client
npm install
npm run dev
````

Make sure the server is also running or deployed for full functionality.

---

## 🙋 Author

Developed by **Abu Saiyed Joy**
*MERN Stack Developer*

---



| Technology       | Description                  |
|------------------|------------------------------|
| Express.js       | Web server framework         |
| MongoDB          | NoSQL Database               |
| Mongoose         | MongoDB ODM                  |
| Zod              | Request validation           |
| TypeScript       | Static typing                |
| Vercel           | Deployment platform          |

---

## 📂 Project Structure

````

server/
├── src/
│   ├── controller/
│   │   ├── Book.Controller.ts
│   │   └── Borrow\.Controller.ts
│   ├── model/
│   │   ├── Book.Model.ts
│   │   └── Borrow\.Model.ts
│   ├── validation/
│   │   └── ZodValidation.ts
│   └── index.ts
├── .env
└── package.json

````

---

## 🧪 API Endpoints

### 📘 Books

- `GET /api/books`
- `GET /api/books/:id`
- `POST /api/books`
- `PUT /api/books/:id`
- `DELETE /api/books/:id`

### 📗 Borrow

- `POST /api/borrow`
- `GET /api/borrow`

---

## 🔐 Environment Variables

Create a `.env` file in the root of the `server/`:

```env
PORT=3000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/library-db
````

---

## 🔧 Development Setup

```bash
git clone https://github.com/your-username/library-server.git
cd server
npm install
npm run dev
```

---

## ⚙️ Deployment

* The server is deployed on **Vercel**:
  ➡️ [https://assignment-3-library-management-chi.vercel.app](https://assignment-3-library-management-chi.vercel.app)

* CORS is configured to allow requests from:

  * `http://localhost:5173`
  * `https://library-management-client.netlify.app`

---

## 🙋 Author

Developed by **Abu Saiyed Joy**
*MERN Stack Developer*
