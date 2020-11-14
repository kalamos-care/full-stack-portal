# Receive 3rd party notifications (MTL) and

from fastapi import APIRouter, Request, Depends, Response, encoders
import typing as t

notifications_router = r = APIRouter()


@r.post(
    "/mtl_webhook",
    # Verify the URL is from MTL
)
async def mtl_notification_create():
    return True
