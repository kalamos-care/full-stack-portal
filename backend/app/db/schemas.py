from datetime import date, datetime, time, timedelta
from pydantic import BaseModel

from typing import Optional, List

# Authentication
class UserBase(BaseModel):
    email: str
    is_active: bool = True
    is_provider: bool = False
    is_superuser: bool = False
    first_name: str = None
    last_name: str = None


class UserOut(UserBase):
    pass


class UserCreate(UserBase):
    password: str

    class Config:
        orm_mode = True


class UserEdit(UserBase):
    password: Optional[str] = None

    class Config:
        orm_mode = True


class User(UserBase):
    id: int

    class Config:
        orm_mode = True


class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    email: str = None
    permissions: str = "user"


# Address
class AddressBase(BaseModel):
    title: Optional[str]
    street_1: str
    street_2: Optional[str]
    city: str
    state: str
    zip_code: str
    is_business: bool = False
    is_po_box: bool = False


# Patient
class PatientBase(BaseModel):
    legal_first_name: str
    preferred_first_name: Optional[str]
    legal_last_name: str
    date_of_birth: datetime
    sex_at_birth: str
    gender_identity: Optional[str]
    ethnicity: Optional[str]
    race: Optional[str]
    religion: Optional[str]
    primary_language: Optional[str] = "English"
    ssn: Optional[int]
    email: str
    phone_day: Optional[str]
    phone_night: Optional[str]
    social: Optional[dict]
    providers: list = []
    labs_orders: list = []
    prescriptions: list = []
    labs_hipaa_auth: bool = False
    labs_hipaa_auth_date: bool = False
    shipping_address: Optional[AddressBase]
    home_address: Optional[AddressBase]


# PatientCreate
# PatientEdit
# Patient
class Patient(PatientBase):
    id: int

    class Config:
        orm_mode = True


# Provider
class ProviderBase(BaseModel):
    first_name: str
    last_name: str
    email: str
    phone: Optional[str]
    address = AddressBase
    npi: int
    medicaid_id: Optional[str]
    state_licenses: dict
    mtl_provider_id: Optional[str]
    is_public: bool = False
    is_accepting_patients: bool = False
    patients: list = []
    clinics: list = []