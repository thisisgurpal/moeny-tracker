from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Expense
from .serializers.common import ExpenseSerializer

# Create your views here.
class ExpenseListView(APIView):
    def get(self, _request):
        expenses = Expense.objects.all()
        serialized_expenses = ExpenseSerializer(expenses, many = True)

        print('expenses', expenses)
        print('serialized expenses', serialized_expenses)

        return Response(serialized_expenses.data, status = status.HTTP_200_OK)