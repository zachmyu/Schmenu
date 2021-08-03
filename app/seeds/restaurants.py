from app.models import db, Restaurant
from faker import Faker

fake = Faker()


def seed_restaurants():
    for _ in range(1000):
        fakerRestaurant = Restaurant(owner_id=fake.random_int(min=4, max=12),
                                     name=fake.company(),
                                     address=fake.address(),
                                     restaurant_type=fake.random_elements(
            elements=('Fine Dining', 'Casual Dining',
                      'Fast Food', 'Cafe', 'Buffet', 'Other'),
            length=1),
            description=fake.paragraph(nb_sentences=5),
            restaurant_pix='https://i.imgur.com/EaFCzkW.jpg',
            latitude=fake.latitude(), longitude=fake.longitude())
        db.session.add(fakerRestaurant)

    db.session.commit()


def undo_restaurants():
    db.session.execute('TRUNCATE restaurants RESTART IDENTITY CASCADE;')
    db.session.commit()
