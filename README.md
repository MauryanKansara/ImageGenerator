# ImageGenerator
This is a React + Django Image Generator project which uses OpenAI's API to generate 3 images based on user's prompt and displays them to the frontend. It uses React, Tailwind CSS in frontend and Django, Django Rest Framework, OpenAI Dall-E API, Django Cors Headers in backend.
## Setup

### Frontend
```
cd frontend
npm install
npm run dev
```
### Backend
Create a ```.env``` file in the root of ```backend``` folder with ```API_KEY``` variable and add your Dall-E API key there.
```
cd backend
pip install -r requirements.txt
python manage.py runserver
```


**_NOTE:_** Make sure to start both servers ( backend & frontend ) before running the project otherwise it will give errors.
