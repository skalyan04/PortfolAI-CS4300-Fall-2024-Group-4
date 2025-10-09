IMPORTANT NOTE: Always Pull Updates to Local Machine 
From Git BEFORE Starting Your Coding Session

# PortfolAI-CS4300-Fall-2024-Group-4

## How to Run the Application

### Prerequisites
- Python 3.8+ installed

### Setup Instructions

1. **Navigate to the PortfolAI directory:**
   ```bash
   cd PortfolAI-CS4300-Fall-2024-Group-4/portfolai
   ```

2. **Create a virtual environment:**
   ```bash
   python -m venv myenv
   ```
   *Note: This creates a virtual environment named `myenv`*

3. **Activate your virtual environment:**
   ```bash
   source myenv/bin/activate
   ```

4. **Install required dependencies:**
   ```bash
   pip install -r requirements.txt
   ```
   *Note: The requirements.txt contains Django REST Framework and other necessary packages*

5. **Run the Django development server:**
   ```bash
   python manage.py runserver 0.0.0.0:3000
   ```

6. **Access the application:**
   - On DevEdu: Open devedu and go to 'app'
   - On Self Hosted Container: go to http://127.0.0.1:3000/
   - The PortfolAI landing page will be displayed
   
   *Note: Go to portfolai/settings.py and add "app-<your_name>container-20.devedu.io"*

### Additional Notes

- **To deactivate the virtual environment:** Simply run `deactivate` in your terminal
- **Virtual environment location:** The `myenv` folder will be created in the `portfolai/` directory
- **Dependencies:** All required packages are listed in `requirements.txt` and will be installed in the virtual environment

## Project Structure

```
PortfolAI-CS4300-Fall-2024-Group-4/
├── .idea/                                    # IDE configuration files
├── portfolai/                               # Main Django project directory
│   ├── home/                                # Django app for homepage
│   │   ├── __init__.py
│   │   ├── admin.py                         # Django admin configuration
│   │   ├── apps.py                          # App configuration
│   │   ├── models.py                        # Database models
│   │   ├── tests.py                         # Unit tests
│   │   ├── urls.py                          # URL routing for home app
│   │   ├── views.py                         # View functions
│   │   ├── migrations/                      # Database migration files
│   │   │   └── __init__.py
│   │   ├── static/home/                     # Static files for home app
│   │   │   ├── tailwind-build.css          # Compiled Tailwind CSS
│   │   │   ├── saasy-custom.css            # Custom CSS styles
│   │   │   ├── saasy.js                    # JavaScript functionality
│   │   │   └── assets/                     # Image and media assets
│   │   │       ├── logo.png                # PortfolAI logo
│   │   │       └── images/                 # Image assets
│   │   │           ├── background/         # Background images
│   │   │           │   └── dots.svg
│   │   │           ├── brand-logos/        # Company logos
│   │   │           │   ├── adobe.svg
│   │   │           │   ├── airbnb.svg
│   │   │           │   ├── google.svg
│   │   │           │   ├── microsoft.svg
│   │   │           │   ├── reddit.svg
│   │   │           │   └── stripe.svg
│   │   │           ├── home/               # Homepage images
│   │   │           │   ├── dash.png
│   │   │           │   ├── dashboard.png
│   │   │           │   ├── forest.jpg
│   │   │           │   ├── insights.png
│   │   │           │   ├── mountain.jpg
│   │   │           │   ├── photography.jpg
│   │   │           │   └── sample.jpg
│   │   │           └── people/             # People images
│   │   │               ├── man.jpg
│   │   │               ├── man2.jpg
│   │   │               └── women.jpg
│   │   └── templates/home/                 # HTML templates
│   │       └── index.html                  # Main landing page template
│   ├── portfolai/                          # Django project settings
│   │   ├── __init__.py
│   │   ├── asgi.py                         # ASGI configuration
│   │   ├── settings.py                     # Django settings
│   │   ├── urls.py                         # Main URL configuration
│   │   └── wsgi.py                         # WSGI configuration
│   ├── manage.py                           # Django management script
│   ├── db.sqlite3                          # SQLite database file
│   ├── requirements.txt                    # Python dependencies
│   ├── testfile.txt                        # Test file
│   └── myenv/                              # Virtual environment
│       ├── bin/                            # Virtual environment binaries
│       ├── lib/                            # Installed packages
│       └── pyvenv.cfg                      # Virtual environment config
├── .gitignore                              # Git ignore rules
├── LICENSE                                 # Project license
├── README.md                               # Project documentation
└── Reflection1.txt                         # Project reflection document
```

### Key Components

- **Django App (`home/`)**: Contains the main landing page functionality
- **Static Files**: All CSS, JavaScript, and image assets for the frontend
- **Templates**: HTML templates using Django template language
- **Virtual Environment**: Isolated Python environment with project dependencies

# Test
