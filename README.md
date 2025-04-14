# mongoose-crud-ez
> Effortless CRUD route generator for Mongoose models in Express.js 🧠
---
## ✨ Features
- 🔄 Auto-generates full CRUD (Create, Read, Update, Delete) routes
- ⚙️ Optional middleware support per route
- 🔍 Built-in pagination & query filtering
- 🚀 Easy setup for rapid prototyping
---
## 📦 Installation
```bash
npm install mongoose-crud-ez
# or
yarn add mongoose-crud-ez
```
---
## 🧰 Requirements
- Node.js >= 14
- Express.js
- Mongoose (MongoDB ODM)
---
## 🚀 Quick Start
```js
// app.js
const express = require('express');
const mongoose = require('mongoose');
const createCrudRouter = require('mongoose-crud-ez');
const app = express();
app.use(express.json());
// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/test-crud-ez');
// Define Mongoose Model
const BookSchema = new mongoose.Schema({
  title: String,
  author: String,
});
const Book = mongoose.model('Book', BookSchema);
// Generate CRUD routes
app.use('/books', createCrudRouter(Book));
app.listen(4000, () => {
  console.log('Server running at http://localhost:4000/books');
});
```
---
## 📚 Routes Generated
| Method | Route             | Description          |
|--------|------------------|----------------------|
| GET    | `/books`         | List all books       |
| GET    | `/books/:id`     | Get book by ID       |
| POST   | `/books`         | Create new book      |
| PUT    | `/books/:id`     | Update book by ID    |
| DELETE | `/books/:id`     | Delete book by ID    |
---
## ⚙️ Pagination & Filtering
Built into the `GET /books` route:
### Example Request:
```
GET /books?author=John&page=2&limit=5
```
### Example Response:
```json
{
  "data": [...],
  "total": 23,
  "page": 2,
  "limit": 5,
  "totalPages": 5
}
```
- Supports `?page=`, `?limit=`, and field filters like `?author=...`
---
## 🧪 Testing Locally
1. Run MongoDB on default port.
2. Create a simple Express app using the above example.
3. Use tools like:
   - Postman
   - Hoppscotch: https://hoppscotch.io
   - curl
### Example:
```bash
curl -X POST http://localhost:4000/books \
-H "Content-Type: application/json" \
-d '{"title": "Atomic Habits", "author": "James Clear"}'
```
---
## 🛠️ Advanced Usage
### Custom Middlewares
You can apply route-specific middlewares:
```js
const router = createCrudRouter(Book, {
  middlewares: {
    create: [authMiddleware],
    getAll: [],
    getOne: [authMiddleware],
    update: [authMiddleware],
    delete: [authMiddleware]
  }
});
```
## 🗃️ License
MIT © [Chaitanya Agarkar](https://github.com/chaieeetanya433)
---
## 💬 Feedback
Feel free to open issues or contribute. PRs are welcome!
