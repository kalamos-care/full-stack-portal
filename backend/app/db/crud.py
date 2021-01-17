from fastapi import HTTPException, status
from sqlalchemy.orm import Session
import typing as t

from . import models, schemas
from app.core.security import get_password_hash


# USERS
def get_user(db: Session, user_id: int):
    user = db.query(models.User).filter(models.User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user


def get_user_by_email(db: Session, email: str) -> schemas.UserBase:
    return db.query(models.User).filter(models.User.email == email).first()


def get_users(db: Session, skip: int = 0, limit: int = 100) -> t.List[schemas.UserOut]:
    return db.query(models.User).offset(skip).limit(limit).all()


def create_user(db: Session, user: schemas.UserCreate):
    hashed_password = get_password_hash(user.password)
    db_user = models.User(
        first_name=user.first_name,
        last_name=user.last_name,
        email=user.email,
        is_active=user.is_active,
        is_provider=user.is_provider,
        is_superuser=user.is_superuser,
        hashed_password=hashed_password,
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


def delete_user(db: Session, user_id: int):
    user = get_user(db, user_id)
    if not user:
        raise HTTPException(status.HTTP_404_NOT_FOUND, detail="User not found")
    db.delete(user)
    db.commit()
    return user


def edit_user(db: Session, user_id: int, user: schemas.UserEdit) -> schemas.User:
    db_user = get_user(db, user_id)
    if not db_user:
        raise HTTPException(status.HTTP_404_NOT_FOUND, detail="User not found")
    update_data = user.dict(exclude_unset=True)

    if "password" in update_data:
        update_data["hashed_password"] = get_password_hash(user.password)
        del update_data["password"]

    for key, value in update_data.items():
        setattr(db_user, key, value)

    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user



# ADDESSES
# def get_address(db: Session, address_id: int):
#     address = db.query(models.Address).filter(models.Address.id == address_id).first()
#     if not address:
#         raise HTTPException(status_code=404, detail="Address not found")
#     return address

# def create_address(db: Session, address: schemas.AddressCreate):
# def edit_address(db: Session, address_id: int, address: schemas.AddressEdit) -> schemas.Address:
# def delete_address(db: Session, address_id: int):



# PATIENTS
def get_patient(db: Session, patient_id: int):
    patient = db.query(models.Patient).filter(models.Patient.id == patient_id).first()
    if not patient:
        raise HTTPException(status_code=404, detail="Patient not found")
    return patient


# should I include a check to provider__patient or clinic__patient table?
# addded provider_id: int = 0, clinic_id: int = 0, as a way to stop general get. I think I need to use current user
def get_patients(db: Session, provider_id: int = 0, clinic_id: int = 0, skip: int = 0, limit: int = 100):
    return db.query(models.Patient).offset(skip).limit(limit).all()


def create_patient(db: Session, patient: schemas.PatientCreate):
    db_patient = models.Patient(
        legal_first_name=patient.legal_first_name,
        preferred_first_name=patient.preferred_first_name,
        legal_last_name=patient.legal_last_name,
        date_of_birth=patient.date_of_birth,
        email=patient.email,
        phone_day=patient.phone_day
    )
    db.add(db_patient)
    db.commit()
    db.refresh(db_patient)
    return db_patient


def edit_patient(db: Session, patient_id: int, patient: schemas.PatientEdit) -> schemas.Patient:
    db_patient = get_patient(db, patient_id)
    if not db_patient:
        raise HTTPException(status.HTTP_404_NOT_FOUND, detail="Patient not found")
    update_data = patient.dict(exclude_unset=True)

    for key, value in update_data.items():
        setattr(db_patient, key, value)

    db.add(db_patient)
    db.commit()
    db.refresh(db_patient)
    return db_patient


# If the patient chooses to delete themselves, we could remove them from the DB
# If the provider/clinic deletes a patient, we just need to remove them from provider__patient table
def delete_patient(db: Session, patient_id: int):
    patient = get_patient(db, patient_id)
    if not patient:
        raise HTTPException(status.HTTP_404_NOT_FOUND, detail="Patient not found")
    db.delete(patient)
    db.commit()
    return patient



# PROVIDERS
def get_provider(db: Session, provider_id: int):
    provider = db.query(models.Provider).filter(models.Provider.id == provider_id).first()
    if not provider:
        raise HTTPException(status_code=404, detail="Provider not found")
    return provider


def get_provider_by_npi(db: Session, npi: int) -> schemas.ProviderBase:
    return db.query(models.Provider).filter(models.Provider.npi == npi).first()


def get_providers(db: Session, skip: int = 0, limit: int = 100):
    # if from a clinic, return all users for that clinic, else return all providers listed as public?
    return db.query(models.Provider).offset(skip).limit(limit).all()


def create_provider(db: Session, provider: schemas.ProviderCreate):
    db_provider = models.Provider(
        first_name=provider.first_name,
        last_name=provider.last_name,
        email=provider.email,
        phone=provider.phone,
        npi=provider.npi,
        medicaid_id=provider.medicaid_id,
        #change this to a dict when join tables work
        state_licenses=provider.state_licenses,
        is_public=provider.is_public,
        is_accepting_patients=provider.is_accepting_patients
    )
    db.add(db_provider)
    db.commit()
    db.refresh(db_provider)
    return db_provider

def edit_provider(db: Session, provider_id: int, provider: schemas.ProviderEdit):
    # do stuff
    return provider

def delete_provider(db: Session, provider_id: int):
    provider = get_provider(db, provider_id)
    if not provider:
        raise HTTPException(status.HTTP_404_NOT_FOUND, detail="Provider not found")
    db.delete(provider)
    db.commit()
    return provider


# CLINICS
def get_clinic(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Clinic).offset(skip).limit(limit).all()



# ASSAYS
def get_assay():
    return false


def get_assays():
    return false


def create_assay():
    return false


def edit_assay():
    return false


def delete_assay():
    return false