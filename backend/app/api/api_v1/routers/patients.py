# Manage patient data (need to get HIPAA authorization)

from fastapi import APIRouter, Request, Depends, Response, encoders
import typing as t

from app.core import security

# Need to add authentication to routes
from app.core.auth import get_current_active_user, get_current_active_superuser

from app.db.session import get_db

# Create crud functions for patients
# from app.db.crud import (
#    get_users,
#    get_user,
#    create_user,
#    delete_user,
#    edit_user,
# )
# from app.db.schemas import UserCreate, UserEdit, User, UserOut


patients_router = r = APIRouter()


@r.get(
    "/patients",
    # Create Patient schema to reference here
    # response_model=t.List[Patient],
    # response_model_exclude_none=True,
)
async def patients_list(
    response: Response,
    db=Depends(get_db),
    # Need two different conditions - 1 for superusers, 1 for a clinic/provider
    current_user=Depends(get_current_active_superuser),
):
    """
    Get all patients
    """
    # Modify this request to get_patients
    patients = get_users(db)
    # This is necessary for react-admin to work
    response.headers["Content-Range"] = f"0-9/{len(users)}"
    return users
