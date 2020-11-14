# Allow providers to create/join practices

from fastapi import APIRouter, Request, Depends, Response, encoders
import typing as t

practices_router = r = APIRouter()
