from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
from flask_cors import CORS
import bcrypt

app = Flask(__name__)

# Enable CORS
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}}, supports_credentials=True)

# MongoDB configuration
app.config["MONGO_URI"] = "mongodb://localhost:27017/bsvDataBase"
mongo = PyMongo(app)
users_collection = mongo.db.bsvCollection  # Accessing collection

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({'message': 'Missing email or password'}), 400

    user = users_collection.find_one({"email": email})

    if not user:
        return jsonify({'message': 'User not found'}), 401

    if password == user['password']:
        return jsonify({'message': 'Login successful', 'user': {'name': user['name'], 'email': user['email']}}), 200
    else:
        return jsonify({'message': 'Invalid credentials'}), 401

if __name__ == '__main__':
    app.run(debug=True)
