from flask.cli import AppGroup
from .users import seed_users, undo_users
from .restaurants import seed_restaurants, undo_restaurants
from .menu_items import seed_menu_items, undo_menu_items
from .ratings import seed_ratings, undo_ratings
from .saves import seed_saves, undo_saves

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_restaurants()
    seed_menu_items()
    seed_ratings()
    seed_saves()


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_restaurants()
    undo_menu_items()
    undo_ratings()
    undo_saves()
