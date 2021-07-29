from app.models import Save
from faker import Faker
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()
fake = Faker()


def seed_saves():
    for _ in range(500):
        fakerSave = Save(user_id=fake.random_int(min=13, max=99),
                         menu_item_id=fake.random_int(min=1, max=999))
        db.session.add(fakerSave)

    db.session.commit()


def undo_saves():
    db.session.execute('TRUNCATE saves RESTART IDENTITY CASCADE;')
    db.session.commit()
