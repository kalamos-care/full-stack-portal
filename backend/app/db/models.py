from sqlalchemy import Boolean, Column, Date, Dict, Float, Integer, List, String

from sqlalchemy.orm import relationship

from .session import Base

# for Authentication
class User(Base):
    __tablename__ = "user"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    first_name = Column(String)
    last_name = Column(String)
    hashed_password = Column(String, nullable=False)
    is_active = Column(Boolean, default=True)
    is_provider = Column(Boolean, default=False)
    is_superuser = Column(Boolean, default=False)


# Address
class Address(Base):
    __tablename__ = "address"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    street_1 = Column(String)
    street_2 = Column(String)
    city = Column(String)
    state = Column(String)
    zip_code = Column(Integer)


# Provider
class Provider(Base):
    __tablename__ = "provider"

    id = Column(Integer, primary_key=True, index=True)
    first_name = Column(String)
    last_name = Column(String)
    email = Column(String, unique=True)
    phone = Column(String)
    # this seems very incorrect...
    address = relationship("Address")
    npi = Column(Integer, unique=True)
    medicaid_id = Column(String)
    state_licenses = Column(Dict)
    mtl_provider_id = Column(String, unique=True)
    is_public = Column(Boolean, default=False)
    is_accepting_patients = Column(Boolean, default=True)
    patients = Column(Dict)
    clinics = relationship("Clinic")


# State Licenses
class State_License(Base):
    __tablename__ = "state_license"

    provider_id = Column(Integer, primary_key=True, index=True)
    state_abbreviation = Column(String)
    state_license = Column(String)


# Clinics
class Clinic(Base):
    __tablename__ = "clinic"

    id = Column(Integer, primary_key=True, index=True)
    legal_name = Column(String)
    legal_address = relationship("Address")
    contact_name = Column(String)
    contact_email = Column(String)
    contact_phone = Column(String)
    billing_contact_name = Column(String)
    billing_contact_email = Column(String)
    billing_contact_phone = Column(String)
    url = Column(String)
    is_public = Column(Boolean)
    is_accepting_patients = Column(Boolean)
    has_BAA = Column(Boolean)
    providers = Column(Dict)


# Labs
class Lab(Base):
    __tablename__ = "lab"

    id = Column(Integer, primary_key=True, index=True)
    legal_name = Column(String)
    legal_address = relationship("Address")
    contact_name = Column(String)
    contact_email = Column(String)
    contact_phone = Column(String)
    billing_contact_name = Column(String)
    billing_contact_email = Column(String)
    billing_contact_phone = Column(String)
    url = Column(String)
    assays = Column(Dict) # references the Assay model?


# Patients
class Patient(Base):
    __tablename__ = "patient"

    id = Column(Integer, primary_key=True, index=True)
    legal_first_name = Column(String)
    preferred_first_name = Column(String)
    legal_last_name = Column(String)
    date_of_birth = Column(Date)
    sex_at_birth = Column(String)
    gender_identity = Column(String)
    ethnicity = Column(String)
    race = Column(String)
    religion = Column(String)
    primary_language = Column(String)
    ssn = Column(Integer)
    email = Column(String)
    phone_day = Column(String)
    phone_night = Column(String)
    social = Column(Dict)
    providers = Column(Dict)
    labs = Column(Dict)
    prescriptions = Column(Dict)
    labs_hipaa_auth = Column(Boolean)
    labs_hipaa_auth_date = Column(Date)
    shipping_address = relationship("Addess")
    home_address = relationship("Addess")


# Prescriptions
class Prescription(Base):
    __tablename__ = "prescription"

    id = Column(Integer, primary_key=True, index=True)
    patient_id = reference ("Patient")
    provider_id = relationship("Provider")
    rx_name = Column(String)
    rx_number = Column(String)
    rx_quantity = Column(Integer)
    rx_strength = Column(String)
    rx_expiration = Column(Date)
    is_active = Column(Boolean)
    fills_remaining = Column(Integer)


# Proivder__Patient
class Provider__Patient(Base):
    __tablename__ = "provider__patient"

    patient_id = reference ("Patient")
    provider_id = relationship("Provider")
    hipaa_auth = Column(Boolean)
    hipaa_auth_expire = Column(Date)


# Lab__Patient
# This can actually use the same object
# This should probably be a list of Patient_IDs with NPIs and exipration dates
# Should this also be a part of authorization?
# Ask Mike
class Lab__Patient(Base):
    __tablename__ = "lab__patient"

    patient_id = reference ("Patient")
    provider_id = relationship("Provider")
    hipaa_auth = Column(Boolean)
    hipaa_auth_expire = Column(Date)


# Assays
class Assay(Base):
    __tablename__ = "assay"

    id = Column(Integer, primary_key=True, index=True)
    long_name = Column(String)
    short_name = Column(String)
    loinc_code = Column(String)
    cpt_code = Column(String)
    lab_id = relationship("Lab")
    device_ids = Column(Dict)
    cash_price = Column(Float)
    is_available = Column(Boolean)


# Lab Order
class Lab_Order(Base):
    __tablename__ = "lab_order"

    id = Column(Integer, primary_key=True, index=True)
    patient_id = relationship("Patient")
    lab_order_number = Column(Integer)
    provider_id = relationship("Provider")
    clinic_id = relationship("Clinic")
    assays = Column(Dict)
    icd_10_codes = Column(List)
    collection_date = Column(Date)
    replacement = Column(Boolean)
    cash_price = Column(Float)
    insurance_bill = Column(Boolean, default=False)
    status = Column(String)


# Oder__Assays
class Order__Assays(Base):
    __tablename__ = "order__assays"

    lab_order_id = reference ("Lab_Order")
    assay_id = relationship("Assay")


# Order__ICD10
# Unsure if I need a table


# Devices
class Device(Base):
    __tablename__ = "lab_order"

    id = Column(Integer, primary_key=True, index=True)
    device_long_name = Column(String)
    device_short_name = Column(String)
    device_manufacturer_sku = Column(String)


# Kits
class Kit(Base):
    __tablename__ = "lab_order"

    id = Column(Integer, primary_key=True, index=True)
    kit_name = Column(String)
    kit_sku = Column(String)
    kit_id = Column(String)
    devices = Column(Dict)
    order_id = Column(Integer)
    shipping_speed = Column(Integer)
    status = Column(String)
    outbound_address = relationship("Address")	
    outbound_tracking = Column(String)
    delivered_to_recepient = Column(Boolean)
    inbound_address = relationship("Address")
    inbound_tracking = Column(String)
    delivered_to_processor = Column(Boolean)


# Kit__Devices
# Unsure if I need a table


# Insurers
class Insurer(Base):
    __tablename__ = "insurer"

    id = Column(Integer, primary_key=True, index=True)
    insurer_name = Column(String)
    claims_address = relationship("Address")
    edi	= Column(Integer)


# Insurer__Patient
class Insurer__Patient(Base):
    __tablename__ = "insurer__patient"

    patient_id = relationship("Patient")
    insurer_id = relationship("Insurer")
    member_id = Column(String)
    group_id = Column(String)
    pbm_bin = Column(String)
    pbm_pcn = Column(String)
    pbm_rx_group_id = Column(String)