"""update users table

Revision ID: 92a2e8f6b582
Revises: 19fb8328e5af
Create Date: 2020-10-27 12:14:58.740776-07:00

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy import Column, String


# revision identifiers, used by Alembic.
revision = '92a2e8f6b582'
down_revision = '19fb8328e5af'
branch_labels = None
depends_on = None


def upgrade():
    op.add_column('user',
        Column('is_provider', String())
    )


def downgrade():
    pass
