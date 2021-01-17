from fastapi import APIRouter, Request, Depends, Response, encoders
import typing as t

# Is this needed?
from app.core import security

from app.db.session import get_db
from app.db.crud import (
    get_assays,
    get_assay,
    create_assay,
    delete_assay,
    edit_assay,
)

from app.db.schemas import AssayCreate, AssayEdit, Assay
# Need to add authentication to routes
from app.core.auth import get_current_active_user, get_current_active_superuser


assays_router = r = APIRouter()


# Right now, anybody could add/delete assays from any other account. High need to fix.

@r.get(
    "/assays",
    response_model=t.List[Assay],
    response_model_exclude_none=True,
)
async def assays_list(
    response: Response,
    db=Depends(get_db),
    # Need two different conditions - 1 for superusers, 1 for a clinic/provider
    # Changed this from superuser to user
    current_user=Depends(get_current_active_user),
):
    """
    Get all assays
    ** add premissions check **
    """
    # Modify this request to get_assays
    assays = get_assays(db)
    # This is necessary for react-admin to work
    response.headers["Content-Range"] = f"0-9/{len(assays)}"
    return assays


@r.get(
    "/assays/{assay_id}",
    response_model=Assay,
    response_model_exclude_none=True,
)
async def assay_details(
    request: Request,
    assay_id: int,
    db=Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    """
    Get any user details
    ** add premissions check **
    """
    assay = get_assay(db, assay_id)
    return assay


@r.post("/assays", response_model=Assay, response_model_exclude_none=True)
async def assay_create(
    request: Request,
    assay: AssayCreate,
    db=Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    """
    Create a new assay
    ** add premissions check **
    """
    return create_assay(db, assay)


@r.patch("/assays/{assay_id}", response_model=Assay, response_model_exclude_none=True)
async def assay_edit(
    request: Request,
    assay_id: int,
    assay: AssayEdit,
    db=Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    """
    Update existing user
    ** add premissions check **
    """
    return edit_assay(db, assay_id, assay)


@r.delete("/assays/{assay_id}", response_model=Assay, response_model_exclude_none=True)
async def assay_delete(
    request: Request,
    assay_id: int,
    db=Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    """
    Delete existing user
    ** add premissions check **
    """
    return delete_assay(db, assay_id)