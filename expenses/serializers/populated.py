from .common import ExpenseSerializer
from jwt_auth.serializers.common import UserSerializer
from categories.serializers.common import CategorySerializer

class PopulatedExpenseSerializer(ExpenseSerializer):
    user = UserSerializer()
    category = CategorySerializer()