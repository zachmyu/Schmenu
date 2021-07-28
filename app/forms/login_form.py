from flask_wtf import FlaskForm
from wtforms import PasswordField
from wtforms.validators import DataRequired, ValidationError
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    credentials = field.data
    emailCheck = User.query.filter(User.email == credentials).first()
    userCheck = User.query.filter(User.username == credentials).first()
    if not emailCheck and not userCheck:
        raise ValidationError('Email provided not found.')


def password_matches(form, field):
    # Checking if password matches
    password = field.data
    credentials = form.data['credentials']
    emailCheck = User.query.filter(User.email == credentials).first()
    userCheck = User.query.filter(User.username == credentials).first()
    if not emailCheck and not userCheck:
        raise ValidationError('No such user exists.')
    if not emailCheck.check_password(password) and not userCheck.check_password(password):
        raise ValidationError('Password was incorrect.')


class LoginForm(FlaskForm):
    credentials = PasswordField('credentials', validators=[
        DataRequired(), user_exists])
    password = PasswordField('password', validators=[
        DataRequired(), password_matches])
