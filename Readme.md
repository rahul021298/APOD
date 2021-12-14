APOD (Astronomy Picture of the day) is an application that renders gathers the image and relevant data from the NASA-APOD API. The application sets forths all the data from the API and segregates it within each UI element; With this rudiment, the application creates a dynamic component for the application. The application interacts with the database to gather the data for a specific date, and when not found processes an API call to retrieve the data and then concurrently store it to the DB and display it to the UI.

The crux of application:
	1. A capable application ensuring frugal data management from the database and an external API.
	2. Autonomously built using NodeJS technology to handle request-response lifecycle.
	3. Interrelating the data from MongoDB Atlas.