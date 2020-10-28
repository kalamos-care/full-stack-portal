from fastapi import APIRouter, Request, Depends, Response, encoders
import typing as t

conversations_router = r = APIRouter()