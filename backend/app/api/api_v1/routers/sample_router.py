# Import FastAPI
from fastapi import APIRouter, Request, Depends, Response, encoders
import typing as t

# Import DB Session
from app.db.session import get_db

# Import crud functions (should be at least 5)
from app.db.crud import (
    get_resources,
    get_resource,
    create_resource,
    delete_resource,
    edit_resource,
)

# Import Schemas (should be at least 3)
from app.db.schemas import ResourceCreate, ResourceEdit, Resource #ResourceOut

# If you need auth, import Auth
from app.core.auth import get_current_active_user, get_current_active_superuser

# Declare endpoint resource router
# Don't forget to import this in main.py
resource_router = r = APIRouter()


@r.get(
    "/resources",
    response_model=t.List[resource],
    response_model_exclude_none=True,
)
async def resources_list(
    response: Response,
    db=Depends(get_db),
    current_resource=Depends(get_current_active_superuser),
):
    """
    Get all resources
    """
    resources = get_resources(db)
    # This is necessary for react-admin to work
    response.headers["Content-Range"] = f"0-9/{len(resources)}"
    return resources


@r.get(
    "/resources/{resource_id}",
    response_model=resource,
    response_model_exclude_none=True,
)
async def resource_details(
    request: Request,
    resource_id: int,
    db=Depends(get_db),
    current_resource=Depends(get_current_active_superuser),
):
    """
    Get any resource details
    """
    resource = get_resource(db, resource_id)
    return resource
    # return encoders.jsonable_encoder(
    #     resource, skip_defaults=True, exclude_none=True,
    # )


@r.post("/resources", response_model=resource, response_model_exclude_none=True)
async def resource_create(
    request: Request,
    resource: resourceCreate,
    db=Depends(get_db),
    current_resource=Depends(get_current_active_superuser),
):
    """
    Create a new resource
    """
    return create_resource(db, resource)


@r.put("/resources/{resource_id}", response_model=resource, response_model_exclude_none=True)
async def resource_edit(
    request: Request,
    resource_id: int,
    resource: resourceEdit,
    db=Depends(get_db),
    current_resource=Depends(get_current_active_superuser),
):
    """
    Update existing resource
    """
    return edit_resource(db, resource_id, resource)


@r.delete("/resources/{resource_id}", response_model=resource, response_model_exclude_none=True)
async def resource_delete(
    request: Request,
    resource_id: int,
    db=Depends(get_db),
    current_resource=Depends(get_current_active_superuser),
):
    """
    Delete existing resource
    """
    return delete_resource(db, resource_id)
