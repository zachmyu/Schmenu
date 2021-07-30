from app.models import db, Menu_item
from faker import Faker

fake = Faker()


def seed_menu_items():
    for _ in range(1000):
        fakerMenu = Menu_item(creator_id=fake.random_int(min=1, max=99),
                              restaurant_id=fake.random_int(min=1, max=99),
                              food_name=fake.bs(),
                              price=fake.numerify(text='##.99'),
                              description=fake.paragraph(nb_sentences=5),
                              food_pix='https://i.imgur.com/WSiGBku.jpg')
        db.session.add(fakerMenu)

    db.session.commit()


def undo_menu_items():
    db.session.execute('TRUNCATE menu_items RESTART IDENTITY CASCADE;')
    db.session.commit()
