## Website Name: Luxury Car

## Website Live Link:(https://luxury-car-4f537.web.app/)

## Project Features

### 1. Routing

- Using React Router for handling navigation and rendering different components based on the URL path.
- Defined various routes, including the home page, product details, adding a product, the shopping cart, login, sign-up, and update product details.
- Also implemented a PrivateRoute to protect certain routes, ensuring that only authenticated users can access them.

### 2. Authentication

- Using Firebase for authentication and Firebase's auth module to manage user authentication.

### 3. User Login

- Users can enter their email and password or sign in using Google.
- Password visibility can be toggled with an eye icon.
- If the login is successful, the user is redirected to the home page. If it fails, an error message is displayed using the toast library.

### 4. User Registration

- The SignUp is used for user registration. Users can enter their name, email, password, and optionally a photo URL.
- Users need to accept terms and conditions before registering.
- Password validation checks are performed, and error messages are displayed for any issues.
- If registration is successful, the user is redirected to the home page. If it fails, an error message is displayed using the toast library.

### 5. Add Product Feature

- Users can add products with details such as name, brand name, type, rating, price, photo URL, and product description. When a product is added, a POST request is made to the server to store the product data.

### 6. Error Page Feature

- Displayed when users encounter unexpected errors or navigate to non-existent pages.
- Provides a user-friendly error message and often includes a link to return to the home page.

### 7. Brands Selection Feature

- Displays a list of brand names. Clicking on a brand name redirects the user to a page where products of that brand are displayed.

### 8. Add to Cart Feature

- Users can add products to their cart from the product details page. When a product is added to the cart, a POST request is made to the server to store the cart data. The "Add to Cart" button is implemented with an icon (shopping cart).

### 9. View Cart Feature

- Users can view the products in their cart. There's an option to delete products from the cart.

### 10. Update Product Feature

- Users can update the details of a product. This component allows users to edit and submit changes to the product details, including name, brand name, type, rating, price, photo URL, and product description.

### 10. Private Route Handling

- Protect routes that require authentication. If a user is not authenticated, they are redirected to the login page. The component checks the user's authentication status.

### 10. Responsive Design

- Our project's design is responsive, adapting to different screen sizes ( desktop, tablet and mobile).
- Ensures a consistent and user-friendly experience across devices.
