# Shopping Portal Web App

This is a web application that allows users to browse items, add them to their cart, and place orders. The backend of this application provides various endpoints to manage users, items, carts, and orders.

## Endpoints Summary

- `POST /users`: Creates a new user.
- `GET /users`: Lists all users.
- `POST /users/login`: Logs in an existing user based on username and password.
- `http://localhost:3000/api/data/post/product`: Creates an item.
- `GET /items`: Lists all items.
- `POST /carts`: Creates a cart and adds items to it.
- `GET /carts`: Lists all carts.
- `POST /orders`: Converts a cart into an order.
- `GET /orders`: Lists all orders.

Please note that the endpoints marked with an asterisk (*) require the user's token to be present in the request header to identify the user.

## Entities Overview

- **User**: Represents a user of the platform.
- **Item**: Represents an item available for purchase.
- **Cart**: Represents a user's cart containing selected items.
- **Order**: Represents an order placed by a user.

## Screens in React Web App

1. **User Login Screen**: Allows users to enter their username and password to log in. Displays an alert on invalid credentials.
2. ![image](https://github.com/guptasonu14/shopingCart/assets/74126459/3095919b-d408-41c2-badf-e369cc16f5a6)
3. ![image](https://github.com/guptasonu14/shopingCart/assets/74126459/67b28b32-5d05-4c18-956e-810692eb029a)




4. **List Items Screen**: Shows all available items. Clicking on an item adds it to the cart.
   ![image](https://github.com/guptasonu14/shopingCart/assets/74126459/7c8d0c40-f457-47f6-931d-a003cec165d1)


5. **Cart and Order History**: Shows buttons for accessing the cart and order history.
![image](https://github.com/guptasonu14/shopingCart/assets/74126459/c8790d43-6c0e-48b6-825f-d5a4feb1374d)
