from app.models import db, Save
from faker import Faker

fake = Faker()


def seed_saves():
    for _ in range(500):
        fakerSave = Save(user_id=fake.random_int(min=13, max=99),
                         menu_item_id=fake.random_int(min=1, max=121))
        db.session.add(fakerSave)

    db.session.commit()


def undo_saves():
    db.session.execute('TRUNCATE saves RESTART IDENTITY CASCADE;')
    db.session.commit()
