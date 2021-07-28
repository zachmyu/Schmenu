from flask_login import UserMixin
from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()


class Rating(db.Model, UserMixin):
    __tablename__ = 'ratings'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    menu_item_id = db.Column(db.Integer, db.ForeignKey('menu-items.id'))
    rating = db.Column(db.Integer, nullable=False)
    review = db.Column(db.Text(), nullable=False)

    user = db.relationship('User', back_populates='ratings')
    menu_item = db.relationship('Menu_item', back_populates='ratings')

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'menu_item_id': self.menu_item_id,
            'rating': self.rating,
            'review': self.review,
            'user': self.user,
            'menu_item': self.menu_item,
        }
