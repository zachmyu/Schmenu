from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash
from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    about = db.Column(db.Text(), nullable=True)
    profile_pix = db.Column(db.String(1000), nullable=True)
    account_type = db.Column(db.String(20), nullable=False)
    hashed_password = db.Column(db.String(255), nullable=False)

    ratings = db.relationship('Rating', back_populates='users')
    saves = db.relationship('Save', back_populates='users')
    restaurant = db.relationship('Restaurant', back_populates='users')

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'username': self.username,
            'email': self.email,
            'profile_pix': self.profile_pix,
            'account_type': self.account_type,
            'ratings': {rating.id: rating.to_dict() for rating in self.ratings},
            'saves': {save.id: save.to_dict() for save in self.saves},
            'restaurant': self.restaurant
        }
