class ClinicsUsers(Base):
    __tablename__ = "clinics_user"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    user = relationship("User", back_populates="clinics")
    clinic_id = Column(Integer, ForeignKey("clinics.id"))
    clinic = relationship("Clinic", back_populates="patients")


# class PatientSocial(Base):
#     __tablename__ = "patients_socials"

#     id = Column(Integer, primary_key=True, index=True)
#     patient = relationship("Patient", back_populates="patient_id")
#     network_id = Column(String)


class Prescription(Base):
    __tablename__ = "prescriptions"

    id = Column(Integer, primary_key=True, index=True)
    patient_id = Column(Integer, ForeignKey("patients.id"))
    provider_id = Column(Integer, ForeignKey("providers.id"))

    patient = relationship("Patient", back_populates="prescriptions")
    provider = relationship("Provider", back_populates="prescriptions")

    rx_name = Column(String)
    rx_number = Column(String)
    rx_quantity = Column(Integer)
    rx_strength = Column(String)
    rx_expiration = Column(Date)
    is_active = Column(Boolean)
    fills_remaining = Column(Integer)


class Insurer(Base):
    __tablename__ = "insurer"

    insurer_id = Column(Integer, primary_key=True, index=True)
    insurer_name = Column(String)
    claims_address = relationship("Address", back_populates="address_id")
    edi_id = Column(Integer)


class Prescription(Base):
    __tablename__ = "prescriptions"

    id = Column(Integer, primary_key=True, index=True)
    patient_id = Column(Integer, ForeignKey("patients.id"))
    provider_id = Column(Integer, ForeignKey("providers.id"))

    patient = relationship("Patient", back_populates="prescriptions")
    provider = relationship("Provider", back_populates="prescriptions")

    rx_name = Column(String)
    rx_number = Column(String)
    rx_quantity = Column(Integer)
    rx_strength = Column(String)
    rx_expiration = Column(Date)
    is_active = Column(Boolean)
    fills_remaining = Column(Integer)


class Insurer(Base):
    __tablename__ = "insurer"

    insurer_id = Column(Integer, primary_key=True, index=True)
    insurer_name = Column(String)
    claims_address = relationship("Address", back_populates="address_id")
    edi_id = Column(Integer)



# entity joins
class ProviderPatient(Base):
    __tablename__ = "providers_patients"

    id = Column(Integer, primary_key=True, index=True)
    patient_id = Column(Integer, ForeignKey("patients.id"))
    provider_id = Column(Integer, ForeignKey("providers.id"))
    hipaa_auth = Column(Boolean)
    hipaa_auth_expire = Column(Date)

    patient = relationship("Patient", back_populates="providers")
    provider = relationship("Provider", back_populates="patients")


class ClinicPatient(Base):
    __tablename__ = "clinics_patients"

    id = Column(Integer, primary_key=True, index=True)
    clinic_id = Column(Integer, ForeignKey("clinics.id"))
    patient_id = Column(Integer, ForeignKey("patients.id"))
    hipaa_auth = Column(Boolean)
    hipaa_auth_expire = Column(Date)

    clinic = relationship("Clinic", back_populates="patients")
    patient = relationship("Patient", back_populates="clinics")


class ProviderClinic(Base):
    __tablename__ = "providers_clinics"

    id = Column(Integer, primary_key=True, index=True)
    provider_id = Column(Integer, ForeignKey("providers.id"))
    clinic_id = Column(Integer, ForeignKey("clinics.id"))

    provider = relationship("Provider", back_populates="clinics")
    clinic = relationship("Clinic", back_populates="providers")


class LabPatient(Base):
    __tablename__ = "labs_patients"

    id = Column(Integer, primary_key=True, index=True)
    provider_id = Column(Integer, ForeignKey("providers.id"))
    clinic_id = Column(Integer, ForeignKey("clinics.id"))
    hipaa_auth = Column(Boolean)
    hipaa_auth_expire = Column(Date)

    patient = relationship("Patient", back_populates="labs")
    lab = relationship("Lab", back_populates="patients")


class InsurerPatient(Base):
    __tablename__ = "insurer_patient"

    id = Column(Integer, primary_key=True, index=True)
    patient_id = relationship("Patient", back_populates="patient_id")
    insurer_id = relationship("Insurer", back_populates="insurer_id")
    member_id = Column(String)
    group_id = Column(String)
    pbm_bin = Column(String)
    pbm_pcn = Column(String)
    pbm_rx_group_id = Column(String)


# lab stuff

class Lab(Base):
    __tablename__ = "labs"

    id = Column(Integer, primary_key=True, index=True)

    legal_name = Column(String)
    legal_address_id = Column(Integer, ForeignKey("addresses.id"))
    legal_address = relationship("Address")

    contact_name = Column(String)
    contact_email = Column(String)
    contact_phone = Column(String)

    billing_contact_name = Column(String)
    billing_contact_email = Column(String)
    billing_contact_phone = Column(String)

    url = Column(String)
    assays = relationship("LabAssay", back_populates="labs")



class Device(Base):
    __tablename__ = "devices"

    id = Column(Integer, primary_key=True, index=True)
    long_name = Column(String)
    short_name = Column(String)
    manufacturer_sku = Column(String)

    assays = relationship("Assay", back_populates="device")



class LabAssay(Base):
    __tablename__ = "labs_assays"

    id = Column(Integer, primary_key=True, index=True)
    lab_id = Column(Integer, ForeignKey("labs.id"))
    lab = relationship("Lab", back_populates="assays")

    assay_id = Column(Integer, ForeignKey("assays.id"))
    assay = relationship("Assay", back_populates="labs")


class OrderAssay(Base):
    __tablename__ = "orders_assays"

    id = Column(Integer, primary_key=True, index=True)
    lab_order_id = Column(Integer, ForeignKey("labs_orders.id"))
    assay_id = Column()
    lab_order_id = relationship("Lab_Order", back_populates="lab_order_number")
    assay_id = relationship("Assay", back_populates="assay_id")


class KitDevice(Base):
    __tablename__ = "kit_device"

    id = Column(Integer, primary_key=True, index=True)
    kit_id = relationship("Kit", back_populates="kit_id")
    device_id = relationship("Device", back_populates="device_id")