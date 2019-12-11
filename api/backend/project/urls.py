from django.conf.urls import url
from django.urls import path, include

from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register('Users', views.UserSerilizers)

urlpatterns = [
    path('',include(router.urls))
    # url('/', login.asView()),
    # url('dashboard/', StatusListFriendsAPIView()),
    # url('dashbooard/create_post/',statusCreateAPIView.asView()),
    # url('/friend/', getFriend.asView())
]


#Start with
# /api/login/post/fail or pass = token
# /success then redirected
# /dashboard get
# get request friends lists
# get request user information
# get request for all user posts
# /api/create/post/delete your own posts
# / 