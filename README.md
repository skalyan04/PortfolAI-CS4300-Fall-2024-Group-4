IMPORTANT NOTE: Always Pull Updates to Local Machine 
From Git BEFORE Starting Your Coding Session

# PortfolAI-CS4300-Fall-2024-Group-4

## How to Run the Application

### Prerequisites
- Python 3.8+ installed
- Virtual environment setup

### Setup Instructions

1. **Navigate to the PortfolAI directory:**
   ```bash
   cd PortfolAI-CS4300-Fall-2024-Group-4/portfolai
   ```

2. **Activate your virtual environment:**
   ```bash
   source myenv/bin/activate
   ```
   *Note: Replace `myenv` with your actual virtual environment name*

3. **Install required dependencies:**
   ```bash
   pip install -r requirements.txt
   ```
   *Note: The requirements.txt contains Django REST Framework and other necessary packages*

4. **Run the Django development server:**
   ```bash
   python manage.py runserver 0.0.0.0:3000
   ```

5. **Access the application:**
   - Open devedu and go to 'app'
   - The PortfolAI landing page will be displayed
   *Note: Go to portfolai/settings.py and add "app-<your_name>container-20.devedu.io"*

# Test
