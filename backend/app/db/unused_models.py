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