from fastapi import APIRouter, Request, Depends, Response, encoders
import typing as t

# Is this needed?
from app.core import security

from app.db.session import get_db
from app.db.crud import (
    get_patients,
    get_patient,
    create_patient,
    delete_patient,
    edit_patient,
)

from app.db.schemas import PatientCreate, PatientEdit, Patient
# Need to add authentication to routes
from app.core.auth import get_current_active_user, get_current_active_superuser


patients_router = r = APIRouter()


# Right now, anybody could add/delete patients from any other account. High need to fix.

@r.get(
    "/patients",
    response_model=t.List[Patient],
    response_model_exclude_none=True,
)
async def patients_list(
    response: Response,
    db=Depends(get_db),
    # Need two different conditions - 1 for superusers, 1 for a clinic/provider
    # Changed this from superuser to user
    current_user=Depends(get_current_active_user),
):
    """
    Get all patients
    ** add premissions check **
    """
    # Modify this request to get_patients
    patients = get_patients(db)
    # This is necessary for react-admin to work
    response.headers["Content-Range"] = f"0-9/{len(patients)}"
    return patients


@r.get(
    "/patients/{patient_id}",
    response_model=Patient,
    response_model_exclude_none=True,
)
async def patient_details(
    request: Request,
    patient_id: int,
    db=Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    """
    Get any user details
    ** add premissions check **
    """
    patient = get_patient(db, patient_id)
    return patient


@r.post("/patients", response_model=Patient, response_model_exclude_none=True)
async def patient_create(
    request: Request,
    patient: PatientCreate,
    db=Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    """
    Create a new patient
    ** add premissions check **
    """
    return create_patient(db, patient)


@r.patch("/patients/{patient_id}", response_model=Patient, response_model_exclude_none=True)
async def patient_edit(
    request: Request,
    patient_id: int,
    patient: PatientEdit,
    db=Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    """
    Update existing user
    ** add premissions check **
    """
    return edit_patient(db, patient_id, patient)


@r.delete("/patients/{patient_id}", response_model=Patient, response_model_exclude_none=True)
async def patient_delete(
    request: Request,
    patient_id: int,
    db=Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    """
    Delete existing user
    ** add premissions check **
    """
    return delete_patient(db, patient_id)