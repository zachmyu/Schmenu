from app.models import db, Rating
from faker import Faker

fake = Faker()


def seed_ratings():
    for _ in range(2000):
        fakeRatings = Rating(user_id=fake.random_int(min=13, max=99),
                             menu_item_id=fake.random_int(min=1, max=950),
                             rating=fake.random_int(min=1, max=5),
                             review=fake.paragraph(nb_sentences=3))
        db.session.add(fakeRatings)

    db.session.commit()


def undo_ratings():
    db.session.execute('TRUNCATE ratings RESTART IDENTITY CASCADE;')
    db.session.commit()
