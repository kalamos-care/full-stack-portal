from fastapi import APIRouter, Request, Depends, Response, encoders
import typing as t

patients_router = r = APIRouter()