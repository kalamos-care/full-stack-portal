# Manage CDC-approved interventions

from fastapi import APIRouter, Request, Depends, Response, encoders
import typing as t

interventions_router = r = APIRouter()
