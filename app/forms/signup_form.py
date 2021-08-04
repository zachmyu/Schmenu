from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, TextAreaField, RadioField
from wtforms.validators import DataRequired, EqualTo, ValidationError
from app.models import User


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    usernameCheck = User.query.filter(User.username == username).first()
    if usernameCheck:
        raise ValidationError('Username is already in use.')


def email_exists(form, field):
    # Checking if user exists
    email = field.data
    emailCheck = User.query.filter(User.email == email).first()
    if emailCheck:
        raise ValidationError('Email address is already in use.')


class SignUpForm(FlaskForm):
    first_name = StringField('First Name', validators=[
                             DataRequired(message='First name is required!')])
    last_name = StringField('Last Name', validators=[
                            DataRequired(message='Last name is required!')])
    username = StringField(
        'Username', validators=[DataRequired(message='Please chooes a username!'), username_exists])
    email = StringField('email', validators=[DataRequired(
        message='Please enter your email here!'), email_exists])
    about = TextAreaField('About', validators=[
        DataRequired(message='Please tell us a little about yourself!')])
    profile_pix = StringField('profile_pix')
    account_type = RadioField('Rating', validators=[DataRequired(message='Please choose an account type!')],
                              choices=[('Reviewer', 'Reviewer'), ('Owner', 'Owner')])
    password = PasswordField(
        'New Password', [DataRequired(message='Please enter a password!')])
