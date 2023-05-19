from .common import CategorySerializer
from jwt_auth.serializers.common import UserSerializer

class PopulatedCategorySerializer(CategorySerializer):
    user = UserSerializer()