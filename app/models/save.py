from flask_login import UserMixin
from .db import db


class Save(db.Model, UserMixin):
    __tablename__ = 'saves'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    menu_item_id = db.Column(db.Integer, db.ForeignKey('menu_items.id'))

    users = db.relationship('User', back_populates='saves')
    menu_items = db.relationship('Menu_item', back_populates='saves')

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'venue_id': self.venue_id
        }
