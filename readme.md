
# Simple CRUD - MaxChat Test


## Installation

#### Konfigurasi DataBase terlebih dahulu:
- Ubah nama .env.example -> .env
- **Ubah value DATABASE_URL sesuai dengan url Postgre Database/Buat terlebih dahulu database.**
**!!! Wajib konfigurasi, database, pastikan tidak ada nama database yang sama, karena berpotensi hilang!**


#### Install package:

```bash
  npm install
```

#### Migration Database:
```bash
  npm run prisma:migrate
```
#### Seed Database:
```bash
  npm run prisma:seed
```

#### Untuk menjalankan server:

```bash
  npm start
```

### - Screenshot terdapat pada folder /screenshot 
## API Reference

#### Dashboard

```http
  GET http://localhost:3000
```

#### Get all items

```http
  GET /api/message?page=1&limit=10&status=delivered&type=text
```

| Query | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `page` | `number` | `page number` |
| `limit` | `number` | `limit data per page` |
| `status` | `string` | `status data: pending, sent, delivered` |
| `type` | `string` | `type data: text, image` |

#### Create item

```http
  POST /api/message
```

| JSON Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `type`      | `string` | **Required**. |
| `from`      | `string` | **Required**. `Phone Number`|
| `text`      | `string` | **Required**. `Message` |
| `status`      | `string` | **Required**. |
| `attacement`      | `string` | `URL string` |
| `meta`      | `string` | JSON String |


#### Get item

```http
  GET /api/message/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Update item

```http
  PUT /api/message/:id
```

| JSON Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `type`      | `string` | **Required**. |
| `from`      | `string` | **Required**. `Phone Number`|
| `text`      | `string` | **Required**. `Message` |
| `status`      | `string` | **Required**. |
| `attacement`      | `string` | `URL string` |
| `meta`      | `string` | JSON String |

#### Delete item

```http
  DELETE /api/message/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |