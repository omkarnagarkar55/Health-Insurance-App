import requests

url = "http://localhost:5003/predict"  # Ensure this matches your API URL

data = {
    "age": 45,
    "income": 60000,
    "year": 2025,
    "month": 5,
    "day": 15,
    "gender": "Male",
    "provider_specialty": "Cardiology",
    "claim_type": "Outpatient",
    "submission_method": "Online"
}


try:
    # Sending POST request to Flask API
    response = requests.post(url, json=data)

    # Checking for HTTP errors
    response.raise_for_status()
    
    # Parsing JSON response
    try:
        result = response.json()
        print("\n✅ API Response:")
        print(result)
    except ValueError:
        print("\n❌ Error: The API did not return a valid JSON response.")
        print("Raw Response:", response.text)

except requests.exceptions.ConnectionError:
    print("\n❌ Error: Unable to connect to the API. Make sure the Flask server is running.")
except requests.exceptions.Timeout:
    print("\n❌ Error: The request timed out.")
except requests.exceptions.RequestException as e:
    print(f"\n❌ Error: {str(e)}")
