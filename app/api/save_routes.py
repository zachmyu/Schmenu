from flask import Blueprint, jsonify, request
from app.models import db, Save
from flask_login import login_required

save_routes = Blueprint('saves', __name__)


def validation_err_msgs(validation_errors):
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


# READ ALL = Saves
@save_routes.route('/')
@login_required
def userSaves(user_id):
    saves = Save.query.filter_by(user_id=user_id).all()
    return {'saves': [save.to_dict() for save in saves]}


# CREATE = Save
@save_routes.route('/', methods=['POST'])
@login_required
def saves_add():
    save = Save(
        user_id=request.json['user_id'],
        menu_item_id=request.json['menu_item_id']
    )
    db.session.add(save)
    db.session.commit()
    return save.to_dict()


# DELETE = Save
@save_routes.route('/<int:id>/', methods=['DELETE'])
@login_required
def saves_delete(id):
    delete_save = Save.query.get(id)
    db.session.delete(delete_save)
    db.session.commit()
    return jsonify('Menu Item has been removed from your saved list!')


# /saves
# Ratings Create / List Routes
# GET('/') - Obtain list saved
# Query through saved.menu_item_id saved.user_id
# POST('/') - Create a new saved
# DELETE('/:id') - Delete the saved
