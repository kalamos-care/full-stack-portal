from fastapi import HTTPException, status
from sqlalchemy.orm import Session
import typing as t

from . import models, schemas
from app.core.security import get_password_hash


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


# def get_address(db: Session, address_id: int):
#     address = db.query(models.Address).filter(models.Address.id == address_id).first()
#     if not address:
#         raise HTTPException(status_code=404, detail="Address not found")
#     return address

# def create_address(db: Session, address: schemas.AddressCreate):
# def edit_address(db: Session, address_id: int, address: schemas.AddressEdit) -> schemas.Address:
# def delete_address(db: Session, address_id: int):


def get_patient(db: Session, patient_id: int):
    patient = db.query(models.Patient).filter(models.Patient.patient_id == patient_id).first()
    if not patient:
        raise HTTPException(status_code=404, detail="Patient not found")
    return patient


# should I include a check to provider__patient or clinic__patient table?
def get_patients(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Patient).offset(skip).limit(limit).all()


def create_patient(db: Session, patient: schemas.PatientCreate):
    db_patient = models.Patient(
        legal_first_name=patient.legal_first_name,
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


# def get_provider(db: Session, provider_id: int)
# def get_provider(db: Session, skip: int = 0, limit: int = 100)
# def create_provider(db: Session, )
# def edit_provider(db: Session, )
# def delete_provider(db: Session, )

def get_clinic(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Clinic).offset(skip).limit(limit).all()