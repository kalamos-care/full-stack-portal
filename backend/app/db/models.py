# TODO: Order__ICD10: Unsure if I need a table
# TODO: I think I can probably remove provider status from user object, but I
# TODO: want to change the default view based on that

from .session import Base
from sqlalchemy import Boolean, Column, Date, Float, \
    Integer, String, ForeignKey
from sqlalchemy.orm import relationship


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    first_name = Column(String)
    last_name = Column(String)
    hashed_password = Column(String, nullable=False)
    is_active = Column(Boolean, default=True)
    is_provider = Column(Boolean, default=False)
    is_superuser = Column(Boolean, default=False)



#class Address(Base):
#    __tablename__ = "addresses"

#    id = Column(Integer, primary_key=True, index=True)
#    title = Column(String)
#    street_1 = Column(String)
#    street_2 = Column(String)
#    city = Column(String)
#    state = Column(String)
#    zip_code = Column(Integer)
#    is_business = Column(Boolean, default=False)
#    is_po_box = Column(Boolean, default=False)


class Provider(Base):
    __tablename__ = "providers"

    id = Column(Integer, primary_key=True, index=True)

    first_name = Column(String)
    last_name = Column(String)
    email = Column(String, unique=True)
    phone = Column(String)
    #address_id = Column(Integer, ForeignKey("addresses.id"))
    #address = relationship("Address")

    npi = Column(Integer, unique=True)
    medicaid_id = Column(String)
    
    #state_license_id = Column(Integer, ForeignKey("state_licenses.id"))
    #state_licenses = relationship("StateLicense", back_populates="provider")

    mtl_provider_id = Column(String, unique=True)
    is_public = Column(Boolean, default=False)
    is_accepting_patients = Column(Boolean, default=True)

    #patients = relationship("ProviderPatient", back_populates="provider")
    #clinics = relationship("ProviderClinic", back_populates="provider")
    #prescriptions = relationship("Prescription", back_populates="provider")
    #orders = relationship("LabOrder", back_populates="provider")


#class StateLicense(Base):
    #__tablename__ = "state_licenses"

    #id = Column(Integer, primary_key=True, index=True)
    
    #provider_id = Column(Integer, ForeignKey("providers.id"))
    #provider = relationship("Provider", back_populates="state_licenses")

    #state_abbreviation = Column(String)
    #state_license = Column(String)


class Clinic(Base):
    __tablename__ = "clinics"

    id = Column(Integer, primary_key=True, index=True)
    legal_name = Column(String)
    npi = Column(Integer)
    # legal_address_id = Column(Integer, ForeignKey("addresses.id"))
    # legal_address = relationship("Address")

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

    # providers = relationship("ProviderClinic", back_populates="clinics")
    # patients = relationship("ClinicPatient", back_populates="clinics")
    # orders = relationship("LabOrder", back_populates="clinic")


class Patient(Base):
    __tablename__ = "patients"

    id = Column(Integer, primary_key=True, index=True)

    legal_first_name = Column(String)
    legal_last_name = Column(String)
    ssn = Column(Integer)
    preferred_first_name = Column(String)

    date_of_birth = Column(Date)
    ethnicity = Column(String)
    race = Column(String)
    sex_at_birth = Column(String)
    gender_identity = Column(String)
    religion = Column(String)

    primary_language = Column(String)
    email = Column(String)
    phone_day = Column(String)
    phone_night = Column(String)

    # social = relationship("PatientSocial", back_populates="network_id")
    # providers = relationship("ProviderPatient", back_populates="patient")
    # lab_orders = relationship("LabOrder", back_populates="patient")
    # prescriptions = relationship("Prescription", back_populates="patient")
    # clinics = relationship("ClinicPatient", back_populates="patient")
    # orders = relationship("LabOrder", back_populates="patient")

    labs_hipaa_auth = Column(Boolean)
    labs_hipaa_auth_date = Column(Date)

    #shipping_address_id = Column(Integer, ForeignKey("addresses.id"))
    #shipping_address = relationship("Address")

    #home_address_id = Column(Integer, ForeignKey("addresses.id"))
    #home_address = relationship("Address")


class Assay(Base):
    __tablename__ = "assays"

    id = Column(Integer, primary_key=True, index=True)

    long_name = Column(String)
    short_name = Column(String)

    loinc_code = Column(String)
    cpt_code = Column(String)

    #device_id = Column(Integer, ForeignKey("devices.id"))
    #device = relationship("Device", back_populates="assays")
    cash_price = Column(Float)
    is_available = Column(Boolean)

    #labs = relationship("LabAssay", back_populates="assays")
    #orders = relationship("LabOrder", back_populates="assay")


class DiagnosticOrder(Base):
    # TODO: add this at some point, icd_10_codes = Column(List)
    __tablename__ = "diagnostic_orders"

    id = Column(Integer, primary_key=True, index=True)
    diagnostic_order_number = Column(Integer)

    patient_id = Column(Integer, ForeignKey("patients.id"))
    provider_id = Column(Integer, ForeignKey("providers.id"))
    clinic_id = Column(Integer, ForeignKey("clinics.id"))
    assay_id = Column(Integer, ForeignKey("assays.id"))

    collection_date = Column(Date)
    replacement = Column(Boolean)
    cash_price = Column(Float)
    insurance_bill = Column(Boolean, default=False)
    status = Column(String)

    #patient = relationship("Patient", back_populates="orders")
    #provider = relationship("Provider", back_populates="orders")
    #clinic = relationship("Clinic", back_populates="order")
    #assay = relationship("OrderAssay", back_populates="orders")


class Kit(Base):
    __tablename__ = "kits"

    id = Column(Integer, primary_key=True, index=True)
    kit_name = Column(String)
    kit_sku = Column(String)

    #devices = relationship("Kit__Device", back_populates="device")
    order_id = Column(Integer)
    shipping_speed = Column(Integer)
    status = Column(String)
    #outbound_address = relationship("Address", back_populates="address_id")
    outbound_tracking = Column(String)
    delivered_to_recepient = Column(Boolean)
    #inbound_address = relationship("Address", back_populates="address_id")
    inbound_tracking = Column(String)
    delivered_to_lab = Column(Boolean)