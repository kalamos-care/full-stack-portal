# Allow providers to create/join practices

from fastapi import APIRouter, Request, Depends, Response, encoders
import typing as t

from app.db.session import get_db
# from app.db.crud import ()

from app.db.schemas import ClinicCreate, ClinicEdit, Clinic
# Need to add authentication to routes
from app.core.auth import get_current_active_user, get_current_active_superuser


clinics_router = r = APIRouter()


@r.get(
    "/clinics",
    response_model=t.List[Clinic],
    response_model_exclude_none=True,
)
async def clinics_list(
    response: Response,
    db=Depends(get_db),
    # Need two different conditions - 1 for superusers, 1 for a provider
    # Changed this from superuser to user
    current_user=Depends(get_current_active_user),
):
    """
    Get all patients
    ** add premissions check **
    """
    clinics = get_clinics(db)
    # This is necessary for react-admin to work
    response.headers["Content-Range"] = f"0-9/{len(patients)}"
    return patients