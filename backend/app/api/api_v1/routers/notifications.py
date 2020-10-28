from fastapi import APIRouter, Request, Depends, Response, encoders
import typing as t

notifications_router = r = APIRouter()