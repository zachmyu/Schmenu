from app.models import Restaurant
from faker import Faker
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()
fake = Faker()


def seed_restaurants():
    for _ in range(1000):
        fakerRestaurant = Restaurant(owner_id=fake.random_int(min=4, max=12),
                                     name=fake.company(),
                                     address=fake.address(),
                                     restaurant_type=fake.random_elements(
            elements=('fd', 'cd', 'ff', 'cf', 'bf', 'ot'),
            length=1),
            description=fake.paragraph(nb_sentences=5),
            restaurant_pix='https://i.imgur.com/EaFCzkW.jpg',
            latitude=fake.latitude(), longitude=fake.longitude())
        db.session.add(fakerRestaurant)

    db.session.commit()


def undo_restaurants():
    db.session.execute('TRUNCATE restaurants RESTART IDENTITY CASCADE;')
    db.session.commit()
