# Initially manage MTL orders for providers
# Include kit ordering as well here
# Put assays and devices APIs here for now

from fastapi import APIRouter, Request, Depends, Response, encoders
import typing as t

lab_orders_router = r = APIRouter()