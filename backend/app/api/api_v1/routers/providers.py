from fastapi import APIRouter, Request, Depends, Response, encoders
import typing as t

# Is this needed?
from app.core import security

from app.db.session import get_db
from app.db.crud import (
    get_providers,
    get_provider,
    create_provider,
    delete_provider,
    edit_provider,
)

from app.db.schemas import ProviderCreate, ProviderEdit, Provider
# Need to add authentication to routes
from app.core.auth import get_current_active_user, get_current_active_superuser


providers_router = r = APIRouter()


# Right now, anybody could add/delete providers from any other account. High need to fix.

@r.get(
    "/providers",
    response_model=t.List[Provider],
    response_model_exclude_none=True,
)
async def providers_list(
    response: Response,
    db=Depends(get_db),
    # Need two different conditions - 1 for superusers, 1 for a clinic/provider
    # Changed this from superuser to user
    current_user=Depends(get_current_active_user),
):
    """
    Get all providers
    ** add premissions check **
    """
    # Modify this request to get_providers
    providers = get_providers(db)
    # This is necessary for react-admin to work
    response.headers["Content-Range"] = f"0-9/{len(providers)}"
    return providers


@r.get(
    "/providers/{provider_id}",
    response_model=Provider,
    response_model_exclude_none=True,
)
async def provider_details(
    request: Request,
    provider_id: int,
    db=Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    """
    Get any user details
    ** add premissions check **
    """
    provider = get_provider(db, provider_id)
    return provider


@r.post("/providers", response_model=Provider, response_model_exclude_none=True)
async def provider_create(
    request: Request,
    provider: ProviderCreate,
    db=Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    """
    Create a new provider
    ** add premissions check **
    """
    return create_provider(db, provider)


@r.patch("/providers/{provider_id}", response_model=Provider, response_model_exclude_none=True)
async def provider_edit(
    request: Request,
    provider_id: int,
    provider: ProviderEdit,
    db=Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    """
    Update existing user
    ** add premissions check **
    """
    return edit_provider(db, provider_id, provider)


@r.delete("/providers/{provider_id}", response_model=Provider, response_model_exclude_none=True)
async def provider_delete(
    request: Request,
    provider_id: int,
    db=Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    """
    Delete existing user
    ** add premissions check **
    """
    return delete_provider(db, provider_id)