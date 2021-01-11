"""add addresses

Revision ID: e4a4cbc5f1f4
Revises: cae73ddc6d02
Create Date: 2021-01-10 18:18:15.183647-08:00

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'e4a4cbc5f1f4'
down_revision = 'cae73ddc6d02'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('providers',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('first_name', sa.String(), nullable=True),
    sa.Column('last_name', sa.String(), nullable=True),
    sa.Column('email', sa.String(), nullable=True),
    sa.Column('phone', sa.String(), nullable=True),
    sa.Column('address_id', sa.Integer(), nullable=True),
    sa.Column('npi', sa.Integer(), nullable=True),
    sa.Column('medicaid_id', sa.String(), nullable=True),
    sa.ForeignKeyConstraint(['address_id'], ['addresses.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('npi')
    )
    op.create_index(op.f('ix_providers_id'), 'providers', ['id'], unique=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index(op.f('ix_providers_id'), table_name='providers')
    op.drop_table('providers')
    # ### end Alembic commands ###
