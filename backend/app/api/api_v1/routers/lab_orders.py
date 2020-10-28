from fastapi import APIRouter, Request, Depends, Response, encoders
import typing as t

lab_orders_router = r = APIRouter()