from app.models import Rating
from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()


def seed_ratings():
    num1 = Rating(user_id=1, venue_id=1)

    db.session.add(num1)

    db.session.commit()


def undo_ratings():
    db.session.execute('TRUNCATE ratings RESTART IDENTITY CASCADE;')
    db.session.commit()
