
Developed a Web application which works in conjunction with an authorization, authentication server of Spotify. Includes features like playback, adding playlist, searching Artists and tracks using the Spotify API’s.

In the project directory, you can run:

### `npm i` followed by `npm start`

**VIDEO LINK**<img width="1416" alt="Screenshot 2021-11-28 at 5 24 43 PM" src="https://user-images.githubusercontent.com/36052802/143766700-b7d22537-e426-4af2-85ef-e3069d6b8d00.png">

https://www.youtube.com/watch?v=K02PwLkgilY

**SCREENSHOTS**<img width="1438" alt="Screenshot 2021-11-28 at 5 21 03 PM" src="https://user-images.githubusercontent.com/36052802/143766686-cd4dea07-7052-4213-9ee9-33deb174af10.png">

<img width="1433" alt="Screenshot 2021-11-28 at 5 21 27 PM" src="https://user-images.githubusercontent.com/36052802/143766687-5c93f58b-77a2-43bd-8a47-0eeb9825c4ea.png">
<img width="1439" alt="Screenshot 2021-11-28 at 5 22 05 PM" src="https://user-images.githubusercontent.com/36052802/143766692-4fd5bc6f-5a1e-4298-b706-215c47dfba77.png">

<img width="1440" alt="Screenshot 2021-11-28 at 5 21 42 PM" src="https://user-images.githubusercontent.com/36052802/143766690-b5add884-8796-4ee1-92b1-74d0382c256f.png">


<img width="1436" alt="Screenshot 2021-11-28 at 5 22 23 PM" src="https://user-images.githubusercontent.com/36052802/143766697-36924f40-d498-4ee3-b33e-509e2e6d5454.png">


<img width="1424" alt="Screenshot 2021-11-28 at 5 24 20 PM" src="https://user-images.githubusercontent.com/36052802/143766698-8f3edf70-35ad-4a49-a149-29a55cf086d1.png">


### For Running Testcases you can run<img width="1440" alt="Screenshot 2021-11-28 at 5 24 54 PM" src="https://user-images.githubusercontent.com/36052802/143766703-8e7cc530-1fb7-4ea8-be17-bfb11374c1bb.png">

`npm run test`

### For dev builds you can run
`npm run build`

### For staging builds you can run
`npm run build:staging`

### For production builds you can run
`npm run build:production`

## Project directory structure

### `src/assets`
Contains images and icons

### `src/enums/`

Contains all enumerators used in the application

### `src/interceptor/`

Contains `axiosInterceptor` for API requests and responses.

### `src/models/`

Contains all the models with the backend alias used in the application.

### `src/routes/`

Contains all the Application routes and API endpoints.

### `src/services/`

Contains all the services which in-turn has the corresponding API calls.

### `src/shared/components/`

Contains Reusable/shared components (Eg: `InputField`, `DropdownField`)

### `src/shared/utils/`

Contains helper methods like `jsonToFormDataConverter` and `createReducer`

### `src/shared/validation/`

Contains generic utilities for Yup Validations.

### `src/store/actions/`
Contains all action dispatchers to reducers.

### `src/store/containers/`
Contains all container files which maps the store props and action dispatchers to application components.

### `src/store/definitions/`
Contains all action definition constants

### `src/store/reducers/`
Contains all reducers which mutates the properties of application store. The `appReducer` combines all the other reducers and passed to the root component

### `src/styles/`
Contains reusable styles and variables used across the application

### `src/views/`
Contains presentational components. Each component has its own `.tsx` and `.scss` files
