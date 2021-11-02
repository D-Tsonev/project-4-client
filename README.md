### ![GA](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png) General Assembly, Software Engineering Immersive

# Music Makers - A Django & React App

<img src= './src/assest/demo.gif'  />

## Overview
This project has been developed during General Assembly course, with the goal of design a full-stack a Django, PostgresSQL app using over 10 days time.


Our app pairs students from leading conservatoires and music degrees with aspiring young musicians from low-income families, offering kids free musictuition.

## Members 

- Drew Lamph - [GitHub](https://github.com/dlamph)

- Dimitar Tsonev - [GitHub](https://github.com/D-Tsonev)

## Deployment

- Please follow the [link](https://music-makers.netlify.app/) to visit the App deployed with Netlify and Heroku and Atlas.

- Feel free to register your account, or you can use a student account - we created for testing purposes.

- Username: `tinaford@mail.com`

- Password: `tinaford@mail.com`

- [Repository link Client](https://github.com/D-Tsonev/project-4-client)

- [Repository link Server](https://github.com/D-Tsonev/project-4-server)

## The Brief 

- To build a full-stack application, making our own back end and front end
- Use a Python Django API, using Django REST Framework to serve our data from a PostgresSQL database.
- Consume our API with a separate frontend built with React.
- Build a complete product, which most likely means multiple relationships and CRUD functionality for at least a couple of models.

## Technologies Used
* **Database**:
  * PostgresSQL
* **Backend**:
  * Python
  * Django
* **Frontend**:
  * JavaScript (ES6)
  * React.js
  * HTML5
  * CSS3 + SASS
  * Bulma
* **Dependencies**:
  * djangorestframework
  * djangorestframework-camel-case
  * pyjwt
  * python-dotenv
  * psycopg2-binary
  * Axios
  * react-router-dom
  * JSONWebToken
* **Development Tools**:
  * VS Code
  * Git + GitHub
  * TablePlus
  * pylint
  * Excalidraw - White boarding
  * Zoom

## Installation Instructions

1. Clone repo code from GitHub onto your machine.
2. Run `pipenv install` in the root directory to install all packages from Pipfile.
3. Run `pipenv shell` in the root directory to spawn a shell within the virtual environment.
4. Use `python manage.py runserver` to start the backend server in the root driectory.
5. Open a second terminal and `cd client`.
6. Use `yarn` or `npm` in your client directory to install all dependencies from the `package.json` file.
7. Start server: <code>yarn start</code>/<code>npm start</code>.

## General Approach & Planning

Having learnt from a past pair project, we spent a good amount of time planning our application, establishing what relationships would be needed, the user journey and how our ideals for the 'look and feel' of the website. We established our relationships on an ERD Diagram you can see below.

<img src= './src/assest/ERD_Diagram.png'  />


## Whiteboarding 

<img src= './src/assest/excalidraw_project4.png'  />


After only one week of Python and Django tuition under our belt, we decided to set ourselves a challenging project. We planned for complex functionality, including social aspects of reviews and messaging between users.

# Backend


We started by creating our models for our users,instruments, messages and reviews. Once we had them all completed we could then establish the relationships through foreign keys. Below is an example of our review model.

```js 

class Review(models.Model):
    content = models.TextField(max_length=500)
    created_at = models.DateTimeField(auto_now_add=True)
    rating = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)])
    user = models.ForeignKey(
    'jwt_auth.User',
    related_name='reviews_received',
    on_delete=models.CASCADE
    )
    owner = models.ForeignKey(
    'jwt_auth.User',
    related_name='reviews_posted',
    on_delete=models.CASCADE
    )

    def __str__(self):
        return f'Comment {self.id} on {self.user}'

```

We then carefully worked through the serializers to ensure they were all correct and populated with the correct relationships before moving onto authentication to restrict certain permissions if you were not a logged in user. For example, below is a code snippet showing how we were able to show all reviews and how a new review could be created with permission_classes in place.


```js 
class ReviewListView(APIView):

    permission_classes = (IsAuthenticated, )

    def get(self, _request):
        reviews = Review.objects.all()
        serialized_reviews = PopulatedReviewSerializer(reviews, many=True)
        return Response(serialized_reviews.data, status.HTTP_200_OK)

    def post(self, request, user_pk):
        request.data[''] = user_pk
        request.data['owner'] = request.user.id
        serialized_review = ReviewSerializer(data=request.data)
        if serialized_review.is_valid():
            serialized_review.save()
            return Response(serialized_review.data, status=status.HTTP_201_CREATED)
        return Response(serialized_review.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
```

We seeded our data with all instruments and different users creating their profile information on Django admin.

<img src= './src/assest/django.png'  />

After seeding our data, I then converted to JSON and re-seeded into the working backend.
I also checked that the database was set up and seeded correctly with TablePlus.

<img src= './src/assest/tablePlus.png'  />

After 3 days and once all of the backend was tested, with our seeded data in place, we moved onto the React frontend.I took on responsibility for the login and register page, together with the user profile page including displaying reviews which you can see below in the screen shots.
















