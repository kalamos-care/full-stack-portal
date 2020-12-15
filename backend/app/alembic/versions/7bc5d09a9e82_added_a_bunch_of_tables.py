"""Added a bunch of tables

Revision ID: 7bc5d09a9e82
Revises: 91979b40eb38
Create Date: 2020-12-15 13:59:37.860244-08:00

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '7bc5d09a9e82'
down_revision = '91979b40eb38'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('address',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(), nullable=True),
    sa.Column('street_1', sa.String(), nullable=True),
    sa.Column('street_2', sa.String(), nullable=True),
    sa.Column('city', sa.String(), nullable=True),
    sa.Column('state', sa.String(), nullable=True),
    sa.Column('zip_code', sa.Integer(), nullable=True),
    sa.Column('is_business', sa.Boolean(), nullable=True),
    sa.Column('is_po_box', sa.Boolean(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_address_id'), 'address', ['id'], unique=False)
    op.create_table('assay',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('long_name', sa.String(), nullable=True),
    sa.Column('short_name', sa.String(), nullable=True),
    sa.Column('loinc_code', sa.String(), nullable=True),
    sa.Column('cpt_code', sa.String(), nullable=True),
    sa.Column('cash_price', sa.Float(), nullable=True),
    sa.Column('is_available', sa.Boolean(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_assay_id'), 'assay', ['id'], unique=False)
    op.create_table('clinic',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('legal_name', sa.String(), nullable=True),
    sa.Column('contact_name', sa.String(), nullable=True),
    sa.Column('contact_email', sa.String(), nullable=True),
    sa.Column('contact_phone', sa.String(), nullable=True),
    sa.Column('billing_contact_name', sa.String(), nullable=True),
    sa.Column('billing_contact_email', sa.String(), nullable=True),
    sa.Column('billing_contact_phone', sa.String(), nullable=True),
    sa.Column('url', sa.String(), nullable=True),
    sa.Column('is_public', sa.Boolean(), nullable=True),
    sa.Column('is_accepting_patients', sa.Boolean(), nullable=True),
    sa.Column('has_BAA', sa.Boolean(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_clinic_id'), 'clinic', ['id'], unique=False)
    op.create_table('clinic__patient',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('hipaa_auth', sa.Boolean(), nullable=True),
    sa.Column('hipaa_auth_expire', sa.Date(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_clinic__patient_id'), 'clinic__patient', ['id'], unique=False)
    op.create_table('clinic__user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_clinic__user_id'), 'clinic__user', ['id'], unique=False)
    op.create_table('device',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('device_long_name', sa.String(), nullable=True),
    sa.Column('device_short_name', sa.String(), nullable=True),
    sa.Column('device_manufacturer_sku', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_device_id'), 'device', ['id'], unique=False)
    op.create_table('insurer',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('insurer_name', sa.String(), nullable=True),
    sa.Column('edi', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_insurer_id'), 'insurer', ['id'], unique=False)
    op.create_table('insurer__patient',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('member_id', sa.String(), nullable=True),
    sa.Column('group_id', sa.String(), nullable=True),
    sa.Column('pbm_bin', sa.String(), nullable=True),
    sa.Column('pbm_pcn', sa.String(), nullable=True),
    sa.Column('pbm_rx_group_id', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_insurer__patient_id'), 'insurer__patient', ['id'], unique=False)
    op.create_table('kit',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('kit_name', sa.String(), nullable=True),
    sa.Column('kit_sku', sa.String(), nullable=True),
    sa.Column('kit_id', sa.String(), nullable=True),
    sa.Column('order_id', sa.Integer(), nullable=True),
    sa.Column('shipping_speed', sa.Integer(), nullable=True),
    sa.Column('status', sa.String(), nullable=True),
    sa.Column('outbound_tracking', sa.String(), nullable=True),
    sa.Column('delivered_to_recepient', sa.Boolean(), nullable=True),
    sa.Column('inbound_tracking', sa.String(), nullable=True),
    sa.Column('delivered_to_processor', sa.Boolean(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_kit_id'), 'kit', ['id'], unique=False)
    op.create_table('kit__device',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_kit__device_id'), 'kit__device', ['id'], unique=False)
    op.create_table('lab',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('legal_name', sa.String(), nullable=True),
    sa.Column('contact_name', sa.String(), nullable=True),
    sa.Column('contact_email', sa.String(), nullable=True),
    sa.Column('contact_phone', sa.String(), nullable=True),
    sa.Column('billing_contact_name', sa.String(), nullable=True),
    sa.Column('billing_contact_email', sa.String(), nullable=True),
    sa.Column('billing_contact_phone', sa.String(), nullable=True),
    sa.Column('url', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_lab_id'), 'lab', ['id'], unique=False)
    op.create_table('lab__assay',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_lab__assay_id'), 'lab__assay', ['id'], unique=False)
    op.create_table('lab__patient',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('hipaa_auth', sa.Boolean(), nullable=True),
    sa.Column('hipaa_auth_expire', sa.Date(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_lab__patient_id'), 'lab__patient', ['id'], unique=False)
    op.create_table('lab_order',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('lab_order_number', sa.Integer(), nullable=True),
    sa.Column('collection_date', sa.Date(), nullable=True),
    sa.Column('replacement', sa.Boolean(), nullable=True),
    sa.Column('cash_price', sa.Float(), nullable=True),
    sa.Column('insurance_bill', sa.Boolean(), nullable=True),
    sa.Column('status', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_lab_order_id'), 'lab_order', ['id'], unique=False)
    op.create_table('order__assays',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_order__assays_id'), 'order__assays', ['id'], unique=False)
    op.create_table('patient',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('legal_first_name', sa.String(), nullable=True),
    sa.Column('preferred_first_name', sa.String(), nullable=True),
    sa.Column('legal_last_name', sa.String(), nullable=True),
    sa.Column('date_of_birth', sa.Date(), nullable=True),
    sa.Column('sex_at_birth', sa.String(), nullable=True),
    sa.Column('gender_identity', sa.String(), nullable=True),
    sa.Column('ethnicity', sa.String(), nullable=True),
    sa.Column('race', sa.String(), nullable=True),
    sa.Column('religion', sa.String(), nullable=True),
    sa.Column('primary_language', sa.String(), nullable=True),
    sa.Column('ssn', sa.Integer(), nullable=True),
    sa.Column('email', sa.String(), nullable=True),
    sa.Column('phone_day', sa.String(), nullable=True),
    sa.Column('phone_night', sa.String(), nullable=True),
    sa.Column('labs_hipaa_auth', sa.Boolean(), nullable=True),
    sa.Column('labs_hipaa_auth_date', sa.Date(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_patient_id'), 'patient', ['id'], unique=False)
    op.create_table('patient__social',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('facebook', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_patient__social_id'), 'patient__social', ['id'], unique=False)
    op.create_table('prescription__patient',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('rx_name', sa.String(), nullable=True),
    sa.Column('rx_number', sa.String(), nullable=True),
    sa.Column('rx_quantity', sa.Integer(), nullable=True),
    sa.Column('rx_strength', sa.String(), nullable=True),
    sa.Column('rx_expiration', sa.Date(), nullable=True),
    sa.Column('is_active', sa.Boolean(), nullable=True),
    sa.Column('fills_remaining', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_prescription__patient_id'), 'prescription__patient', ['id'], unique=False)
    op.create_table('provider',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('first_name', sa.String(), nullable=True),
    sa.Column('last_name', sa.String(), nullable=True),
    sa.Column('email', sa.String(), nullable=True),
    sa.Column('phone', sa.String(), nullable=True),
    sa.Column('npi', sa.Integer(), nullable=True),
    sa.Column('medicaid_id', sa.String(), nullable=True),
    sa.Column('mtl_provider_id', sa.String(), nullable=True),
    sa.Column('is_public', sa.Boolean(), nullable=True),
    sa.Column('is_accepting_patients', sa.Boolean(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('mtl_provider_id'),
    sa.UniqueConstraint('npi')
    )
    op.create_index(op.f('ix_provider_id'), 'provider', ['id'], unique=False)
    op.create_table('provider__clinic',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_provider__clinic_id'), 'provider__clinic', ['id'], unique=False)
    op.create_table('provider__patient',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('hipaa_auth', sa.Boolean(), nullable=True),
    sa.Column('hipaa_auth_expire', sa.Date(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_provider__patient_id'), 'provider__patient', ['id'], unique=False)
    op.create_table('state_license',
    sa.Column('provider_id', sa.Integer(), nullable=False),
    sa.Column('state_abbreviation', sa.String(), nullable=True),
    sa.Column('state_license', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('provider_id')
    )
    op.create_index(op.f('ix_state_license_provider_id'), 'state_license', ['provider_id'], unique=False)
    op.add_column('user', sa.Column('is_provider', sa.Boolean(), nullable=True))
    op.alter_column('user', 'is_active',
               existing_type=sa.BOOLEAN(),
               nullable=True)
    op.alter_column('user', 'is_superuser',
               existing_type=sa.BOOLEAN(),
               nullable=True)
    op.create_index(op.f('ix_user_email'), 'user', ['email'], unique=True)
    op.create_index(op.f('ix_user_id'), 'user', ['id'], unique=False)
    op.drop_column('user', 'address')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('user', sa.Column('address', sa.VARCHAR(length=100), autoincrement=False, nullable=True))
    op.drop_index(op.f('ix_user_id'), table_name='user')
    op.drop_index(op.f('ix_user_email'), table_name='user')
    op.alter_column('user', 'is_superuser',
               existing_type=sa.BOOLEAN(),
               nullable=False)
    op.alter_column('user', 'is_active',
               existing_type=sa.BOOLEAN(),
               nullable=False)
    op.drop_column('user', 'is_provider')
    op.drop_index(op.f('ix_state_license_provider_id'), table_name='state_license')
    op.drop_table('state_license')
    op.drop_index(op.f('ix_provider__patient_id'), table_name='provider__patient')
    op.drop_table('provider__patient')
    op.drop_index(op.f('ix_provider__clinic_id'), table_name='provider__clinic')
    op.drop_table('provider__clinic')
    op.drop_index(op.f('ix_provider_id'), table_name='provider')
    op.drop_table('provider')
    op.drop_index(op.f('ix_prescription__patient_id'), table_name='prescription__patient')
    op.drop_table('prescription__patient')
    op.drop_index(op.f('ix_patient__social_id'), table_name='patient__social')
    op.drop_table('patient__social')
    op.drop_index(op.f('ix_patient_id'), table_name='patient')
    op.drop_table('patient')
    op.drop_index(op.f('ix_order__assays_id'), table_name='order__assays')
    op.drop_table('order__assays')
    op.drop_index(op.f('ix_lab_order_id'), table_name='lab_order')
    op.drop_table('lab_order')
    op.drop_index(op.f('ix_lab__patient_id'), table_name='lab__patient')
    op.drop_table('lab__patient')
    op.drop_index(op.f('ix_lab__assay_id'), table_name='lab__assay')
    op.drop_table('lab__assay')
    op.drop_index(op.f('ix_lab_id'), table_name='lab')
    op.drop_table('lab')
    op.drop_index(op.f('ix_kit__device_id'), table_name='kit__device')
    op.drop_table('kit__device')
    op.drop_index(op.f('ix_kit_id'), table_name='kit')
    op.drop_table('kit')
    op.drop_index(op.f('ix_insurer__patient_id'), table_name='insurer__patient')
    op.drop_table('insurer__patient')
    op.drop_index(op.f('ix_insurer_id'), table_name='insurer')
    op.drop_table('insurer')
    op.drop_index(op.f('ix_device_id'), table_name='device')
    op.drop_table('device')
    op.drop_index(op.f('ix_clinic__user_id'), table_name='clinic__user')
    op.drop_table('clinic__user')
    op.drop_index(op.f('ix_clinic__patient_id'), table_name='clinic__patient')
    op.drop_table('clinic__patient')
    op.drop_index(op.f('ix_clinic_id'), table_name='clinic')
    op.drop_table('clinic')
    op.drop_index(op.f('ix_assay_id'), table_name='assay')
    op.drop_table('assay')
    op.drop_index(op.f('ix_address_id'), table_name='address')
    op.drop_table('address')
    # ### end Alembic commands ###