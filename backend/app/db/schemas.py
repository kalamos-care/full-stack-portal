from datetime import date, datetime, time, timedelta
from pydantic import BaseModel

from typing import Optional, List


# USERS AND AUTHENTICATION
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



# ADDRESSES
# class AddressBase(BaseModel):
#     title: Optional[str]
#     street_1: str
#     street_2: Optional[str]
#     city: str
#     state: str
#     zip_code: int
#     is_business: bool = False
#     is_po_box: bool = False


# class AddressCreate(AddressBase):
#     title: Optional[str]
#     street_1: str
#     street_2: Optional[str]
#     city: str
#     state: str
#     zip_code: int
#     is_business: bool
#     is_po_box: bool

#     class Config:
#         orm_mode = True


# class AddressEdit(AddressBase):
#     title: Optional[str]
#     street_1: Optional[str]
#     street_2: Optional[str]
#     city: Optional[str]
#     state: Optional[str]
#     zip_code: Optional[int]
#     is_business: Optional[bool]
#     is_po_box: Optional[bool]

#     class Config:
#         orm_mode = True
    

# class Address(AddressBase):
#     id: int

#     class Config:
#         orm_mode = True



# PATIENTS
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
    # social: Optional[dict]
    # providers: list = []
    # labs_orders: list = []
    # prescriptions: list = []
    # labs_hipaa_auth: bool = False
    # labs_hipaa_auth_date: datetime
    # shipping_address: Optional[AddressBase]
    # home_address: Optional[AddressBase]


class PatientCreate(PatientBase):
    legal_first_name: str
    preferred_first_name: Optional[str]
    legal_last_name: str
    date_of_birth: Optional[datetime]
    email: str
    phone_day: Optional[str]

    class Config:
        orm_mode = True


class PatientEdit(PatientBase):
    legal_first_name: Optional[str]
    preferred_first_name: Optional[str]
    legal_last_name: Optional[str]
    date_of_birth: datetime
    sex_at_birth: Optional[str]
    gender_identity: Optional[str]
    ethnicity: Optional[str]
    race: Optional[str]
    religion: Optional[str]
    primary_language: Optional[str]
    ssn: Optional[int]
    email: Optional[str]
    phone_day: Optional[str]
    phone_night: Optional[str]
    social: Optional[dict]
    # providers: Optional[list]
    # labs_orders: Optional[list]
    # prescriptions: Optional[list]
    labs_hipaa_auth: Optional[bool]
    labs_hipaa_auth_date: Optional[datetime]
    # shipping_address: Optional[AddressBase]
    # home_address: Optional[AddressBase]

    class Config:
        orm_mode = True


class Patient(PatientBase):
    id: int

    class Config:
        orm_mode = True



# PROVIDERS
class ProviderBase(BaseModel):
    first_name: str
    last_name: str
    email: str
    phone: Optional[str]
    # address = AddressBase
    npi: int
    medicaid_id: Optional[str]
    state_licenses: dict
    mtl_provider_id: Optional[str]
    is_public: bool = False
    is_accepting_patients: bool = False
    # patients: list = []
    # clinics: list = []


class ProviderCreate(ProviderBase):
    first_name: str
    last_name: str
    email: str
    phone: Optional[str]
    npi: int
    medicaid_id: Optional[str]
    state_licenses: str #change this to a dict when join tables work
    is_public: Optional[bool]
    is_accepting_patients: Optional[bool]


class ProviderEdit(ProviderBase):
    first_name: Optional[str]
    last_name: Optional[str]
    email: Optional[str]
    phone: Optional[str]
    # address = Optional[AddressBase]
    npi: Optional[int]
    medicaid_id: Optional[str]
    state_licenses: Optional[dict]
    mtl_provider_id: Optional[str]
    is_public: Optional[bool]
    is_accepting_patients: Optional[bool]
    # patients: list = []
    # clinics: list = []


class Provider(ProviderBase):
    id: int

    class Config:
        orm_mode: True



# CLINICS
class ClinicBase(BaseModel):
    legal_name: str
    # legal_address_id: int #exclude from the schema
    # legal_address: Address

    contact_name: str
    contact_email: str
    contact_phone: str

    billing_contact_name: str
    billing_contact_email: str
    billing_contact_phone: str

    url: str
    is_public: bool
    is_accepting_patients: bool
    has_BAA: bool

    # providers = relationship("ProviderClinic", back_populates="clinics")
    # patients = relationship("ClinicPatient", back_populates="clinics")
    # orders = relationship("DiagnosticOrder", back_populates="clinic")


