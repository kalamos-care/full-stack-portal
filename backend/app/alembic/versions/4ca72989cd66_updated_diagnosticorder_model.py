"""updated diagnosticorder model

Revision ID: 4ca72989cd66
Revises: d422b5251dc3
Create Date: 2021-01-13 06:19:37.420339-08:00

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '4ca72989cd66'
down_revision = 'd422b5251dc3'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('diagnostic_orders', sa.Column('diagnostic_order_number', sa.Integer(), nullable=True))
    op.drop_column('diagnostic_orders', 'lab_order_number')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('diagnostic_orders', sa.Column('lab_order_number', sa.INTEGER(), autoincrement=False, nullable=True))
    op.drop_column('diagnostic_orders', 'diagnostic_order_number')
    # ### end Alembic commands ###
