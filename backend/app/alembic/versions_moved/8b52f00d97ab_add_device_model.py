"""add device model

Revision ID: 8b52f00d97ab
Revises: 7390a885f72a
Create Date: 2021-01-10 18:23:22.802879-08:00

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '8b52f00d97ab'
down_revision = '7390a885f72a'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('devices',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('long_name', sa.String(), nullable=True),
    sa.Column('short_name', sa.String(), nullable=True),
    sa.Column('manufacturer_sku', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_devices_id'), 'devices', ['id'], unique=False)
    op.create_table('assays',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('long_name', sa.String(), nullable=True),
    sa.Column('short_name', sa.String(), nullable=True),
    sa.Column('loinc_code', sa.String(), nullable=True),
    sa.Column('cpt_code', sa.String(), nullable=True),
    sa.Column('device_id', sa.Integer(), nullable=True),
    sa.Column('cash_price', sa.Float(), nullable=True),
    sa.Column('is_available', sa.Boolean(), nullable=True),
    sa.ForeignKeyConstraint(['device_id'], ['devices.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_assays_id'), 'assays', ['id'], unique=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index(op.f('ix_assays_id'), table_name='assays')
    op.drop_table('assays')
    op.drop_index(op.f('ix_devices_id'), table_name='devices')
    op.drop_table('devices')
    # ### end Alembic commands ###