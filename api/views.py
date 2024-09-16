from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.views import APIView

# Sample data for fruit availability and prices
FRUIT_DATA = {
    "apple": {"price": 10, "available": True},
    "banana": {"price": 5, "available": True},
    "mango": {"price": 15, "available": False},
}

user_cart = []

@api_view(['GET'])
def get_data(request):
    data = {"message": "Hello from Django!"}
    return Response(data)

class ChatbotAPIView(APIView):
    
    def post(self, request, *args, **kwargs):
        user_message = request.data.get("message")
        
        bot_response = self.generate_response(user_message)
        
        return Response({"message": bot_response})

    def generate_response(self, user_message):
        user_message = user_message.lower()
        
        if "hello" in user_message:
            return "Hello! I can help you with fruits. Ask me about availability, prices, or add to your cart!"
        elif "bye" in user_message:
            return "Goodbye! Have a great day!"
        elif "name" in user_message:
            return "I'm your fruit vendor bot! I can provide prices and availability of fruits."
        
        for fruit in FRUIT_DATA.keys():
            if fruit in user_message:
                return self.handle_fruit_query(fruit, user_message)
        
        return "Sorry, I didn't understand that. You can ask about fruit prices or availability!"

    def handle_fruit_query(self, fruit, user_message):
        fruit_info = FRUIT_DATA[fruit]

        if "available" in user_message or "availability" in user_message:
            if fruit_info["available"]:
                return f"Yes, {fruit} is available at ${fruit_info['price']} per unit."
            else:
                return f"Sorry, {fruit} is currently out of stock."
        
        if "price" in user_message:
            return f"The price of {fruit} is ${fruit_info['price']} per unit."

        if "add to cart" in user_message:
            if fruit_info["available"]:
                user_cart.append(fruit)
                return f"{fruit.capitalize()} has been added to your cart!"
            else:
                return f"Sorry, {fruit} is out of stock and cannot be added to the cart."

        return f"{fruit.capitalize()} is available for ${fruit_info['price']} per unit. Would you like to add it to your cart?"

# API to view cart
@api_view(['GET'])
def view_cart(request):
    if user_cart:
        return Response({"cart": user_cart})
    else:
        return Response({"message": "Your cart is empty!"})
