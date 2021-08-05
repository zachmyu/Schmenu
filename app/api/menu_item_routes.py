from flask import Blueprint, request, jsonify
from app.models import db, Menu_item
from app.forms import MenuItemForm
from flask_login import login_required
# from app.s3_helpers import (
#     upload_file_to_s3, allowed_file, get_unique_filename)


menu_item_routes = Blueprint('menu_items', __name__)


def validation_err_msgs(validation_errors):
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


# READ ONE = Menu_item
@menu_item_routes.route('/<int:id>/')
def menu_item(id):
    menu_item = Menu_item.query.get(id)
    return menu_item.to_dict()


# READ ALL = Menu_items (Can we limit this?)
@menu_item_routes.route('/')
def menu_items():
    menu_items = Menu_item.query.limit(100).all()
    # menu_items = Menu_item.query.all()
    return {menu_item.id: menu_item.to_dict() for menu_item in menu_items}


# READ ALL = Menu_items by Restaurant
@menu_item_routes.route('/restaurants/<int:id>/')
def menu_items_by_restaurants(id):
    menu_items = Menu_item.query.filter_by(restaurant_id=id).all()
    return {menu_item.id: menu_item.to_dict() for menu_item in menu_items}


# CREATE = Menu_item
@menu_item_routes.route('/create/', methods=['POST'])
@login_required
def menu_items_add():
    form = MenuItemForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        menu_item = Menu_item(
            creator_id=form.data['creator_id'],
            restaurant_id=form.data['restaurant_id'],
            food_name=form.data['food_name'],
            price=form.data['price'],
            description=form.data['description'],
            food_pix=form.data['food_pix']
        )
        db.session.add(menu_item)
        db.session.commit()
        return {'menu_item': menu_item.to_dict()}
    return {'errors': validation_err_msgs(form.errors)}, 401


#UPDATE = Menu_item
@menu_item_routes.route('/<int:id>/', methods=['PUT'])
@login_required
def menu_items_edit(id):
    form = MenuItemForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        edit_menu_item = Menu_item.query.get(id)
        form.populate_obj(edit_menu_item)
        db.session.commit()
        return edit_menu_item.to_dict()
    return {'errors': validation_err_msgs(form.errors)}, 401


# DELETE = Menu_item
@menu_item_routes.route('/<int:id>/', methods=['DELETE'])
@login_required
def menu_items_delete(id):
    delete_menu_item = Menu_item.query.get(id)
    db.session.delete(delete_menu_item)
    db.session.commit()
    return jsonify('Menu item has been deleted!')
