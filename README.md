
Developed a Web application which works in conjunction with an authorization, authentication server of Spotify. Includes features like playback, adding playlist, searching Artists and tracks using the Spotify API’s.

In the project directory, you can run:

### `npm i` followed by `npm start`

**VIDEO LINK**

https://www.youtube.com/watch?v=K02PwLkgilY

![ezgif com-gif-maker](https://user-images.githubusercontent.com/36052802/143767062-3516b68a-6920-4d5b-985c-939ebd7bb7ba.gif)





**SCREENSHOTS**

<img width="1438" alt="Screenshot 2021-11-28 at 5 21 03 PM" src="https://user-images.githubusercontent.com/36052802/143766720-25304d0f-fed3-4abd-9fef-fd97b03119a9.png">

<img width="1433" alt="Screenshot 2021-11-28 at 5 21 27 PM" src="https://user-images.githubusercontent.com/36052802/143766727-afec7b15-ca0d-400e-8ede-8b4a81b6a591.png">


<img width="1416" alt="Screenshot 2021-11-28 at 5 24 43 PM" src="https://user-images.githubusercontent.com/36052802/143766700-b7d22537-e426-4af2-85ef-e3069d6b8d00.png"> <br>

<img width="1440" alt="Screenshot 2021-11-28 at 5 21 42 PM" src="https://user-images.githubusercontent.com/36052802/143766731-cdfd4a56-689a-4a4c-81c9-fb65b17f1769.png">



<img width="1439" alt="Screenshot 2021-11-28 at 5 22 05 PM" src="https://user-images.githubusercontent.com/36052802/143766734-df5d2a72-464a-45bc-b035-ebeaa195d7fc.png">


<img width="1436" alt="Screenshot 2021-11-28 at 5 22 23 PM" src="https://user-images.githubusercontent.com/36052802/143766745-ba4ad256-7500-4c1b-8d79-35948146cd0b.png">

<img width="1424" alt="Screenshot 2021-11-28 at 5 24 20 PM" src="https://user-images.githubusercontent.com/36052802/143766750-a12137cd-73a9-4306-8cac-69608d2d7e0d.png">


<img width="1416" alt="Screenshot 2021-11-28 at 5 24 43 PM" src="https://user-images.githubusercontent.com/36052802/143766764-2839a6e6-e609-4339-9f8e-72921945181c.png">

<img width="1440" alt="Screenshot 2021-11-28 at 5 24 54 PM" src="https://user-images.githubusercontent.com/36052802/143766867-3479ef84-92a2-415d-baac-f60d1a3cf0bc.png">










### For Running Testcases you can run
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
