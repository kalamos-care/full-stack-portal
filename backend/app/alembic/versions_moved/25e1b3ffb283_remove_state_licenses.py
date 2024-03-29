"""remove state licenses

Revision ID: 25e1b3ffb283
Revises: ac57535aaa21
Create Date: 2021-01-10 19:31:41.195318-08:00

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '25e1b3ffb283'
down_revision = 'ac57535aaa21'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint('providers_state_license_id_fkey', 'providers', type_='foreignkey')
    op.drop_column('providers', 'state_license_id')
    op.drop_constraint('state_licenses_provider_id_fkey', 'state_licenses', type_='foreignkey')
    op.drop_column('state_licenses', 'provider_id')
    op.drop_column('state_licenses', 'state_license')
    op.drop_column('state_licenses', 'state_abbreviation')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('state_licenses', sa.Column('state_abbreviation', sa.VARCHAR(), autoincrement=False, nullable=True))
    op.add_column('state_licenses', sa.Column('state_license', sa.VARCHAR(), autoincrement=False, nullable=True))
    op.add_column('state_licenses', sa.Column('provider_id', sa.INTEGER(), autoincrement=False, nullable=True))
    op.create_foreign_key('state_licenses_provider_id_fkey', 'state_licenses', 'providers', ['provider_id'], ['id'])
    op.add_column('providers', sa.Column('state_license_id', sa.INTEGER(), autoincrement=False, nullable=True))
    op.create_foreign_key('providers_state_license_id_fkey', 'providers', 'state_licenses', ['state_license_id'], ['id'])
    # ### end Alembic commands ###
