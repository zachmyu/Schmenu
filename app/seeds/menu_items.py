from app.models import Menu_item
from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()


def seed_menu_items():
    num1 = Menu_item(user_id=1, venue_id=1)

    db.session.add(num1)

    db.session.commit()


def undo_menu_items():
    db.session.execute('TRUNCATE menu_items RESTART IDENTITY CASCADE;')
    db.session.commit()
