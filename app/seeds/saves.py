from app.models import Save
from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()


def seed_saves():
    num1 = Save(user_id=1, venue_id=1)

    db.session.add(num1)

    db.session.commit()


def undo_saves():
    db.session.execute('TRUNCATE saves RESTART IDENTITY CASCADE;')
    db.session.commit()