class ClinicCreate(ClinicBase):
    legal_name: str
    npi: int
    # legal_address: Address

    contact_name: str
    contact_email: str
    contact_phone: Optional[str]

    billing_contact_name: Optional[str]
    billing_contact_email: Optional[str]
    billing_contact_phone: Optional[str]

    url: Optional[str]
    is_public: Optional[bool]
    is_accepting_patients: Optional[bool]


class ClinicEdit(ClinicBase):
    legal_name: Optional[str]
    # legal_address: Address

    contact_name: Optional[str]
    contact_email: Optional[str]
    contact_phone: Optional[str]

    billing_contact_name: Optional[str]
    billing_contact_email: Optional[str]
    billing_contact_phone: Optional[str]

    url: Optional[str]
    is_public: Optional[bool]
    is_accepting_patients: Optional[bool]


class Clinic(ClinicBase):
    id: int

    class Config:
        orm_mode: True



# ASSAYS
class AssayBase(BaseModel):
    long_name: str
    short_name: Optional[str]

    loinc_code: Optional[str]
    cpt_code: Optional[str]

    #device_id: Integer, ForeignKey("devices.id"))
    #device = relationship("Device", back_populates="assays")
    cash_price: float
    is_available: bool = True


class AssayCreate(AssayBase):
    long_name: str
    short_name: Optional[str]

    loinc_code: Optional[str]
    cpt_code: Optional[str]

    #device_id: Integer, ForeignKey("devices.id"))
    #device = relationship("Device", back_populates="assays")
    cash_price: float


class AssayEdit(AssayBase):
    long_name: Optional[str]
    short_name: Optional[str]

    loinc_code: Optional[str]
    cpt_code: Optional[str]

    #device_id: Integer, ForeignKey("devices.id"))
    #device = relationship("Device", back_populates="assays")
    cash_price: Optional[float]


class Assay(AssayBase):
    id: int

    class Config:
        orm_mode: True



Diagnostic Order
class DiagnosticOrderBase(BaseModel):
    diagnostic_order_number: str

    patient_id: int
    provider_id: int
    # clinic_id: Integer, ForeignKey("clinics.id"))
    # assay_id: Integer, ForeignKey("assays.id"))
    assays: List

    collection_date: Optional[date]
    replacement: bool = False
    cash_price: float
    insurance_bill: bool = False
    status: Optional[str]

    # #patient = relationship("Patient", back_populates="orders")
    # #provider = relationship("Provider", back_populates="orders")
    # #clinic = relationship("Clinic", back_populates="order")
    # #assay = relationship("OrderAssay", back_populates="orders")


class DiagnosticOrderCreate(DiagnosticOrderBase):
    diagnostic_order_number: str

    patient_id: int
    provider_id: int
    # clinic_id: Integer, ForeignKey("clinics.id"))
    # assay_id: Integer, ForeignKey("assays.id"))
    assays: List

class DiagnosticOrderEdit(DiagnosticOrderBase):
    diagnostic_order_number: str

    # patient_id: int
    # provider_id: int
    # clinic_id: Integer, ForeignKey("clinics.id"))
    # assay_id: Integer, ForeignKey("assays.id"))
    assays: List

    collection_date: Optional[date]
    replacement: bool = False
    status: Optional[str]


class DiagnosticOrder(DiagnosticOrderBase):
    id: int

    class Config:
        orm_mode: True




# Kit
# class KitBase(BaseModel):
    # kit_name: String
    # kit_sku: String)

    # #devices = relationship("Kit__Device", back_populates="device")
    # order_id: Integer)
    # shipping_speed: Integer)
    # status: String)
    # #outbound_address = relationship("Address", back_populates="address_id")
    # outbound_tracking: String)
    # delivered_to_recepient: Boolean)
    # #inbound_address = relationship("Address", back_populates="address_id")
    # inbound_tracking: String)
    # delivered_to_lab: Boolean)

# class KitCreate(KitBase):

# class KitEdit(KitBase):

class Kit(KitBase):
    id: int

    class Config:
        orm_mode: True