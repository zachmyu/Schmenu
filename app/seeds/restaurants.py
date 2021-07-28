from app.models import Restaurant
from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()


def seed_restaurants():
    num1 = Restaurant(user_id=1, venue_id=1)

    db.session.add(num1)

    db.session.commit()


def undo_restaurants():
    db.session.execute('TRUNCATE restaurants RESTART IDENTITY CASCADE;')
    db.session.commit()
