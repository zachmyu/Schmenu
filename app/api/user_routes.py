from flask import Blueprint, request, jsonify
from app.models import db, User
from app.forms import SignUpForm
from flask_login import login_required

user_routes = Blueprint('users', __name__)


def validation_err_msgs(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


# READ ONE = User
@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


# READ ALL = Users (Might be too many to list)
@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


# UPDATE = User
@user_routes.route('/<int:id>', methods=['PUT'])
@ login_required
def users_edit(id):
    form = SignUpForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        edit_user = User.query.get(id)
        form.populate_obj(edit_user)
        db.session.commit()
        return edit_user.to_dict()
    return {'errors': validation_err_msgs(form.errors)}, 401


# DELETE = User
@ user_routes.route('/<int:id>', methods=['DELETE'])
@ login_required
def users_delete(id):
    delete_user = User.query.get(id)
    db.session.delete(delete_user)
    db.session.commit()
    return jsonify('Account has been deleted!')


# GET('/') - Obtain list of all users(Optional)
# GET('/:id') - Obtain detail of single user
# Should return a list of menu-items created by user, reviews by user, and saved by user
# POST('/') - Create a new user
# PUT('/:id') - Update user information
# DELETE('/:id') - Delete the user account
