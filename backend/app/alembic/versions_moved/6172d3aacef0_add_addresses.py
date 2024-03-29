"""add addresses

Revision ID: 6172d3aacef0
Revises: b6839d156a44
Create Date: 2021-01-10 18:19:44.120936-08:00

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '6172d3aacef0'
down_revision = 'b6839d156a44'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('state_licenses', sa.Column('state_abbreviation', sa.String(), nullable=True))
    op.add_column('state_licenses', sa.Column('state_license', sa.String(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('state_licenses', 'state_license')
    op.drop_column('state_licenses', 'state_abbreviation')
    # ### end Alembic commands ###
