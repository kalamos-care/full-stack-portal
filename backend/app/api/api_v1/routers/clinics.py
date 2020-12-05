# Allow providers to create/join practices

from fastapi import APIRouter, Request, Depends, Response, encoders
import typing as t

clinicss_router = r = APIRouter()
