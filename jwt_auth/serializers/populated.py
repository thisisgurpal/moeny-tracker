from .common import UserSerializer
from expenses.serializers.common import ExpenseSerializer
from categories.serializers.common import CategorySerializer

# Serializers
class PopulatedUserSerializer(UserSerializer):
    expenses = ExpenseSerializer(many=True)
    categories = CategorySerializer(many=True)