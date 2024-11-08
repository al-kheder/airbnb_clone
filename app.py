from platform import java_ver

from flask import Flask, jsonify, send_file
from flask_restful import Api, Resource
from faker import Faker
from PIL import Image
import io
import random

# Any fool can write code that a computer can understand.
# Good programmers write code that humans can understand.”



app = Flask(__name__)
api = Api(app)
fake = Faker()


# Function to generate fake property data
def generate_fake_properties(num_properties=10):
    properties = []
    for _ in range(num_properties):
        property_id = fake.uuid4()
        property = {
            "id": property_id,
            "name": fake.catch_phrase(),
            "location": fake.city(),
            "price_per_night": round(random.uniform(50, 300), 2),
            "description": fake.text(max_nb_chars=200),
            "available": fake.boolean(chance_of_getting_true=90),
            "rating": round(random.uniform(2, 5), 1),
            "image_url": f"/properties/{property_id}/image"  # URL for the generated image
        }
        properties.append(property)
    return properties


properties_data = generate_fake_properties(5)


# Properties list endpoint
class PropertyList(Resource):
    def get(self):
        return jsonify(properties_data)


# Single property endpoint
class Property(Resource):
    def get(self, property_id):
        # Find the property by id
        property = next((item for item in properties_data if item["id"] == property_id), None)
        if property:
            return jsonify(property)
        return {"message": "Property not found"}, 404


# Image generation endpoint for a property
@app.route('/properties/<string:property_id>/image')
def get_property_image(property_id):
    # Generate a random image for each property
    img = Image.new('RGB', (200, 200), (
        random.randint(0, 255),
        random.randint(0, 255),
        random.randint(0, 255)
    ))
    img_bytes = io.BytesIO()
    img.save(img_bytes, format='PNG')
    img_bytes.seek(0)

    return send_file(img_bytes, mimetype='image/png')


# Set up routes
api.add_resource(PropertyList, "/properties")
api.add_resource(Property, "/properties/<string:property_id>")

# Main application entry point
if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5001, debug=True)
